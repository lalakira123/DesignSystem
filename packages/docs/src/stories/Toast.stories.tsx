import type { Meta, StoryObj } from '@storybook/react'
import { Button, Toast, ToastProps } from '@lalakira123-design-system/react'
import { useState } from 'react'

export default {
  title: 'Data Display/Toast',
  component: Toast,

  args: {
    title: 'Agendamento Realizado',
    'aria-details': 'Quarta-feira, 23 de Outubro às 16h',
    open: false,
    onOpenChange: () => {},
  },
  decorators: [
    (Story) => {
      const [open, setOpen] = useState(false)

      return (
        <>
          <Button onClick={() => setOpen(true)}>Open Toast</Button>
          <Story
            args={{
              title: 'Agendamento Realizado',
              'aria-details': 'Quarta-feira, 23 de Outubro às 16h',
              open: open,
              onOpenChange: setOpen,
            }}
          />
        </>
      )
    },
  ],
} as Meta<ToastProps>

export const Primary: StoryObj<ToastProps> = {}
