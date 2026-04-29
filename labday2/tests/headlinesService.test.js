const HeadlinesService = require('../headlinesService.js');

describe('HeadlinesService', () => {

  test('use cache only', async () => {
    const db = {
      get: jest.fn().mockResolvedValue(['test']),
      set: jest.fn()
    };

    const api = {
      fetch: jest.fn()
    };

    const service = new HeadlinesService(db, api);

    const result = await service.getHeadlines();

    expect(result).toEqual(['test']);
    expect(api.fetch).not.toHaveBeenCalled();
  });

 
  test('fetch api ', async () => {
    const db = {
      get: jest.fn().mockResolvedValue(null),
      set: jest.fn()
    };

    const api = {
      fetch: jest.fn().mockResolvedValue(['test'])
    };

    const service = new HeadlinesService(db, api);

    const result = await service.getHeadlines();

    expect(api.fetch).toHaveBeenCalled();
    expect(db.set).toHaveBeenCalledWith('headlines', ['test']);
    expect(result).toEqual(['test']);
  });

});