import { useState } from "react";
import { FlatList, SafeAreaView, StyleSheet, View } from "react-native";
import Header from "./components/Header";
import ListItem from "./components/ListItem";
import Form from "./components/Form";

export default function App() {
  const [listOfItems, setListOfItems] = useState([
    { text: "task1", key: "1" },
    { text: "task2", key: "2" },
    { text: "task3", key: "3" },
    { text: "task4", key: "4" },
  ]);

  const addHandler = (text) => {
    setListOfItems((list) => {
      if (text !== "") {
        return [
          { text: text, key: Math.random().toString(36).substring(7) },
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

  return (
    <SafeAreaView>
      <View style={styles.main}>
        <Header />
        <Form addHandler={addHandler} />
        <View>
          <FlatList
            data={listOfItems}
            renderItem={({ item }) => (
              <ListItem el={item} deleteItem={deleteItem} />
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  main: {
    width: "100vw",
    height: "100vh",
    padding: 15,
    overflow: "hidden",
    backgroundColor: "#f5f5f5",
  },
});
