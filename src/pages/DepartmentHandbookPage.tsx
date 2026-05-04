import { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Building2, BookMarked, FileText } from 'lucide-react';
import {
  DATA_SOURCES,
  DEPARTMENT_NAME,
  DISCIPLINE_LOAD,
  FACULTY_NAME,
  SCHEDULE_LEGEND,
  catalogPlanForHandbook,
} from '../data/departmentHandbook';
import {
  PDF_EXTRACT_GRAPHIC_SPRING2026,
  PDF_EXTRACT_LOAD_OCT2025,
} from '../data/pdfExtracts';
import { teachers } from '../store/mockData';

type TabKey = 'legend' | 'catalog' | 'load' | 'rawLoad' | 'rawGraphic';

export default function DepartmentHandbookPage() {
  const [tab, setTab] = useState<TabKey>('legend');

  const teacherLabel = (id: string) => {
    const t = teachers.find((x) => x.id === id);
    if (!t) return id;
    return t.fullNameOfficial ? `${t.name} (${t.fullNameOfficial})` : t.name;
  };

  const catalogRows = useMemo(() => catalogPlanForHandbook(), []);

  const tabBtn = (k: TabKey, label: string) => (
    <button
      key={k}
      type="button"
      onClick={() => setTab(k)}
      className={`rounded-lg px-3 py-2 text-sm font-medium transition-colors ${
        tab === k
          ? 'bg-indigo-600 text-white'
          : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
      }`}
    >
      {label}
    </button>
  );

  const preWrap = (text: string) => (
    <pre className="text-[11px] sm:text-xs font-mono leading-relaxed whitespace-pre-wrap break-words max-h-[70vh] overflow-auto p-4 bg-gray-50 rounded-lg border border-gray-200 text-gray-800">
      {text}
    </pre>
  );

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <header className="px-6 py-4 border-b border-gray-200 flex items-center gap-4">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-gray-900 text-sm font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          На главную
        </Link>
      </header>

      <main className="flex-1 max-w-6xl mx-auto px-6 py-10 w-full">
        <div className="flex items-start gap-3 mb-8">
          <div className="p-3 rounded-xl bg-indigo-50 text-indigo-700">
            <Building2 className="w-8 h-8" />
          </div>
          <div>
            <p className="text-sm uppercase tracking-wide text-gray-500 font-medium">{FACULTY_NAME}</p>
            <h1 className="text-2xl font-bold text-gray-900 mt-1">{DEPARTMENT_NAME}</h1>
            <p className="text-sm text-gray-600 mt-2">{DATA_SOURCES}</p>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-8">
          {tabBtn('legend', 'Обозначения')}
          {tabBtn('catalog', 'Каталог часов')}
          {tabBtn('load', 'Нагрузка по таблице')}
          {tabBtn('rawLoad', 'Полный текст: нагрузка')}
          {tabBtn('rawGraphic', 'Полный текст: график')}
        </div>

        {tab === 'legend' && (
          <section>
            <div className="flex items-center gap-2 mb-4">
              <BookMarked className="w-5 h-5 text-gray-700" />
              <h2 className="text-lg font-semibold text-gray-900">Обозначения и аббревиатуры из графика</h2>
            </div>
            <div className="rounded-lg border border-gray-200 overflow-hidden">
              <table className="w-full text-sm">
                <thead className="bg-gray-50 text-left text-gray-600">
                  <tr>
                    <th className="px-4 py-2 font-medium">Код / сокращение</th>
                    <th className="px-4 py-2 font-medium">Значение</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {SCHEDULE_LEGEND.map((row) => (
                    <tr key={row.code} className="bg-white hover:bg-gray-50/80">
                      <td className="px-4 py-2 font-mono text-xs sm:text-sm text-indigo-800">{row.code}</td>
                      <td className="px-4 py-2 text-gray-800">{row.meaning}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {tab === 'catalog' && (
          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">Строки общего каталога (часы без ФИО в колонках)</h2>
            <div className="rounded-lg border border-gray-200 overflow-x-auto">
              <table className="w-full text-sm min-w-[640px]">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-4 py-3 text-left">Дисциплина (фрагмент)</th>
                    <th className="px-4 py-3 text-left">Профиль / пояснение</th>
                    <th className="px-4 py-3 text-right">Часы (план)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {catalogRows.map((r, i) => (
                    <tr key={i} className="hover:bg-gray-50/90">
                      <td className="px-4 py-3">{r.discipline}</td>
                      <td className="px-4 py-3 text-gray-600">{r.specialization}</td>
                      <td className="px-4 py-3 tabular-nums text-right">{r.hours ?? '—'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {tab === 'load' && (
          <section>
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Разбор по преподавателям и дисциплинам из плана
            </h2>
            <p className="text-sm text-gray-600 mb-4">
              Ниже строки восстановлены по машинному тексту документа; при противоречиях ориентируйтесь на полную расшифровку PDF во
              вкладке «PDF нагрузка».
            </p>
            <div className="rounded-lg border border-gray-200 overflow-x-auto shadow-sm">
              <table className="w-full text-sm min-w-[640px]">
                <thead className="bg-gray-50 text-left text-gray-600">
                  <tr>
                    <th className="px-4 py-3 font-medium">Исполнитель (как в приложении)</th>
                    <th className="px-4 py-3 font-medium">Дисциплина / блок работ</th>
                    <th className="px-4 py-3 font-medium">Профиль / код подраздела</th>
                    <th className="px-4 py-3 whitespace-nowrap">Часы</th>
                    <th className="px-4 py-3 font-medium">Примечание</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {DISCIPLINE_LOAD.map((row, i) => (
                    <tr key={`${row.teacherId}-${i}`} className="bg-white hover:bg-gray-50/80">
                      <td className="px-4 py-3">{teacherLabel(row.teacherId)}</td>
                      <td className="px-4 py-3 text-gray-800">{row.discipline}</td>
                      <td className="px-4 py-3 text-gray-600">{row.specialization ?? '—'}</td>
                      <td className="px-4 py-3 tabular-nums">{row.hours !== undefined ? row.hours : '—'}</td>
                      <td className="px-4 py-3 text-gray-500 text-xs max-w-[220px]">{row.note ?? '—'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        )}

        {tab === 'rawLoad' && (
          <section>
            <div className="flex items-center gap-2 mb-4">
              <FileText className="w-5 h-5" />
              <h2 className="text-lg font-semibold text-gray-900">Полный текст «Нагрузка 2025–2026 (30.10.2025)»</h2>
            </div>
            <p className="text-xs text-gray-500 mb-2">Извлечение PyMuPDF, UTF-8. Набор столбцов возможен только в текстовом порядке.</p>
            {preWrap(PDF_EXTRACT_LOAD_OCT2025)}
          </section>
        )}

        {tab === 'rawGraphic' && (
          <section>
            <div className="flex items-center gap-2 mb-4">
              <FileText className="w-5 h-5" />
              <h2 className="text-lg font-semibold text-gray-900">Полный текст «График работы весна 2026»</h2>
            </div>
            <p className="text-xs text-gray-500 mb-2">
              В тексте таблицы ячейки часто следуют в вертикальном порядке — используйте вместе с PDF-просмотрщиком.
            </p>
            {preWrap(PDF_EXTRACT_GRAPHIC_SPRING2026)}
          </section>
        )}
      </main>

      <footer className="py-6 text-center text-sm text-gray-500 border-t border-gray-100">
        UniSchedule · текстовые выдержки зашиты в сборке из `src/data/pdf/*.txt`.
      </footer>
    </div>
  );
}
