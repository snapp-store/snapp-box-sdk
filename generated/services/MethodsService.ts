/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelOrder } from '../models/CancelOrder';
import type { CancelOrderRequest } from '../models/CancelOrderRequest';
import type { CreateOrder } from '../models/CreateOrder';
import type { CreateOrderRequest } from '../models/CreateOrderRequest';
import type { GetAccountBalance } from '../models/GetAccountBalance';
import type { GetOrderList } from '../models/GetOrderList';
import type { GetOrderListRequest } from '../models/GetOrderListRequest';
import type { GetPrice } from '../models/GetPrice';
import type { GetPriceRequest } from '../models/GetPriceRequest';
import type { UpdateOrderRequest } from '../models/UpdateOrderRequest';
import type { Verification } from '../models/Verification';

import type { CancelablePromise } from '../core/CancelablePromise';
import type { BaseHttpRequest } from '../core/BaseHttpRequest';

export class MethodsService {
  constructor(public readonly httpRequest: BaseHttpRequest) {}

  /**
   * Get Account Balance
   * You can get your account balance using this method.
   * @param authorization
   * @returns GetAccountBalance
   * @throws ApiError
   */
  public getAccountBalance(): CancelablePromise<GetAccountBalance> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/v1/customer/current_balance',
    });
  }

  /**
   * Create Order
   * With this endpoint, you can put orders in snappbox system
   *
   * Use Cases
   *
   * ** a. **    Single Pickup - Single destination - prepaid/cod
   *
   * ** b. **    Single Pickup - Multiple destinations - prepaid order
   *
   * ** c. **    Single Pickup - Multiple destinations - cash order
   *
   * ** d. **        Prepending Orders
   *
   *
   *
   *
   * Caution:
   *
   * ** A ** there is no necessity to pass "customerId" in any of the methods
   *
   * ** B ** for receving "webhook details" using unique "customerRefId" is required
   *
   *
   *
   * ** Prepending Orders **
   *
   * - The Logic of the prepending order is:
   * Any order which is placed any time before the start of the time slot is considered prepending. T is configurable and accessible from the admin panel.
   * Also, there is a job that will run every 10 minutes and if there are orders in which their time slot is started will change the status from prepending to pending.
   *
   * - 'customerRefId' should be unique
   *
   *
   *
   *
   *
   *
   *
   * ** Parameters **
   *
   * | Parameter|DataType|Required|Description|
   * |---|---|---|---|
   * |customerId|String| N |It will be given from snappbox to the customer after customer login.|
   * |** data ** | ** Array **| Y | This object contains all order details including dropOffDetails, itemDetails, pickUpDetails and orderDetails array objects.  |
   * | ** timeSlotDTO **  |  ** smallDateTime ** | N  | The beginning and ending of the Order life cycle.  |
   * |  startTimSlot  | smallDateTime | N  | Beginning of the time period that orders should be in Pending status, untill then Order's status is prePending.  |
   * |  endTimSlot  | smallDateTime | N  | The ending of the time period that orders should be delivered also, Batching will use this time in priorotize logics.  |
   * | ** dropOffDetails **  |  ** Array ** | Y  | This object refers to each destination and cotanins following parameters. |
   * | address  |  String | Y  | Address of the drop off location. |
   * | cashOnDelivery  |  Integer | Y  | The amount of money that should be collected on delivery location. You can pass zero if there is no money to be collected. |
   * | cashOnPickup  |  Integer | Y  | The amount of money that should be collected on pickup location. You can pass zero if there is no money to be collected. If you are passing this parameter in "dropOffDetail", then it should be passed as zero. |
   * | comment  |  string | N  | Notes that will be shown to biker in dropp off location. |
   * | contactName  |  string | Y  | Name of the receiver of the package. |
   * | contactPhoneNumber  |  string | Y  | Phone number of the receiver of the package. |
   * | email  |  string | N | Email of the receiver of the package. |
   * | landmark  |  string | N | Extra detail on location for helping biker to find the location easily. |
   * | latitude  |  float | Y | Latitude of the drop off location. |
   * | longitude  |  float | Y | Longitude of the drop off location. |
   * | paymentType  |  string | Y | This field tells if the biker need to collect and will receive only "cod" and "prepaid". "cod" for the cash payments and "prepaid" for credit payments. |
   * | plate  |  string | N | Plate number. |
   * | sequenceNumber  |  integer | Y | Each stop including pickups and destinations are a terminal in our system. These sequence numbers are referring to the sequence of these terminals. For instance first pickup sequence number is 1, the second pickup sequence number is 2, the first destination's sequence number is 3 and the second destination sequence number is 4 and it goes on. |
   * | type  |  string | Y | This parameter will receive only "drop". |
   * | ** itemDetails **  |  ** Array ** | Y  | This object refers to the items that our biker should deliver or collect. For each of item that need to be picked up or delivered, you need to add an object, including following params.|
   * | dropOffSequenceNumber  |  integer | Y | This is the number of stop/terminal that this item should be dropped. |
   * | name  |  string | Y | Name of the item. |
   * | packageValue  |  integer | N | This parameter will reffer to package value. |
   * | pickedUpSequenceNumber  |  integer | Y | This is the number of stop/terminal that this item should be pickedup. |
   * | quantity  |  integer | Y | This is the number of items that should be pickedup. |
   * | quantityMeasuringUnit  |  string | Y | This is the unit that you will add to the end quantity. |
   * | ** orderDetails **  |  ** Array ** | Y  | This object contains all the detail of the order. |
   * | city  |  string | Y | Use the following format for your city: "Mashhad", "Tehran" and "isfahan". |
   * | customerEmail  |  string | N | Customer email. |
   * | customerRefId  |  string | Y | OrderId reference from the customer side. |
   * | customerId  |  string | N | It will be given from snappbox to the customer after customer login. |
   * | customerName  |  string | Y | Customer name. |
   * | customerPhonenumber  |  string | N | Phone number of the Customer. |
   * | deliveryCategory  |  string | y | Type of delivery category required. For now, we currently have 4 types: "bike" , "bike-without-box", "van-heavy" and "van"  and "carbox" will be added soon. |
   * | deliveryFarePaymentType  |  string | y | This is how the price of the order will be paid. There are 2 types: "cod" and "prepaid". The cod and prepaid mentioned here is different than "paymentType" mentioned in above. |
   * | isReturn  |  boolean | Y | If biker should return to the first terminal it should be "true" and if there is no return it should be "false". |
   * | vehicleCategory  |  string | Y | The type of vehicle that you want to order, technically it should be the same as "deliveryCategory".
   * | pricingId  |  string | N | the pricing id that you got from pricing end-point.
   * | sequenceNumberDeliveryCollection |  integer | N | If an order price payment method is cash, this parameter will declare in which terminal this money should be collected. (this field is relevant only if deliveryFarePaymentMode is not prepaid)
   * | ** pickUpDetails **  |  ** Array ** | Y  | This object is referring to the pickup location details, if there is more than one pickup location you need to have one object for each of them, and handle the sequence of the pickup and drop off with "dropOffSequenceNumber". |
   * | address  |  String | Y  | Address of the pickup location. |
   * | cashOnDelivery  |  Integer | Y  | The amount of money that should be collected on delivery location. You can pass zero if there is no money to be collected. If you are passing this parameter in "pickUpDetail" object, then it should be passed as zero. |
   * | cashOnPickup  |  Integer | Y  | The amount of money that should be collected on pickup location. You can pass zero if there is no money to be collected. |
   * | comment  |  string | N  | Notes that will be shown to the biker in pick up location. |
   * | contactName  |  string | Y  |Name of the pickup contact person. |
   * | contactPhoneNumber  |  string | Y  |Phone number of the pickup contact person. |
   * | email  |  string | N | Email of the pickup contact person. |
   * | landmark  |  string | N | Extra detail on location for helping biker to find the location easily. |
   * | latitude  |  float | Y | Latitude of the pick up location. |
   * | longitude  |  float | Y | Longitude of the pick up location. |
   * | paymentType  |  string | Y | This field tells if the biker needs to collect and will receive only "cod" and "prepaid". "cod" for the cash payments and "prepaid" for credit payments. |
   * | plate  |  string | N | Plate number. |
   * | sequenceNumber  |  integer | Y | Each stop including pickups and destinations are a terminal in our system. These sequence numbers are referring to the sequence of these terminals. For instance first pickup sequence number is 1, the second pickup sequence number is 2, the first destination's sequence number is 3 and the second destination sequence number is 4 and it goes on. |
   * | type  |  string | Y | This parameter will receive only "pickup". |
   * |  batchAble | boolean | N | you can make your Order a batch potential if true, and will not be considered as Batch posibility if false |
   * @param authorization
   * @param requestBody
   * @returns CreateOrder
   * @throws ApiError
   */
  public createOrder(requestBody: CreateOrderRequest): CancelablePromise<CreateOrder> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/v1/customer/create_order',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Cancel Order
   * ** Description **
   *
   * An order can be canceled before the package is picked up, so once the biker pick up the packages, the order is not cancelable. you can cancel order with passing following parameters.
   *
   * ** Parameters **
   *
   * | Parameter|DataType| Required | Description  |
   * |---|---|---|---|
   * | customerId  |  String | N  | It will be given from snappbox to the customer after customer login. |
   * | orderId  |  string | Y  | order id that will be generated by snappbox. |
   *
   * @param accept
   * @param authorization
   * @param requestBody
   * @returns CancelOrder
   * @throws ApiError
   */
  public cancelOrder(requestBody: CancelOrderRequest): CancelablePromise<CancelOrder> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/v1/customer/cancel_order',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Get Order List
   * ** Description **
   *
   * Using this method you can get all your delivered/ongoing orders of your account.
   *
   *
   * ** Parameters **
   *
   *
   * | Parameter| DataType  | Required | Description  |
   * |---|---|---|---|
   * | customerId  |  String | N  | It will be given from snappbox to the customer after customer login. |
   * | ongoing  |  boolean | Y  | By passing this parameter as "true" you will only get the list of ongoing orders and if you set it as "false" you will see all non ongoing status. |
   * | pageNumber  |  integer | Y  | Pagination offset. |
   * | pageSize  |  integer | Y  | Number of orders you want to get. |
   * @param accept
   * @param authorization
   * @param requestBody
   * @returns GetOrderList
   * @throws ApiError
   */
  public getOrderList(requestBody: GetOrderListRequest): CancelablePromise<GetOrderList> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/v1/customer/order_history',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Get Price
   *
   *
   * ** Description **
   *
   * With this endpoint you can get the pricing information about your order.
   *
   * Use Cases
   *
   * ** a. **     When you want to show the pricing information to your customers.
   *
   *
   * ** Parameters **
   *
   * | Parameter|DataType|Required|Description|
   * |---|---|---|---|
   * |city|String|Y| Use the following format for your city: "mashhad", "tehran" and "isfahan".|
   * |customerId|String| N |It will be given from snappbox to the customer after customer login.|
   * | deliveryCategory  |  string | y | Type of delivery category required. For now we have 2 types: "bike" and "van". |
   * | isReturn  |  boolean | Y | If our biker should return to the first teminal it should be "true" and if there is no return it should be "false". |
   * | ** items **  |  ** Array ** | Y | This object refers to the items that our biker should deliver or collect. For each of item that need to be picked up or delivered, you need to add an object, including following params.|
   * | packageValue  |  integer | N | This parameter will reffer  to package value. |
   * | quantity  |  integer | Y | This is the number of items that should be pickedup. |
   * | quantityMeasuringUnit  |  string | Y | This is the unit that you will add to the end quantity. |
   * | ** terminals **  |  ** Array ** | Y  | This object is reffering to the pickup/destination location details, if there is more than one pickup location you need to have one object for each of them, and handle the sequence of the pickup and drop off with "dropOffSequenceNumber". |
   * | cashOnDelivery  |  Integer | Y  | The amount of money that should be collected on delivery location. You can pass zero if there is no money to be collected. If you are passing this parameter in "pickUpDetail" object, then it should be passed as zero. |
   * | cashOnPickup  |  Integer | Y  | The amount of money that should be collected on pickup location. You can pass zero if there is no money to be collected. |
   * | latitude  |  float | Y | Latitude of the pick up location. |
   * | longitude  |  float | Y | Longitude of the pick up location. |
   * | paymentType  |  string | Y | This field tells if the biker need to collect and will receive only "cod" and "prepaid". "cod" for the cash payments and "prepaid" for credit payments. |
   * | sequenceNumber  |  integer | Y | Each stop including pickups and destinations are a terminal in our system. These sequence numbers are referring to the sequence of these terminals. For instance first pickup sequence number is 1, second pickup sequence number is 2, first destination's sequence number is 3 and second destination sequence number is 4 and it goes on. |
   * | type  |  string | Y | This parameter will receive only "pickup" for pickup terminals and "drop" for dropoff terminals. |
   *
   * @param authorization
   * @param requestBody
   * @returns GetPrice
   * @throws ApiError
   */
  public getPrice(requestBody: GetPriceRequest): CancelablePromise<GetPrice> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/v1/customer/order/pricing',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Get Order Details (v2)
   * @param authorization
   * @returns any
   * @throws ApiError
   */
  public getOrderDetailsV2(id: string): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'GET',
      url: `/v2/orders/${id}`,
    });
  }

  /**
   * Get Cities
   * @param authorization
   * @returns any
   * @throws ApiError
   */
  public getCities(): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'GET',
      url: '/v2/delivery-category/by-city',
    });
  }

  /**
   * Update Order
   * @param authorization
   * @param requestBody
   * @returns any
   * @throws ApiError
   */
  public updateOrder(requestBody: UpdateOrderRequest): CancelablePromise<any> {
    return this.httpRequest.request({
      method: 'PUT',
      url: '/v1/customer/update-order',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * Verification
   * You can Verify that Biker either Arrived at Pickup or Picked up at your location.
   * @param authorization
   * @param requestBody
   * @returns Verification
   * @throws ApiError
   */
  public verification(requestBody?: Verification): CancelablePromise<Verification> {
    return this.httpRequest.request({
      method: 'POST',
      url: '/v1/customer/Verification',
      body: requestBody,
      mediaType: 'application/json',
    });
  }
}
