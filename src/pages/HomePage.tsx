import { useNavigate } from 'react-router-dom';
import { GraduationCap, BookOpen, Settings } from 'lucide-react';

export default function HomePage() {
  const navigate = useNavigate();

  const roles = [
    {
      id: 'student',
      title: 'Студент',
      description: 'Просмотр своего учебного расписания на неделю.',
      icon: GraduationCap,
      color: 'text-blue-600',
      path: '/student',
    },
    {
      id: 'teacher',
      title: 'Преподаватель',
      description: 'Просмотр расписания занятий и работа с несколькими группами.',
      icon: BookOpen,
      color: 'text-green-600',
      path: '/teacher',
    },
    {
      id: 'admin',
      title: 'Администратор',
      description: 'Управление расписанием и редактирование учебных занятий.',
      icon: Settings,
      color: 'text-purple-600',
      path: '/admin',
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <header className="px-6 py-4 border-b border-gray-200 bg-white">
        <div className="flex items-center gap-2">
          <GraduationCap className="w-8 h-8 text-gray-700" />
          <span className="text-xl font-semibold text-gray-900">UniSchedule</span>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center px-6 py-12">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Выберите роль</h1>
        <p className="text-gray-600 mb-12 text-center max-w-md">
          Выберите свою роль для доступа к системе учебного расписания
        </p>

        <div className="flex flex-wrap gap-6 justify-center max-w-4xl">
          {roles.map((role) => {
            const Icon = role.icon;
            return (
              <button
                key={role.id}
                onClick={() => navigate(`/login/${role.id}`)}
                className="w-72 p-6 bg-white rounded-xl border border-gray-200 shadow-sm hover:shadow-md hover:border-gray-300 transition-all text-left group"
              >
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4 group-hover:bg-gray-200 transition-colors">
                    <Icon className={`w-8 h-8 ${role.color}`} />
                  </div>
                  <h2 className="text-lg font-semibold text-gray-900 mb-2">{role.title}</h2>
                  <p className="text-sm text-gray-500 text-center mb-4">{role.description}</p>
                  <span className={`text-sm font-medium ${role.color} flex items-center gap-1`}>
                    Войти →
                  </span>
                </div>
              </button>
            );
          })}
        </div>
      </main>

      <footer className="py-4 text-center text-sm text-gray-500">
        © 2026 UniSchedule — Система учебного расписания
      </footer>
    </div>
  );
}
