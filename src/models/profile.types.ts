
export interface IHeaderStatsData {
    posts?: number
    comments?: number
    followers?: number
}

export interface IFullName {
    firstName?: string
    secondName?: string
    domainName?: string
} 

export interface ILocation {
    country?: string
    region?: string
    timeZone?: string
}

export interface ICareer {
    company?: string
    role?: string
}

export interface IEducation {
    university?: string
    faculty?: string
}

export interface IBasicInfo {
    fullName: IFullName
    location: ILocation
    career: ICareer
    education: IEducation
}

export interface IQuote {
    value?: string
}

export interface IDomain {
    value?: string
}

export interface IAvatar {
    id: string
    imageUrl: string
    croppedImageUrl: string | null
}
