import lookup from 'country-code-lookup'
import ExpandableList from 'components/expandable-list'
import { StyledFlag } from './styled'

export type Props = {
  items: readonly string[]
  max?: number
}

const CountryList = ({ items, max }: Props) => (
  <ExpandableList
    items={items}
    max={max}
    expandLabel="View all countries"
    addon={item =>
      lookup.byCountry(item) && (
        <StyledFlag code={lookup.byCountry(item)?.iso2} />
      )
    }
  />
)

export default CountryList
