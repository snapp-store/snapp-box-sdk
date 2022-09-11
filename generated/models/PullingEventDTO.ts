/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PullingDataDTO } from './PullingDataDTO';

export type PullingEventDTO = {
    /**
     * Id of events
     */
    id: number;
    /**
     * Type of event
     */
    type: PullingEventDTO.type;
    /**
     * Time that this event expire in UTC format
     */
    expireIn: string;
    /**
     * Event Payload that store for this recipient before
     */
    data: PullingDataDTO;
};

export namespace PullingEventDTO {

    /**
     * Type of event
     */
    export enum type {
        ORDER_STATUS_UPDATE = 'ORDER_STATUS_UPDATE',
    }


}

