import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const MONTHS = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];

const highlightedDates = {
  8: "red",
  21: "teal",
  23: "red",
  29: "teal",
  31: "red",
};

export default function CalendarWidget() {
  const [year, setYear] = useState(2026);
  const [month, setMonth] = useState(0);

  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const today = new Date();

  const changeMonth = (dir) => {
    let m = month + dir;
    let y = year;
    if (m < 0) { m = 11; y--; }
    if (m > 11) { m = 0; y++; }
    setMonth(m);
    setYear(y);
  };

  return (
    <div className="calendar">
      <div className="calendar-header">
        <FaChevronLeft className="cal-arrow" onClick={() => changeMonth(-1)} />
        <select value={month} onChange={e => setMonth(+e.target.value)} className="cal-select">
          {MONTHS.map((m, i) => <option key={m} value={i}>{m}</option>)}
        </select>
        <select value={year} onChange={e => setYear(+e.target.value)} className="cal-select">
          {[2025, 2026, 2027].map(y => <option key={y} value={y}>{y}</option>)}
        </select>
        <FaChevronRight className="cal-arrow" onClick={() => changeMonth(1)} />
      </div>

      <div className="calendar-grid">
        {["Mo","Tu","We","Th","Fr","Sa","Su"].map(d => (
          <span key={d} className="cal-day-name">{d}</span>
        ))}

        {[...Array((firstDay + 6) % 7)].map((_, i) => (
          <span key={`empty-${i}`} />
        ))}

        {[...Array(daysInMonth)].map((_, i) => {
          const day = i + 1;
          const isToday =
            day === today.getDate() &&
            month === today.getMonth() &&
            year === today.getFullYear();
          const highlight = highlightedDates[day];

          let cls = "cal-date";
          if (isToday) cls += " cal-today";
          else if (highlight === "red") cls += " cal-red";
          else if (highlight === "teal") cls += " cal-teal";

          return (
            <span key={day} className={cls}>
              {day}
            </span>
          );
        })}
      </div>
    </div>
  );
}
