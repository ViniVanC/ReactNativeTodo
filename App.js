import React from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";

import Header from "./components/Header";
import ListItem from "./components/ListItem";
import Form from "./components/Form";
import Menu from "./components/Menu";

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
    showForm,
    setShowForm,
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

      <View style={{ flex: 1 }}>
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
      {showForm && (
        <TouchableWithoutFeedback onPress={setShowForm}>
          <View
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100vw",
              height: "100vh",
              backgroundColor: "#00000075",
              zIndex: 5,
            }}
          />
        </TouchableWithoutFeedback>
      )}
      <View
        style={[styles.menuBox, { backgroundColor: currentColorScheme[1] }]}
      >
        {showForm && (
          <Form
            addHandler={(text) =>
              text !== "" && addItem(text, listOfItems, setListOfItems)
            }
            currentColorScheme={currentColorScheme}
          />
        )}
        <Menu
          currentColorScheme={currentColorScheme}
          showForm={showForm}
          setShowForm={setShowForm}
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
  menuBox: {
    marginHorizontal: -15,
    paddingHorizontal: 30,
    borderTopStartRadius: 20,
    borderTopEndRadius: 20,
    position: "relative",
    zIndex: 6,
  },
});
