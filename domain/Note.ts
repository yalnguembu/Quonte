import type { NoteDTO, TagDTO } from "@/services";
import { Tag } from "./Tag";

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

  set title(title: string) {
    this.note.title = title;
  }

  get content() {
    return this.note.content ?? "";
  }

  set content(content: string) {
    this.note.content = content;
  }

  get creationDate() {
    return this.note.creationDate ?? "";
  }

  get tags() {
    return (this.note.tags ?? []).map((tag) => new Tag(tag));
  }

  set tags(tags: TagDTO[]) {
    this.note.tags = tags;
  }

  get baseNote(): NoteDTO {
    return this.note;
  }
}
export const newNullNote = () => {
  const note = new Note({} as NoteDTO);
  note.isNull = true;
  return note;
};
