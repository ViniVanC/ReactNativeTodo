import { useState, useEffect, useReducer } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

const colorScheme = [
  ["#f3f3f3", "#141414", 0],
  ["#141414", "#f3f3f3", 1],
  ["#e2cbcd", "#0a1930", 2],
  ["#0a1930", "#e2cbcd", 3],
  ["#a6ccc5", "#0a1930", 4],
  ["#0a1930", "#a6ccc5", 5],
];

export const useAppState = () => {
  const [currentColorScheme, setCurrentColorScheme] = useState(colorScheme[0]);
  const [listOfItems, setListOfItems] = useState([]);
  const [showForm, setShowForm] = useReducer((s) => !s, false);
  const [showSearchForm, setShowSearchForm] = useReducer((s) => !s, true);
  const [showToggleMenu, setShowToggleMenu] = useReducer((s) => !s, false);
  const [searchItemName, setSearchItemName] = useState("");

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
    showForm,
    setShowForm,
    showSearchForm,
    setShowSearchForm,
    showToggleMenu,
    setShowToggleMenu,
    colorScheme,
    currentColorScheme,
    setCurrentColorScheme,
    listOfItems,
    setListOfItems,
    searchItemName,
    setSearchItemName,
  };
};
