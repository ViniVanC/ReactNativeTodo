import { useState } from "react";
import { View, StyleSheet, TextInput, Button } from "react-native";
import { CustomButton } from "./CustomButton";

export default function Form({ addHandler }) {
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
        style={styles.form}
      />
      <CustomButton
        title="s"
        onPress={() => {
          addHandler(todo);
          setTodo("");
        }}
      />
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
});
