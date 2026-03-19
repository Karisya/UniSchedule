import { Trash2 } from 'lucide-react';

interface DeleteModalProps {
  isOpen: boolean;
  subjectName: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export default function DeleteModal({ isOpen, subjectName, onConfirm, onCancel }: DeleteModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onCancel} />
      <div className="relative bg-white rounded-xl shadow-xl max-w-md w-full mx-4 p-6 text-center">
        <div className="w-14 h-14 rounded-full bg-red-100 flex items-center justify-center mx-auto mb-4">
          <Trash2 className="w-7 h-7 text-red-600" />
        </div>
        <h2 className="text-xl font-semibold text-gray-900 mb-2">Удалить занятие?</h2>
        <p className="text-gray-600 mb-6">
          Вы уверены, что хотите удалить занятие &quot;{subjectName}&quot;? Это действие нельзя отменить.
        </p>
        <div className="flex gap-3">
          <button
            onClick={onCancel}
            className="flex-1 py-2.5 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 font-medium"
          >
            Отмена
          </button>
          <button
            onClick={onConfirm}
            className="flex-1 py-2.5 bg-red-600 text-white rounded-lg hover:bg-red-700 font-medium"
          >
            Удалить
          </button>
        </div>
      </div>
    </div>
  );
}
