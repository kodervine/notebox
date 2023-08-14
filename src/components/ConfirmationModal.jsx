import React from "react";
import { PiWarningCircleBold } from "react-icons/pi";
import { useNoteContext } from "src/contexts";
export const ConfirmationModal = () => {
  const { selectedNote, handleDeleteNote, handleCloseConfirmationModal } =
    useNoteContext();
  return (
    <>
      <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
        <div className="p-6 text-center">
          <div className="flex flex-col items-center justify-center mt-8">
            <PiWarningCircleBold size={100} opacity={0.3} />
          </div>
          <h3 className="mb-5 text-lg font-normal text-gray-500 dark:text-gray-400">
            Are you sure you want to delete this note?
          </h3>
          <button
            type="button"
            className="text-white opacity-90 hover:opacity-100 bg-red-600 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm inline-flex items-center px-5 py-2.5 text-center mr-2"
            onClick={() => {
              handleDeleteNote(selectedNote.dateCreated);
              handleCloseConfirmationModal();
            }}
          >
            Yes, I'm sure
          </button>
          <button
            type="button"
            className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-40"
            onClick={handleCloseConfirmationModal}
          >
            No, cancel
          </button>
        </div>
      </div>
    </>
  );
};
