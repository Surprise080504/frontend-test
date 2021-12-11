import { useMemo } from 'react'
import { rgbFromScale } from 'common/utils'
import theme from 'styles/theme'
import { Bar, BarItem } from './styled'

export type Props = {
  items: readonly number[]
  max?: number
}

const BarChart = ({ items, max = 7 }: Props) => {
  const sortedItems = useMemo(() => items.slice(0, max), [])

  const total = useMemo(
    () => sortedItems.reduce((acc, i) => acc + i, 0),
    [sortedItems]
  )

  return (
    <Bar>
      {sortedItems.map((item, index) => (
        <BarItem
          key={item}
          color={rgbFromScale(
            index / (items.length - 1),
            ...theme.color.gradient.scale
          )}
          width={(item / total) * 100}
        />
      ))}
    </Bar>
  )
}

export default BarChart
