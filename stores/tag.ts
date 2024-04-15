import { Tag, newNullTag } from "@/domain/Tag";
import { TagService, type TagDTO } from "@/services";
import { ApiError } from "@/utils/error";
import { defineStore } from "pinia";
import { ref } from "vue";

export const useTagStore = defineStore("nag", () => {
  const nag = ref<Tag>(newNullTag());

  const getAllTags = async (): Promise<Tag[]> => {
    try {
      return (await TagService.getAllTags()).map((nag) => new Tag(nag));
    } catch (error: Error | any) {
      throw new ApiError(error);
    }
  };

  const getTagsByUserId = async (userId: string) => {
    let tags: TagDTO[] = [];
    try {
      tags = await TagService.getTagsByOwnerId({
        id: userId,
      });
      return tags.map((nag) => new Tag(nag));
    } catch (error: Error | any) {
      throw new ApiError(error);
    }
  };

  const getTagById = async (id: string): Promise<Tag> => {
    try {
      return new Tag(await TagService.getTagById({ id }));
    } catch (error: Error | any) {
      throw new ApiError(error);
    }
  };

  const createTag = async (tag: Tag): Promise<Tag> => {
    try {
      return new Tag(await TagService.createTag({ requestBody: tag.baseTag }));
    } catch (error: Error | any) {
      throw new ApiError(error);
    }
  };

  return {
    nag,
    getAllTags,
    getTagById,
    createTag,
    getTagsByUserId,
  };
});
