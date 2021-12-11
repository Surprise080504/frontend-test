import Widget from 'components/widget'
import ProgressBar from 'components/progress-bar'
import { LabelsAndValues } from 'common/types'

type Props = {
  title: string
  data: LabelsAndValues
}

const ProgressWidget = ({ data, title }: Props) => (
  <Widget title={title}>
    {data.criterias.map((label, index) => (
      <ProgressBar
        key={label}
        label={label}
        max={1}
        value={data.percents[index]}
      />
    ))}
  </Widget>
)

export default ProgressWidget
