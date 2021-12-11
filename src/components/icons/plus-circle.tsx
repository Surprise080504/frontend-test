import { FC, SVGProps } from 'react'

const PlusCircle: FC<SVGProps<SVGSVGElement>> = props => (
  <svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width={24} height={24} rx={12} fill="#fff" />
    <path
      d="M16.592 11.375l-4.058.012V7.41a.624.624 0 00-.626-.626.624.624 0 00-.626.626l.013 3.966H7.408a.624.624 0 00-.625.626c0 .346.279.625.625.625h3.88v3.966a.624.624 0 101.252 0v-3.966h4.052a.626.626 0 000-1.252z"
      fill="#0D8FE6"
    />
  </svg>
)

export default PlusCircle
