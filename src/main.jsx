import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { AppProvider } from "./context/Context.jsx";


createRoot(document.getElementById("root")).render(
<AppProvider>
  <App />
</AppProvider>
);
