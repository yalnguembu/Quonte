/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { components_schemas_UserDTO } from './components_schemas_UserDTO';
import type { TagDTO } from './TagDTO';
export type NoteDTO = {
    /**
     * identifier
     */
    id: string;
    /**
     * note's title
     */
    title: string;
    /**
     * note's content
     */
    content?: string;
    /**
     * note's creation date
     */
    creationDate?: string;
    tags?: Array<TagDTO>;
    /**
     * note's owner id
     */
    ownerId?: string;
    owner?: components_schemas_UserDTO;
};

