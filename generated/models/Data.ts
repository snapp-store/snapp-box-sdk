/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DropOffDetail } from './DropOffDetail';
import type { ItemDetail } from './ItemDetail';
import type { OrderDetails } from './OrderDetails';
import type { PickUpDetail } from './PickUpDetail';
import type { TimeSlotDTO } from './TimeSlotDTO';

export type Data = {
    timeSlotDTO: TimeSlotDTO;
    itemDetails: Array<ItemDetail>;
    orderDetails: OrderDetails;
    pickUpDetails: Array<PickUpDetail>;
    dropOffDetails: Array<DropOffDetail>;
};

