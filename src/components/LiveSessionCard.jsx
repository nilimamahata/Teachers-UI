export default function LiveSessionCard({ image }) {
  return (
    <div className="live-card">
      <img src={image || "https://picsum.photos/seed/books/300/150"} alt="" />
      <div className="live-card-body">
        <h5>Subject Name</h5>
        <p>Session Title/Topic</p>
        <p>Teacher Name</p>
        <p className="time">Date &amp; Time (Session date)</p>
      </div>
    </div>
  );
}
