import { View, StyleSheet, Text, Pressable } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { changeColorScheme } from "../utils/changeColorScheme";

export default function Header({
  colorScheme,
  currentColorScheme,
  setCurrentColorScheme,
}) {
  return (
    <View style={styles.main}>
      <Text style={[styles.text, { color: currentColorScheme[1] }]}>Tasks</Text>
      <Pressable
        onPress={() =>
          changeColorScheme(
            colorScheme,
            currentColorScheme,
            setCurrentColorScheme
          )
        }
      >
        <Icon name="brush" color={currentColorScheme[1]} size={24} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    paddingBottom: 20,
    height: 100,
  },
  text: { flex: 1, fontSize: 30, fontWeight: "bold" },
});
