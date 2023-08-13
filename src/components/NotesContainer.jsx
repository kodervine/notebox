import { NotesCard } from "src/components";
import { useNoteContext } from "src/contexts";
import { MdSpeakerNotesOff } from "react-icons/md";

export const NotesContainer = () => {
  const { appNotes } = useNoteContext();
  return (
    <main className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10">
      <h2 className="leading-relaxed text-lg font-bold">Your existing notes</h2>
      {appNotes.length === 0 ? (
        <div className="flex flex-col items-center justify-center mt-8">
          <MdSpeakerNotesOff size={100} opacity={0.3} />
          <p className="mt-2 text-sm text-gray-500 font-bold">
            No notes yet. Your available notes will show here when you create
            them
          </p>
        </div>
      ) : (
        <section className="grid lg:grid-cols-3 gap-4 w-full">
          <NotesCard />
        </section>
      )}
    </main>
  );
};
