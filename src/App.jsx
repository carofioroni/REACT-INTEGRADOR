import Home from "./sections/Home/index.jsx";
import BigCard from "./components/big-card/index.jsx";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

function App() {
  const id = 1;
  const rutas= createBrowserRouter ([{
    path: '/', element: <Home/>
  }, {path: '/pokemon/:name', element: <BigCard/>}])
  return (
<RouterProvider router = {rutas} />
  );
}

export default App;
