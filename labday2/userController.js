/**
 * userController.js
 * Orchestration layer — ties together service calls.
 * In a real Express app, this would handle HTTP req/res.
 * Here we keep it framework-free so it's easy to test without a server.
 */

const { registerUser, getUserProfile, removeUser } = require('../service/userService');

/**
 * Handle a registration request.
 * Returns { success, user } or throws on failure.
 */
async function handleRegister(userData) {
  const user = await registerUser(userData);
  return { success: true, user };
}

/**
 * Handle a get-profile request.
 * Returns { success, profile } or throws on failure.
 */
async function handleGetProfile(userId) {
  const profile = await getUserProfile(userId);
  return { success: true, profile };
}

/**
 * Handle a delete-user request.
 * Returns { success } or throws on failure.
 */
async function handleDeleteUser(userId) {
  await removeUser(userId);
  return { success: true };
}

module.exports = {
  handleRegister,
  handleGetProfile,
  handleDeleteUser,
};