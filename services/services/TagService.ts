/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { TagDTO } from '../models/TagDTO';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class TagService {
    /**
     * fetch all tags
     * fetch all tags
     * @returns TagDTO tags successfull fecthed
     * @throws ApiError
     */
    public static getAllTags(): CancelablePromise<Array<TagDTO>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/tags/',
            errors: {
                403: `access forbidden`,
            },
        });
    }
    /**
     * create new tag
     * create new tag
     * @returns TagDTO tag created successfully
     * @throws ApiError
     */
    public static createTag({
        requestBody,
    }: {
        /**
         * tag informations needed to create new tag
         */
        requestBody: TagDTO,
    }): CancelablePromise<TagDTO> {
        return __request(OpenAPI, {
            method: 'POST',
            url: '/tags/',
            body: requestBody,
            mediaType: 'application/json',
            errors: {
                403: `access forbidden`,
            },
        });
    }
    /**
     * fetch all tags
     * fetch all by id
     * @returns TagDTO notes successfull fecthed
     * @throws ApiError
     */
    public static getTagById({
        id,
    }: {
        /**
         * the tag's id to get
         */
        id: string,
    }): CancelablePromise<TagDTO> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/tags/{id}',
            path: {
                'id': id,
            },
            errors: {
                403: `access forbidden`,
            },
        });
    }
    /**
     * fetch tags by ownerId
     * fetch tags by ownerId
     * @returns TagDTO tags successfull fecthed
     * @throws ApiError
     */
    public static getTagsByOwnerId({
        id,
    }: {
        /**
         * the tag's owner id
         */
        id: string,
    }): CancelablePromise<Array<TagDTO>> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/{id}/tags',
            path: {
                'id': id,
            },
            errors: {
                403: `access forbidden`,
            },
        });
    }
}
