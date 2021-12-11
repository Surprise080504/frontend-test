import { formatNumber, formatPercent } from 'common/utils'
import CopyLink from './copy-link'
import {
  Wrapper,
  Image,
  Username,
  Location,
  Details,
  UsernameWrapper,
  PersonalInfo,
  StatsWrapper,
  StatsItem,
  Value,
  Label,
} from './styled'

export type Props = {
  imageUrl?: string
  username: string
  location?: string
  followers: number
  views?: number
  engagement?: number
  url: string
}

const ProfileView = ({
  imageUrl,
  username,
  location,
  followers,
  views,
  engagement,
  url,
}: Props) => (
  <Wrapper>
    <Details>
      <PersonalInfo>
        {imageUrl && <Image src={imageUrl} alt={username} />}
        <UsernameWrapper>
          <Username>{username}</Username>
          <Location>{location}</Location>
        </UsernameWrapper>
      </PersonalInfo>
      <StatsWrapper>
        <StatsItem>
          <Value>{formatNumber(followers)}</Value>
          <Label>followers</Label>
        </StatsItem>
        {views && (
          <StatsItem>
            <Value>{formatNumber(views)}</Value>
            <Label>All time views</Label>
          </StatsItem>
        )}
        {engagement && (
          <StatsItem>
            <Value>{formatPercent(engagement)}</Value>
            <Label>Engagement</Label>
          </StatsItem>
        )}
      </StatsWrapper>
    </Details>
    <CopyLink link={url} />
  </Wrapper>
)

export default ProfileView
