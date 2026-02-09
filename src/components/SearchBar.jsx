import { MdSearch } from "react-icons/md";

export default function SearchBar() {
  return (
    <div className="search-box">
      <input type="text" placeholder="Search" />
      <MdSearch className="search-icon" />
    </div>
  );
}
