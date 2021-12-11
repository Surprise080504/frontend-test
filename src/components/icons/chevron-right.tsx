import { FC, SVGProps } from 'react'

const ChevronRight: FC<SVGProps<SVGSVGElement>> = props => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M9 4.999l7 7-7 7"
      stroke="currentColor"
      strokeWidth={3.391}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default ChevronRight
