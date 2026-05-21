/**
 * Vercel Web Analytics - Package-based implementation
 * Using @vercel/analytics npm package
 */
import { inject } from '@vercel/analytics';

// Initialize Vercel Analytics
inject({
  mode: 'production'
});
