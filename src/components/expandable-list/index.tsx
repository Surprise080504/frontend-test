import { useState } from 'react'
import { OutlineButton } from 'components/button'
import Modal from 'components/modal'
import SortedList from 'components/sorted-list'
import useScrollLock from 'hooks/use-scroll-lock'

export type Props = {
  items: readonly string[]
  expandLabel: string
  max?: number
  addon?: (item: string) => JSX.Element | null
}

const ExpandableList = ({ items, expandLabel, addon, max = 5 }: Props) => {
  const [isOpen, setOpen] = useState(false)
  useScrollLock(isOpen)

  return (
    <>
      <SortedList max={max} items={items} addon={addon} />
      {items.length > max && (
        <OutlineButton onClick={() => setOpen(true)}>
          {expandLabel}
        </OutlineButton>
      )}
      <Modal isOpen={isOpen} onClose={() => setOpen(false)}>
        <SortedList items={items} multiColumns addon={addon} />
      </Modal>
    </>
  )
}

export default ExpandableList
