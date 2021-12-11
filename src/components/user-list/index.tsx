import { rgbFromScale } from 'common/utils'
import theme from 'styles/theme'
import { List, ListItem, Picture, Username, Name, Value } from './styled'

export type Props = {
  items: readonly {
    user: {
      username: string
      name: string
      imageUrl: string
    }
    value: number
  }[]
}

const UserList = ({ items }: Props) => (
  <List>
    {items.map(item => (
      <ListItem key={item.user.username}>
        <Picture src={item.user.imageUrl} />
        <div>
          <Username>{item.user.username}</Username>
          <Name>{item.user.name}</Name>
        </div>
        <Value
          color={rgbFromScale(
            (100 - item.value) / 100,
            ...theme.color.gradient.scale
          )}
        >
          {item.value}%
        </Value>
      </ListItem>
    ))}
  </List>
)

export default UserList
