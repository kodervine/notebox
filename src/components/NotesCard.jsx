import { useNoteContext } from "src/contexts";
import { BiSolidEditAlt } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";

export const NotesCard = () => {
  const { appNotes } = useNoteContext();
  return appNotes?.map((notes, index) => {
    const { title, description, dateCreated, tag } = notes;
    return (
      <section className="rounded-sm shadow-lg " key={index}>
        <div className="mx-6 my-4 border-b border-gray-light">
          <h2 className="font-medium text-base  mb-4">{title}</h2>
          <p className="font-normal text-sm mb-2">
            Lorem ipsum dolor sit amet, consectetur
          </p>
          <p className="font-normal text-sm mb-4">{description}</p>
        </div>
        <div className="mx-6 my-4 flex gap-3">
          <div className="bg-gray-900 rounded-full flex p-2 items-center justify-center">
            <BiSolidEditAlt size={16} color="white" />
          </div>
          <div className="bg-red-600 rounded-full flex p-2 items-center justify-center">
            <AiOutlineDelete size={16} color="white" />
          </div>
        </div>
      </section>
    );
  });
};
