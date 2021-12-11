import Widget from 'components/widget'
import ExpandableList from 'components/expandable-list'
import MusicCloud from 'components/music-cloud'
import { Labels } from 'common/types'
import { Inner, ListWrapper, CloudWrapper } from './styled'

type Props = {
  data: Labels
}

const MusicWidget = ({ data }: Props) => {
  return (
    <Widget title="Audience music tastes">
      <Inner>
        <ListWrapper>
          <ExpandableList
            items={data.criterias}
            expandLabel="View all tastes"
          />
        </ListWrapper>
        <CloudWrapper>
          <MusicCloud items={data.criterias} />
        </CloudWrapper>
      </Inner>
    </Widget>
  )
}

export default MusicWidget
