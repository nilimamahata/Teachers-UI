import { MdDashboard } from "react-icons/md";
import { MdMenuBook } from "react-icons/md";
import "../styles/dashboard.css";
import logo from "../assets/Vector.svg";

export default function Sidebar() {
  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <img src={logo} alt="ShikshaCom" />
        <div>
          <h3>ShikshaCom</h3>
          <p>Empowerment Through Education</p>
        </div>
      </div>

      <nav className="sidebar-menu">
        <div className="menu-item active">
          <MdDashboard className="menu-icon" />
          <span>Dashboard</span>
        </div>

        <div className="menu-item">
          <MdMenuBook className="menu-icon" />
          <span>Classes</span>
        </div>

        <div className="submenu">
          <p>Math (Class 8) BY23</p>
          <p>Math (Class 8) BY26</p>
        </div>
      </nav>
    </aside>
  );
}
