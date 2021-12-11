import frame from './frame.png'
import { Outer, Wrapper, Frame, Circles, Circle } from './styled'

export type Props = {
  items: readonly string[]
}

const BubbleCloud = ({ items }: Props) => (
  <Outer>
    <Wrapper>
      <Circles>
        {items.slice(0, 7).map(tag => (
          <Circle key={tag}>{tag}</Circle>
        ))}
      </Circles>
      <Frame src={frame} />
    </Wrapper>
  </Outer>
)

export default BubbleCloud
