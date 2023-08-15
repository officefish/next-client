import { FC, MouseEvent, useState, useEffect } from "react"
import { useRouter } from "next/router"

import { faGear } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { useProfileSettingStore } from "@/providers" 

import { useUpdateSettings } from "@services/user-settings.service"

import { 
  StyledFunctional,
  SettingsButton,
  NewPostButton
 } from "../../styled-profile"
import { IAvatar, ICareer, ICover, IDomain, IEducation, IFullName, ILocation, IQuote, ITartan } from "@/models/profile.types"

interface IWithSettings {
    activeSettings: boolean
} 

interface ISettings {
    
    fullName: {
        value?: IFullName,
        valid: boolean
    },

    career: {
        value?: ICareer,
        valid: boolean
    },

    location: {
        value?: ILocation,
        valid: boolean
    },

    education: {
        value?: IEducation,
        valid: boolean
    },

    quote: {
        value?: IQuote,
        valid: boolean 
    },

    domain: {
        value?: IDomain,
        valid: boolean
    },

    avatar: {
        value?: IAvatar,
        valid: boolean
    },

    cover: {
        value?: ICover,
        valid: boolean
    },

    tartan: {
        value?: ITartan,
        valid: boolean
    }

}

const HeaderFunctional:FC<IWithSettings> = ({activeSettings}) => {

    const [invalidData, setInvalidData] = useState(false)

    const {
        updateSettings, 
        updateSettingsResponse, 
        updateSettingsError
    } = useUpdateSettings()

    const {
        isValidFullName,
        isValidCareer,
        isValidEducation,
        isValidLocation,
        isValidQuote,
        isValidDomain,
        isValidTartan,
        isValidAvatar,
        isValidCover,

        fullName,
        career,
        location,
        education,
        quote,
        domain,
        avatar,
        cover,
        tartan
    } = useProfileSettingStore()

    const router = useRouter()

    const newPostClick = (e:MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        router.push('/post/new/edit')
    }

    const settingsClick = (e:MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        router.push('/me/settings')
    }

    const handleSaveChanges = (e:MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        
        if(!invalidData) return

        let data:ISettings = 
        {
            fullName: 
            {
                value: fullName,
                valid: isValidFullName  
            },
            career:
            {
                value: career,
                valid: isValidCareer
            },
            location:
            {
                value: location,
                valid: isValidLocation
            },
            education:
            {
                value: education,
                valid: isValidEducation
            },
            quote:
            {
                value: quote,
                valid: isValidQuote
            },
            domain:
            {
                value: domain,
                valid: isValidDomain
            },
            avatar:
            {
                value: avatar,
                valid: isValidAvatar
            },
            cover: 
            {
                value: cover,
                valid: isValidCover
            },
            tartan:
            {
                value: tartan,
                valid: isValidTartan
            }
        }

        // send data to server
        updateSettings(data)
    }

    useEffect(()=> {
        if (!isValidFullName 
        ||  !isValidCareer
        ||  !isValidEducation
        ||  !isValidLocation
        ||  !isValidQuote
        ||  !isValidDomain
        ||  !isValidAvatar
        ||  !isValidCover
        ||  !isValidTartan
        ) setInvalidData(true)
    }, [
        isValidFullName,
        isValidCareer,
        isValidEducation,
        isValidLocation,
        isValidQuote,
        isValidDomain,
        isValidTartan,
        isValidAvatar,
        isValidCover
    ])

    return (
        <StyledFunctional>

            { activeSettings 
            ?   <NewPostButton type="button" onClick={newPostClick}>
                    New Post
                </NewPostButton>
            : <button 
            className="btn btn-accent btn-outline" 
            disabled={!invalidData}
            onClick={handleSaveChanges}
            >Save changes</button>
            }
            
            <SettingsButton $active={activeSettings} disabled={!activeSettings} type="button" onClick={settingsClick}>
                Settings
                <FontAwesomeIcon icon={faGear} />
            </SettingsButton>
        </StyledFunctional>
    )
}
export default HeaderFunctional
