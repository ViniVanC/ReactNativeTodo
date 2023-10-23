import React, { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import ListItem from "./components/ListItem";
import Form from "./components/Form";

export default function App() {
  const [listOfItems, setListOfItems] = useState([]);

  useEffect(() => {
    const loadItems = async () => {
      try {
        // Отримуємо список елементів з локального сховища
        const storedList = await AsyncStorage.getItem("todolist");
        if (storedList) {
          const parsedList = JSON.parse(storedList);
          setListOfItems(parsedList);
        }
      } catch (error) {
        console.error("Помилка завантаження даних: ", error);
      }
    };

    loadItems();
  }, []);

  const addHandler = async (text) => {
    if (text !== "") {
      const newItem = {
        done: false,
        text: text,
        key: Math.random().toString(36).substring(7),
      };

      try {
        // Отримуємо поточний список елементів з локального сховища
        const storedList = await AsyncStorage.getItem("todolist");
        const currentList = storedList ? JSON.parse(storedList) : [];

        // Додаємо новий елемент до списку
        currentList.push(newItem);

        // Зберігаємо оновлений список в локальному сховищі
        await AsyncStorage.setItem("todolist", JSON.stringify(currentList));

        // Оновлюємо стан компонента
        setListOfItems(currentList);
      } catch (error) {
        console.error("Помилка збереження даних: ", error);
      }
    }
  };

  const deleteItem = async (key) => {
    const updatedTasks = listOfItems.filter((item) => item.key !== key);

    try {
      // Зберігаємо оновлений список в локальному сховищі
      await AsyncStorage.setItem("todolist", JSON.stringify(updatedTasks));

      // Оновлюємо стан компонента
      setListOfItems(updatedTasks);
    } catch (error) {
      console.error("Помилка збереження даних: ", error);
    }
  };

  const doneHandler = async (key) => {
    const updatedTasks = listOfItems.map((task) => {
      if (task.key === key) {
        return { ...task, done: !task.done };
      }
      return task;
    });

    try {
      // Зберігаємо оновлений список в локальному сховищі
      await AsyncStorage.setItem("todolist", JSON.stringify(updatedTasks));

      // Оновлюємо стан компонента
      setListOfItems(updatedTasks);
    } catch (error) {
      console.error("Помилка збереження даних: ", error);
    }
  };

  return (
    <View style={styles.main}>
      <Header />
      <Form addHandler={addHandler} />
      <View style={{ flex: 1, paddingBottom: 25 }}>
        <FlatList
          data={listOfItems}
          renderItem={({ item }) => (
            <ListItem
              el={item}
              deleteItem={deleteItem}
              doneHandler={doneHandler}
            />
          )}
          ListEmptyComponent={() => (
            <Text style={styles.warnText}>No tasks</Text>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    display: "flex",

    width: "100vw",
    height: "100vh",
    minHeight: "100%",
    paddingHorizontal: 15,
    backgroundColor: "#f5f5f5",
  },
  warnText: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    padding: 30,
  },
});
