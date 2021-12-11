import { useRef, useEffect, useState, FC } from 'react'
import { createPortal } from 'react-dom'

const ModalPortal: FC = ({ children }) => {
  const ref = useRef<HTMLElement>()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    let portalNode = document.getElementById('portal')
    if (!portalNode) {
      portalNode = document.createElement('div')
      portalNode.setAttribute('id', 'portal')
      document.body.appendChild(portalNode)
    }
    ref.current = portalNode
    setMounted(true)
  }, [])

  return mounted && ref.current ? createPortal(children, ref.current) : null
}

export default ModalPortal
