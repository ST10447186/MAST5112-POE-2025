// Screens/styles.ts

import { StyleSheet } from "react-native";

export const PRIMARY_COLOR = "#D93025"; // A strong red color
export const SECONDARY_COLOR = "#FFEBEE"; // Light red/pink background
export const TEXT_COLOR = "#333";
export const WHITE = "#FFF";

const styles = StyleSheet.create({
  // --- General Layout Styles ---
  container: {
    flex: 1,
    paddingTop: 50,
    backgroundColor: SECONDARY_COLOR,
  },
  header: {
    padding: 15,
    backgroundColor: PRIMARY_COLOR,
    alignItems: "center",
    justifyContent: "center",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    marginBottom: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    color: WHITE,
    marginTop: 10,
  },
  greeting: {
    fontSize: 16,
    color: WHITE,
    opacity: 0.8,
  },
  scrollContainer: {
    paddingHorizontal: 15,
    paddingBottom: 20,
  },

  // --- Input/Form Styles (Used in MenuFormScreen) ---
  formContainer: {
    flex: 1,
    padding: 20,
    backgroundColor: WHITE,
    borderRadius: 15,
    margin: 15,
  },
  formTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
    color: PRIMARY_COLOR,
  },
  input: {
    height: 50,
    borderColor: "#ccc",
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    backgroundColor: "#FAFAFA",
  },
  label: {
    fontSize: 14,
    fontWeight: "600",
    marginBottom: 5,
    color: TEXT_COLOR,
  },

  // --- Button Styles (Shared) ---
  actionButton: {
    backgroundColor: PRIMARY_COLOR,
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },
  actionButtonText: {
    color: WHITE,
    fontWeight: "bold",
    fontSize: 16,
  },
  secondaryButton: {
    backgroundColor: "#6c757d", // Gray color for secondary actions
    padding: 12,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 10,
  },

  // --- Summary Card Styles (Used in ChefHomeScreen) ---
  summaryCard: {
    backgroundColor: WHITE,
    borderRadius: 10,
    padding: 15,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 3,
  },
  summaryText: {
    fontSize: 16,
    color: TEXT_COLOR,
    marginBottom: 5,
  },
  summaryValue: {
    fontWeight: "bold",
    color: PRIMARY_COLOR,
  },

  // --- Course Selector (Used in MenuFormScreen and GuestViewScreen) ---
  courseSelectorContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
  },
  courseButton: {
    flex: 1,
    marginHorizontal: 5,
    paddingVertical: 10,
    borderRadius: 20,
    alignItems: "center",
    backgroundColor: "#E0E0E0",
  },
  courseButtonActive: {
    backgroundColor: PRIMARY_COLOR,
  },
  courseButtonText: {
    color: TEXT_COLOR,
    fontWeight: "600",
  },
  courseButtonTextActive: {
    color: WHITE,
  },
});

export default styles;
