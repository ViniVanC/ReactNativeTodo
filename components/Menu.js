import { View, StyleSheet, Text, Pressable } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

export default function Menu({ currentColorScheme }) {
  return (
    <View style={[styles.main, { backgroundColor: currentColorScheme[1] }]}>
      <Pressable onPress={() => null}>
        <Icon name="bars" color={currentColorScheme[0]} size={20} />
      </Pressable>
      <Pressable onPress={() => null}>
        <Icon name="plus" color={currentColorScheme[0]} size={30} />
      </Pressable>
      <Pressable onPress={() => null}>
        <Icon name="search" color={currentColorScheme[0]} size={20} />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 60,
    marginHorizontal: -15,
    paddingHorizontal: 30,
  },
  text: { flex: 1, fontSize: 30, fontWeight: "bold" },
});
