import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { ISuccessMessage } from "../../types/types";

const SuccessMessage: React.FC<ISuccessMessage> = ({ message, onClose }) => {
  return (
    <div
      className="flex items-center justify-center font-semibold bg-green-500 text-white p-2 mt-4 border-2 rounded fixed top-4 right-4"
      style={{ zIndex: 9999 }}
    >
      <span className="mr-2">{message}</span>
      <button className="text-white font-bold px-2" onClick={onClose}>
        <AiOutlineClose />
      </button>
    </div>
  );
};

export default SuccessMessage;
