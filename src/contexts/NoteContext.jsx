import { createContext, useContext, useEffect, useState } from "react";

const AppNoteContext = createContext();

export const useNoteContext = () => {
  return useContext(AppNoteContext);
};

export const AppNoteProvider = ({ children }) => {
  const [searchNoteValue, setSearchNoteValue] = useState("");
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

  // sort and update notes functions by recency
  const sortAndUpdateNotes = (notes) => {
    const sortedNotes = notes.sort(
      (a, b) => new Date(b.dateCreated) - new Date(a.dateCreated)
    );
    setAppNotes(sortedNotes);
    saveNotesToLocalStorage(sortedNotes);
  };

  const handleAddNote = (note) => {
    const updatedNotes = [...appNotes, note];
    sortAndUpdateNotes(updatedNotes);
  };

  const handleEditNote = (noteId, updatedNote) => {
    const updatedNoteArray = appNotes?.map((note) => {
      return note.dateCreated === noteId ? { ...note, ...updatedNote } : note;
    });

    sortAndUpdateNotes(updatedNoteArray);
  };

  const handleDeleteNote = (noteId) => {
    // Filter out the note to be deleted from appNotes
    const updatedNoteArray = appNotes?.filter((note) => {
      return note.dateCreated !== noteId;
    });
    sortAndUpdateNotes(updatedNoteArray);
  };

  const handleSortAppNotes = (sortingOption) => {
    let sortedNotes = [...appNotes];
    switch (sortingOption) {
      case "newest":
        sortedNotes.sort(
          (a, b) => new Date(b.dateCreated) - new Date(a.dateCreated)
        );
        break;
      case "oldest":
        sortedNotes.sort(
          (a, b) => new Date(a.dateCreated) - new Date(b.dateCreated)
        );
        break;
      default:
        sortedNotes.sort(
          (a, b) => new Date(b.dateCreated) - new Date(a.dateCreated)
        );
        break;
    }
    setAppNotes(sortedNotes);
  };

  const handleSearchValue = (value) => {
    setSearchNoteValue(value);
  };

  useEffect(() => {
    const notesDataFromLocalStorage = getNotesFromLocalStorage();
    if (notesDataFromLocalStorage) {
      const sortedNotes = notesDataFromLocalStorage.sort(
        (a, b) => new Date(b.dateCreated) - new Date(a.dateCreated)
      );
      setAppNotes(sortedNotes);
    } else {
      setAppNotes([]);
    }
  }, []);

  return (
    <AppNoteContext.Provider
      value={{
        searchNoteValue,
        handleSearchValue,
        isEditingNote,
        setIsEditingNote,
        selectedNote,
        handleSelectNote,
        appNotes,
        handleSortAppNotes,
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
