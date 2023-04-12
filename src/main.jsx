import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { SidebarProvider } from "./context/sidebarContext";
import { MealProvider } from "./context/mealContext";

ReactDOM.createRoot(document.getElementById("root")).render(
  <SidebarProvider>
    <MealProvider>
      <App />
    </MealProvider>
  </SidebarProvider>
);
