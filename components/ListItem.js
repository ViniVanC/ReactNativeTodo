import { StyleSheet, TouchableHighlight, Text, Button } from "react-native";

export default function ListItem({ el, deleteItem }) {
  return (
    <TouchableHighlight>
      <Text style={styles.text}>
        {el.text}
        <Button title="d" onPress={() => deleteItem(el.key)} />
      </Text>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  text: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    textAlign: "center",
  },
});
