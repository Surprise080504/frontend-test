import { rgbFromScale } from 'common/utils'
import theme from 'styles/theme'
import { Wrapper, Tag } from './styled'

export type Props = {
  items: readonly string[]
  max?: number
}

const Hashtags = ({ items, max = 50 }: Props) => (
  <Wrapper>
    {items.slice(0, max).map((tag, index) => (
      <Tag
        key={tag}
        color={rgbFromScale(
          index / Math.min(items.length - 1, max),
          ...theme.color.gradient.scale
        )}
      >
        {tag}
      </Tag>
    ))}
  </Wrapper>
)

export default Hashtags
