import Icon from "react-native-vector-icons/FontAwesome5";
import { View, StyleSheet, TextInput, Pressable } from "react-native";

export default function SearchForm({
  searchItemName,
  setSearchItemName,
  currentColorScheme,
}) {
  const onChange = (text) => {
    setSearchItemName(text);
  };

  return (
    <View style={[styles.main, { borderColor: currentColorScheme[1] }]}>
      <TextInput
        value={searchItemName}
        onChangeText={onChange}
        placeholder="Search..."
        placeholderTextColor={{ color: currentColorScheme[1] }}
        style={[
          styles.form,
          {
            color: currentColorScheme[1],
          },
        ]}
      />
      {searchItemName ? (
        <Pressable
          onPress={() => {
            setSearchItemName("");
          }}
          style={[styles.btn]}
        >
          <Icon name="plus" size={18} color={currentColorScheme[1]} />
        </Pressable>
      ) : null}
    </View>
  );
}

const styles = StyleSheet.create({
  main: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    marginBottom: 10,
    borderBottomWidth: 2,
  },
  form: {
    flex: 1,
    height: 40,
    paddingHorizontal: 10,
    // marginBottom: 10,
  },
  btn: { backgroundColor: "transparent", padding: 10, rotate: "45deg" },
});
