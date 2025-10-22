// interfaces.ts
/**
 * Defines the structure for a MenuItem, including its unique ID, details, and course.
 */

export type Course = "Starters" | "Mains" | "Desserts";

export interface MenuItem {
  id: number;
  dishName: string;
  description: string;
  price: number; // Price in Rands (R)
  course: Course;
}

// Defines the available screens for navigation
export type AppScreen = "ChefHome" | "MenuForm" | "GuestView";
