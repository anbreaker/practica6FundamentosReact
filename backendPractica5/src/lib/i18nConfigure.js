'use stric';

const i18n = require('i18n');
const path = require('path');

i18n.configure({
  locales: ['en', 'es'],
  directory: path.join(__dirname, '..', 'locales'),
  defaultLocale: 'en',
  autoReload: true,
  syncFiles: true, // Create literals in all languages
  cookie: 'nodeapi-locale',
});

// Use i18n on script
i18n.setLocale('en');
module.exports = i18n;
