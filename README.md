PrivateChef Menu Management App 
Project OverviewThe PrivateChef Menu Management App is a simple, single-page application designed for a chef to manage a restaurant menu and for guests to view a curated, filterable version of the menu.The application is built using React Native (or Expo) and TypeScript, emphasizing modularity by separating screens, components, and data interfaces.Key FeaturesViewDescriptionAccessChef's View (Home)The main dashboard displaying the full menu, including prices, item count summary, and average price. Includes options to Add New Item and Remove items.Chef Only (Default View)Menu FormA form used for creating or modifying existing menu items. Requires Dish Name, Description, Price, and Course Selection (Starters, Mains, Desserts).Chef OnlyGuest ViewA read-only view for customers. It displays dish names and descriptions but omits prices. Includes filter buttons for Starters, Mains, and Desserts.Guest Access📂 Project StructureThe application follows a modular structure to separate concerns:PrivateChef/
├── node_modules/           # Project dependencies
├── interfaces.ts           # TypeScript type definitions (MenuItem, Course, AppScreen)
├── App.tsx                 # Main application file, handles state and navigation logic
├── index.ts                # Entry point for React Native/Expo
├── package.json
└── screens/                # All components and view logic
    ├── ChefHomeScreen.tsx  # Chef's main dashboard
    ├── GuestViewScreen.tsx # Customer-facing menu with filters
    ├── MenuFormScreen.tsx  # Add/Edit form for menu items
    ├── MenuItemCard.tsx    # Reusable component for displaying a menu item
    └── styles.ts           # Centralized styling, colors, and global constants
