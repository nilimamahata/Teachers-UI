import { useState, useRef } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { IoChevronBack } from "react-icons/io5";
import { FiSearch, FiCalendar } from "react-icons/fi";
import "../styles/create-assignment.css";

export default function CreateAssignment() {
  const navigate = useNavigate();
  const { state: editData } = useLocation();

  const [title, setTitle] = useState(editData?.title || "");
  const [description, setDescription] = useState(editData?.description || "");
  const [dueDate, setDueDate] = useState(editData?.dueDate || "");
  const [file, setFile] = useState(
    editData?.fileName ? { name: editData.fileName } : null
  );
  const [errors, setErrors] = useState({});
  const fileInputRef = useRef(null);
  const isEditing = !!editData?.title;

  const validate = () => {
    const newErrors = {};
    if (!title.trim()) newErrors.title = "Title is required";
    if (!description.trim()) newErrors.description = "Description is required";
    if (!dueDate) newErrors.dueDate = "Due date is required";
    if (!file) newErrors.file = "Please attach a file";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

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
        <h2 className="ca-title">
          {isEditing ? "Edit Mathematics Assignment" : "Create New Mathematics Assignment"}
        </h2>
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
              className={`ca-input ${errors.title ? "ca-input-error" : ""}`}
              placeholder="Paragraph"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            {errors.title && <span className="ca-error">{errors.title}</span>}
          </div>

          <div className="ca-field">
            <label className="ca-label">Description</label>
            <textarea
              className={`ca-textarea ${errors.description ? "ca-input-error" : ""}`}
              placeholder="Paragraph"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={6}
            />
            {errors.description && <span className="ca-error">{errors.description}</span>}
          </div>

          <div className="ca-field">
            <label className="ca-label">Due Date</label>
            <div className="ca-date-wrapper">
              <span className={`ca-date-display ${errors.dueDate ? "ca-input-error" : ""}`}>
                {dueDate ? formatDate(dueDate) : "Select date"}
              </span>
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
            {errors.dueDate && <span className="ca-error">{errors.dueDate}</span>}
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
              className={`ca-add-file-btn ${errors.file ? "ca-btn-error" : ""}`}
              onClick={() => fileInputRef.current.click()}
            >
              +Add
            </button>
            {file && <span className="ca-file-name">{file.name}</span>}
            {errors.file && <span className="ca-error">{errors.file}</span>}
          </div>

          <div className="ca-actions">
            <button
              className="ca-create-btn"
              onClick={() => {
                if (!validate()) return;
                const assignmentData = {
                  title,
                  description,
                  dateIssued: new Date().toISOString(),
                  dueDate,
                  fileName: file.name,
                };

                // Save to localStorage so it appears in the Assignments list
                const saved = JSON.parse(localStorage.getItem("assignments") || "[]");
                if (isEditing) {
                  const idx = saved.findIndex((a) => a.title === editData.title);
                  if (idx !== -1) saved[idx] = assignmentData;
                  else saved.push(assignmentData);
                } else {
                  saved.push(assignmentData);
                }
                localStorage.setItem("assignments", JSON.stringify(saved));

                navigate("/teacher/classes/assignments/view", {
                  state: assignmentData,
                });
              }}
            >
              {isEditing ? "Update" : "Create"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
