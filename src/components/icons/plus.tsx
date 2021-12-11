import { FC, SVGProps } from 'react'

const Plus: FC<SVGProps<SVGSVGElement>> = props => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M20.8 10.8l-7.777.024V3.2c0-.664-.535-1.199-1.2-1.199-.664 0-1.199.535-1.199 1.2l.024 7.6H3.199C2.535 10.8 2 11.337 2 12c0 .664.535 1.199 1.2 1.199h7.436v7.602c0 .664.535 1.199 1.2 1.199.664 0 1.199-.535 1.199-1.2v-7.6H20.8a1.2 1.2 0 000-2.399z"
      fill="#fff"
    />
  </svg>
)

export default Plus
