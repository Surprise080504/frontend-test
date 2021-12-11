import { FC, SVGProps } from 'react'

const Crown: FC<SVGProps<SVGSVGElement>> = props => (
  <svg
    width={26}
    height={20}
    viewBox="0 0 26 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M12.998 6.668v9.917"
      stroke="#FFD949"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <path
      d="M14.566 1.703L13.176.301a.419.419 0 00-.596 0l-1.39 1.402a.428.428 0 000 .601l1.39 1.402a.419.419 0 00.596 0l1.39-1.402a.428.428 0 000-.601z"
      fill="#FFD949"
    />
    <path
      d="M10.625 6.005S6.015 4.354 5.05 7.222c-.453 1.343.071 3.21 1.28 5.367a18.408 18.408 0 002.65 3.364M2.86 6.938a2.673 2.673 0 00-1.523 1.255 2.713 2.713 0 00-.256 1.968c.62 2.418 4.314 6.03 4.314 6.03M15.376 6.005s4.608-1.651 5.574 1.217c.453 1.343-.07 3.21-1.28 5.367a18.41 18.41 0 01-2.649 3.364M23.14 6.938a2.673 2.673 0 011.523 1.255c.33.599.423 1.303.257 1.968-.621 2.418-4.315 6.03-4.315 6.03M20.723 18.71H5.275"
      stroke="#FFD949"
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </svg>
)

export default Crown
