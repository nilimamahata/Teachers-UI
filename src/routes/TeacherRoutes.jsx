import { Routes, Route, Navigate } from "react-router-dom";
import TeacherLayout from "../layout/TeacherLayout";
import Classes from "../pages/Classes";
import Assignments from "../pages/Assignments";

export default function TeacherRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/teacher/classes" />} />
      <Route element={<TeacherLayout />}>
        <Route path="/teacher/classes" element={<Classes />} />
        <Route path="/teacher/classes/assignments" element={<Assignments />} />
      </Route>
    </Routes>
  );
}
