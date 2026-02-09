import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { IoChevronBack } from "react-icons/io5";
import { FiSearch, FiCalendar } from "react-icons/fi";
import "../styles/create-assignment.css";

export default function CreateAssignment() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [dueDate, setDueDate] = useState("2026-01-26");
  const [file, setFile] = useState(null);
  const fileInputRef = useRef(null);

  const formatDate = (dateStr) => {
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  return (
    <div className="create-assignment-page">
      <button className="ca-back-btn" onClick={() => navigate(-1)}>
        <IoChevronBack /> Back
      </button>

      <div className="ca-title-container">
        <h2 className="ca-title">Create New Mathematics Assignment</h2>
        <div className="ca-search">
          <input type="text" placeholder="Search" />
          <FiSearch className="ca-search-icon" />
        </div>
      </div>

      <div className="ca-form-container">
        <div className="ca-form">
          <div className="ca-field">
            <label className="ca-label">Title</label>
            <input
              type="text"
              className="ca-input"
              placeholder="Paragraph"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="ca-field">
            <label className="ca-label">Description</label>
            <textarea
              className="ca-textarea"
              placeholder="Paragraph"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={6}
            />
          </div>

          <div className="ca-field">
            <label className="ca-label">Due Date</label>
            <div className="ca-date-wrapper">
              <span className="ca-date-display">{formatDate(dueDate)}</span>
              <div className="ca-date-icon-wrapper">
                <FiCalendar className="ca-date-icon" />
                <input
                  type="date"
                  className="ca-date-input"
                  value={dueDate}
                  onChange={(e) => setDueDate(e.target.value)}
                />
              </div>
            </div>
          </div>

          <div className="ca-field">
            <label className="ca-label">Attach File</label>
            <input
              type="file"
              ref={fileInputRef}
              style={{ display: "none" }}
              onChange={(e) => setFile(e.target.files[0] || null)}
            />
            <button
              className="ca-add-file-btn"
              onClick={() => fileInputRef.current.click()}
            >
              +Add
            </button>
            {file && <span className="ca-file-name">{file.name}</span>}
          </div>

          <div className="ca-actions">
            <button
              className="ca-create-btn"
              onClick={() => {
                navigate("/teacher/classes/assignments/view", {
                  state: {
                    title,
                    description,
                    dateIssued: new Date().toISOString(),
                    dueDate,
                    fileName: file ? file.name : null,
                  },
                });
              }}
            >
              Create
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
