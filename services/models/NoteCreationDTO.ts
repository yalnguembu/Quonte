/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type NoteCreationDTO = {
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
    tags?: Array<string>;
    /**
     * note's owner id
     */
    ownerId?: string;
};

