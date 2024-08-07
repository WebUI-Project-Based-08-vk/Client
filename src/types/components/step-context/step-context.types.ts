import { CityType, CountryType } from '~/types'

export interface StepDataType {
  firstName: string
  lastName: string
  country: CountryType | null
  city: CityType | null
  professionalSummary: string
  subjects: string[]
  language: string | null
  photo: {
    file: File[]
    image: string | null
  }
  // errors: { [key: string]: never }
}

export interface StepDataTypeClean {
  firstName: string
  lastName: string
  country: string | null
  city: string | null
  professionalSummary: string | null
  subjects: string[]
  language: string | null
  photo: string | null
}
