export type RGB = [number, number, number]

export type Labels = {
  category:
    | 'Brands'
    | 'Likes & interests'
    | 'Accounts followed'
    | 'Hashtags'
    | 'Location: by city'
    | 'Location: by country'
    | 'Occupations'
    | 'Music'
  criterias: readonly string[]
}

export type LabelsAndValues = {
  category:
    | 'Age - Census'
    | 'Family status'
    | 'Gender'
    | 'Number of followers'
    | 'Personal income'
    | 'Posting frequency'
    | 'Time on network'
    | 'Native language'
    | 'Religion'
  criterias: readonly string[]
  percents: readonly number[]
}

export type SectionData = Labels | LabelsAndValues

export type ProfileResponse = {
  followers: number
  url: string
  data: readonly SectionData[]
}

export type DetailsResponse = {
  data: readonly SectionData[]
}

export type TokenResponse = {
  api_token: string
  handle: string
}
