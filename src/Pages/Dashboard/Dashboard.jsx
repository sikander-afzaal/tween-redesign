import { Outlet } from "react-router-dom";
import Header from "../../Layout/Header/Header";
import "./styles/Dashboard.css";
const Dashboard = () => {
  return (
    <div className="dashboard">
      <Header />
      <div className="bottom-dash">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;
