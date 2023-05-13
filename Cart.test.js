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

beforeEach(() => {
  cart = new Cart();
});

describe('Cart', () => {
  test('should return 0 when getTotal() is executed in a newly created instance', () => {
    expect(cart.getTotal()).toEqual(0);
  });

  test('should multiply quantity and price and receive the total amount', () => {
    const item = {
      product,
      quantity: 2, //70776
    };

    cart.add(item);
    expect(cart.getTotal()).toEqual(70776);
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

    expect(cart.getTotal()).toEqual(70776);
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

    expect(cart.getTotal()).toEqual(41872);
  });
});
