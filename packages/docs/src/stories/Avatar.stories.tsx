import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarProps } from '@lalakira123-design-system/react'

export default {
  title: 'Data display/Avatar',
  component: Avatar,

  args: {
    src: 'https://github.com/lalakira123.png',
    alt: 'Laerte Akira',
  },
  argTypes: {
    src: {
      type: 'string',
    },
  },
} as Meta<AvatarProps>

export const Primary: StoryObj<AvatarProps> = {}

export const WithFallback: StoryObj<AvatarProps> = {
  args: {
    src: undefined,
  },
}
