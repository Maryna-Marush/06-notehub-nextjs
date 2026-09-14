export interface Note {
  id: string;
  title: string;
  content: string;
  tag: string;
  createdAt: string;
}

export interface CreateNoteDto {
  title: string;
  content: string;
  tag: string;
}

export type NewNote = CreateNoteDto;
export type NoteTag = string;
