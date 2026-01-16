import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { storybookTest } from '@storybook/addon-vitest/vitest-plugin';
import { playwright } from '@vitest/browser-playwright';
import { defineConfig, mergeConfig } from 'vitest/config';
const dirname = path.dirname(fileURLToPath(import.meta.url));
import viteConfig from './vite.config';
export default mergeConfig(viteConfig, defineConfig({
  test: {
    projects: [{
      extends: true,
      test: {
        projects: [{
          extends: true,
          plugins: [storybookTest({
            configDir: path.join(dirname, '.storybook')
          })],
          test: {
            name: 'storybook',
            browser: {
              enabled: true,
              provider: playwright(),
              headless: true,
              instances: [{
                browser: 'chromium'
              }]
            },
            setupFiles: ['./.storybook/vitest.setup.ts']
          }
        }]
      }
    }, {
      extends: true,
      plugins: [
      // The plugin will run tests for the stories defined in your Storybook config
      // See options at: https://storybook.js.org/docs/next/writing-tests/integrations/vitest-addon#storybooktest
      storybookTest({
        configDir: path.join(dirname, '.storybook')
      })],
      test: {
        name: 'storybook',
        browser: {
          enabled: true,
          headless: true,
          provider: playwright({}),
          instances: [{
            browser: 'chromium'
          }]
        },
        setupFiles: ['.storybook/vitest.setup.ts']
      }
    }]
  }
}));