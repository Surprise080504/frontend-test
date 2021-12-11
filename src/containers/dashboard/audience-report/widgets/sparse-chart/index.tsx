import Widget from 'components/widget'
import SparseChart from 'components/sparse-chart'
import { LabelsAndValues } from 'common/types'

type Props = {
  data: LabelsAndValues
  title: string
}

const SparseChartWidget = ({ data, title }: Props) => (
  <Widget title={title}>
    {data.criterias.map((label, index) => (
      <SparseChart key={label} label={label} value={data.percents[index]} />
    ))}
  </Widget>
)

export default SparseChartWidget
