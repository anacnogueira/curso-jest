import Cart from './Cart';

describe('Cart', () => {
  test('should return 0 when getTotal() is executed in a newly created instance ', () => {
    const cart = new Cart();
    expect(cart.getTotal()).toEqual(0);
  });
});
