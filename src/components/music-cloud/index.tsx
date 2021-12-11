import frame from './frame.png'
import { Outer, Wrapper, Frame, Circles, Circle } from './styled'

export type Props = {
  items: readonly string[]
}

const MAX_ITEMS = 5

const MusicCloud = ({ items }: Props) => (
  <Outer>
    <Wrapper>
      <Circles>
        {items.slice(0, MAX_ITEMS).map(tag => (
          <Circle key={tag}>{tag}</Circle>
        ))}
      </Circles>
      <Frame src={frame} />
    </Wrapper>
  </Outer>
)

export default MusicCloud
