import type { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@ignite-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,

  args: {
    children: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Obcaecati similique possimus ratione, eaque quia dolorem? Ducimus consectetur veniam odio natus aut necessitatibus, laudantium accusantium est dolorem? Corporis esse voluptatum ab.',
  },
} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTag: StoryObj<TextProps> = {
  args: {
    children: 'Strong text',
    as: 'strong',
  },
}
