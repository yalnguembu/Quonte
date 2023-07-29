import type { TagDTO } from "@/services";

export class Tag {
  private readonly tag: TagDTO;
  isNull = true;

  constructor(data: TagDTO) {
    this.tag = data;
    this.isNull = false;
  }

  get id() {
    return this.tag.id;
  }

  get title() {
    return this.tag.title;
  }

  get description() {
    return this.tag.description ?? "";
  }
}

export const newNullTag = () => {
  const tag = new Tag({} as TagDTO);
  tag.isNull = true;
  return tag;
};
