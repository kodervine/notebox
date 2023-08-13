import { useState } from "react";
import { MdAddTask, MdOutlineAddTask } from "react-icons/md";
import { GiCancel } from "react-icons/gi";
import { useNoteContext } from "src/contexts";

export const NotesForm = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
    dateCreated: new Date(),
    tag: "",
  });

  const { handleAddNote, appNotes } = useNoteContext();
  console.log(appNotes);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmitForm = (event) => {
    event.preventDefault();
    console.log(formData);
    handleAddNote(formData);
  };

  // Predefined tags
  const formTags = ["Work", "Personal", "Career", "Ideas", "Others"];

  return (
    <form
      onSubmit={handleSubmitForm}
      className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10"
    >
      <div className="flex items-center space-x-5">
        <div className="h-14 w-14 bg-gray-800 rounded-full flex flex-shrink-0 justify-center items-center text-white text-2xl ">
          <MdAddTask />
        </div>
        <div className="block pl-2 font-semibold text-xl self-start text-gray-700">
          <h2 className="leading-relaxed">Add a New Note</h2>
          <p className="text-sm text-gray-500 ">Get work done</p>
        </div>
      </div>

      <div className=" space-y-4 text-gray-700 sm:text-lg">
        <div className="flex flex-col">
          <label>Title</label>
          <input
            type="text"
            className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
            placeholder="Note title"
            name="title"
            value={formData.title}
            onChange={handleInputChange}
          />
        </div>
        <div className="flex flex-col">
          <label className="leading-loose">Note Description</label>
          <input
            type="text"
            className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600 min-h-40 "
            placeholder="What do you want to write about?"
            name="description"
            value={formData.description}
            onChange={handleInputChange}
          />
        </div>
        <section className="flex items-center space-x-4">
          <div className="flex flex-col">
            <label htmlFor="tag">Tag</label>
            <div className="flex focus-within:text-gray-600 text-gray-400 items-center">
              <select
                name="tag"
                value={formData.tag}
                onChange={handleInputChange}
                className="px-4 py-2 pl-4 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
              >
                <option value="">Choose tag</option>
                {formTags.map((tag) => (
                  <option key={tag} value={tag}>
                    {tag}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="tag">Select custom tag</label>
            <div className="relative focus-within:text-gray-600 text-gray-400">
              <input
                type="text"
                name="tag"
                placeholder="Enter custom tag"
                className="px-4 py-2 border focus:ring-gray-500 focus:border-gray-900 w-full sm:text-sm border-gray-300 rounded-md focus:outline-none text-gray-600"
                value={formData.tag}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </section>
      </div>
      <div className="pt-4 flex items-center space-x-4">
        <button className="flex gap-2 justify-center items-center w-full px-4 py-3 rounded-md opacity-90 hover:opacity-100 focus:outline-none bg-red-600 text-white">
          <GiCancel />
          <span>Cancel</span>
        </button>
        <button
          type="submit"
          className="bg-gray-800 gap-2 flex opacity-90 hover:opacity-100 justify-center items-center w-full text-white px-4 py-3 rounded-md focus:outline-none"
        >
          <MdOutlineAddTask />
          Create
        </button>
      </div>
    </form>
  );
};
