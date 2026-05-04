/** Совместимо с вкладкой «Нагрузка» в handbook (импорт через departmentHandbook). */
export interface TeacherDisciplineLoad {
  teacherId: string;
  discipline: string;
  specialization?: string;
  hours?: number;
  note?: string;
}
