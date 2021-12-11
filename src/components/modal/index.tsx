import { FC } from 'react'
import { CSSTransition } from 'react-transition-group'
import ModalPortal from 'components/modal-portal'
import { Overlay, Content, Panel, CloseIcon } from './styled'

export type Props = {
  isOpen: boolean
  onClose: () => void
}

const Modal: FC<Props> = ({ children, isOpen, onClose }) => {
  return (
    <ModalPortal>
      <CSSTransition timeout={300} in={isOpen} unmountOnExit>
        <Overlay onClick={() => onClose()}></Overlay>
      </CSSTransition>
      <CSSTransition timeout={300} in={isOpen} unmountOnExit>
        <Content role="dialog">
          <CloseIcon onClick={() => onClose()} />
          <Panel>{children}</Panel>
        </Content>
      </CSSTransition>
    </ModalPortal>
  )
}

export default Modal
