import { useLocation, useNavigate } from "react-router-dom";
import { IoChevronBack } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";
import "../styles/submission-view.css";

const dummyStudents = [
  { name: "John Lalruatpuia", submittedOn: "2026-01-28", status: "Submitted" },
  { name: "Jahn Lalruatpuia", submittedOn: "2026-01-28", status: "Submitted" },
  { name: "Jonh Lalruatpuia", submittedOn: "2026-01-28", status: "Submitted" },
  { name: "John Lalratpuia", submittedOn: "2026-01-29", status: "Submitted" },
  { name: "John Lalruatpia", submittedOn: "2026-01-30", status: "Submitted" },
  { name: "John Lalrutpuia", submittedOn: "2026-01-30", status: "Submitted" },
  { name: "John Lulruatpuia", submittedOn: "2026-01-31", status: "Submitted" },
  { name: "John Lilruatpuia", submittedOn: "2026-01-31", status: "Submitted" },
  { name: "John Lilpuia", submittedOn: null, status: "Pending" },
  { name: "John Puia", submittedOn: null, status: "Pending" },
];

export default function SubmissionView() {
  const navigate = useNavigate();
  const { state } = useLocation();

  const title = state?.title || "Mathematics Assignment - ID";

  const formatDate = (dateStr) => {
    if (!dateStr) return "-";
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  const students = state?.students || dummyStudents;
  const total = students.length;
  const submittedCount = students.filter((s) => s.status === "Submitted").length;
  const pendingCount = total - submittedCount;

  return (
    <div className="sv-page">
      <button className="sv-back-btn" onClick={() => navigate(-1)}>
        <IoChevronBack /> Back
      </button>

      <div className="sv-header">
        <h2 className="sv-title">{title}</h2>
        <div className="sv-search">
          <input type="text" placeholder="Search" />
          <FiSearch className="sv-search-icon" />
        </div>
      </div>

      <div className="sv-content-card">
        <div className="sv-summary">
          <span className="sv-submitted-count">
            {submittedCount}/{total} Submitted
          </span>
          <span className="sv-pending-count">
            {pendingCount}/{total} Pending
          </span>
        </div>

        <table className="sv-table">
          <thead>
            <tr>
              <th>Sl No.</th>
              <th>Name</th>
              <th>Submitted On:</th>
              <th>Status</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{student.name}</td>
                <td>{formatDate(student.submittedOn)}</td>
                <td>
                  <span
                    className={
                      student.status === "Submitted"
                        ? "sv-status-submitted"
                        : "sv-status-pending"
                    }
                  >
                    {student.status}
                  </span>
                </td>
                <td>
                  <button className="sv-review-btn">Review</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
