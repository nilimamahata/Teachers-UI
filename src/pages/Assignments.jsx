
import "../styles/assignments.css";

export default function Assignments() {
  return (
    <div className="assignments-container">
      <h2>Assignments</h2>

      <div className="assignment-list">
        <div className="assignment-card">
          <h4>Algebra Worksheet</h4>
          <p>Due: 12 Feb 2026</p>
        </div>

        <div className="assignment-card">
          <h4>Geometry Homework</h4>
          <p>Due: 15 Feb 2026</p>
        </div>
      </div>
    </div>
  );
}
