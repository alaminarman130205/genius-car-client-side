import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./Routes/Routes";

function App() {
  return (
    <div data-theme="dracula" className="max-w-screen-lg mx-auto">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
