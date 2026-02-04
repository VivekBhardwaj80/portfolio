import { useState } from "react";
import { IoChatbubblesOutline, IoClose } from "react-icons/io5";
import FeedbackForm from "./FeedbackForm";

type PublicLayoutProps = {
  darkMode: boolean;
};

const Feedback = ({ darkMode }: PublicLayoutProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <>
      {!isOpen && (
        <button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 z-50 bg-linear-to-r from-[#1f88e5] to-[#26c6da]  text-white p-4 rounded-full shadow-lg transition-all cursor-pointer"
        >
          <IoChatbubblesOutline size={24} />
        </button>
      )}
      {isOpen && (
        <div className="fixed inset-0 z-150 flex items-center justify-center bg-black/50">
          <div
            className={` ${darkMode ? "bg-linear-to-br from-gray-900 via-[#0d182e] to-gray-900" : "bg-linear-to-br from-blue-100 to-cyan-500"} max-w-screen rounded-lg shadow-lg p-6 sm:p-0 relative`}
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-5 right-2 text-gray-500 hover:text-gray-800 dark:hover:text-white cursor-pointer"
            >
              <IoClose size={28} />
            </button>
            <FeedbackForm darkMode={darkMode} />
          </div>
        </div>
      )}
    </>
  );
};

export default Feedback;
