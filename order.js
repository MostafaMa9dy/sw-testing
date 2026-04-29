const pricing = require('./pricing');

const calculatePrice = (price) => {
    const discount = pricing.getDiscount();
    return price - price * discount;
};

module.exports = { calculatePrice };