import { FC } from 'react'
import Sidebar from 'components/sidebar'
import useSectionNavigation from 'hooks/use-section-navigation'
import { Page, Content } from './styled'

export type Props = {
  navigationActive: boolean
}

const DashboardLayout: FC<Props> = ({ children, navigationActive }) => {
  const { currentSection, handleSectionChange } =
    useSectionNavigation(navigationActive)

  return (
    <Page>
      <Sidebar
        currentSection={currentSection}
        onSectionChange={handleSectionChange}
      />
      <Content>{children}</Content>
    </Page>
  )
}
export default DashboardLayout
