import Widget from 'components/widget'
import GenderChart, { Props as GenderProps } from 'components/gender-chart'
import { LabelsAndValues } from 'common/types'
import { Inner } from './styled'

type Props = {
  data: LabelsAndValues
}

const GendersWidget = ({ data }: Props) => (
  <Widget title="Audience genders">
    <Inner>
      {data.criterias.map((label, index) => (
        <GenderChart
          key={label}
          gender={label.toLowerCase() as GenderProps['gender']}
          percentage={data.percents[index] * 100}
        />
      ))}
    </Inner>
  </Widget>
)

export default GendersWidget
