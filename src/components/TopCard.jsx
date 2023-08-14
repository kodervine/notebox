import { useNoteContext } from "src/contexts";
import { TbNewSection } from "react-icons/tb";
export const TopCard = () => {
  const { appNotes, handleOpenFormModal, setIsEditingNote } = useNoteContext();

  return (
    <div>
      <section className="flex">
        <div>
          Total No of Notes: <span>{appNotes?.length}</span>
        </div>
        <button
          type="button"
          className="text-white  bg-gray-700 hover:bg-gray-800 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-4 py-2 flex gap-2 items-center"
          onClick={() => {
            setIsEditingNote(false);
            handleOpenFormModal();
          }}
        >
          <TbNewSection className="text-white" />
          <span>Create New Note</span>
        </button>
      </section>
    </div>
  );
};
