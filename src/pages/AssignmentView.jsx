import { useLocation, useNavigate } from "react-router-dom";
import { IoChevronBack } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import { FaRegFolder } from "react-icons/fa";
import "../styles/assignment-view.css";

export default function AssignmentView() {
  const navigate = useNavigate();
  const { state } = useLocation();

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  const title = state?.title || "Chapter 1";
  const description =
    state?.description ||
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit.\nMauris sit amet massa non ante consectetur finibus ac nec nulla.\nEtiam sem diam, molestie euismod sapien ac, congue vehicula quam.\nIn hac habitasse platea dictumst.";
  const dateIssued = state?.dateIssued
    ? formatDate(state.dateIssued)
    : "21 Jan 2026";
  const dueDate = state?.dueDate ? formatDate(state.dueDate) : "28 Jan 2026";
  const fileName = state?.fileName || "Science biology assignment [file name]";

  return (
    <div className="assignment-view-page">
      <button className="av-back-btn" onClick={() => navigate(-1)}>
        <IoChevronBack /> Back
      </button>

      <div className="av-header">
        <h2 className="av-title">Create New Mathematics Assignment</h2>
        <div className="av-search">
          <input type="text" placeholder="Search" />
          <FiSearch className="av-search-icon" />
        </div>
      </div>

      <div className="av-content-card">
        <div className="av-edit-row">
          <button className="av-edit-btn">Edit</button>
        </div>

        <div className="av-details">
          <p className="av-detail-line">
            <span className="av-label">Title: </span>
            <span className="av-value-bold">{title}</span>
          </p>

          <div className="av-dates">
            <p className="av-detail-line">
              <span className="av-label">Date Issued: </span>
              <span className="av-value-bold">{dateIssued}</span>
            </p>
            <p className="av-detail-line">
              <span className="av-label">Due Date: </span>
              <span className="av-value-bold">{dueDate}</span>
            </p>
          </div>

          <div className="av-description">
            <span className="av-label">Description: </span>
            <span className="av-desc-text">{description}</span>
          </div>

          <div className="av-file-card">
            <div className="av-file-icon-box">
              <FaRegFolder className="av-file-icon" />
            </div>
            <span className="av-file-name">{fileName}</span>
          </div>

          <div className="av-actions">
            <button className="av-view-submission-btn">View Submission</button>
          </div>
        </div>
      </div>
    </div>
  );
}
