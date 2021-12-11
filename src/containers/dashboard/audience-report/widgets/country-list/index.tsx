import Widget from 'components/widget'
import CountryList from 'components/country-list'
import { Labels } from 'common/types'

type Props = {
  data: Labels
  title: string
}

const CountryListWidget = ({ data, title }: Props) => (
  <Widget title={title}>
    <CountryList items={data.criterias} />
  </Widget>
)

export default CountryListWidget
