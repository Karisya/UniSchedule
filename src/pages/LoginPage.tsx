import { useState, useCallback } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { GraduationCap, BookOpen, Settings } from 'lucide-react';
import { useAppDispatch } from '../store/hooks';
import { loginAs } from '../store/userSlice';
import { users } from '../store/mockData';
import type { UserRole } from '../types';

const ROLE_CONFIG: Record<UserRole, { title: string; subtitle: string; icon: typeof GraduationCap; color: string }> = {
  student: {
    title: 'Студент',
    subtitle: 'Просмотр расписания вашей группы',
    icon: GraduationCap,
    color: 'text-blue-600',
  },
  teacher: {
    title: 'Преподаватель',
    subtitle: 'Расписание занятий и нагрузка',
    icon: BookOpen,
    color: 'text-green-600',
  },
  administrator: {
    title: 'Администратор',
    subtitle: 'Управление учебным расписанием',
    icon: Settings,
    color: 'text-purple-600',
  },
};

export default function LoginPage() {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [detectedRole, setDetectedRole] = useState<UserRole | null>(null);
  const [error, setError] = useState('');

  const verifyEmail = useCallback((email: string) => {
    if (!email || !email.includes('@')) {
      setDetectedRole(null);
      return;
    }
    const user = users.find((u) => u.email.toLowerCase() === email.toLowerCase());
    setDetectedRole(user?.role ?? null);
  }, []);

  const handleLoginChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const v = e.target.value;
    setLogin(v);
    setError('');
    verifyEmail(v);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const user = users.find((u) => u.email.toLowerCase() === login.toLowerCase());
    if (!user) {
      setError('Пользователь не найден');
      return;
    }
    if (user.password !== password) {
      setError('Неверный пароль');
      return;
    }
    dispatch(
      loginAs({
        role: user.role,
        groupId: user.groupId,
        teacherId: user.teacherId,
      }),
    );
    if (user.role === 'student') navigate('/student');
    else if (user.role === 'teacher') navigate('/teacher');
    else navigate('/admin');
  };

  const displayRole: UserRole | null = detectedRole;
  const config = displayRole ? ROLE_CONFIG[displayRole] : null;
  const Icon = config?.icon ?? GraduationCap;

  const submitClass =
    displayRole === 'administrator'
      ? 'bg-purple-600 hover:bg-purple-700'
      : displayRole === 'teacher'
        ? 'bg-green-600 hover:bg-green-700'
        : displayRole === 'student'
          ? 'bg-blue-600 hover:bg-blue-700'
          : 'bg-primary-600 hover:bg-primary-700';

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <header className="px-6 py-4 border-b border-gray-200 bg-white">
        <div className="flex items-center gap-2">
          <GraduationCap className="w-8 h-8 text-gray-700" />
          <span className="text-xl font-semibold text-gray-900">UniSchedule</span>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center px-6 py-12">
        <div className="w-full max-w-md bg-white rounded-xl shadow-md border border-gray-200 p-6">
          <div className="flex items-center gap-3 mb-6">
            <div
              className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                config ? 'bg-gray-100' : 'bg-gray-50'
              }`}
            >
              <Icon className={`w-6 h-6 ${config?.color ?? 'text-gray-500'}`} />
            </div>
            <div>
              <h1 className="text-xl font-bold text-gray-900">
                {config ? config.title : 'Вход в систему'}
              </h1>
              <p className="text-sm text-gray-500">
                {config ? config.subtitle : 'Введите email — роль определится автоматически'}
              </p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Логин</label>
              <input
                type="email"
                value={login}
                onChange={handleLoginChange}
                onBlur={() => verifyEmail(login)}
                placeholder="Введите email"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Пароль</label>
              <input
                type="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  setError('');
                }}
                placeholder="Введите пароль"
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
              />
            </div>
            {error && <p className="text-red-500 text-sm">{error}</p>}
            <button
              type="submit"
              className={`w-full py-2.5 rounded-lg font-medium text-white flex items-center justify-center gap-2 transition-colors ${submitClass}`}
            >
              Войти →
            </button>
          </form>

          <p className="mt-6 text-center text-xs text-gray-500">
            <Link
              to="/handbook"
              className="text-indigo-600 hover:text-indigo-800 font-medium underline-offset-4 hover:underline"
            >
              Справочник кафедры
            </Link>
          </p>
        </div>
      </main>

      <footer className="py-4 text-center text-sm text-gray-500">
        © 2026 UniSchedule — Система учебного расписания
      </footer>
    </div>
  );
}
