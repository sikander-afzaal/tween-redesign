import { Route, Routes } from "react-router-dom";
import "./App.css";
import Connect from "./Pages/Connect/Connect";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Connect />} path="/" />
      </Routes>
    </div>
  );
}

export default App;
