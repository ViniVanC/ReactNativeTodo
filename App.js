import React from "react";
import { Button, FlatList, StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import ListItem from "./components/ListItem";
import Form from "./components/Form";
import { addItem } from "./utils/addItem";
import { deleteItem } from "./utils/deleteItem";
import { doneHandler } from "./utils/doneHandler";
import { changeColorScheme } from "./utils/changeColorScheme";
import { useAppState } from "./utils/stateManager";

const colorScheme = [
  ["#141414", "#f3f3f3", 0],
  ["#0a1930", "#e2cbcd", 1],
  ["#a6ccc5", "#0a1930", 2],
];

export default function App() {
  const {
    currentColorScheme,
    setCurrentColorScheme,
    listOfItems,
    setListOfItems,
  } = useAppState();

  return (
    <View
      style={[
        styles.main,
        {
          backgroundColor: currentColorScheme[0],
          color: currentColorScheme[1],
        },
      ]}
    >
      <Header colorScheme={currentColorScheme} />
      <Button
        title={"t"}
        onPress={() =>
          changeColorScheme(
            colorScheme,
            currentColorScheme,
            setCurrentColorScheme
          )
        }
      />
      <Form
        addHandler={(text) =>
          text !== "" && addItem(text, listOfItems, setListOfItems)
        }
        colorScheme={currentColorScheme}
      />
      <View style={{ flex: 1, paddingBottom: 25 }}>
        <FlatList
          data={listOfItems}
          renderItem={({ item }) => (
            <ListItem
              el={item}
              deleteItem={(key) => deleteItem(key, listOfItems, setListOfItems)}
              doneHandler={(key) =>
                doneHandler(key, listOfItems, setListOfItems)
              }
              colorScheme={currentColorScheme}
            />
          )}
          ListEmptyComponent={() => (
            <Text style={[styles.warnText, { color: currentColorScheme[1] }]}>
              No tasks
            </Text>
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
  },
  warnText: {
    textAlign: "center",
    fontSize: 30,
    fontWeight: "bold",
    padding: 30,
  },
});
