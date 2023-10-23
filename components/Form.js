import { useState } from "react";
import Icon from "react-native-vector-icons/FontAwesome5";
import { View, StyleSheet, TextInput, Pressable, Text } from "react-native";

export default function Form({ addHandler, currentColorScheme }) {
  const [todo, setTodo] = useState("");

  const onChange = (text) => {
    setTodo(text);
  };

  return (
    <View style={styles.main}>
      <Text style={{ color: currentColorScheme[0] }}>Enter task</Text>
      <TextInput
        value={todo}
        onChangeText={onChange}
        style={[
          styles.form,
          { color: currentColorScheme[0], borderColor: currentColorScheme[0] },
        ]}
      />
      <Pressable
        onPress={() => {
          addHandler(todo);
          setTodo("");
        }}
        style={[styles.btn, { backgroundColor: currentColorScheme[0] }]}
      >
        <Icon name="plus" size={18} color={currentColorScheme[1]} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  main: { paddingVertical: 20 },
  form: {
    height: 40,
    paddingHorizontal: 10,
    borderBottomWidth: 2,
    marginBottom: 10,
  },
  btn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 10,

    borderRadius: 3,
  },
});
