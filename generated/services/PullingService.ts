/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PullingEventDTO } from '../models/PullingEventDTO';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class PullingService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * Pull Events
     * If there are some failure during webhook calls we put your events on your pulling channel and you can use your customer token to fetch all failed messages with this API.
     * @param authorization Customer Token
     * @returns PullingEventDTO Success
     * @throws ApiError
     */
    public getV1Pulling(
        authorization: string,
    ): CancelablePromise<Array<PullingEventDTO>> {
        return this.httpRequest.request({
            method: 'GET',
            url: '/v1/pulling',
            headers: {
                'Authorization': authorization,
            },
            errors: {
                401: `UnAuthorized`,
                403: `Forbidden`,
            },
        });
    }

}
