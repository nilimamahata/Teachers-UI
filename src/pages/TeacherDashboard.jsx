import { MdExpandMore } from "react-icons/md";
import "../styles/dashboard.css";
import LiveSessionCard from "../components/LiveSessionCard";
import CalendarWidget from "../components/CalendarWidget";
import AssignmentItem from "../components/AssignmentItem";
import QuizItem from "../components/QuizItem";
import NotificationItem from "../components/NotificationItem";
import ActivityItem from "../components/ActivityItem";

export default function TeacherDashboard() {
  return (
    <div className="dashboard">

      {/* TOP ROW */}
      <div className="dash-top">
        <div className="dash-live-section">
          <h3 className="dash-section-title">Upcoming Live Sessions</h3>
          <div className="dash-live-row">
            <LiveSessionCard image="https://picsum.photos/seed/books1/300/150" />
            <LiveSessionCard image="https://picsum.photos/seed/pencils/300/150" />
            <LiveSessionCard image="https://picsum.photos/seed/flowers2/300/150" />
          </div>
        </div>

        <CalendarWidget />
      </div>

      {/* BOTTOM ROW */}
      <div className="dash-bottom">

        {/* Left Column - Assignment + Quiz */}
        <div className="dash-left-col">
          <div className="dash-card">
            <div className="dash-card-header">
              <h4>Assignment</h4>
              <MdExpandMore className="dash-chevron" />
            </div>
            <div className="dash-card-body">
              <AssignmentItem type="danger" />
              <AssignmentItem type="danger" />
              <AssignmentItem type="warning" />
              <AssignmentItem type="warning" />
              <AssignmentItem type="success" />
            </div>
          </div>

          <div className="dash-card">
            <div className="dash-card-header">
              <h4>Quiz</h4>
              <MdExpandMore className="dash-chevron" />
            </div>
            <div className="dash-card-body">
              <QuizItem type="danger" />
              <QuizItem type="warning" />
              <QuizItem type="success" />
            </div>
          </div>
        </div>

        {/* Center Column - Notifications */}
        <div className="dash-card dash-notif-card">
          <div className="dash-card-header">
            <h4>Notification</h4>
            <select className="dash-filter">
              <option>All</option>
            </select>
          </div>
          <div className="dash-card-body">
            <NotificationItem
              title="New Assignment Updated"
              lines={["Subject Name: Topic/Title", "Teacher: Teacher's Name", "Due Date: 20 Feb 26 (Friday)"]}
            />
            <NotificationItem
              title="New Live Session Updated"
              lines={["Subject Name", "Teacher: Teacher's Name", "20 Feb 26 (Friday)", "10:00 AM - 11:30 AM"]}
            />
            <NotificationItem
              title="New Assignment Updated"
              lines={["Subject Name: Topic/Title", "Teacher: Teacher's Name", "Due Date: 20 Feb 26 (Friday)"]}
            />
            <NotificationItem
              title="New Quiz Updated"
              lines={["Subject Name: Topic/Title", "Teacher: Teacher's Name", "Due Date: 20 Feb 26 (Friday)"]}
            />
            <NotificationItem
              title="New Live Session Updated"
              lines={["Subject Name", "Teacher: Teacher's Name", "20 Feb 26 (Friday)", "10:00 AM - 11:30 AM"]}
            />
          </div>
        </div>

        {/* Right Column - Activity Timeline */}
        <div className="dash-card dash-activity-card">
          <div className="dash-card-header">
            <h4>8 Jan 2026</h4>
            <select className="dash-filter">
              <option>All</option>
            </select>
          </div>
          <div className="dash-card-body">
            <ActivityItem
              date="21/01/2026 (Wed)"
              label="Live Session"
              labelColor="teal"
              lines={["Mathematics chapter 1: algebra", "Teacher: Sir Zothana", "Time: 1:00pm to 2:00pm"]}
            />
            <ActivityItem
              date="21/01/2026 (Wed)"
              label="Due Assignment"
              labelColor="yellow"
              lines={["Mathematics chapter 1: algebra", "Teacher: Sir Zothana"]}
            />
            <ActivityItem
              date="21/01/2026 (Wed)"
              label="Live Session"
              labelColor="teal"
              lines={["English chapter 1: Poem", "Teacher: Miss Ruatfeli", "Time: 10:00am to 12:00pm"]}
            />
            <ActivityItem
              date="21/01/2026 (Wed)"
              label="Quiz"
              labelColor="purple"
              lines={["Science: chapter 1: Chemistry", "Teacher: Sir Rasta", "Teacher: Miss Ruatfeli", "Due Date: 23/01/26 (Friday)"]}
            />
            <ActivityItem
              date="23/01/2026 (Fri)"
              label="Due Assignment"
              labelColor="yellow"
              lines={["Mathematics chapter 1: algebra", "Teacher: Sir Zothana"]}
            />
            <ActivityItem
              date="29/01/2026 (Thu)"
              label="Due Assignment"
              labelColor="yellow"
              lines={["Mathematics chapter 1: algebra", "Teacher: Sir Zothana"]}
            />
          </div>
        </div>

      </div>
    </div>
  );
}
