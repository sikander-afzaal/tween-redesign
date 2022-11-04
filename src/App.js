import { Route, Routes } from "react-router-dom";
import "./App.css";
import Connect from "./Pages/Connect/Connect";
import Dashboard from "./Pages/Dashboard/Dashboard";
import Promotion from "./Pages/Dashboard/Promotion";
import Token from "./Pages/Dashboard/Token";
import TSwap from "./Pages/Dashboard/TSwap";
import Tweet from "./Pages/Dashboard/Tweet";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<Connect />} path="/" />
        <Route element={<Dashboard />} path="/dashboard">
          <Route path="" element={<Token />} />
          <Route path="promotion" element={<Promotion />} />
          <Route path="tswap" element={<TSwap />} />
          <Route path="tweet" element={<Tweet />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
