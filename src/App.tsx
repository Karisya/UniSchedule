import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './components/Layout';
import LoginPage from './pages/LoginPage';
import StudentSchedule from './pages/StudentSchedule';
import TeacherSchedule from './pages/TeacherSchedule';
import AdminSchedule from './pages/AdminSchedule';
import DepartmentHandbookPage from './pages/DepartmentHandbookPage';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<LoginPage />} />
        <Route path="handbook" element={<DepartmentHandbookPage />} />
        <Route path="student" element={<StudentSchedule />} />
        <Route path="teacher" element={<TeacherSchedule />} />
        <Route path="admin" element={<AdminSchedule />} />
      </Route>
      <Route path="login" element={<Navigate to="/" replace />} />
      <Route path="login/:role" element={<Navigate to="/" replace />} />
      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
}
