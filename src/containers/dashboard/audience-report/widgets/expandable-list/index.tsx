import Widget from 'components/widget'
import ExpandableList from 'components/expandable-list'
import { Labels } from 'common/types'

type Props = {
  data: Labels
  title: string
}

const ExpandableListWidget = ({ data, title }: Props) => (
  <Widget title={title}>
    <ExpandableList items={data.criterias} expandLabel="View all items" />
  </Widget>
)

export default ExpandableListWidget
