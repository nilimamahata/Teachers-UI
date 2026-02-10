import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { IoChevronBack } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import "../styles/upload-recording.css";

export default function UploadRecording() {
  const navigate = useNavigate();
  const [topic, setTopic] = useState("");
  const [sessionDate, setSessionDate] = useState("");
  const [timing, setTiming] = useState("");
  const [videoFile, setVideoFile] = useState(null);
  const fileInputRef = useRef(null);

  const handleAttachVideo = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setVideoFile(e.target.files[0]);
    }
    e.target.value = "";
  };

  const handleUpload = () => {
    if (!topic.trim()) return;

    const recording = {
      subject: "Mathematics",
      topic,
      date: sessionDate,
      timing,
      video: videoFile ? videoFile.name : null,
    };

    const saved = JSON.parse(localStorage.getItem("sessionRecordings") || "[]");
    saved.push(recording);
    localStorage.setItem("sessionRecordings", JSON.stringify(saved));

    navigate(-1);
  };

  return (
    <div className="ur-page">
      <button className="ur-back-btn" onClick={() => navigate(-1)}>
        <IoChevronBack /> Back
      </button>

      <div className="ur-title-container">
        <h2 className="ur-title">Mathematics</h2>
        <div className="ur-search">
          <input type="text" placeholder="Search" />
          <FiSearch className="ur-search-icon" />
        </div>
      </div>

      <div className="ur-form-container">
        <div className="ur-form-card">
          <h3 className="ur-form-heading">Add Recording</h3>

          <div className="ur-field">
            <label className="ur-label">Topic/Title</label>
            <input
              type="text"
              className="ur-input"
              placeholder="Trigonometry"
              value={topic}
              onChange={(e) => setTopic(e.target.value)}
            />
          </div>

          <div className="ur-field">
            <label className="ur-label">Session Date</label>
            <input
              type="text"
              className="ur-input"
              placeholder="21 Jan 2026"
              value={sessionDate}
              onChange={(e) => setSessionDate(e.target.value)}
            />
          </div>

          <div className="ur-field">
            <label className="ur-label">Timing</label>
            <input
              type="text"
              className="ur-input"
              placeholder="1:00 pm - 2:30 pm"
              value={timing}
              onChange={(e) => setTiming(e.target.value)}
            />
          </div>

          <input
            type="file"
            ref={fileInputRef}
            style={{ display: "none" }}
            accept="video/*"
            onChange={handleFileChange}
          />

          {videoFile && (
            <span className="ur-file-name">{videoFile.name}</span>
          )}

          <button className="ur-attach-btn" onClick={handleAttachVideo}>
            + Attach Video
          </button>

          <button className="ur-upload-btn" onClick={handleUpload}>
            Upload
          </button>
        </div>
      </div>
    </div>
  );
}
