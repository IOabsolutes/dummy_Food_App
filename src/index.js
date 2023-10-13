import ReactDOM from "react-dom/client";

import "./index.css";
import App from "./App";
import { Mealstore } from "./store/meal-store";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Mealstore>
    <App />
  </Mealstore>
);
