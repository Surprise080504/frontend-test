import { FC, SVGProps } from 'react'

const Checkmark: FC<SVGProps<SVGSVGElement>> = props => (
  <svg
    width={27}
    height={26}
    viewBox="0 0 27 26"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M1.5 14.6L8.357 21 25.5 5"
      stroke="#fff"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
)

export default Checkmark
