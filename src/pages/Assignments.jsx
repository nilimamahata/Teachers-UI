import { useNavigate } from "react-router-dom";
import { IoChevronBack } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import "../styles/assignments.css";

const assignmentsData = [
  {
    id: "Assignment - ID",
    title: "(TITLE) Integration - I",
    issuedOn: "21 Jan 2026",
    dueOn: "30 Jan 2026",
    turnedIn: "17/32",
  },
  {
    id: "Assignment - ID",
    title: "(TITLE) Integration - I",
    issuedOn: "21 Jan 2026",
    dueOn: "30 Jan 2026",
    turnedIn: "17/32",
  },
  {
    id: "Assignment - ID",
    title: "(TITLE) Integration - I",
    issuedOn: "21 Jan 2026",
    dueOn: "30 Jan 2026",
    turnedIn: "17/32",
  },
  {
    id: "Assignment - ID",
    title: "(TITLE) Integration - I",
    issuedOn: "21 Jan 2026",
    dueOn: "30 Jan 2026",
    turnedIn: "17/32",
  },
  {
    id: "Assignment - ID",
    title: "(TITLE) Integration - I",
    issuedOn: "21 Jan 2026",
    dueOn: "30 Jan 2026",
    turnedIn: "17/32",
  },
  {
    id: "Assignment - ID",
    title: "(TITLE) Integration - I",
    issuedOn: "21 Jan 2026",
    dueOn: "30 Jan 2026",
    turnedIn: "17/32",
  },
  {
    id: "Assignment - ID",
    title: "(TITLE) Integration - I",
    issuedOn: "21 Jan 2026",
    dueOn: "30 Jan 2026",
    turnedIn: "17/32",
  },
  {
    id: "Assignment - ID",
    title: "(TITLE) Integration - I",
    issuedOn: "21 Jan 2026",
    dueOn: "30 Jan 2026",
    turnedIn: "17/32",
  },
];

export default function Assignments() {
  const navigate = useNavigate();

  return (
    <div className="assignments-page">

      <button className="assignments-back-btn" onClick={() => navigate(-1)}>
        <IoChevronBack /> Back
      </button>

      <div className="assignments-title-container">
        <h2 className="assignments-title">Mathematics</h2>
        <div className="assignments-search">
          <input type="text" placeholder="Search" />
          <FiSearch className="assignments-search-icon" />
        </div>
      </div>

      <div className="assignments-list-container">
        <div className="assignments-actions">
          <button className="assignments-create-btn" onClick={() => navigate("/teacher/classes/assignments/create")}>+ Create New Assignment</button>
        </div>

        <div className="assignments-list">
          {assignmentsData.map((assignment, index) => (
            <div className="assignment-row" key={index}>
              <div className="assignment-info">
                <span className="assignment-id">{assignment.id}</span>
                <span className="assignment-name">{assignment.title}</span>
              </div>
              <div className="assignment-detail">
                <span className="assignment-label">Issued on:</span>
                <span className="assignment-value">{assignment.issuedOn}</span>
              </div>
              <div className="assignment-detail">
                <span className="assignment-label">Due on:</span>
                <span className="assignment-value">{assignment.dueOn}</span>
              </div>
              <div className="assignment-detail">
                <span className="assignment-label">Turned In:</span>
                <span className="assignment-value bold">{assignment.turnedIn}</span>
              </div>
              <button className="assignment-view-btn">View</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
