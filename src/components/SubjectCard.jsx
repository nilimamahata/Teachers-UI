import { useNavigate } from "react-router-dom";

export default function SubjectCard({ title, count, label, path }) {
  const navigate = useNavigate();

  return (
    <div className="subject-card" onClick={() => navigate(path)}>
      <p className="subject-title">{title}</p>

      <div className="subject-right">
        <span className="subject-count">{count}</span>
        <span className="subject-label">{label}</span>
      </div>
    </div>
  );
}
