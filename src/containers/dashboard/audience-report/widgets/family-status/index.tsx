import Widget from 'components/widget'
import FamilyStatus from 'components/family-status-chart'
import { LabelsAndValues } from 'common/types'
import { Inner } from './styled'

type Props = {
  data: LabelsAndValues
}

const FamilyStatusWidget = ({ data }: Props) => {
  const marriedIndex = data.criterias.indexOf('Married')
  const parentsIndex = data.criterias.indexOf('Parents')

  return (
    <Widget title="Audience family status">
      <Inner>
        <FamilyStatus
          kind="marriage"
          percentage={data.percents[marriedIndex] * 100}
        />
        <FamilyStatus
          kind="kids"
          percentage={data.percents[parentsIndex] * 100}
        />
      </Inner>
    </Widget>
  )
}

export default FamilyStatusWidget
