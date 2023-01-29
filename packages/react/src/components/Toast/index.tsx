import { X } from 'phosphor-react'
import { ComponentProps } from 'react'
import {
  ToastClose,
  ToastContainer,
  ToastDescription,
  ToastHead,
  ToastRoot,
  ToastTitle,
  ToastViewport,
} from './styles'

export interface ToastProps extends ComponentProps<typeof ToastRoot> {}

export function Toast({ ...props }: ToastProps) {
  return (
    <ToastContainer swipeDirection="right">
      <ToastRoot {...props}>
        <ToastHead>
          <ToastTitle>{props.title}</ToastTitle>

          <ToastClose>
            <X />
          </ToastClose>
        </ToastHead>

        <ToastDescription>{props['aria-details']}</ToastDescription>
      </ToastRoot>

      <ToastViewport />
    </ToastContainer>
  )
}

Toast.displayName = 'Toast'
