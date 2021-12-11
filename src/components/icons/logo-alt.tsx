import { FC, SVGProps } from 'react'

const LogoAlt: FC<SVGProps<SVGSVGElement>> = props => (
  <svg
    width={82}
    height={82}
    viewBox="0 0 82 82"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <circle cx={41} cy={41} r={41} fill="#0D8FE6" />
    <path
      d="M65.48 35.983L54.54 55.567l.06 6.588h11l-.12-26.172zM16.4 62.155h11.061v-5.863l-11.06-19.765v25.628zm39.227-42.31L41.121 44.264 26.252 19.845H16.4l11.061 20.49 10.82 17.65h5.318L54.48 39.73l10.698-19.886h-9.55z"
      fill="#fff"
    />
  </svg>
)

export default LogoAlt
