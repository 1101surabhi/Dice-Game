import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Home from "./components/pages/Home";
import Game from "./components/pages/Game/Game";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  { path: "/game", element: <Game /> },
]);

function App() {
  return <RouterProvider router={router}/>
}

export default App;
