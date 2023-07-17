import Home from "./sections/Home/index.jsx";
import BigCard from "./components/big-card/index.jsx";
import "./App.css";

function App() {
  const id = 1;
  return (
    <>
      <Home />
      <BigCard id={id} />
    </>
  );
}

export default App;
