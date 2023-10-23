import { View, StyleSheet, Text } from "react-native";

export default function Header({ colorScheme }) {
  return (
    <View style={styles.main}>
      <Text style={[styles.text, { color: colorScheme[1] }]}>Tasks</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    display: "flex",
    justifyContent: "flex-end",
    paddingBottom: 20,
    height: 100,
    width: "100vw",
  },
  text: {
    fontSize: 30,
    fontWeight: "bold",
  },
});
