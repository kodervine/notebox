import { GiHamburgerMenu } from "react-icons/gi";
import NoteLogo from "src/assets/Notes-amico.svg";
export const Navbar = () => {
  return (
    <nav className="bg-white border-gray-200">
      <div className="flex items-center justify-between mx-auto p-4">
        <a href="/" className="flex gap-2">
          <img
            src={NoteLogo}
            className="w-12 h-12 rounded-full dark:bg-gray-500"
          />
          <span className="self-center text-2xl font-semibold whitespace-nowrap ">
            NoteBox
          </span>
        </a>

        <button
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
        >
          <GiHamburgerMenu />
        </button>
      </div>
    </nav>
  );
};
