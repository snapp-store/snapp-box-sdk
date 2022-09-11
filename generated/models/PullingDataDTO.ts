/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type PullingDataDTO = {
    /**
     * The time that webhook payload create in UTC format
     */
    creationTime: string;
    /**
     * The unique id for each webhook
     */
    notificationId: string;
    /**
     * The terminal sequence number of order
     */
    sequenceNumber: string;
    orderId: string;
    /**
     * The current status of order
     */
    orderStatus: string;
    /**
     * The type of webhook
     */
    webhookType: string;
    customerRefId: string;
    bikerName: string;
    bikerPhone: string;
    orderAcceptedAt: string;
    bikerPhotoUrl: string;
    actionBy: string;
    batch: boolean;
    invoiceId: string;
    invoiceStatus: PullingDataDTO.invoiceStatus;
};

export namespace PullingDataDTO {

    export enum invoiceStatus {
        PENDING = 'PENDING',
        SUCCESS = 'SUCCESS',
        CANCELLED = 'CANCELLED',
    }


}

