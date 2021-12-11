import Profile from 'components/profile'
import Layout from 'components/layouts/dashboard'
import KnownError from 'components/known-error'
import api from 'common/api'
import { useUserContext } from 'context/user'
import useApiData from 'hooks/use-api-data'
import requireAuth from 'hocs/require-auth'
import { parseData } from './utils'
import AudienceReport from './audience-report'
import Section from 'components/section'

const Dashboard = () => {
  const { username } = useUserContext()
  const params = new URLSearchParams(location.search)
  const handle = params.get('username') || username

  // load data
  const { data: profile, error } = useApiData(() => api.getProfile(handle))
  const { data: details } = useApiData(() => api.getDetails(handle))

  const data = parseData(profile, details)
  return (
    <Layout navigationActive={Boolean(profile && details)}>
      {error && <KnownError message={error} />}
      {profile && (
        <Section id="profile">
          <Profile
            url={profile.url}
            followers={profile.followers}
            username={username}
          />
        </Section>
      )}
      <AudienceReport data={data} />
    </Layout>
  )
}

export default requireAuth(Dashboard)
