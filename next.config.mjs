// next.config.mjs
/** @type {import('next').NextConfig} */

import withTM from 'next-transpile-modules';

const transpileModules = withTM([
  // antd & deps
  "antd",
  "@ant-design/icons",
  "rc-cascader",
  "rc-checkbox",
  "rc-collapse",
  "rc-dialog",
  "rc-drawer",
  "rc-dropdown",
  "rc-field-form",
  "rc-image",
  "rc-input",
  "rc-input-number",
  "rc-mentions",
  "rc-menu",
  "rc-motion",
  "rc-notification",
  "rc-pagination",
  "rc-picker",
  "rc-progress",
  "rc-rate",
  "rc-resize-observer",
  "rc-segmented",
  "rc-select",
  "rc-slider",
  "rc-steps",
  "rc-switch",
  "rc-table",
  "rc-tabs",
  "rc-textarea",
  "rc-tooltip",
  "rc-tree",
  "rc-tree-select",
  "rc-upload",
  "rc-util",
]);

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['assets-in.bmscdn.com', 'www.freeiconspng.com'],
  },
};

export default transpileModules(nextConfig);