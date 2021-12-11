import {
  Wrapper,
  AvatarList,
  Avatar,
  Details,
  ChevronRight,
  Title,
  Subtitle,
} from './styled'

export type Props = {
  name: string
  size: number
}

const MatchItem = ({ name, size }: Props) => (
  <Wrapper>
    <AvatarList>
      <Avatar src="https://instagirls.live/storage/imgs/l9Ez.jpg" />
      <Avatar src="https://instagirls.live/storage/imgs/l9Ez.jpg" />
      <Avatar src="https://instagirls.live/storage/imgs/l9Ez.jpg" />
    </AvatarList>
    <Details>
      <Title>{name}</Title>
      <Subtitle>
        {size} influencers. <span>Click to see</span>
      </Subtitle>
    </Details>
    <ChevronRight />
  </Wrapper>
)

export default MatchItem
