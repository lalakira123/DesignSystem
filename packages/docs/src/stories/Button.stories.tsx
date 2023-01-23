import type { Meta, StoryObj } from '@storybook/react'
import { Button, ButtonProps } from '@ignite-ui/react'

export default {
  title: 'Button',
  component: Button,

  args: {
    children: 'Enviar',
  },
} as Meta<ButtonProps>

export const Primary: StoryObj = {
  args: {
    size: 'small',
  }
}

export const Big: StoryObj = {
  args: {
    size: 'big',
  }
}
