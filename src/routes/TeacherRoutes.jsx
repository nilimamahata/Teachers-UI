import { Routes, Route, Navigate } from "react-router-dom";
import TeacherLayout from "../layout/TeacherLayout";
import TeacherDashboard from "../pages/TeacherDashboard";
import Classes from "../pages/Classes";
import Assignments from "../pages/Assignments";
import CreateAssignment from "../pages/CreateAssignment";
import AssignmentView from "../pages/AssignmentView";

export default function TeacherRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/teacher/dashboard" />} />
      <Route element={<TeacherLayout />}>
        <Route path="/teacher/dashboard" element={<TeacherDashboard />} />
        <Route path="/teacher/classes" element={<Classes />} />
        <Route path="/teacher/classes/assignments" element={<Assignments />} />
        <Route path="/teacher/classes/assignments/create" element={<CreateAssignment />} />
        <Route path="/teacher/classes/assignments/view" element={<AssignmentView />} />
      </Route>
    </Routes>
  );
}
