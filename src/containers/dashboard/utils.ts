import {
  DetailsResponse,
  Labels,
  LabelsAndValues,
  ProfileResponse,
} from 'common/types'

export const parseData = (
  profile: ProfileResponse | null,
  details: DetailsResponse | null
) => {
  const ages = profile?.data.find(
    i => i.category === 'Age - Census'
  ) as LabelsAndValues

  const genders = profile?.data.find(
    i => i.category === 'Gender'
  ) as LabelsAndValues

  const incomes = profile?.data.find(
    i => i.category === 'Personal income'
  ) as LabelsAndValues

  const familyStatus = details?.data.find(
    i => i.category === 'Family status'
  ) as LabelsAndValues

  const brands = details?.data.find(i => i.category === 'Brands') as Labels

  const musicTastes = details?.data.find(i => i.category === 'Music') as Labels

  const interests = details?.data.find(
    i => i.category === 'Likes & interests'
  ) as Labels

  const hashtags = details?.data.find(i => i.category === 'Hashtags') as Labels

  const countries = details?.data.find(
    i => i.category === 'Location: by country'
  ) as Labels

  const cities = details?.data.find(
    i => i.category === 'Location: by city'
  ) as Labels

  const followers = details?.data.find(
    i => i.category === 'Number of followers'
  ) as LabelsAndValues

  const followed = details?.data.find(
    i => i.category === 'Accounts followed'
  ) as LabelsAndValues

  const languages = details?.data.find(
    i => i.category === 'Native language'
  ) as LabelsAndValues

  const religions = details?.data.find(
    i => i.category === 'Religion'
  ) as LabelsAndValues

  const postingFreq = details?.data.find(
    i => i.category === 'Posting frequency'
  ) as LabelsAndValues

  const occupations = details?.data.find(
    i => i.category === 'Occupations'
  ) as Labels

  return {
    ages,
    genders,
    incomes,
    familyStatus,
    brands,
    musicTastes,
    interests,
    hashtags,
    countries,
    cities,
    followers,
    followed,
    languages,
    religions,
    postingFreq,
    occupations,
  }
}
