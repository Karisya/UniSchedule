import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import StudentSchedule from './pages/StudentSchedule';
import TeacherSchedule from './pages/TeacherSchedule';
import AdminSchedule from './pages/AdminSchedule';

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="student" element={<StudentSchedule />} />
        <Route path="teacher" element={<TeacherSchedule />} />
        <Route path="admin" element={<AdminSchedule />} />
      </Route>
    </Routes>
  );
}
