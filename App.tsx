// App.tsx

import React, { useState } from "react";
import { View, Text, TouchableOpacity } from "react-native"; // <-- ADDED Text and TouchableOpacity here
import { MenuItem, AppScreen } from "./interfaces";
import ChefHomeScreen from "./Screens/ChefHomeScreen";
import MenuFormScreen from "./Screens/MenuFormScreen";
import GuestViewScreen from "./Screens/GustViewScreen";

const initialMenu: MenuItem[] = [
  {
    id: 101,
    dishName: "Pan-Fried Dumplings",
    description: "Crispy pork and cabbage dumplings.",
    price: 75.0,
    course: "Starters",
  },
  {
    id: 102,
    dishName: "Chicken Katsu Curry",
    description: "Fried chicken cutlet with rich curry sauce.",
    price: 120.0,
    course: "Mains",
  },
  {
    id: 103,
    dishName: "Spicy Ramen",
    description: "Spicy pork broth ramen with soft-boiled egg.",
    price: 135.0,
    course: "Mains",
  },
  {
    id: 104,
    dishName: "Salted Egg Ramen",
    description: "Creamy salted egg sauce over ramen noodles.",
    price: 140.0,
    course: "Mains",
  },
  {
    id: 105,
    dishName: "Crabstick Nigiri",
    description: "Delicate crabstick on seasoned rice.",
    price: 30.0,
    course: "Starters",
  },
  {
    id: 106,
    dishName: "Mochi Ice Cream",
    description: "Sweet rice dough wrapped around ice cream.",
    price: 45.0,
    course: "Desserts",
  },
];

export default function App() {
  const [menu, setMenu] = useState<MenuItem[]>(initialMenu);
  const [currentScreen, setCurrentScreen] = useState<AppScreen>("ChefHome");
  const [itemToEdit, setItemToEdit] = useState<MenuItem | null>(null);

  // Simple state-based navigation function
  const navigateTo = (screen: AppScreen, item: MenuItem | null = null) => {
    setItemToEdit(item);
    setCurrentScreen(screen);
  };

  const handleSaveMenuItem = (newItem: MenuItem) => {
    if (menu.some((item) => item.id === newItem.id)) {
      // EDIT: Replace existing item
      setMenu(menu.map((item) => (item.id === newItem.id ? newItem : item)));
    } else {
      // ADD: Append new item
      setMenu([...menu, newItem]);
    }
  };

  const renderScreen = () => {
    switch (currentScreen) {
      case "ChefHome":
        return (
          <ChefHomeScreen
            menu={menu}
            setMenu={setMenu}
            navigateTo={navigateTo}
          />
        );
      case "MenuForm":
        return (
          <MenuFormScreen
            onSave={handleSaveMenuItem}
            onCancel={() => navigateTo("ChefHome")}
            editingItem={itemToEdit}
          />
        );
      case "GuestView":
        return (
          <View style={{ flex: 1 }}>
            <GuestViewScreen menu={menu} />
            <View style={{ padding: 15, backgroundColor: "white" }}>
              <TouchableOpacity
                style={styles.actionButton}
                onPress={() => navigateTo("ChefHome")}
              >
                <Text style={styles.actionButtonText}>Back to Chef View</Text>
              </TouchableOpacity>
            </View>
          </View>
        );
      default:
        return (
          <ChefHomeScreen
            menu={menu}
            setMenu={setMenu}
            navigateTo={navigateTo}
          />
        );
    }
  };

  return (
    // Use a top-level View to ensure flex layout works correctly
    <View style={{ flex: 1 }}>{renderScreen()}</View>
  );
}

import styles from "./Screens/styles";
