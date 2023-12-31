import { useNoteContext } from "src/contexts";
import { CgNotes } from "react-icons/cg";
export const TopCard = () => {
  const { appNotes } = useNoteContext();

  return (
    <section className="grid grid-cols-1 items-center justify-between my-2">
      <div className="flex items-center p-8 bg-white shadow rounded-lg dark:bg-gray-800 dark:text-gray-100">
        <div className="inline-flex  items-center justify-center h-16 w-16 text-yellow-900 bg-yellow-100 rounded-full mr-6">
          <CgNotes size={30} />
        </div>
        <div>
          <span className="block text-2xl font-bold dark:bg-gray-800 dark:text-gray-100">
            {appNotes?.length}
          </span>
          <span className="block text-gray-500 dark:bg-gray-800 dark:text-gray-100">
            {appNotes?.length <= 1 ? "Total Note" : "Total Notes"}
          </span>
        </div>
      </div>
    </section>
  );
};
