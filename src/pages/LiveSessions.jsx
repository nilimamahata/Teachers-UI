import { useNavigate } from "react-router-dom";
import { IoChevronBack } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import "../styles/live-sessions.css";

const defaultSessions = [
  {
    subject: "Subject Name",
    topic: "Title/Topic",
    teacher: "Teacher's Name",
    date: "Date",
    timing: "Session Timing",
  },
  {
    subject: "Subject Name",
    topic: "Title/Topic",
    teacher: "Teacher's Name",
    date: "Date",
    timing: "Session Timing",
  },
  {
    subject: "Subject Name",
    topic: "Title/Topic",
    teacher: "Teacher's Name",
    date: "Date",
    timing: "Session Timing",
  },
  {
    subject: "Subject Name",
    topic: "Title/Topic",
    teacher: "Teacher's Name",
    date: "Date",
    timing: "Session Timing",
  },
  {
    subject: "Subject Name",
    topic: "Title/Topic",
    teacher: "Teacher's Name",
    date: "Date",
    timing: "Session Timing",
  },
  {
    subject: "Subject Name",
    topic: "Title/Topic",
    teacher: "Teacher's Name",
    date: "Date",
    timing: "Session Timing",
  },
];

export default function LiveSessions() {
  const navigate = useNavigate();

  return (
    <div className="live-sessions-page">
      <button className="live-sessions-back-btn" onClick={() => navigate(-1)}>
        <IoChevronBack /> Back
      </button>

      <div className="live-sessions-header">
        <h2 className="live-sessions-title">Schedule for Interactive Sessions</h2>
        <div className="live-sessions-search">
          <input type="text" placeholder="Search" />
          <FiSearch className="live-sessions-search-icon" />
        </div>
      </div>

      <div className="live-sessions-content">
        <div className="live-sessions-actions">
          <button className="live-sessions-schedule-btn">
            Schedule Live Session
          </button>
        </div>

        <div className="live-sessions-grid">
          {defaultSessions.map((session, index) => (
            <div className="session-card" key={index}>
              <div className="session-card-top">
                <h4 className="session-card-subject">{session.subject}</h4>
                <p className="session-card-topic">{session.topic}</p>
              </div>
              <p className="session-card-teacher">{session.teacher}</p>
              <div className="session-card-bottom">
                <span className="session-card-date">{session.date}</span>
                <span className="session-card-timing">{session.timing}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
