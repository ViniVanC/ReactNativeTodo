import { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import { View, StyleSheet, TextInput, Pressable } from "react-native";

export default function Form({ addHandler, currentColorScheme }) {
  const [todo, setTodo] = useState("");

  const onChange = (text) => {
    setTodo(text);
  };

  return (
    <View style={styles.main}>
      <TextInput
        value={todo}
        onChangeText={onChange}
        placeholder="Enter todo"
        style={[
          styles.form,
          { color: currentColorScheme[1], borderColor: currentColorScheme[1] },
        ]}
      />
      <Pressable
        onPress={() => {
          addHandler(todo);
          setTodo("");
        }}
        style={[styles.btn, { backgroundColor: currentColorScheme[1] }]}
      >
        <Icon name="plus" size={18} color={currentColorScheme[0]} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    display: "flex",
    flexDirection: "column",
    gap: 10,
  },
  form: {
    height: 40,
    paddingHorizontal: 10,
    borderBottomWidth: 2,
  },
  btn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,

    borderRadius: 3,
  },
});
