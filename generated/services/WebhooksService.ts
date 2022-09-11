/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { ORDERACCEPTEDREQUEST } from '../models/ORDERACCEPTEDREQUEST';
import type { ORDERARRIVEDREQUEST } from '../models/ORDERARRIVEDREQUEST';
import type { ORDERCANCELEDBYSYSTEMREQUEST } from '../models/ORDERCANCELEDBYSYSTEMREQUEST';
import type { ORDERCANCELEDREQUEST } from '../models/ORDERCANCELEDREQUEST';
import type { ORDERDELIVEREDREQUEST } from '../models/ORDERDELIVEREDREQUEST';
import type { ORDERPICKEDUPREQUEST } from '../models/ORDERPICKEDUPREQUEST';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class WebhooksService {

    constructor(public readonly httpRequest: BaseHttpRequest) {}

    /**
     * ORDER ACCEPTED
     * Following payload will be sent through Webhooks/FCM when a biker is allocated to the order, you can test this webhook with your webhook handler url.
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public orderaccepted(
        requestBody: ORDERACCEPTEDREQUEST,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/v1/order/verification',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * ORDER ARRIVED
     * Following payload will be sent through Webhooks/FCM when a biker is allocated to the order, you can test this webhook with your webhook handler url.
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public orderarrived(
        requestBody: ORDERARRIVEDREQUEST,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/#arrived',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * ORDER PICKED UP
     * Following payload will be sent through Webhooks/FCM when the biker has picked up the package, you can test this webhook with your webhook handler url.
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public orderpickedup(
        requestBody: ORDERPICKEDUPREQUEST,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/#pickedup',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * ORDER DELIVERED
     * Following payload will be sent through Webhooks/FCM when the biker has delivered the package, you can test this webhook with your webhook handler url.
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public orderdelivered(
        requestBody: ORDERDELIVEREDREQUEST,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/#delivered',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * ORDER CANCELED
     * Following payload will be sent through Webhooks/FCM when the order is cancelled, you can test this webhook with your webhook handler url.
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public ordercanceled(
        requestBody: ORDERCANCELEDREQUEST,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/#canceled',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

    /**
     * ORDER CANCELED (by system)
     * If you create an order and in its time of "allocation" no biker accepts your order , it'll be cancelled by system.
     * @param requestBody
     * @returns any
     * @throws ApiError
     */
    public ordercanceledBysystem(
        requestBody: ORDERCANCELEDBYSYSTEMREQUEST,
    ): CancelablePromise<any> {
        return this.httpRequest.request({
            method: 'POST',
            url: '/#canceled-by-system',
            body: requestBody,
            mediaType: 'application/json',
        });
    }

}
