import { rgbFromScale } from 'common/utils'
import theme from 'styles/theme'
import { List, ListItem, Index, Label, Text } from './styled'

export type Props = {
  items: readonly string[]
  max?: number
  multiColumns?: boolean
  addon?: (item: string) => JSX.Element | null
}

const SortedList = ({ items, max, addon, multiColumns = false }: Props) => {
  const total = max ? Math.min(items.length, max) : items.length
  return (
    <List multiColumns={multiColumns}>
      {items.slice(0, total).map((item, index) => (
        <ListItem key={item}>
          <Index
            color={rgbFromScale(
              index / Math.min(items.length - 1, total),
              ...theme.color.gradient.scale
            )}
          >
            {index + 1}
          </Index>
          <Label>
            <Text>{item}</Text>
            {addon && addon(item)}
          </Label>
        </ListItem>
      ))}
    </List>
  )
}

export default SortedList
