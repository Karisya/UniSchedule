# UniSchedule — Система учебного расписания

Веб-приложение для создания и редактирования расписания учебного заведения на React, Vite, Tailwind CSS, Redux Toolkit и React Hook Form.

## Технологии

- **React 19** + **TypeScript**
- **Vite** — сборка
- **Tailwind CSS** — стилизация
- **Redux Toolkit** — состояние
- **React Hook Form** + **Zod** — формы и валидация
- **React Router** — маршрутизация
- **@dnd-kit** — drag-and-drop
- **Lucide React** — иконки

## Структура проекта

```
src/
├── components/         # UI-компоненты
│   ├── DroppableCell.tsx
│   ├── DraggableLessonCard.tsx
│   ├── Layout.tsx
│   ├── LessonCard.tsx
│   ├── LessonModal.tsx
│   └── ScheduleHeader.tsx
├── pages/              # Страницы
│   ├── AdminSchedule.tsx
│   ├── HomePage.tsx
│   ├── StudentSchedule.tsx
│   └── TeacherSchedule.tsx
├── store/              # Redux
│   ├── hooks.ts
│   ├── index.ts
│   ├── mockData.ts
│   ├── scheduleSlice.ts
│   └── userSlice.ts
├── types/
│   └── index.ts
├── utils/
│   └── scheduleUtils.ts
├── App.tsx
├── index.css
└── main.tsx
```

## Роли и функционал

### Студент
- Просмотр расписания на неделю
- Группа определяется по учётной записи (ИВТ-201)
- Фильтр по типу занятия (лекция, практика, лабораторная)
- Выделение текущего дня

### Преподаватель
- Расписание по всем группам
- Фильтр по группе и типу занятия
- Прогресс ведения курсов (%)
- Всплывающая подсказка с деталями занятия

### Администратор
- Добавление, редактирование (двойной клик) и удаление занятий
- Drag-and-drop для перемещения занятий
- Модальное окно для создания/редактирования
- Прогресс заполненности расписания
- Проверка конфликтов (аудитория, преподаватель)

## Запуск

```bash
npm install
npm run dev
```

Приложение будет доступно по адресу `http://localhost:5173`

## Сборка

```bash
npm run build
```

## Команды

- `npm run dev` — режим разработки
- `npm run build` — production-сборка
- `npm run preview` — просмотр собранного приложения
