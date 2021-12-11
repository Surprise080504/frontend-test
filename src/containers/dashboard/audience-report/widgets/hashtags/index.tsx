import Widget from 'components/widget'
import Hashtags from 'components/hashtags'
import BubbleCloud from 'components/bubble-cloud'
import { Labels } from 'common/types'
import { Inner, CloudWrapper } from './styled'

type Props = {
  data: Labels
}

const HashtagsWidget = ({ data }: Props) => {
  return (
    <Widget title="Audience hashtags">
      <Inner>
        <Hashtags items={data.criterias} />
        <CloudWrapper>
          <BubbleCloud items={data.criterias} />
        </CloudWrapper>
      </Inner>
    </Widget>
  )
}

export default HashtagsWidget
