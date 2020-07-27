module.exports = {
  stories: ['../src/components/**/story.tsx'],
  addons: [
    '@storybook/preset-typescript',
    '@storybook/addon-actions',
    '@storybook/addon-links',
    '@storybook/addon-knobs/register'
  ]
}
