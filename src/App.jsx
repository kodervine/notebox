import { useState } from "react";

import Dashboard from "./pages/Dashboard";
import { Sidebar } from "./components/Sidebar";

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
