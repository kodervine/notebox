import { Dashboard } from "src/pages";
import { Navbar, Sidebar } from "src/components";

function App() {
  return (
    <main className="flex ">
      <aside>
        <Sidebar />
      </aside>
      <section className="w-full lg:ml-60">
        <nav className="lg:hidden w-full">
          <Navbar />
        </nav>
        <Dashboard />
      </section>
    </main>
  );
}

export default App;
