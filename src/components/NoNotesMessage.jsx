import React from "react";
import { MdSpeakerNotesOff } from "react-icons/md";

export const NoNotesMessage = ({ message }) => {
  return (
    <div className="flex flex-col items-center justify-center mt-8">
      <MdSpeakerNotesOff size={100} opacity={0.3} />
      <p className="mt-2 text-sm text-gray-500 font-bold text-center">
        {message}
      </p>
    </div>
  );
};
