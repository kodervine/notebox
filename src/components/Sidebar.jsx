import { FaHome, FaHeart, FaCog, FaSignOutAlt } from "react-icons/fa";
import { GoGoal } from "react-icons/go";
import { GiStumpRegrowth } from "react-icons/gi";
import { PiStepsDuotone } from "react-icons/pi";
import { BsJournals } from "react-icons/bs";

const sidebarElements = [
  { name: "Home", icon: FaHome, link: "/dashboard" },
  { name: "Goal Setting", icon: GoGoal, link: "/goalsetting" },
  { name: "Habit Tracker", icon: PiStepsDuotone, link: "/habittracker" },
  { name: "Journal", icon: BsJournals, link: "/journal" },
  { name: "Vision Board", icon: GiStumpRegrowth, link: "/visionboard" },
  { name: "Future Letters", icon: FaHeart, link: "#" },
];

const userSettings = [
  { name: "Settings", icon: FaCog, link: "/settings" },
  { name: "Logout", icon: FaSignOutAlt, link: "#" },
];

// inspo - https://mambaui.com/components/sidebar
export const Sidebar = () => {
  return (
    <main className="h-screen p-3 space-y-2 w-60 bg-gray-900 text-gray-100">
      <section className="flex items-center p-2 space-x-4">
        <Image
          src="https://source.unsplash.com/100x100/?portrait"
          alt=""
          className="w-12 h-12 rounded-full dark:bg-gray-500"
        />
        <div>
          <h2 className="text-lg font-semibold">Chinenye A.</h2>
          <span className="flex items-center space-x-1">link</span>
        </div>
      </section>
      <nav className="divide-y divide-gray-700">
        <ul className="pt-2 pb-4 space-y-1 text-sm">
          {sidebarElements.map((item, index) => (
            <li key={index} className="dark:bg-gray-800 dark:text-gray-50">
              <Link
                rel="noopener noreferrer"
                href={item.link}
                className="flex items-center p-2 space-x-3 rounded-md"
              >
                <item.icon size={16} />
                <span>{item.name}</span>
              </Link>
            </li>
          ))}
        </ul>
        <ul className="pt-4 pb-2 space-y-1 text-sm">
          {userSettings.map((item, index) => (
            <li key={index}>
              <a
                rel="noopener noreferrer"
                href={item.link}
                className="flex items-center p-2 space-x-3 rounded-md"
              >
                <item.icon />
                <span>{item.name}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </main>
  );
};
