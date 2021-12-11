import { Wrapper, Svg, Title } from './styled'

export type Props = {
  gender: 'male' | 'female'
  percentage: number
}

const paths = {
  female: (
    <path d="M194.413 80.237c0-44.24-35.911-80.101-80.152-80.101-3.741 0-7.432.25-11.072.748-39.353 4.988-69.828 38.604-69.828 79.353 0 38.705 27.482 70.975 63.992 78.406v51.473h-36.06v31.971h36.06v32.021h31.971v-32.021h36.061v-31.971h-36.061v-51.173c37.058-7.033 65.089-39.602 65.089-78.706zm-80.252 48.032c-26.484 0-48.03-21.547-48.03-48.032 0-26.484 21.546-48.03 48.03-48.03 26.485 0 48.031 21.546 48.031 48.03 0 26.485-21.546 48.032-48.031 48.032z" />
  ),
  male: (
    <path d="M25.437 224.751c33.916 33.916 88.83 33.916 122.746 0 29.677-29.677 33.368-75.563 11.023-109.23l41.547-41.547v37.856l26.485-26.484V23h-62.346l-26.534 26.435h37.856l-41.547 41.547c-33.717-22.345-79.553-18.654-109.23 11.022-33.916 33.917-33.916 88.881 0 122.747zm98.207-98.207c20.3 20.3 20.3 53.368 0 73.667-20.3 20.3-53.368 20.3-73.668 0-20.3-20.299-20.3-53.367 0-73.667 20.3-20.3 53.318-20.3 73.668 0z" />
  ),
}

const GenderChart = ({ gender, percentage }: Props) => (
  <Wrapper>
    <Title>{gender}</Title>
    <Svg
      viewBox="0 0 228 275"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      value={percentage}
    >
      {paths[gender]}
      {paths[gender]}
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="32.81%" stopColor="#93bcfc" />
          <stop offset="51.56%" stopColor="#1d86e6" />
          <stop offset="77.6%" stopColor="#272dd1" />
          <stop offset="100%" stopColor="#03018c" />
        </linearGradient>
      </defs>
    </Svg>
  </Wrapper>
)

export default GenderChart
