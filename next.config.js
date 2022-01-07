/** @type {import('next').NextConfig} */
const withTM = require('next-transpile-modules')([
  '@jhon-acasa/components.themes.provider',
  '@jhon-acasa/components.blocks.nav',
  '@jhon-acasa/components.ui.icons',
  '@jhon-acasa/components.ui.button',
  '@jhon-acasa/components.blocks.footer'
]);

const config = {
  reactStrictMode: true
}

module.exports = withTM(config)
