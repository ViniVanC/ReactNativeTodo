import AsyncStorage from "@react-native-async-storage/async-storage";

export const doneHandler = async (key, listOfItems, setListOfItems) => {
  const updatedTasks = listOfItems.map((task) => {
    if (task.key === key) {
      return { ...task, done: !task.done };
    }
    return task;
  });

  try {
    // Зберігаємо оновлений список в локальному сховищі
    await AsyncStorage.setItem("todoList", JSON.stringify(updatedTasks));

    // Оновлюємо стан компонента
    setListOfItems(updatedTasks);
  } catch (error) {
    console.error("Помилка збереження даних: ", error);
  }
};
