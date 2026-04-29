jest.mock('../userRepository');

const { getUserProfile }  = require('../userService');
const repo                 = require('../userRepository');

describe('getUserProfile', () => {

  test.only('returns formatted user when found', async () => {
    // Tell the mock what to return
    repo.findUserById.mockResolvedValue({
      id: 1, name: 'Sara Ahmed', email: 'sara@test.com', password: 'secret'
    });

    const profile = await getUserProfile(1);

    expect(profile).toEqual({
      id: 1, name: 'Sara Ahmed', email: 'sara@test.com'
      // password is NOT exposed — our service strips it
    });
  });

  test('throws when user does not exist', async () => {
    repo.findUserById.mockResolvedValue(null); // DB returns nothing

    await expect(getUserProfile(999))
      .rejects.toThrow('User not found');
  });

  test('throws when DB itself fails', async () => {
    repo.findUserById.mockRejectedValue(new Error('Connection lost'));

    await expect(getUserProfile(1))
      .rejects.toThrow('Connection lost');
  });

});