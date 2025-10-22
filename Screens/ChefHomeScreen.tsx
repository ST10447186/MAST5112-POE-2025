// Screens/ChefHomeScreen.tsx
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Alert,
  Dimensions,
} from "react-native";
import { MenuItem, AppScreen } from "../interfaces";
import MenuItemCard from "./MenuItemCard";
import styles, { PRIMARY_COLOR, TEXT_COLOR } from "./styles";

interface ChefHomeScreenProps {
  menu: MenuItem[];
  setMenu: React.Dispatch<React.SetStateAction<MenuItem[]>>;
  navigateTo: (screen: AppScreen, item?: MenuItem | null) => void;
}

const ChefHomeScreen: React.FC<ChefHomeScreenProps> = ({
  menu,
  setMenu,
  navigateTo,
}) => {
  // --- Summary Calculations ---
  const totalItems = menu.length;
  const totalMenuPrice = menu.reduce((sum, item) => sum + item.price, 0);
  const averagePrice = totalItems > 0 ? totalMenuPrice / totalItems : 0;

  const totalItemsByCourse = menu.reduce((acc, item) => {
    acc[item.course] = (acc[item.course] || 0) + 1;
    return acc;
  }, {} as Record<string, number>);

  // --- Action Functions ---

  const handleRemove = (id: number) => {
    Alert.alert(
      "Confirm Removal",
      "Are you sure you want to remove this item from the menu?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Remove",
          onPress: () => {
            const updatedMenu = menu.filter((item) => item.id !== id);
            setMenu(updatedMenu);
          },
          style: "destructive",
        },
      ]
    );
  };

  const handleEdit = (id: number) => {
    const itemToEdit = menu.find((item) => item.id === id);
    if (itemToEdit) {
      // Navigate to the form screen, passing the item object
      navigateTo("MenuForm", itemToEdit);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.greeting}>Hello, Chef!</Text>
        <Text style={styles.title}>My Menu</Text>
      </View>

      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {/* Summary Section */}
        <View style={styles.summaryCard}>
          <Text style={styles.summaryText}>
            Total Menu Items:{" "}
            <Text style={styles.summaryValue}>{totalItems}</Text>
          </Text>
          <Text style={styles.summaryText}>
            Average Price per Item:{" "}
            <Text style={styles.summaryValue}>R{averagePrice.toFixed(2)}</Text>
          </Text>

          <Text style={[styles.summaryText, { marginTop: 10 }]}>
            Items per Course:
          </Text>
          {Object.entries(totalItemsByCourse).map(([course, count]) => (
            <Text key={course} style={styles.summaryText}>
              • {course}:{" "}
              <Text style={{ fontWeight: "bold", color: TEXT_COLOR }}>
                {count}
              </Text>
            </Text>
          ))}
        </View>

        {/* Menu List */}
        <Text
          style={[
            styles.summaryText,
            {
              fontWeight: "bold",
              fontSize: 18,
              marginBottom: 10,
              color: PRIMARY_COLOR,
            },
          ]}
        >
          Full Menu List
        </Text>

        {menu.length === 0 ? (
          <Text style={{ textAlign: "center", color: "#999", marginTop: 20 }}>
            Your menu is empty. Tap 'Add New Item' to begin!
          </Text>
        ) : (
          menu.map((item) => (
            <MenuItemCard
              key={item.id}
              item={item}
              onEdit={handleEdit}
              onRemove={handleRemove}
            />
          ))
        )}
      </ScrollView>

      {/* Action Button: Add New Item */}
      <View style={{ padding: 15, borderTopWidth: 1, borderColor: "#EEE" }}>
        <TouchableOpacity
          style={styles.actionButton}
          onPress={() => navigateTo("MenuForm", null)} // Navigate to form for adding
        >
          <Text style={styles.actionButtonText}>+ Add New Item</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[styles.secondaryButton, { backgroundColor: "#5cb85c" }]}
          onPress={() => navigateTo("GuestView")} // Navigate to guest view
        >
          <Text style={styles.actionButtonText}>View Guest Menu</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ChefHomeScreen;
