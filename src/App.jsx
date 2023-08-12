import { useState } from "react";
import { Dashboard } from "src/pages";
import { Sidebar } from "src/components";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main className="flex">
      <aside className="hidden lg:block">
        <Sidebar />
      </aside>

      <Dashboard />
    </main>
  );
}

export default App;
