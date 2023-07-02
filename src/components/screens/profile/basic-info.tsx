import { FC } from "react"
import styles from './Profile.module.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState, useEffect } from 'react'

interface IFullName {
    firstName?: string
    secondName?: string
} 

interface ILocation {
    country?: string
    city?: string
}

interface ICareer {
    company?: string
    role?: string
}

interface IEducation {
    university?: string
    faculty?: string
}

interface IBasicInfo {
    fullName: IFullName
    location: ILocation
    career: ICareer
    education: IEducation
}

interface BasicInfoProps {
    data: IBasicInfo
}


const isComplete = (data: IBasicInfo) :boolean => {
    const isFullName = data.fullName.firstName !== undefined
    const isLocation = data.location.country !== undefined
    const isCareer = data.career.company !== undefined
    const isEducation = data.education.university !== undefined
    return isFullName && isLocation && isCareer && isEducation
}

const fullNameAsString = (fullName:IFullName) => {
    let fullNameStr = fullName.firstName as string
    fullNameStr += fullName.secondName ? ` ${fullName.secondName}.` : "."
    return fullNameStr
}

const locationAsString = (location:ILocation) => {
    let locationStr = location.country as string
    locationStr += location.city ? `, ${location.city}.` : "."
    return locationStr
}

const careerAsString = (career:ICareer) => {
    let careerStr = career.company as string
    careerStr += career.role ? `. ${career.role}.` : "."
    return careerStr
}

const universityAsString = (education:IEducation) => {
    return `${education.university}.`
}

const facultyAsString = (education:IEducation) => {
    return `${education.faculty}.`
}

const BasicInfo: FC<BasicInfoProps> = ({data}) => {

    //console.log(data)

    const [completeInfo, setCompleteInfo] = useState(false)
    
     useEffect(() => {
         setCompleteInfo(isComplete(data))
    }, [data])
  
    return (
    <>{completeInfo ? ( 
        <div className={styles.profile_basicInfo}>
            <h3>{fullNameAsString(data.fullName)}</h3>
            <div className={styles.location}>
                <FontAwesomeIcon className="text-base" icon={["fas", "map-marker-alt"]} />
                <span className="ml-2">{locationAsString(data.location)}</span>
            </div>
            <div className={styles.career}>
                <FontAwesomeIcon className="text-gray-400" icon={["fas", "briefcase"]} />
                <span className="ml-2">{careerAsString(data.career)}</span>
            </div>
            <div className={styles.education} >
                <FontAwesomeIcon className="text-gray-400" icon={["fas", "university"]} />
                <span className="ml-2">{universityAsString(data.education)}</span>
                {data.education.university && <span className="ml-2 block text-xs">{data.education.faculty}</span>}
            </div>
        </div>
    ) : (
        <div>Mini game here, if not :)</div>
    )}</>
   
  )
}
export default BasicInfo