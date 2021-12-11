import Widget from 'components/widget'
import ExpandableList from 'components/expandable-list'
import BubbleCloud from 'components/bubble-cloud'
import { Labels } from 'common/types'
import { Inner, ListWrapper, CloudWrapper } from './styled'

type Props = {
  data: Labels
  title: string
  expandLabel: string
}

const CloudWidget = ({ data, title, expandLabel }: Props) => {
  return (
    <Widget title={title}>
      <Inner>
        <ListWrapper>
          <ExpandableList items={data.criterias} expandLabel={expandLabel} />
        </ListWrapper>
        <CloudWrapper>
          <BubbleCloud items={data.criterias} />
        </CloudWrapper>
      </Inner>
    </Widget>
  )
}

export default CloudWidget
