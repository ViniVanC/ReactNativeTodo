import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const colorScheme = [
  ["#141414", "#f3f3f3", 0],
  ["#0a1930", "#e2cbcd", 1],
  ["#a6ccc5", "#0a1930", 2],
];

export const useAppState = () => {
  const [currentColorScheme, setCurrentColorScheme] = useState(colorScheme[0]);
  const [listOfItems, setListOfItems] = useState([]);

  const loadItems = async () => {
    try {
      // Отримуємо список елементів з локального сховища
      const storedList = await AsyncStorage.getItem("todoList");
      if (storedList) {
        const parsedList = JSON.parse(storedList);
        setListOfItems(parsedList);
      }
    } catch (error) {
      console.error("Помилка завантаження даних: ", error);
    }
  };

  const loadColorScheme = async () => {
    try {
      // Отримуємо тему з локального сховища
      const storedList = await AsyncStorage.getItem("todoListColorScheme");
      if (storedList) {
        const parsedList = JSON.parse(storedList);
        setCurrentColorScheme(parsedList);
      }
    } catch (error) {
      console.error("Помилка завантаження даних: ", error);
    }
  };

  useEffect(() => {
    loadItems();
    loadColorScheme();
  }, []);

  return {
    colorScheme,
    currentColorScheme,
    setCurrentColorScheme,
    listOfItems,
    setListOfItems,
  };
};
