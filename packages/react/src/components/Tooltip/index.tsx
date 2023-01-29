import {
  TooltipPortal,
  TooltipProvider,
  TooltipTrigger,
} from '@radix-ui/react-tooltip'
import { ComponentProps } from 'react'
import { TooltipArrow, TooltipContent, TooltipRoot } from './styles'

export interface TooltipProps extends ComponentProps<typeof TooltipContent> {}

export function Tooltip({ ...props }: TooltipProps) {
  return (
    <TooltipProvider>
      <TooltipRoot>
        <TooltipTrigger asChild>{props.children}</TooltipTrigger>

        <TooltipPortal>
          <TooltipContent>
            {props['aria-label']}
            <TooltipArrow />
          </TooltipContent>
        </TooltipPortal>
      </TooltipRoot>
    </TooltipProvider>
  )
}

Tooltip.displayName = 'Tooltip'
