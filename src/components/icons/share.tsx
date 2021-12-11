import { FC, SVGProps } from 'react'

const Share: FC<SVGProps<SVGSVGElement>> = props => (
  <svg
    width={21}
    height={21}
    viewBox="0 0 21 21"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M4.5 13a3.478 3.478 0 002.357-.93l6.26 3.577a3.52 3.52 0 101.025-1.717l-6.26-3.577c.067-.25.103-.509.109-.768l6.15-3.515a3.49 3.49 0 10-1.142-2.57c.005.288.043.575.117.853L7.434 7.6A3.5 3.5 0 104.5 13z"
      fill="currentColor"
    />
  </svg>
)

export default Share
