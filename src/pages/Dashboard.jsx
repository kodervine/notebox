import {
  ConfirmationModal,
  Header,
  NotesContainer,
  NotesForm,
  TopCard,
} from "src/components";
import { useNoteContext } from "src/contexts";

export const Dashboard = () => {
  const { openNotesFormModal, handleCloseFormModal } = useNoteContext();
  return (
    <main className="flex flex-col px-4 w-full relative">
      <div className="flex flex-col lg:flex-row">
        <Header />
        <TopCard />
      </div>
      <ConfirmationModal />
      {openNotesFormModal && (
        <>
          <div
            className="backdrop-filter backdrop-blur-lg bg-black opacity-70 z-20  fixed top-0 left-0 w-full h-full"
            onClick={handleCloseFormModal}
          ></div>
          <section className="absolute z-50 w-full lg:w-[80%]">
            <NotesForm />
          </section>
        </>
      )}
      <NotesContainer />
    </main>
  );
};
