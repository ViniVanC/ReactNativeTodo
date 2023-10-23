import {
  StyleSheet,
  TouchableHighlight,
  Text,
  View,
  Pressable,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";

export default function ListItem({ el, deleteItem, doneHandler, colorScheme }) {
  return (
    <TouchableHighlight>
      <View style={el.done ? styles.active : styles.main}>
        <Pressable
          onPress={() => doneHandler(el.key)}
          style={[styles.btn, { paddingRight: 10 }]}
        >
          {el.done ? (
            <Icon name="check-circle" color={colorScheme[1]} size={20} />
          ) : (
            <Icon name="circle" color={colorScheme[1]} size={20} />
          )}
        </Pressable>
        <Text
          style={[styles.text, { color: colorScheme[1] }]}
          onPress={() => doneHandler(el.key)}
        >
          {el.text}
        </Text>
        <Pressable
          onPress={() => deleteItem(el.key)}
          style={[styles.btn, { paddingLeft: 10 }]}
        >
          <Icon name="trash" color={colorScheme[1]} size={18} />
        </Pressable>
      </View>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  main: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 20,
  },
  text: {
    flex: 1,
    fontSize: 18,
    fontWeight: "medium",
  },
  active: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingTop: 20,
    opacity: 0.6,
  },
  btn: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
  },
});
