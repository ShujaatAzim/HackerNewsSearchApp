import { atom } from 'recoil'

export const prevSearchTermsState = atom({
  key: "prevSearchTerms",
  default: []
})