import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { IoChevronBack } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import "../styles/create-quiz.css";

const defaultQuestions = [
  {
    question: "question ABC",
    options: ["answer ABC", "answer ABC", "answer ABC", "answer ABC"],
    answer: "a",
  },
  {
    question: "question ABC",
    options: ["answer ABC", "answer ABC", "answer ABC", "answer ABC"],
    answer: "c",
  },
  {
    question: "question ABC",
    options: ["answer ABC", "answer ABC", "answer ABC", "answer ABC"],
    answer: "c",
  },
  {
    question: "question ABC",
    options: ["answer ABC", "answer ABC", "answer ABC", "answer ABC"],
    answer: "a",
  },
];

const optionLabels = ["a", "b", "c", "d"];

export default function CreateQuiz() {
  const navigate = useNavigate();
  const [questions, setQuestions] = useState(defaultQuestions);

  const updateQuestion = (qIndex, field, value) => {
    setQuestions((prev) =>
      prev.map((q, i) => (i === qIndex ? { ...q, [field]: value } : q))
    );
  };

  const updateOption = (qIndex, optIndex, value) => {
    setQuestions((prev) =>
      prev.map((q, i) =>
        i === qIndex
          ? { ...q, options: q.options.map((o, j) => (j === optIndex ? value : o)) }
          : q
      )
    );
  };

  return (
    <div className="create-quiz-page">
      <button className="cq-back-btn" onClick={() => navigate(-1)}>
        <IoChevronBack /> Back
      </button>

      <div className="cq-title-container">
        <h2 className="cq-title">Mathematics</h2>
        <div className="cq-search">
          <input type="text" placeholder="Search" />
          <FiSearch className="cq-search-icon" />
        </div>
      </div>

      <div className="cq-form-container">
        <div className="cq-questions-list">
          {questions.map((q, qIndex) => (
            <div className="cq-question-block" key={qIndex}>
              <div className="cq-question-header">
                <span className="cq-question-label">Q{qIndex + 1}.</span>
                <input
                  type="text"
                  className="cq-question-input"
                  value={q.question}
                  onChange={(e) => updateQuestion(qIndex, "question", e.target.value)}
                />
              </div>

              <div className="cq-options-grid">
                {q.options.map((opt, optIndex) => (
                  <div className="cq-option-row" key={optIndex}>
                    <span className="cq-option-label">{optionLabels[optIndex]})</span>
                    <input
                      type="text"
                      className="cq-option-input"
                      value={opt}
                      onChange={(e) => updateOption(qIndex, optIndex, e.target.value)}
                    />
                  </div>
                ))}
              </div>

              <div className="cq-answer-row">
                <span className="cq-answer-label">Answer:</span>
                <input
                  type="text"
                  className="cq-answer-input"
                  value={q.answer}
                  onChange={(e) => updateQuestion(qIndex, "answer", e.target.value)}
                />
              </div>
            </div>
          ))}
        </div>

        <div className="cq-actions">
          <button className="cq-create-btn" onClick={() => navigate(-1)}>
            Create
          </button>
        </div>
      </div>
    </div>
  );
}
