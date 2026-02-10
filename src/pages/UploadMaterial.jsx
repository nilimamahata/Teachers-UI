import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { IoChevronBack } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import "../styles/upload-material.css";

export default function UploadMaterial() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [files, setFiles] = useState([]);
  const fileInputRef = useRef(null);

  const handleAddAttachment = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setFiles([...files, ...Array.from(e.target.files)]);
    }
    e.target.value = "";
  };

  const handleUpload = () => {
    if (!title.trim()) return;

    const material = {
      name: title,
      date: new Date().toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "2-digit",
        year: "2-digit",
      }),
      files: files.map((f) => f.name),
    };

    const saved = JSON.parse(localStorage.getItem("studyMaterials") || "[]");
    saved.push(material);
    localStorage.setItem("studyMaterials", JSON.stringify(saved));

    navigate(-1);
  };

  return (
    <div className="upload-material-page">
      <button className="um-back-btn" onClick={() => navigate(-1)}>
        <IoChevronBack /> Back
      </button>

      <div className="um-title-container">
        <h2 className="um-title">Subject Name</h2>
        <div className="um-search">
          <input type="text" placeholder="Search" />
          <FiSearch className="um-search-icon" />
        </div>
      </div>

      <div className="um-form-container">
        <div className="um-form-card">
          <h3 className="um-form-heading">Create New Study Material</h3>

          <div className="um-field">
            <label className="um-label">Title</label>
            <input
              type="text"
              className="um-input"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            multiple
            onChange={handleFileChange}
          />

          {files.length > 0 && (
            <div className="um-file-list">
              {files.map((f, i) => (
                <span key={i} className="um-file-name">{f.name}</span>
              ))}
            </div>
          )}

          <button className="um-add-attachment-btn" onClick={handleAddAttachment}>
            + Add Attachment
          </button>

          <button className="um-upload-btn" onClick={handleUpload}>
            Upload
          </button>
        </div>
      </div>
    </div>
  );
}
