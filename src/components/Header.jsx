import { useLocation } from "react-router-dom";
import "../styles/header.css";

export default function Header() {
  const location = useLocation();

  return (
    <header className="header">
      <img
        src="https://i.pravatar.cc/40"
        alt="profile"
        className="profile-img"
      />
    </header>
  );
}
