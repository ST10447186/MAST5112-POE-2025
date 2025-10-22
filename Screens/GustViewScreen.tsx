// Screens/GuestViewScreen.tsx
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";
import { MenuItem, Course } from "../interfaces";
import styles, {
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  TEXT_COLOR,
  WHITE,
} from "./styles";

interface GuestViewScreenProps {
  menu: MenuItem[];
}

const allCourses: Course[] = ["Starters", "Mains", "Desserts"];

const GuestViewScreen: React.FC<GuestViewScreenProps> = ({ menu }) => {
  const [activeCourse, setActiveCourse] = useState<Course | "All">("All");

  const filteredMenu = menu.filter(
    (item) => activeCourse === "All" || item.course === activeCourse
  );

  const GuestItemCard: React.FC<{ item: MenuItem }> = ({ item }) => (
    <View style={guestStyles.card}>
      <Text style={guestStyles.dishName}>{item.dishName}</Text>
      <Text style={guestStyles.description}>{item.description}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Guest Menu</Text>
        <Text style={styles.greeting}>
          Welcome, please enjoy our selections!
        </Text>
      </View>

      {/* Filter Buttons */}
      <View style={guestStyles.filterContainer}>
        <TouchableOpacity
          style={[
            guestStyles.filterButton,
            activeCourse === "All" && guestStyles.filterButtonActive,
          ]}
          onPress={() => setActiveCourse("All")}
        >
          <Text
            style={
              activeCourse === "All"
                ? guestStyles.filterTextActive
                : guestStyles.filterText
            }
          >
            All
          </Text>
        </TouchableOpacity>
        {allCourses.map((c) => (
          <TouchableOpacity
            key={c}
            style={[
              guestStyles.filterButton,
              activeCourse === c && guestStyles.filterButtonActive,
            ]}
            onPress={() => setActiveCourse(c)}
          >
            <Text
              style={
                activeCourse === c
                  ? guestStyles.filterTextActive
                  : guestStyles.filterText
              }
            >
              {c}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Menu List */}
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {filteredMenu.length > 0 ? (
          filteredMenu.map((item) => (
            <GuestItemCard key={item.id} item={item} />
          ))
        ) : (
          <Text style={guestStyles.noItemsText}>
            No items found for {activeCourse}.
          </Text>
        )}
      </ScrollView>
    </View>
  );
};

const guestStyles = StyleSheet.create({
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
    backgroundColor: WHITE,
    marginHorizontal: 15,
    borderRadius: 10,
    marginBottom: 10,
  },
  filterButton: {
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 20,
    backgroundColor: SECONDARY_COLOR,
  },
  filterButtonActive: {
    backgroundColor: PRIMARY_COLOR,
  },
  filterText: {
    color: TEXT_COLOR,
    fontWeight: "600",
  },
  filterTextActive: {
    color: WHITE,
  },
  card: {
    backgroundColor: WHITE,
    borderRadius: 10,
    padding: 15,
    marginBottom: 10,
    borderLeftWidth: 4,
    borderLeftColor: PRIMARY_COLOR,
  },
  dishName: {
    fontSize: 18,
    fontWeight: "bold",
    color: TEXT_COLOR,
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: "#666",
  },
  noItemsText: {
    textAlign: "center",
    marginTop: 50,
    fontSize: 16,
    color: "#999",
  },
});

export default GuestViewScreen;
