export default function NotificationItem({ title, lines, barColor = "green" }) {
  return (
    <div className="notif-item">
      <span className={`notif-bar ${barColor}`}></span>
      <div className="notif-content">
        <p className="notif-title">{title}</p>
        {lines && lines.map((line, i) => (
          <p key={i} className="notif-line">{line}</p>
        ))}
      </div>
    </div>
  );
}
