import axios from 'axios';
import { Note, CreateNoteDto } from '@/types/note';

const api = axios.create({
  baseURL: 'https://notehub-public.goit.study/api',
  headers: {
    Authorization: `Bearer ${process.env.NEXT_PUBLIC_NOTEHUB_TOKEN}`,
  },
});

export const fetchNotes = async (search: string = ''): Promise<Note[]> => {
  const response = await api.get('/notes', {
    params: search ? { search } : {},
  });
  return response.data;
};

export const fetchNoteById = async (id: string): Promise<Note> => {
  const response = await api.get(`/notes/${id}`);
  return response.data;
};

export const createNote = async (noteData: CreateNoteDto): Promise<Note> => {
  const response = await api.post('/notes', noteData);
  return response.data;
};

export const deleteNote = async (id: string): Promise<Note> => {
  const response = await api.delete(`/notes/${id}`);
  return response.data;
};
