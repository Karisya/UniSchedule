import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod/v3';
import { subjects, teachers, auditoriums, groups } from '../store/mockData';

const schema = z.object({
  subjectId: z.string().min(1, 'Выберите предмет'),
  teacherId: z.string().min(1, 'Выберите преподавателя'),
  auditoriumId: z.string().min(1, 'Выберите аудиторию'),
  groupId: z.string().min(1, 'Выберите группу'),
  type: z.enum(['lecture', 'practice', 'laboratory']),
  dayOfWeek: z.number().min(0).max(5),
  timeSlot: z.number().min(0).max(5),
  extraInfo: z.string().max(2000, 'Не более 2000 символов').optional(),
});

export type LessonFormData = z.infer<typeof schema>;

interface LessonModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: LessonFormData) => void;
  initialData?: Partial<LessonFormData>;
  conflicts?: { room: boolean; teacher: boolean };
}

export default function LessonModal({
  isOpen,
  onClose,
  onSubmit,
  initialData,
  conflicts = { room: false, teacher: false },
}: LessonModalProps) {
  const { register, handleSubmit, formState: { errors }, reset } = useForm<LessonFormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      subjectId: '',
      teacherId: '',
      auditoriumId: '',
      groupId: '',
      type: 'lecture',
      dayOfWeek: 0,
      timeSlot: 0,
      extraInfo: '',
    },
  });

  useEffect(() => {
    if (isOpen) {
      reset({
        subjectId: initialData?.subjectId ?? '',
        teacherId: initialData?.teacherId ?? '',
        auditoriumId: initialData?.auditoriumId ?? '',
        groupId: initialData?.groupId ?? '1',
        type: (initialData?.type as 'lecture' | 'practice' | 'laboratory') ?? 'lecture',
        dayOfWeek: initialData?.dayOfWeek ?? 0,
        timeSlot: initialData?.timeSlot ?? 0,
        extraInfo: initialData?.extraInfo ?? '',
      });
    }
  }, [isOpen, initialData, reset]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div className="relative bg-white rounded-xl shadow-xl max-w-md w-full mx-4 p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          {initialData ? 'Редактировать занятие' : 'Добавить занятие'}
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Предмет</label>
            <select
              {...register('subjectId')}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
            >
              <option value="">Выберите предмет</option>
              {subjects.map((s) => (
                <option key={s.id} value={s.id}>
                  {s.name}
                </option>
              ))}
            </select>
            {errors.subjectId && (
              <p className="text-red-500 text-xs mt-1">{errors.subjectId.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Преподаватель</label>
            <select
              {...register('teacherId')}
              className={`w-full border rounded-lg px-3 py-2 text-sm ${
                conflicts.teacher ? 'border-red-500 bg-red-50' : 'border-gray-300'
              }`}
            >
              <option value="">Выберите преподавателя</option>
              {teachers.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.name}
                </option>
              ))}
            </select>
            {conflicts.teacher && (
              <p className="text-red-500 text-xs mt-1">Конфликт: преподаватель уже занят</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Аудитория</label>
            <select
              {...register('auditoriumId')}
              className={`w-full border rounded-lg px-3 py-2 text-sm ${
                conflicts.room ? 'border-red-500 bg-red-50' : 'border-gray-300'
              }`}
            >
              <option value="">Выберите аудиторию</option>
              {auditoriums.map((a) => (
                <option key={a.id} value={a.id}>
                  {a.name}
                </option>
              ))}
            </select>
            {conflicts.room && (
              <p className="text-red-500 text-xs mt-1">Конфликт: аудитория занята</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Доп. информация</label>
            <textarea
              {...register('extraInfo')}
              rows={3}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm resize-y min-h-[4.5rem]"
            />
            {errors.extraInfo && (
              <p className="text-red-500 text-xs mt-1">{errors.extraInfo.message}</p>
            )}
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Группа</label>
            <select
              {...register('groupId')}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
            >
              {groups.map((g) => (
                <option key={g.id} value={g.id}>
                  {g.name}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Тип занятия</label>
            <select
              {...register('type')}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
            >
              <option value="lecture">Лекция</option>
              <option value="practice">Практика</option>
              <option value="laboratory">Лабораторная</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">День</label>
              <select
                {...register('dayOfWeek', { valueAsNumber: true })}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
              >
                {['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'].map((d, i) => (
                  <option key={i} value={i}>
                    {d}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Пара</label>
              <select
                {...register('timeSlot', { valueAsNumber: true })}
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
              >
                {[
                  '08:00-09:30',
                  '09:45-11:15',
                  '11:30-13:00',
                  '13:30-15:00',
                  '15:15-16:45',
                  '17:00-18:30',
                ].map((t, i) => (
                  <option key={i} value={i}>
                    {t}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div className="flex gap-2 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50"
            >
              Отмена
            </button>
            <button
              type="submit"
              className="flex-1 px-4 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700"
            >
              Сохранить
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
