import { FaHome } from "react-icons/fa";
import { GoGoal } from "react-icons/go";
import { MdStickyNote2 } from "react-icons/md";

const sidebarElements = [
  { name: "Dashboard", icon: FaHome, link: "/dashboard" },
  { name: "Create New Note", icon: GoGoal, link: "/new" },
];

export const Sidebar = () => {
  return (
    <main className="min-h-screen p-3  w-60 bg-gray-900 text-gray-100">
      <section className="flex items-center p-2 space-x-4">
        <MdStickyNote2 className="w-12 h-12 rounded-full dark:bg-gray-500" />
        <div>
          <h2 className="text-lg font-semibold">NoteBox</h2>
        </div>
      </section>
      <nav className="divide-y divide-gray-700">
        <ul className="pt-2 pb-4 space-y-1 text-sm">
          {sidebarElements.map((item, index) => (
            <li key={index} className="dark:bg-gray-800 dark:text-gray-50">
              <a
                rel="noopener noreferrer"
                href={item.link}
                className="flex items-center p-2 space-x-3 rounded-md text-white"
              >
                <item.icon size={16} />
                <span>{item.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </main>
  );
};
