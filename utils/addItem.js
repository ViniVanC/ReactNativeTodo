import AsyncStorage from "@react-native-async-storage/async-storage";

export const addItem = async (text, listOfItems, setListOfItems) => {
  if (text !== "") {
    const newItem = {
      done: false,
      text: text,
      key: Math.random().toString(36).substring(7),
    };

    try {
      // Отримуємо поточний список елементів з локального сховища
      const storedList = await AsyncStorage.getItem("todoList");
      const currentList = storedList ? JSON.parse(storedList) : [];

      // Додаємо новий елемент до списку
      currentList.push(newItem);

      // Зберігаємо оновлений список в локальному сховищі
      await AsyncStorage.setItem("todoList", JSON.stringify(currentList));

      // Оновлюємо стан компонента
      setListOfItems(currentList);
    } catch (error) {
      console.error("Помилка збереження даних: ", error);
    }
  }
};
