import { useState, useRef, useEffect } from 'react'

const useSectionNavigation = (dataReady = false) => {
  const [currentSection, setCurrentSection] = useState('profile')
  const sections = useRef<{ name: string; isVisible?: boolean }[]>([])
  const observer = useRef(
    typeof IntersectionObserver === 'undefined'
      ? null
      : new IntersectionObserver(
          entries => {
            entries.forEach(entry => {
              const section = sections.current.find(
                s => s.name === entry.target.id
              )

              if (section) {
                section.isVisible = entry.isIntersecting
              }
            })

            const current = sections.current.find(s => s.isVisible)
            if (current) {
              setCurrentSection(current.name)
            }
          },
          { threshold: 0.5 }
        )
  )

  const handleSectionChange = (sectionID: string) => {
    const section = document.getElementById(sectionID)
    if (section) {
      window.scrollTo(0, section.offsetTop - 20)
      // section.scrollIntoView({ behavior: 'smooth' })
    }
    setCurrentSection(sectionID)
    // history.replaceState(null, '', `#${sectionID}`)
  }

  useEffect(() => {
    document.querySelectorAll('[data-type=widget]').forEach(element => {
      sections.current.push({ name: element.id })
      observer.current?.observe(element)
    })

    return () => {
      observer.current?.disconnect()
    }
  }, [observer, dataReady])

  return { currentSection, handleSectionChange }
}

export default useSectionNavigation
