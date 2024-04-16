/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { components_schemas_UserDTO } from '../models/components_schemas_UserDTO';
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';
export class UserService {
    /**
     * fetch details by user's unername
     * fetch details by user's unername
     * @returns components_schemas_UserDTO user fecthed successfully
     * @throws ApiError
     */
    public static fectUserByUsername({
        username,
    }: {
        /**
         * the user's username
         */
        username: string,
    }): CancelablePromise<components_schemas_UserDTO> {
        return __request(OpenAPI, {
            method: 'GET',
            url: '/users/{username}',
            path: {
                'username': username,
            },
            errors: {
                403: `access forbidden`,
            },
        });
    }
}
