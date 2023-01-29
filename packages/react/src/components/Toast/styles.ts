import { keyframes, styled } from '../../styles'
import * as Toast from '@radix-ui/react-toast'

export const ToastContainer = styled(Toast.Provider, {})

const hide = keyframes({
  from: {
    opacity: 1,
  },

  to: {
    opacity: 0,
  },
})

const slideIn = keyframes({
  from: {
    transform: 'translateX(100%)',
  },
  to: {
    transform: 'translateX(0%)',
  },
})

export const ToastRoot = styled(Toast.Root, {
  borderRadius: '$sm',
  border: '1px solid $gray600',
  backgroundColor: '$gray800',
  padding: '$3 $5',

  display: 'flex',
  flexDirection: 'column',
  gap: '$1',

  '&[data-state="open"]': {
    animation: `${slideIn} 150ms ease-out`,
  },

  '&[data-state="end"]': {
    animation: `${hide} 150ms ease-out`,
  },

  '&[data-state="closed"]': {
    animation: `${hide} 150ms ease-out`,
  },
})

export const ToastHead = styled('div', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
})

export const ToastTitle = styled(Toast.Title, {
  color: '$white',
  fontSize: '$xl',
  fontFamily: '$default',
})

export const ToastDescription = styled(Toast.Description, {
  color: '$gray200',
  fontSize: '$sm',
  fontFamily: '$default',
})

export const ToastClose = styled(Toast.Close, {
  color: '$gray200',
  fontWeight: '$bold',
  fontSize: '$xl',
  border: 'none',
  background: 'none',
  cursor: 'pointer',
})

export const ToastViewport = styled(Toast.Viewport, {
  position: 'fixed',
  bottom: 0,
  right: 0,
  margin: '0 $8 $8 0',

  maxWidth: 360,
  width: '100%',
})
