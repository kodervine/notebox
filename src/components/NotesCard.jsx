import { useNoteContext } from "src/contexts";
import { BiSolidEditAlt } from "react-icons/bi";
import { AiOutlineDelete } from "react-icons/ai";
import { ConfirmationModal, NoNotesMessage } from "src/components";

export const NotesCard = () => {
  const {
    appNotes,
    searchNoteValue,
    handleSelectNote,
    setIsEditingNote,
    selectedNote,
    handleOpenFormModal,
    openConfirmationModal,
    handleOpenConfirmationModal,
    handleCloseConfirmationModal,
  } = useNoteContext();

  const filteredNotes = appNotes?.filter((note) => {
    return note.tag.toLowerCase().includes(searchNoteValue.toLowerCase());
  });
  if (filteredNotes?.length === 0) {
    return <NoNotesMessage message="No notes match this tag" />;
  }
  return (
    <>
      {openConfirmationModal && (
        <>
          <div
            className="backdrop-filter backdrop-blur-lg bg-black opacity-70 z-30 fixed top-0 left-0 w-full h-screen"
            onClick={handleCloseConfirmationModal}
          ></div>
          {selectedNote && (
            <section className="absolute z-50 w-[90%] lg:w-[80%]">
              <ConfirmationModal />
            </section>
          )}
        </>
      )}
      {filteredNotes?.map((notes, index) => {
        const { title, content, dateCreated, tag } = notes;
        const dateObject = new Date(dateCreated);
        const formattedDate = dateObject.toLocaleString("en-US", {
          day: "2-digit",
          month: "long",
          year: "numeric",
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit",
          timeZoneName: "short",
        });

        return (
          <section
            className="rounded-sm shadow-lg flex flex-col justify-between"
            key={index}
          >
            <div className="mx-6 my-4 border-b border-gray-light">
              <h2 className="font-medium text-lg mb-4">{title}</h2>
              <p className="font-normal text-sm mb-4 pb-4">
                {content.slice(0, 200)}{" "}
                <span
                  onClick={() => {
                    handleSelectNote(notes);
                    setIsEditingNote(true);
                    handleOpenFormModal();
                  }}
                  className="text-blue-600 underline cursor-pointer"
                >
                  {content?.length > 200 && ". Read more... "}
                </span>
              </p>
            </div>
            <div className="mx-6 my-4">
              <p className="font-normal text-xs italic mb-4">{formattedDate}</p>
              <div className=" flex gap-3 ">
                <button
                  className="bg-gray-900 rounded-full flex p-2 items-center justify-center cursor-pointer"
                  onClick={() => {
                    handleSelectNote(notes);
                    setIsEditingNote(true);
                    handleOpenFormModal();
                  }}
                >
                  <BiSolidEditAlt size={16} color="white" />
                </button>
                <button
                  className="bg-red-600 rounded-full flex p-2 items-center justify-center cursor-pointer"
                  onClick={() => {
                    handleSelectNote(notes);
                    handleOpenConfirmationModal();
                  }}
                >
                  <AiOutlineDelete size={16} color="white" />
                </button>
                <span className="bg-gray-100 text-gray-800 text-sm font-medium mr-2 px-2.5 py-0.5 rounded ">
                  {tag}
                </span>
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
};
