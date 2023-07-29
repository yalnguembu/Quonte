import { Note, newNullNote } from "@/domain/Note";
import { NoteService, type NoteDTO } from "@/services";
import { ApiError } from "@/utils/error";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useNoteStore = defineStore("note", () => {
  const note = ref<Note>(newNullNote());

  const getAllNotes = async (): Promise<Note[]> => {
    try {
      return (await NoteService.getAllNotes()).map((note) => new Note(note));
    } catch (error: Error | any) {
      throw new ApiError(error);
    }
  };

  const getNoteById = async (id: string): Promise<Note> => {
    try {
      return new Note(await NoteService.getNoteById({ id }));
    } catch (error: Error | any) {
      throw new ApiError(error);
    }
  };

  const getNotesByUserId = async (id: string): Promise<Note[]> => {
    let notes: NoteDTO[] = [];
    try {
      notes = await NoteService.getNoteByOwnerId({ id });
      return notes.map((note) => new Note(note));
    } catch (error: Error | any) {
      throw new ApiError(error);
    }
  };

  const createNote = async (note: Note): Promise<Note> => {
    try {
      return new Note(await NoteService.createNote({ requestBody: note }));
    } catch (error: Error | any) {
      throw new ApiError(error);
    }
  };

  return {
    note,
    getAllNotes,
    getNotesByUserId,
    createNote,
    getNoteById,
  };
});
