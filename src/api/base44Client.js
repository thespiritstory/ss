import { createClient } from '@base44/sdk';
// import { getAccessToken } from '@base44/sdk/utils/auth-utils';

// Create a client with authentication required
export const base44 = createClient({
  appId: "68e06889652a326681f74c11", 
  requiresAuth: true // Ensure authentication is required for all operations
});
