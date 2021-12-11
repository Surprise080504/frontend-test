import { MouseEvent, useMemo } from 'react'
import Logo from 'components/icons/logo'
import HomeIcon from 'components/icons/home'
import ReportIcon from 'components/icons/report'
import { Wrapper, Inner, List, ListItem, Title, Circle } from './styled'

type Section = {
  id: string
  title: string
}

const sections: Section[] = [
  { id: 'ages', title: 'Audience ages' },
  { id: 'genders', title: 'Audience genders' },
  { id: 'incomes', title: 'Audience incomes' },
  { id: 'family-status', title: 'Audience family status' },
  { id: 'interests', title: 'Audience interests' },
  { id: 'brands', title: 'Audience brand affinity' },
  { id: 'music', title: 'Audience music tastes' },
  { id: 'hashtags', title: 'Audience hashtags' },
  { id: 'countries', title: 'Audience top countries' },
  { id: 'followers', title: 'Audience followers' },
  { id: 'followed', title: 'Audience followed' },
  { id: 'languages', title: 'Audience languages' },
  { id: 'posting', title: 'Posting frequency' },
  { id: 'occupations', title: 'Audience occupations' },
]

type Props = {
  currentSection: string
  onSectionChange: (section: string) => void
}

const Sidebar = ({ currentSection, onSectionChange }: Props) => {
  const handleClick = (event: MouseEvent, section: string) => {
    event.preventDefault()
    onSectionChange(section)
  }

  const reportSectionActive = useMemo(() => {
    return sections.map(s => s.id).includes(currentSection)
  }, [currentSection])

  return (
    <Wrapper>
      <Inner>
        <Logo />
        <List>
          <ListItem>
            <a href="#profile">
              <Circle active={currentSection === 'profile'} large>
                <HomeIcon />
              </Circle>
              <Title active={currentSection === 'profile'} large>
                Home
              </Title>
            </a>
          </ListItem>
          <ListItem>
            <a href={`#${sections[0].id}`}>
              <Circle active={reportSectionActive} large>
                <ReportIcon />
              </Circle>
              <Title active={reportSectionActive} large>
                Audience report
              </Title>
            </a>
          </ListItem>
          {sections
            .sort(function (a: Section, b: Section) {
              return a.title.localeCompare(b.title)
            })
            .map(widget => (
              <ListItem key={widget.id}>
                <a
                  href={`#${widget.id}`}
                  onClick={e => handleClick(e, widget.id)}
                >
                  <Circle active={currentSection === widget.id} />
                  <Title active={currentSection === widget.id}>
                    {widget.title}
                  </Title>
                </a>
              </ListItem>
            ))}
        </List>
      </Inner>
    </Wrapper>
  )
}

export default Sidebar
