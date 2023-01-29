import type { Meta, StoryObj } from '@storybook/react'
import { Button, Tooltip, TooltipProps } from '@lalakira123-design-system/react'

export default {
  title: 'Data Display/Tooltip',
  component: Tooltip,

  args: {
    'aria-label': '26 de Outubro - Indisponível',
    children: <Button>Hover Here</Button>,
  },
} as Meta<TooltipProps>

export const Primary: StoryObj<TooltipProps> = {}
