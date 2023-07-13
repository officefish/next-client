import {FC, PropsWithChildren} from 'react'
import { create } from 'zustand'
import createContext from 'zustand/context'
import { ISettingsState } from './types'
import { 
    IFullName, 
    ILocation, 
    ICareer, 
    IEducation,
    IQuote,
    IDomain,
    IAvatar,
    ICover
} from '@/models/profile.types'

import avatar from '@public/team-2-800x800.jpg'
const background = "@public/cover-149.jpeg"

const NullFullName:IFullName = {
    firstName: '', 
    secondName:'', 
    domainName: ''
}

const NullLocation:ILocation = {
    country: '',
    region: '',
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone
}

const NullCareer:ICareer = {
    company: '',
    role: ''
}

const NullEducation:IEducation = {
    university: '',
    faculty: ''
}

const NullQuote:IQuote = {
    value: ''
}

const NullDomain:IDomain = {
    value: ''
}

const NullAvatar:IAvatar = {
    id: '1',
    imageUrl: avatar.src,
    croppedImageUrl: null
}

const NullCover:ICover = {
    id: '1',
    imageUrl: background
}

const createProfileSettingsStore = create<ISettingsState>()((set) => ({
    fullName: {...NullFullName},
    setFullName: (newFullName:IFullName) => set(() => ({ fullName: {...newFullName}})),
    isValidFullName: true,
    invalidFullName: () => set(() => ({isValidFullName: false})),
    location: {...NullLocation},
    setLocation: (newLocation:ILocation) => set(() => ({ location: {...newLocation}})),
    isValidLocation: true,
    invalidLocation: () => set(() => ({isValidLocation: false})),
    career: {...NullCareer},
    setCareer: (newCareer:ICareer) => set(() => ({ career: {...newCareer}})),
    isValidCareer: true,
    invalidCareer: () => set(() => ({isValidCareer: false})),
    education: {...NullEducation},
    setEducation: (newEducation:IEducation) => set(() => ({ education: {...newEducation}})),
    isValidEducation: true,
    invalidEducation: () => set(() => ({isValidEducation: false})), 
    quote: {...NullQuote},
    setQuote: (newQuote:IQuote) => set(() => ({ quote: {...newQuote}})),
    isValidQuote: true,
    invalidQuote: () => set(() => ({isValidQuote: false})),
    domain: {...NullDomain},
    setDomain: (newDomain:IDomain) => set(() => ({ domain: {...newDomain}})), 
    isValidDomain: true,
    invalidDomain: () => set(() => ({isValidDomain: false})),
    avatar: {...NullAvatar},
    setAvatar: (newAvatar:IAvatar) => set(() => ({ avatar: {...newAvatar}})),
    isValidAvatar: true,
    invalidAvatar: () => set(() => ({isValidAvatar: false})),
    cover: {...NullCover},
    setCover: (newCover:ICover) => set(() => ({ cover: {...newCover}})),
    isValidCover: true,
    invalidCover: () => set(() => ({isValidCover: false})),
}))

const ProfileSettingsContext = createContext<typeof createProfileSettingsStore>()
export const useProfileSettingStore = ProfileSettingsContext.useStore

export const ProfileSettingsProvider: FC<PropsWithChildren> = ({children}) => {
    return <ProfileSettingsContext.Provider createStore={() => createProfileSettingsStore}>{children}</ProfileSettingsContext.Provider>
}