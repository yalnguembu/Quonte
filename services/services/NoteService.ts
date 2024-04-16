/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { NoteCreationDTO } from '../models/NoteCreationDTO';
import type { NoteDTO } from '../models/NoteDTO';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class NoteService {
    /**
     * fetch all notes
     * fetch all note
     * @returns NoteDTO notes successfull fecthed
     * @throws ApiError
     */
    public static getAllNotes(): CancelablePromise<Array<NoteDTO>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/notes/',
            errors: {
                403: `access forbidden`,
            },
        });
    }
    /**
     * create new note
     * create new note
     * @returns NoteDTO note created successfully
     * @throws ApiError
     */
    public static createNote({
        requestBody,
    }: {
        /**
         * note informations needed to create new note
         */
        requestBody: NoteCreationDTO,
    }): CancelablePromise<NoteDTO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/notes/',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `access forbidden`,
            },
        });
    }
    /**
     * fetch all notes
     * fetch all by id
     * @returns NoteDTO notes successfull fecthed
     * @throws ApiError
     */
    public static getNoteById({
        id,
    }: {
        /**
         * the note's id to get
         */
        id: string,
    }): CancelablePromise<NoteDTO> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/notes/{id}',
            path: {
                'id': id,
            },
            errors: {
                403: `access forbidden`,
            },
        });
    }
    /**
     * fetch note by ownerId
     * etch note by ownerId
     * @returns NoteDTO notes successfull fecthed
     * @throws ApiError
     */
    public static getNoteByOwnerId({
        id,
    }: {
        /**
         * the note's owner id
         */
        id: string,
    }): CancelablePromise<Array<NoteDTO>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/{id}/notes',
            path: {
                'id': id,
            },
            errors: {
                403: `access forbidden`,
            },
        });
    }
}
