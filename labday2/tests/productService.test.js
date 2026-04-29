const ProductService = require('../productService');

describe('ProductService', () => {

    test('getProduct', async () => {
        const db = {
            find: jest.fn().mockResolvedValue({ id: '1' })
        };

        const service = new ProductService(db);

        await service.getProduct('1');

        expect(db.find).toHaveBeenCalledWith('1');
    });



    test('createProduct', async () => {
        const db = {
            insert: jest.fn().mockResolvedValue({ name: 'apple' })
        };

        const service = new ProductService(db);

        await service.createProduct({ name: 'apple' });

        expect(db.insert).toHaveBeenCalled();
    });


    test('error', async () => {
        const db = {
            find: jest.fn().mockRejectedValue(new Error('fail'))
        };

        const service = new ProductService(db);

        await expect(service.getProduct('1')).rejects.toThrow('fail');
    });

});