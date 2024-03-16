import { ORDER_TYPE_PACKAGE } from '../../const/ConstOrder';
import ReceiptModel from '../../models/ReceiptModel';

const receipt = new ReceiptModel({
  id: '123',
  orderKind: ORDER_TYPE_PACKAGE,
  totalPrice: 9999,
  status: '주문완료',
  menuItems: [],
  createAt: new Date(),
  updateAt: new Date(),
});

const useReadOrder = jest.fn(() => ({
  receipt,
}));

export default useReadOrder;
