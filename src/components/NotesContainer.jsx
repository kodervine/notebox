import { NotesCard } from "src/components";

export const NotesContainer = () => {
  return (
    <>
      <h2> NotesCard</h2>
      <main className="grid grid-cols-3 gap-4 w-full">
        <NotesCard />
      </main>
    </>
  );
};
