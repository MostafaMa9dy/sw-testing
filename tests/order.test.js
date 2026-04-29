const pricing = require('../pricing');
const { calculatePrice } = require('../order');

describe('calc Price', () => {

    afterEach(() => {
        jest.restoreAllMocks();
    });

    test('50% discount', () => {

        jest.spyOn(pricing, 'getDiscount').mockReturnValue(0.5);

        const result = calculatePrice(100);

        expect(result).toBe(50);

        expect(pricing.getDiscount).toHaveBeenCalled();

    });

});