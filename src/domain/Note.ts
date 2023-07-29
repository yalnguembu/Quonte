import type { NoteDTO } from "@/services";

export class Note {
  private readonly note: NoteDTO;
  isNull = true;

  constructor(data: NoteDTO) {
    this.note = data;
    this.isNull = false;
  }

  get id() {
    return this.note.id;
  }

  get title() {
    return this.note.title;
  }

  get content() {
    return this.note.content ?? "";
  }

  get creationDate() {
    return this.note.creationDate ?? "";
  }

  get tags() {
    return this.note.tags;
  }
}
export const newNullNote = () => {
  const note = new Note({} as NoteDTO);
  note.isNull = true;
  return note;
};
