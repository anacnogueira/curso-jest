import Cart from './Cart';
let cart;

beforeEach(() => {
  cart = new Cart();
});

describe('Cart', () => {
  test('should return 0 when getTotal() is executed in a newly created instance', () => {
    expect(cart.getTotal()).toEqual(0);
  });

  test('should multiply quantity and price and receive the total amount', () => {
    const item = {
      product: {
        title: 'Adidas Running Shoes Pink - Women',
        price: 35388, // 353.88 | R$ 383,88,
      },
      quantity: 2, //70776
    };

    cart.add(item);
    expect(cart.getTotal()).toEqual(70776);
  });
});
