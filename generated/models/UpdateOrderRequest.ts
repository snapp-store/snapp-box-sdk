/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Terminal2 } from './Terminal2';

export type UpdateOrderRequest = {
    fromCustomerCredit: boolean;
    isReturn: boolean;
    orderId: string;
    payingParty: number;
    paymentType: string;
    terminals: Array<Terminal2>;
    waitingTime: number;
    customerWalletType: string;
};

