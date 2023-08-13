import { Header, NotesContainer, NotesForm } from "src/components";

export const Dashboard = () => {
  return (
    <main className="flex flex-col px-4 w-full">
      <Header />
      <NotesForm />
      <NotesContainer />
    </main>
  );
};

export default Dashboard;
