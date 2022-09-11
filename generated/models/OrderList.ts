/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Item } from './Item';
import type { Terminal } from './Terminal';

export type OrderList = {
    id: number;
    customerId?: number;
    customerName: string;
    customerPhonenumber: string;
    customerRefId: string;
    customerEmail: string;
    status: string;
    rating: string | null;
    ratingComment: string | null;
    cancelledBy: string | null;
    cancelledAt: string | null;
    bikerDeliveryFare: number;
    customerDeliveryFare: number;
    bikerRateChartId: number;
    customerRateChartId: number;
    bikerPricingConfigId: number;
    customerPricingConfigId: number;
    deliveryFarePaymentType: string;
    customerWalletId: number;
    sequenceNumberDeliveryCollection: string | null;
    isCancellable: boolean;
    isDeniable: boolean;
    city: string;
    deliveryCategory: string;
    isReturn: boolean;
    items: Array<Item>;
    allotments: Array<string>;
    terminals: Array<Terminal>;
    createdAt: string;
    updatedAt: string;
};

