import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import Header from "./components/Header";
import ListItem from "./components/ListItem";
import Form from "./components/Form";
import { addItem } from "./utils/addItem";
import { deleteItem } from "./utils/deleteItem";
import { doneHandler } from "./utils/doneHandler";
import { useAppState } from "./utils/stateManager";

export default function App() {
  const {
    colorScheme,
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
      <Header
        colorScheme={colorScheme}
        currentColorScheme={currentColorScheme}
        setCurrentColorScheme={setCurrentColorScheme}
      />

      <Form
        addHandler={(text) =>
          text !== "" && addItem(text, listOfItems, setListOfItems)
        }
        currentColorScheme={currentColorScheme}
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
              currentColorScheme={currentColorScheme}
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
