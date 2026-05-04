import { useEffect, useState } from 'react';

/**
 * Подсветка занятия и прокрутка к ячейке с `data-schedule-lesson-slot={id}` (после смены недели ждём layout).
 */
export function useScheduleLessonFlash() {
  const [flashLessonId, setFlashLessonId] = useState<string | null>(null);

  useEffect(() => {
    if (!flashLessonId) return;

    const scroll = window.setTimeout(() => {
      const el = document.querySelector(`[data-schedule-lesson-slot="${flashLessonId.replace(/"/g, '')}"]`);
      el?.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'nearest' });
    }, 320);

    const hide = window.setTimeout(() => {
      setFlashLessonId(null);
    }, 4200);

    return () => {
      window.clearTimeout(scroll);
      window.clearTimeout(hide);
    };
  }, [flashLessonId]);

  return { flashLessonId, setFlashLessonId };
}
