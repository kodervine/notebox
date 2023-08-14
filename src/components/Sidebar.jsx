import { FaHome } from "react-icons/fa";
import NoteLogo from "src/assets/Notes-amico.svg";

const sidebarElements = [{ name: "Dashboard", icon: FaHome, link: "/" }];

export const Sidebar = () => {
  return (
    <main className="hidden lg:block fixed h-full p-3  w-60 bg-gray-900 text-gray-100">
      <section className="flex items-center p-2 space-x-4">
        <img
          src={NoteLogo}
          className="w-12 h-12 rounded-full dark:bg-gray-500"
        />

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
