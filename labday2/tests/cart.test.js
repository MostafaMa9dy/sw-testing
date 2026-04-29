const { addItem, getItems, resetCart } = require('../cart');

describe('cart', () => {

  beforeEach(() => {
    resetCart(); 
  });

  test('add 1 item', () => {
    addItem('mostafa');
    expect(getItems().length).toBe(1);
  });

  test('add 2 item', () => {
    addItem('magdy');
    addItem('mohamed');
    expect(getItems().length).toBe(2);
  });

});