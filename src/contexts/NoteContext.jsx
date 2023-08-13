import { createContext, useContext, useEffect, useState } from "react";

const AppNoteContext = createContext();

export const useNoteContext = () => {
  return useContext(AppNoteContext);
};

export const AppNoteProvider = ({ children }) => {
  const [appNotes, setAppNotes] = useState([]);
  const [IsEditingNote, setIsEditingNote] = useState(false);

  const getNotesFromLocalStorage = () => {
    const notesData = localStorage.getItem("appNotes");
    return notesData ? JSON.parse(notesData) : null;
  };

  const saveNotesToLocalStorage = (notesData) => {
    localStorage.setItem("appNotes", JSON.stringify(notesData));
  };

  const handleAddNote = (note) => {
    setAppNotes([...appNotes, note]);
    saveNotesToLocalStorage([...appNotes, note]);
  };

  const handleEditNote = (noteId, updatedNote) => {
    const updatedNoteArray = appNotes?.map((note) => {
      return note.id === noteId ? { ...note, ...updatedNote } : note;
    });
    setAppNotes(updatedNoteArray);
    saveNotesToLocalStorage(updatedNoteArray);
  };

  const handleDeleteNote = (noteId) => {
    const updatedNoteArray = appNotes?.filter((note) => {
      return note.id !== noteId;
    });
    setAppNotes(updatedNoteArray);
    saveNotesToLocalStorage(updatedNoteArray);
  };

  useEffect(() => {
    const notesDataFromLocalStorage = getNotesFromLocalStorage();
    setAppNotes(notesDataFromLocalStorage || []);
  }, []);

  return (
    <AppNoteContext.Provider
      value={{
        IsEditingNote,
        appNotes,
        handleAddNote,
        handleDeleteNote,
        handleEditNote,
      }}
    >
      {children}
    </AppNoteContext.Provider>
  );
};
