import menus from './menus';

 const receipts = {
   id: 'RECEIPT_ID',
   menu: menus,
   totalPrice: menus.reduce((acc, cur) => acc + cur.price, 0),
 };

 export default receipts;