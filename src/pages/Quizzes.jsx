import { useNavigate } from "react-router-dom";
import { IoChevronBack } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import "../styles/quizzes.css";

const defaultQuizzes = [
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

export default function Quizzes() {
  const navigate = useNavigate();

  return (
    <div className="quizzes-page">

      <button className="quizzes-back-btn" onClick={() => navigate(-1)}>
        <IoChevronBack /> Back
      </button>

      <div className="quizzes-title-container">
        <h2 className="quizzes-title">Mathematics</h2>
        <div className="quizzes-search">
          <input type="text" placeholder="Search" />
          <FiSearch className="quizzes-search-icon" />
        </div>
      </div>

      <div className="quizzes-list-container">
        <div className="quizzes-actions">
          <button className="quizzes-create-btn" onClick={() => navigate("/teacher/classes/quizzes/create")}>+ Create New Quiz</button>
        </div>

        <div className="quizzes-list">
          {defaultQuizzes.map((quiz, index) => (
            <div className="quiz-row" key={index}>
              <div className="quiz-info">
                <span className="quiz-id">{quiz.id}</span>
                <span className="quiz-name">{quiz.title}</span>
              </div>
              <div className="quiz-detail">
                <span className="quiz-label">Issued on:</span>
                <span className="quiz-value">{quiz.issuedOn}</span>
              </div>
              <div className="quiz-detail">
                <span className="quiz-label">Due on:</span>
                <span className="quiz-value">{quiz.dueOn}</span>
              </div>
              <div className="quiz-detail">
                <span className="quiz-label">Turned In:</span>
                <span className="quiz-value bold">{quiz.turnedIn}</span>
              </div>
              <button className="quiz-view-btn">View</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
