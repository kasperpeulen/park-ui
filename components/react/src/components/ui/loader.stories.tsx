import type { Meta, StoryObj } from '@storybook/react-vite'

import { Loader } from './loader'

const meta = {
  component: Loader,
} satisfies Meta<typeof Loader>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    visible: true,
  },
}
