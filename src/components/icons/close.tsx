import { FC, SVGProps } from 'react'

const Close: FC<SVGProps<SVGSVGElement>> = props => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M13.77 12l7.864-7.865a1.25 1.25 0 10-1.768-1.769L12 10.232 4.135 2.366a1.25 1.25 0 10-1.769 1.77L10.232 12l-7.866 7.865a1.25 1.25 0 101.77 1.769L12 13.768l7.865 7.866a1.247 1.247 0 001.768 0 1.25 1.25 0 000-1.77L13.77 12z"
      fill="#fff"
    />
  </svg>
)

export default Close
