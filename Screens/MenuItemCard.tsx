// Screens/MenuItemCard.tsx
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Image } from "react-native";
import { MenuItem } from "../interfaces";
import { TEXT_COLOR, PRIMARY_COLOR, WHITE } from "./styles";

interface MenuItemCardProps {
  item: MenuItem;
  onEdit: (id: number) => void;
  onRemove: (id: number) => void;
}

// Mock image placeholder function
const getPlaceholderImage = (course: string) => {
  switch (course) {
    case "Starters":
      return "https://placehold.co/100x100/F4D03F/FFF?text=Starter";
    case "Mains":
      return "https://placehold.co/100x100/A3E4D7/FFF?text=Main";
    case "Desserts":
      return "https://placehold.co/100x100/BB8FCE/FFF?text=Dessert";
    default:
      return "https://placehold.co/100x100/D0D3D4/333?text=Dish";
  }
};

const MenuItemCard: React.FC<MenuItemCardProps> = ({
  item,
  onEdit,
  onRemove,
}) => (
  <View style={styles.card}>
    <Image
      source={{ uri: getPlaceholderImage(item.course) }}
      style={styles.image}
      onError={(e) => console.log("Image load error:", e.nativeEvent.error)}
    />
    <View style={styles.detailsContainer}>
      <Text style={styles.dishName}>{item.dishName}</Text>
      <Text style={styles.description}>{item.description}</Text>
      <Text style={styles.price}>R{item.price.toFixed(2)}</Text>
    </View>
    <View style={styles.actionButtons}>
      <TouchableOpacity
        style={[
          styles.actionButton,
          { backgroundColor: PRIMARY_COLOR, marginBottom: 5 },
        ]}
        onPress={() => onEdit(item.id)}
      >
        <Text style={styles.buttonText}>Edit</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={[styles.actionButton, { backgroundColor: "#FF3B30" }]}
        onPress={() => onRemove(item.id)}
      >
        <Text style={styles.buttonText}>Remove</Text>
      </TouchableOpacity>
    </View>
  </View>
);

const styles = StyleSheet.create({
  card: {
    flexDirection: "row",
    backgroundColor: WHITE,
    borderRadius: 10,
    marginBottom: 10,
    padding: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
    alignItems: "center",
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 5,
    marginRight: 10,
    borderWidth: 1,
    borderColor: "#EEE",
  },
  detailsContainer: {
    flex: 1,
    marginRight: 10,
  },
  dishName: {
    fontSize: 18,
    fontWeight: "bold",
    color: TEXT_COLOR,
  },
  description: {
    fontSize: 12,
    color: "#666",
  },
  price: {
    fontSize: 16,
    fontWeight: "700",
    color: PRIMARY_COLOR,
    marginTop: 5,
  },
  actionButtons: {
    width: 65,
    alignItems: "center",
  },
  actionButton: {
    paddingVertical: 5,
    paddingHorizontal: 8,
    borderRadius: 5,
    alignItems: "center",
  },
  buttonText: {
    color: WHITE,
    fontSize: 12,
    fontWeight: "600",
  },
});

export default MenuItemCard;
