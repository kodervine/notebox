import { useState } from "react";
import { Dashboard } from "src/pages";
import { Navbar, Sidebar } from "src/components";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="flex">
      <aside className="hidden lg:block">
        <Sidebar />
      </aside>
      <section>
        <nav className="lg:hidden">
          <Navbar />
        </nav>
        <Dashboard />
      </section>
    </main>
  );
}

export default App;
