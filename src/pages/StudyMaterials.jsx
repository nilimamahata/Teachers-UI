import { useNavigate } from "react-router-dom";
import { IoChevronBack } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import "../styles/study-materials.css";

const defaultMaterials = [
  { name: "Chapter 1", date: "21/01/26" },
  { name: "Chapter 2", date: "22/01/26" },
  { name: "Chapter 3", date: "23/01/26" },
  { name: "Chapter 4", date: "26/01/26" },
  { name: "Chapter 5", date: "26/01/26" },
];

export default function StudyMaterials() {
  const navigate = useNavigate();

  return (
    <div className="study-materials-page">
      <button className="sm-back-btn" onClick={() => navigate(-1)}>
        <IoChevronBack /> Back
      </button>

      <div className="sm-title-container">
        <h2 className="sm-title">Subject Name</h2>
        <div className="sm-search">
          <input type="text" placeholder="Search" />
          <FiSearch className="sm-search-icon" />
        </div>
      </div>

      <div className="sm-list-container">
        <div className="sm-actions">
          <button className="sm-add-btn" onClick={() => navigate("/teacher/classes/study-materials/upload")}>+ Add Study Material</button>
        </div>

        <div className="sm-table-header">
          <span className="sm-col-name">Name</span>
          <span className="sm-col-date">Date</span>
          <span className="sm-col-actions"></span>
        </div>

        <div className="sm-list">
          {defaultMaterials.map((material, index) => (
            <div className="sm-row" key={index}>
              <span className="sm-col-name">{material.name}</span>
              <span className="sm-col-date">{material.date}</span>
              <div className="sm-col-actions">
                <button className="sm-view-btn">View</button>
                <button className="sm-download-btn">Download</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
