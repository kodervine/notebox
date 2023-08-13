import { useNoteContext } from "src/contexts";

export const TopCard = () => {
  const { appNotes } = useNoteContext();
  return <div>{appNotes?.length}</div>;
};
