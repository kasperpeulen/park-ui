import { fileURLToPath } from "node:url";
import { dirname } from "node:path";
import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
  framework: getAbsolutePath("@storybook/react-vite"),
  stories: ['../src/examples/**/*.stories.tsx'],
  addons: [getAbsolutePath("@storybook/addon-a11y"), getAbsolutePath("@storybook/addon-themes")],
  core: {
    disableTelemetry: true,
  },
  typescript: {
    reactDocgen: false,
  },
}

export default config

function getAbsolutePath(value: string): any {
  return dirname(fileURLToPath(import.meta.resolve(`${value}/package.json`)));
}
