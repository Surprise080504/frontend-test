import Section from 'components/section'
import {
  BarChartWidget,
  CloudWidget,
  CountryListWidget,
  ExpandableListWidget,
  FamilyStatusWidget,
  GendersWidget,
  HashtagsWidget,
  MusicWidget,
  ProgressWidget,
  SparseChartWidget,
} from './widgets'
import { parseData } from '../utils'
import { Sections, TwoColumns } from './styled'

type Props = {
  data: ReturnType<typeof parseData>
}

const AudienceReport = ({ data }: Props) => (
  <Sections>
    {data.ages && (
      <Section id="ages">
        <ProgressWidget title="Audience ages" data={data.ages} />
      </Section>
    )}
    {data.genders && (
      <Section id="genders">
        <GendersWidget data={data.genders} />
      </Section>
    )}
    {data.incomes && (
      <Section id="incomes">
        <ProgressWidget title="Audience incomes" data={data.incomes} />
      </Section>
    )}
    {data.familyStatus && (
      <Section id="family-status">
        <FamilyStatusWidget data={data.familyStatus} />
      </Section>
    )}
    {data.interests && (
      <Section id="interests">
        <CloudWidget
          title="Audience interests"
          data={data.interests}
          expandLabel="View all interests"
        />
      </Section>
    )}
    {data.brands && (
      <Section id="brands">
        <CloudWidget
          title="Audience brand affinity"
          data={data.brands}
          expandLabel="View all brands"
        />
      </Section>
    )}
    {data.musicTastes && (
      <Section id="music">
        <MusicWidget data={data.musicTastes} />
      </Section>
    )}
    {data.hashtags && (
      <Section id="hashtags">
        <HashtagsWidget data={data.hashtags} />
      </Section>
    )}
    {data.countries && data.cities && (
      <Section id="countries">
        <TwoColumns>
          <CountryListWidget
            title="Audience top countries"
            data={data.countries}
          />
          <ExpandableListWidget
            title="Audience top cities"
            data={data.cities}
          />
        </TwoColumns>
      </Section>
    )}
    {data.followers && (
      <Section id="followers">
        <SparseChartWidget title="Audience followers" data={data.followers} />
      </Section>
    )}
    {data.followed && (
      <Section id="followed">
        <SparseChartWidget title="Audience followed" data={data.followed} />
      </Section>
    )}
    {data.languages && data.religions && (
      <Section id="languages">
        <TwoColumns>
          <BarChartWidget title="Audience languages" data={data.languages} />
          <BarChartWidget title="Audience religions" data={data.religions} />
        </TwoColumns>
      </Section>
    )}
    {data.postingFreq && (
      <Section id="posting">
        <ProgressWidget title="Posting frequency" data={data.postingFreq} />
      </Section>
    )}
    {data.occupations && (
      <Section id="occupations">
        <CloudWidget
          title="Audience occupations"
          data={data.occupations}
          expandLabel="View all occupations"
        />
      </Section>
    )}
  </Sections>
)

export default AudienceReport
