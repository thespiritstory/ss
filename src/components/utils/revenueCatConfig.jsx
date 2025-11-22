// RevenueCat Configuration
// Replace these with your actual RevenueCat product IDs from App Store Connect / Google Play Console

export const REVENUECAT_CONFIG = {
  // Your RevenueCat API Key (get from RevenueCat dashboard)
  // iOS: Use iOS API key
  // Android: Use Android API key
  apiKey: {
    ios: 'YOUR_IOS_API_KEY_HERE',
    android: 'YOUR_ANDROID_API_KEY_HERE',
  },

  // Product IDs - MUST match exactly with App Store Connect / Google Play Console
  products: {
    starter: 'spirit_story_starter_10', // $1 for 10 tokens
    fullPack: 'spirit_story_full_pack_100', // $4.99 for 100 tokens
    monthly: 'spirit_story_monthly_subscription', // $4.99/month for 100 tokens
  },

  // Entitlement identifiers
  entitlements: {
    subscriber: 'premium_subscriber',
  },
};

// Token amounts for each product
export const PRODUCT_TOKEN_AMOUNTS = {
  spirit_story_starter_10: 10,
  spirit_story_full_pack_100: 100,
  spirit_story_monthly_subscription: 100,
};