import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod/v3';
import { subjects, teachers, auditoriums } from '../store/mockData';
import type { Group } from '../types';

const schema = z.object({
  subjectId: z.string().min(1, 'Выберите предмет'),
  teacherId: z.string().min(1, 'Выберите преподавателя'),
  auditoriumId: z.string().min(1, 'Выберите аудиторию'),
  groupIds: z.array(z.string()).min(1, 'Выберите хотя бы одну группу'),
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
  /** Группы того же курса, что выбран в фильтре админки */
  availableGroups: Group[];
  /** При создании — несколько групп; при редактировании — одна */
  allowMultipleGroups: boolean;
}

export default function LessonModal({
  isOpen,
  onClose,
  onSubmit,
  initialData,
  conflicts = { room: false, teacher: false },
  availableGroups,
  allowMultipleGroups,
}: LessonModalProps) {
  const { register, handleSubmit, formState: { errors }, reset, watch, setValue, getValues } =
    useForm<LessonFormData>({
      resolver: zodResolver(schema),
      defaultValues: {
        subjectId: '',
        teacherId: '',
        auditoriumId: '',
        groupIds: [],
        type: 'lecture',
        dayOfWeek: 0,
        timeSlot: 0,
        extraInfo: '',
      },
    });

  const selectedGroupIds = watch('groupIds');

  useEffect(() => {
    if (isOpen) {
      const defaultGroupIds =
        initialData?.groupIds && initialData.groupIds.length > 0
          ? initialData.groupIds
          : availableGroups[0]
            ? [availableGroups[0].id]
            : [];
      reset({
        subjectId: initialData?.subjectId ?? '',
        teacherId: initialData?.teacherId ?? '',
        auditoriumId: initialData?.auditoriumId ?? '',
        groupIds: defaultGroupIds,
        type: (initialData?.type as 'lecture' | 'practice' | 'laboratory') ?? 'lecture',
        dayOfWeek: initialData?.dayOfWeek ?? 0,
        timeSlot: initialData?.timeSlot ?? 0,
        extraInfo: initialData?.extraInfo ?? '',
      });
    }
  }, [isOpen, initialData, reset, availableGroups]);

  const toggleGroupId = (id: string, checked: boolean) => {
    const cur = getValues('groupIds');
    if (checked) {
      if (!cur.includes(id)) setValue('groupIds', [...cur, id], { shouldValidate: true });
    } else {
      setValue(
        'groupIds',
        cur.filter((g) => g !== id),
        { shouldValidate: true },
      );
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50" onClick={onClose} />
      <div
        className={`relative bg-white rounded-xl shadow-xl w-full mx-4 p-6 ${
          allowMultipleGroups ? 'max-w-lg' : 'max-w-md'
        }`}
      >
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          {allowMultipleGroups ? 'Добавить занятие' : 'Редактировать занятие'}
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

          {allowMultipleGroups ? (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Применить к нескольким группам
              </label>
              <p className="text-xs text-gray-500 mb-2 leading-snug">
                Одинаковое занятие будет создано для каждой отмеченной группы курса — без повторного ввода
                предмета, преподавателя и времени.
              </p>
              <div className="max-h-40 overflow-y-auto rounded-lg border border-gray-200 p-2 space-y-1.5">
                {availableGroups.length === 0 ? (
                  <p className="text-sm text-gray-500">Нет групп для выбранного курса</p>
                ) : (
                  availableGroups.map((g) => (
                    <label
                      key={g.id}
                      className="flex items-center gap-2 text-sm cursor-pointer hover:bg-gray-50 rounded px-2 py-1"
                    >
                      <input
                        type="checkbox"
                        checked={selectedGroupIds.includes(g.id)}
                        onChange={(e) => toggleGroupId(g.id, e.target.checked)}
                        className="rounded border-gray-300"
                      />
                      <span>
                        {g.name}{' '}
                        <span className="text-gray-500">({g.course} курс)</span>
                      </span>
                    </label>
                  ))
                )}
              </div>
              {errors.groupIds && (
                <p className="text-red-500 text-xs mt-1">{errors.groupIds.message}</p>
              )}
            </div>
          ) : (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Группа</label>
              <select
                value={selectedGroupIds[0] ?? ''}
                onChange={(e) =>
                  setValue('groupIds', e.target.value ? [e.target.value] : [], { shouldValidate: true })
                }
                className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm"
              >
                {availableGroups.map((g) => (
                  <option key={g.id} value={g.id}>
                    {g.name} ({g.course} курс)
                  </option>
                ))}
              </select>
              {errors.groupIds && (
                <p className="text-red-500 text-xs mt-1">{errors.groupIds.message}</p>
              )}
            </div>
          )}

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
