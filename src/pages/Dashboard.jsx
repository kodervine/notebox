import { Header, NotesContainer } from "src/components";

export const Dashboard = () => {
  return (
    <main className="flex flex-col px-4">
      <Header />
      <NotesContainer />
    </main>
  );
};

export default Dashboard;
