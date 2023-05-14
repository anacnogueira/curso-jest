import Cart from './Cart';
let cart;
let product = {
  title: 'Adidas Running Shoes Pink - Women',
  price: 35388, // 353.88 | R$ 383,88,
};

let product2 = {
  title: 'Adidas Running Shoes Pink - men',
  price: 41872,
};

describe('Cart', () => {
  beforeEach(() => {
    cart = new Cart();
  });

  describe('getTotal()', () => {
    test('should return 0 when getTotal() is executed in a newly created instance', () => {
      expect(cart.getTotal().getAmount()).toEqual(0);
    });

    test('should multiply quantity and price and receive the total amount', () => {
      const item = {
        product,
        quantity: 2, //70776
      };

      cart.add(item);
      expect(cart.getTotal().getAmount()).toEqual(70776);
    });

    test('should ensure no more than on product exists at a time', () => {
      cart.add({
        product,
        quantity: 1,
      });

      cart.add({
        product,
        quantity: 2,
      });

      expect(cart.getTotal().getAmount()).toEqual(70776);
    });

    test('should update total when a product gets included and then removed ', () => {
      cart.add({
        product,
        quantity: 2,
      });

      cart.add({
        product: product2,
        quantity: 1,
      });

      cart.remove(product);

      expect(cart.getTotal().getAmount()).toEqual(41872);
    });
  });

  describe('checkout()', () => {
    test('should return an object with the total and the list of items', () => {
      cart.add({
        product,
        quantity: 2,
      });

      cart.add({
        product: product2,
        quantity: 3,
      });

      expect(cart.checkout()).toMatchSnapshot();
    });

    test('should return an object with the total and the list of items when summary is called', () => {
      cart.add({
        product,
        quantity: 2,
      });

      cart.add({
        product: product2,
        quantity: 3,
      });

      expect(cart.summary()).toMatchSnapshot();
      expect(cart.getTotal().getAmount()).toBeGreaterThan(0);
    });

    test('should reset the cart when checkout() is called', () => {
      cart.add({
        product: product2,
        quantity: 3,
      });

      cart.checkout();

      expect(cart.getTotal().getAmount()).toEqual(0);
    });
  });

  describe('special conditions', () => {
    test('should apply percentage discount above minimum is passed', () => {
      const condition = {
        percentage: 30,
        minimum: 2,
      };

      cart.add({
        product,
        condition,
        quantity: 3,
      });

      expect(cart.getTotal().getAmount()).toEqual(74315);
    });
  });
});
