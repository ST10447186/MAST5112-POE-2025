// Screens/MenuFormScreen.tsx
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import { MenuItem, Course, AppScreen } from "../interfaces";
import styles, { PRIMARY_COLOR, WHITE, TEXT_COLOR } from "./styles";

interface MenuFormScreenProps {
  onSave: (item: MenuItem) => void;
  onCancel: () => void;
  editingItem?: MenuItem | null; // Optional item to pre-fill the form
}

const allCourses: Course[] = ["Starters", "Mains", "Desserts"];

const MenuFormScreen: React.FC<MenuFormScreenProps> = ({
  onSave,
  onCancel,
  editingItem,
}) => {
  const [dishName, setDishName] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [course, setCourse] = useState<Course | undefined>(undefined);

  const isEditing = !!editingItem;

  // Effect to pre-populate the form when editing
  useEffect(() => {
    if (editingItem) {
      setDishName(editingItem.dishName);
      setDescription(editingItem.description);
      setPrice(editingItem.price.toFixed(2));
      setCourse(editingItem.course);
    } else {
      // Reset form if not editing
      setDishName("");
      setDescription("");
      setPrice("");
      setCourse("Mains");
    }
  }, [editingItem]);

  const handleSave = () => {
    const parsedPrice = parseFloat(price);

    if (
      !dishName.trim() ||
      !description.trim() ||
      isNaN(parsedPrice) ||
      parsedPrice <= 0 ||
      !course
    ) {
      Alert.alert(
        "Invalid Input",
        "Please fill out all fields correctly (Dish Name, Description, Price > 0, and Course)."
      );
      return;
    }

    const newItem: MenuItem = {
      id: isEditing ? editingItem.id : Date.now(), // Use existing ID if editing, new ID if adding
      dishName: dishName.trim(),
      description: description.trim(),
      price: parsedPrice,
      course: course,
    };

    onSave(newItem);
    onCancel(); // Return to home screen after saving
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>
          {isEditing ? "Edit Menu Item" : "Add New Menu Item"}
        </Text>
      </View>
      <ScrollView contentContainerStyle={styles.formContainer}>
        <Text style={styles.label}>Dish Name</Text>
        <TextInput
          style={styles.input}
          value={dishName}
          onChangeText={setDishName}
          placeholder="e.g., Spicy Ramen"
        />

        <Text style={styles.label}>Description</Text>
        <TextInput
          style={styles.input}
          value={description}
          onChangeText={setDescription}
          placeholder="Briefly describe the dish"
          multiline
        />

        <Text style={styles.label}>Price (R)</Text>
        <TextInput
          style={styles.input}
          value={price}
          onChangeText={setPrice}
          keyboardType="numeric"
          placeholder="R0.00"
        />

        <Text style={styles.label}>Course Selection</Text>
        <View style={styles.courseSelectorContainer}>
          {allCourses.map((c) => (
            <TouchableOpacity
              key={c}
              style={[
                styles.courseButton,
                course === c && styles.courseButtonActive,
              ]}
              onPress={() => setCourse(c)}
            >
              <Text
                style={
                  course === c
                    ? styles.courseButtonTextActive
                    : styles.courseButtonText
                }
              >
                {c}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        <TouchableOpacity style={styles.actionButton} onPress={handleSave}>
          <Text style={styles.actionButtonText}>Save</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.secondaryButton} onPress={onCancel}>
          <Text style={styles.actionButtonText}>Cancel</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default MenuFormScreen;
