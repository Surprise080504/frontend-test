import PlusCircleIcon from 'components/icons/plus-circle'
import PlusIcon from 'components/icons/plus'
import { Wrapper, Details, Title, Message, AddButton } from './styled'

export type Props = {
  onClick: () => void
}

const NewMatch = ({ onClick }: Props) => (
  <Wrapper>
    <Details>
      <Title>Create a new match</Title>
      <Message>Compare a list of Instagram handles</Message>
    </Details>
    <AddButton onClick={onClick}>
      <span>New request</span>
      <PlusCircleIcon />
      <PlusIcon />
    </AddButton>
  </Wrapper>
)

export default NewMatch
