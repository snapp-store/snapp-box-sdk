require('dotenv').config({ path: './.env' });
const { default: SnappBox } = require('@snapp-store/snapp-box-sdk');

const snappBox = new SnappBox(process.env.S_BOX_API_KEY, 'staging');

snappBox.methods
  .getAccountBalance()
  .then((a) => console.log(a))
  .catch((err) => console.log(err));
