import { useEffect } from 'react'

export const scrollLockHandler = (isOpen: boolean) => {
  if (isOpen) {
    document.body.style.top = `-${window.pageYOffset / 10}rem`
    document.body.style.position = 'fixed'
    document.body.style.left = '0'
    document.body.style.right = '0'
  } else {
    const offset = parseInt(document.body.style.top.replace(/[^\d]+/gu, ''), 10)
    document.body.style.top = '0'
    document.body.style.position = 'inherit'
    window.scrollTo(0, offset)
  }
}

const useScrollLock = (isOpen: boolean) => {
  useEffect(() => {
    scrollLockHandler(isOpen)
  }, [isOpen])
}

export default useScrollLock
