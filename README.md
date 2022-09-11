# snapp-box-sdk

snapp-box SDK is a Typescript library for dealing with [app.snpb.ir](https://api-docs.snapp-box.com/) 3rd party api 🛵.

## Installation

Use the package manager [npm](https://npmjs.com/) to install snapp-box-sdk.

```bash
npm install @snapp-store/snapp-box-sdk
```

## Usage

Pass your API key and environment between "staging" or "production" to snapp-box class and create an instance of it.

```javascript
import SnappBox from '@snapp-store/snapp-box-sdk';

const snappBox = new SnappBox('<YOUR_snapp-box_API_KEY>', 'staging');

const someFancyFunction = async () => {
  // some loginc here

  const accountBalance = await snappBox.methods.getAccountBalance();

  return accountBalance;
};
```

## Available Methods

- **getAccountBalance()**
- **createOrder(CreateOrderRequest)**
- **cancelOrder(CancelOrderRequest)**
- **getOrderList(GetOrderListRequest)**
- **getPrice(GetPriceRequest)**
- **getOrderDetailsV2(id)**
- **getCities()**
- **updateOrder(UpdateOrderRequest)**
- **verification(Verification)**

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

## License

[MIT](https://choosealicense.com/licenses/mit/)
