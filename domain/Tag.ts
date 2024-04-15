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
    return this.tag.title ?? "";
  }

  set title(title: string) {
    this.tag.title = title ?? "";
  }

  get description() {
    return this.tag.description ?? "";
  }

  set description(description: string) {
    this.tag.description = description ?? "";
  }

  get baseTag(): TagDTO {
    return this.tag;
  }
}

export const newNullTag = () => {
  const tag = new Tag({} as TagDTO);
  tag.isNull = true;
  return tag;
};
