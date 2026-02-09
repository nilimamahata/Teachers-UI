import SubjectCard from "../components/SubjectCard";
import SearchBar from "../components/SearchBar";
import "../styles/classes.css";

export default function Classes() {
  return (
    <div className="classes-wrapper">
      <div className="classes-container">

        <div className="classes-top">
          <h2>Subjects (Assignments)</h2>
          <SearchBar />
        </div>

        <div className="classes-grid">
          <SubjectCard title="Assignment" count="4" label="Tasks" path="/teacher/classes/assignments" />
          <SubjectCard title="Quiz" count="6" label="Tests" path="/teacher/classes/quizzes" />
          <SubjectCard title="Study Materials" count="11" label="Resources" path="/teacher/classes/study-materials" />
          <SubjectCard title="Session Recordings" count="8" label="Recordings" path="/teacher/classes/session-recordings" />
          <SubjectCard title="Live Sessions" count="5" label="Upcoming Sessions" path="/teacher/classes/live-sessions" />

        </div>

      </div>
    </div>
  );
}
