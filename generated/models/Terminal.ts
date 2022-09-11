/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DroppedOffItem } from './DroppedOffItem';
import type { PickedUpItem } from './PickedUpItem';

export type Terminal = {
    id: number;
    latitude: number;
    longitude: number;
    unit: string | null;
    address: string;
    plate: string;
    landmark: string;
    comment: string;
    contactName: string;
    contactPhoneNumber: string;
    email: string;
    packageHandlerName: string | null;
    packageHandlerSignatureUrl: string | null;
    packageHandlerRelation: string | null;
    sequenceNumber: number;
    type: string;
    status: string;
    arrivedPickupAt: string | null;
    pickedUpAt: string | null;
    arrivedDropOffAt: string | null;
    deliveredAt: string | null;
    paymentType: string;
    cashOnPickup: number;
    cashOnDelivery: number;
    pickedUpItems: Array<PickedUpItem>;
    droppedOffItems: Array<DroppedOffItem>;
    createdAt: string;
    updatedAt: string;
    rating: string | null;
    ratingComments: string | null;
};

