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



const HeaderFunctional:FC = () => {

    const router = useRouter()

    const newPostClick = (e:MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        router.push('/post/new/edit')
    }

    const settingsClick = (e:MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        router.push('/me/settings')
    }

    return (
        <StyledFunctional>
            <NewPostButton type="button" onClick={newPostClick}>
                New Post
            </NewPostButton>
            <SettingsButton $active={true} disabled={false} type="button" onClick={settingsClick}>
                Settings
                <FontAwesomeIcon icon={faGear} />
            </SettingsButton>
        </StyledFunctional>
    )
}
export default HeaderFunctional
