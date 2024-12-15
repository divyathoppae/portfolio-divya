import React from "react";
import { createRoot } from "react-dom/client"; // Import createRoot
import App from "./App";
import "./index.css";

// Get the root DOM element
const rootElement = document.querySelector("#root");

// Create a root and render the App
const root = createRoot(rootElement);
root.render(<App />);
