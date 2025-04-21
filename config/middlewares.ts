export default [
  'strapi::logger',
  'strapi::errors',
  'strapi::security',
  {
    name: 'strapi::cors', // Override default CORS settings
    config: {
      origin: ['http://localhost:3000'], // Allow your React app
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'PATCH', 'OPTIONS'], // Allowed HTTP methods
      headers: ['Content-Type', 'Authorization'], // Allowed headers
      credentials: true, // Enable cookies/auth if needed
    },
  },
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];