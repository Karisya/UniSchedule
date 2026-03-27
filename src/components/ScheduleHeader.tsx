import { useNavigate } from 'react-router-dom';
import { ChevronLeft, Calendar } from 'lucide-react';

interface ScheduleHeaderProps {
  title: string;
  subtitle?: string;
  userRole: string;
  userGroup?: string;
  onPrevWeek?: () => void;
  onNextWeek?: () => void;
  onCurrentWeek?: () => void;
  showNav?: boolean;
  /** true, если на экране календарная текущая неделя */
  isCurrentWeek?: boolean;
  /** Диапазон дат просматриваемой недели (показывается в центре при листании) */
  weekRangeLabel?: string;
}

export default function ScheduleHeader({
  title,
  subtitle,
  userRole,
  userGroup,
  onPrevWeek,
  onNextWeek,
  onCurrentWeek,
  showNav = false,
  isCurrentWeek = true,
  weekRangeLabel = '',
}: ScheduleHeaderProps) {
  const navigate = useNavigate();

  return (
    <header className="bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate('/')}
            className="flex items-center gap-1 text-gray-600 hover:text-gray-900 transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
            Назад
          </button>
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-primary-100 flex items-center justify-center">
              <Calendar className="w-4 h-4 text-primary-600" />
            </div>
            <span className="text-xl font-semibold text-gray-900">UniSchedule</span>
          </div>
        </div>

        {showNav && (
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onPrevWeek}
              className="w-9 h-9 rounded-md border border-gray-300 flex items-center justify-center hover:bg-gray-50"
              aria-label="Предыдущая неделя"
            >
              ←
            </button>
            {isCurrentWeek ? (
              <span className="px-3 py-1.5 text-sm font-medium text-primary-700 bg-primary-50 rounded-md border border-primary-200 min-w-[9rem] text-center">
                Текущая неделя
              </span>
            ) : (
              <button
                type="button"
                onClick={onCurrentWeek}
                className="px-3 py-1.5 text-sm font-medium text-primary-800 bg-white rounded-md hover:bg-primary-50 border border-primary-200 max-w-[240px] truncate"
                title="Вернуться к текущей неделе"
              >
                {weekRangeLabel || '…'}
              </button>
            )}
            <button
              type="button"
              onClick={onNextWeek}
              className="w-9 h-9 rounded-md border border-gray-300 flex items-center justify-center hover:bg-gray-50"
              aria-label="Следующая неделя"
            >
              →
            </button>
          </div>
        )}

        <div className="flex items-center gap-2 text-sm text-gray-600">
          <Calendar className="w-4 h-4" />
          {userRole}
          {userGroup && ` • ${userGroup}`}
        </div>
      </div>

      <div className="mt-4">
        <h1 className="text-2xl font-bold text-gray-900">{title}</h1>
        {subtitle && <p className="text-gray-600 mt-2">{subtitle}</p>}
      </div>
    </header>
  );
}
