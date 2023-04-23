// vite.config.js
const { withPlugins } = require('next-compose-plugins');
const withVite = require('next-vite');

module.exports = withPlugins([withVite], {
  vite: {
    ssr: {
      external: ['react', 'react-dom', '@apollo/client']
    }
  },
  // Next.js configuration options go here
});
