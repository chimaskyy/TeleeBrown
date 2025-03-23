
import * as React from "react"

export interface ClockProps extends React.SVGAttributes<SVGElement> {}

const Clock = React.forwardRef<SVGSVGElement, ClockProps>(
  ({ className, ...props }, ref) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      ref={ref}
      {...props}
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
)
Clock.displayName = "Clock"

export { Clock }
