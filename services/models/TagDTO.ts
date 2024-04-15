/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { components_schemas_UserDTO } from './components_schemas_UserDTO';
export type TagDTO = {
    /**
     * identifier
     */
    id: string;
    /**
     * tag's creation date
     */
    title: string;
    /**
     * user's updated date
     */
    description?: string;
    /**
     * note's owner id
     */
    ownerId?: string;
    owner?: components_schemas_UserDTO;
};

