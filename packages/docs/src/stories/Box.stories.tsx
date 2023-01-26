import type { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps, Text } from '@lalakira123-design-system/react'

export default {
  title: 'Surfaces/Box',
  component: Box,

  args: {
    children: (
      <>
        <Text>Testa elemento box</Text>
      </>
    )
  },
} as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {}

