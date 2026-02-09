import SelectCourseButton from "./SelectCourseButton";
import "../styles/header.css";

export default function Header() {
  return (
    <header className="header">
      <div />
      <SelectCourseButton />
      <img
        src="https://i.pravatar.cc/40"
        alt="profile"
        className="profile-img"
      />
    </header>
  );
}
