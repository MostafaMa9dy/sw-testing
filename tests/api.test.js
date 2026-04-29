jest.mock('axios');
const axios = require('axios');
const { fetchPost } = require('../api');

describe('fetchPost', () => {
  test('returns post when found', async () => {
    axios.get.mockResolvedValue({ data: { id: 1, title: 'Test Post', body: 'Test Body' } });
    const post = await fetchPost(1);
    expect(post).toEqual({ id: 1, title: 'Test Post' });
  });

  test('throws when post not found', async () => {
    axios.get.mockRejectedValue(new Error('Post not found'));
    await expect(fetchPost(999)).rejects.toThrow('Post not found');
  });
  test('throw error if axios return null', async () => {
    axios.get.mockResolvedValue({ data: null });
    await expect(fetchPost(1)).rejects.toThrow('Post not found');
  });
});