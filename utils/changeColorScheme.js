import AsyncStorage from "@react-native-async-storage/async-storage";

export const changeColorScheme = async (
  colorScheme,
  currentColorScheme,
  setCurrentColorScheme
) => {
  const updatedColorScheme =
    colorScheme[
      currentColorScheme[2] + 1 > currentColorScheme.length - 1
        ? 0
        : currentColorScheme[2] + 1
    ];
  try {
    await AsyncStorage.setItem(
      "todoListColorScheme",
      JSON.stringify(updatedColorScheme)
    );

    setCurrentColorScheme(updatedColorScheme);
  } catch (error) {
    console.error("Помилка збереження даних: ", error);
  }
};
