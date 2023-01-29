import { keyframes, styled } from '../../styles'
import * as Tooltip from '@radix-ui/react-tooltip'

export const TooltipRoot = styled(Tooltip.Root, {})

const slideDownAndFade = keyframes({
  from: {
    opacity: 0,
    transform: 'translateY(-2px)',
  },
  to: {
    opacity: 1,
    transform: 'translateY(0)',
  },
})

export const TooltipContent = styled(Tooltip.Content, {
  backgroundColor: '$gray900',
  padding: '$3 $4',
  color: '$gray100',
  fontWeight: 500,
  fontSize: '$sm',
  fontFamily: '$default',
  borderRadius: 5,
  animation: `${slideDownAndFade} 150ms ease-out`,
})

export const TooltipArrow = styled(Tooltip.Arrow, {})
