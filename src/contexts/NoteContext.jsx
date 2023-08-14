import { createContext, useContext, useEffect, useState } from "react";

const AppNoteContext = createContext();

export const useNoteContext = () => {
  return useContext(AppNoteContext);
};

export const AppNoteProvider = ({ children }) => {
  const [appNotes, setAppNotes] = useState([]);
  const [isEditingNote, setIsEditingNote] = useState(false);
  const [selectedNote, setSelectedNote] = useState(null);
  const [openNotesFormModal, setOpenNotesFormModal] = useState(false);
  const [openConfirmationModal, setOpenConfirmationModal] = useState(false);
  const handleCloseFormModal = () => {
    setOpenNotesFormModal(false);
  };
  const handleOpenFormModal = () => {
    setOpenNotesFormModal(true);
  };

  const handleOpenConfirmationModal = () => {
    setOpenConfirmationModal(true);
  };

  const handleCloseConfirmationModal = () => {
    setOpenConfirmationModal(false);
  };

  const handleSelectNote = (note) => {
    setSelectedNote(note);
  };

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

  // used the time note was created for the id
  const handleEditNote = (noteId, updatedNote) => {
    const updatedNoteArray = appNotes?.map((note) => {
      return note.dateCreated === noteId ? { ...note, ...updatedNote } : note;
    });
    setAppNotes(updatedNoteArray);
    saveNotesToLocalStorage(updatedNoteArray);
  };

  const handleDeleteNote = (noteId) => {
    const updatedNoteArray = appNotes?.filter((note) => {
      return note.dateCreated !== noteId;
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
        isEditingNote,
        setIsEditingNote,
        selectedNote,
        handleSelectNote,
        appNotes,
        handleAddNote,
        handleDeleteNote,
        handleEditNote,
        openNotesFormModal,
        handleCloseFormModal,
        handleOpenFormModal,
        openConfirmationModal,
        handleOpenConfirmationModal,
        handleCloseConfirmationModal,
      }}
    >
      {children}
    </AppNoteContext.Provider>
  );
};
