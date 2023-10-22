import { useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import ListItem from "./components/ListItem";
import Form from "./components/Form";

export default function App() {
  const [listOfItems, setListOfItems] = useState([]);

  const addHandler = (text) => {
    setListOfItems((list) => {
      if (text !== "") {
        return [
          {
            done: false,
            text: text,
            key: Math.random().toString(36).substring(7),
          },
          ...list,
        ];
      } else {
        return [...list];
      }
    });
  };

  const deleteItem = (key) => {
    setListOfItems((list) => list.filter((item) => item.key !== key));
  };

  const doneHandler = (key) => {
    const updatedTasks = listOfItems.map((task) => {
      if (task.key === key) {
        return { ...task, done: !task.done };
      }
      return task;
    });
    setListOfItems(updatedTasks);
  };

  return (
    <View style={styles.main}>
      <Header />
      <Form addHandler={addHandler} />
      <View style={{ flex: 1, paddingBottom: 20 }}>
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
