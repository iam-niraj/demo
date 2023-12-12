import React from "react";
import ReactDOMClient from "react-dom/client";
import { CreareBusiness } from "./screens/CreareBusiness";

const app = document.getElementById("app");
const root = ReactDOMClient.createRoot(app);
root.render(<CreareBusiness />);
