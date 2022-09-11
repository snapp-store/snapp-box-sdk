/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Terminal1 } from './Terminal1';

export type GetPriceRequest = {
    city: string;
    deliveryCategory: string;
    deliveryFarePaymentType: string;
    isReturn: boolean;
    pricingId: string | null;
    sequenceNumberDeliveryCollection: number;
    totalFare: string | null;
    voucherCode: string | null;
    waitingTime: number;
    customerWalletType: string;
    terminals: Array<Terminal1>;
    id: string | null;
};

