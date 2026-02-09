export default function AssignmentItem({ type }) {
  return (
    <div className={`dash-item ${type}`}>
      <div className="dash-item-content">
        <p><strong>Subject Name: Topic/Title</strong></p>
        <p>Teacher: Teacher's Name</p>
        <p>Due Date: 20 Feb 26 (Friday)</p>
      </div>
      <span className="badge-friday">Friday</span>
    </div>
  );
}
