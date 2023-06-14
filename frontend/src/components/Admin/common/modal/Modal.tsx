import React from "react";
import { AiOutlineClose } from "react-icons/ai";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: () => void;
  isAdd: boolean;
  isEdit: boolean;
  isDelete: boolean;
  title: string;
  content: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  onSave,
  isAdd,
  isEdit,
  isDelete,
  title,
  content,
}) => {
  if (!isOpen) {
    return null;
  }

  const buttonLabel = isEdit
    ? "Update"
    : isDelete
    ? "Delete"
    : isAdd
    ? "Add"
    : null;

  const modalStyle = {
    backgroundColor: "#f9fafb",
  };

  const buttonStyle = {
    backgroundColor: isDelete
      ? "#DC2626"
      : modalStyle.backgroundColor === "#f9fafb"
      ? "#10B981"
      : "#2B6CB0",
  };

  const handleSave = () => {
    onSave();
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-10 bg-gray-800 bg-opacity-75">
      <div
        className="bg-gray-100 w-1/2 rounded-lg shadow-lg p-6"
        style={modalStyle}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold">{title}</h2>
          <button
            className="text-gray-500 hover:text-gray-700"
            onClick={onClose}
          >
            <AiOutlineClose className="mr-2" />
          </button>
        </div>
        {content}

        <div className="flex justify-end mt-4">
          <button
            className="px-4 py-2 text-white rounded hover:bg-green-600"
            type="submit"
            style={buttonStyle}
            onClick={handleSave}
          >
            {buttonLabel}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
