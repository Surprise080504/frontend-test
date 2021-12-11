import Widget from 'components/widget'
import ExpandableList from 'components/expandable-list'
import BarChart from 'components/bar-chart'
import { LabelsAndValues } from 'common/types'

type Props = {
  data: LabelsAndValues
  title: string
}

const BarChartWidget = ({ data, title }: Props) => (
  <Widget title={title}>
    <BarChart items={data.percents.slice(0, 5)} />
    <ExpandableList items={data.criterias} expandLabel="View all items" />
  </Widget>
)

export default BarChartWidget
