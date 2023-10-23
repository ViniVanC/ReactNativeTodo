import AsyncStorage from "@react-native-async-storage/async-storage";

export const deleteItem = async (key, listOfItems, setListOfItems) => {
  const updatedTasks = listOfItems.filter((item) => item.key !== key);

  try {
    // Зберігаємо оновлений список в локальному сховищі
    await AsyncStorage.setItem("todoList", JSON.stringify(updatedTasks));

    // Оновлюємо стан компонента
    setListOfItems(updatedTasks);
  } catch (error) {
    console.error("Помилка збереження даних: ", error);
  }
};
