let items = []; 

const addItem = (item) => items.push(item);

const getItems = () => items;

const resetCart = () => {

  items = [];
  
};


module.exports = { addItem, getItems, resetCart };