import { FC, useState, ChangeEvent, useEffect } from "react"
import useComponentOutside from "@/hooks/component-outside"

import {
    StyledCollapseSection,
    StyledCollapseSectionTitle,
    StyledCollapseSectionContent,
    SettingsContentDelimeter,
    StyledSettingsDiv,
    StyledSettingsField,
    StyledSettingsLabel,
} from '../../styled-profile'
import AvatarPicker from "./avatar.picker"

import { IVisualsSettingsProps } from "@/models/settings.model"

import { useProfileSettingStore } from "@/providers" 



const VisualsAvatar: FC<IVisualsSettingsProps> = ({avatarSrc}) => {

    const {ref, isComponentOutside } = useComponentOutside(true)
    const [forseCollapse, setForseCollapse] = useState(false)

    const {avatar, setAvatar, invalidAvatar} = useProfileSettingStore()

    const setImageUrl = (value:string) => {
        
        setAvatar({
            id: avatar?.id ? avatar.id : '1', 
            imageUrl: value, 
            croppedImageUrl:avatar?.croppedImageUrl ? avatar.croppedImageUrl : null})

        invalidAvatar()
    }
    
    const setCroppedImageUrl = (value:string) => {
        
        setAvatar({
            id: avatar?.id ? avatar.id : '1', 
            imageUrl: avatar?.imageUrl ? avatar.imageUrl : value, 
            croppedImageUrl:value})

        invalidAvatar()
    }

    useEffect(() => {
        setForseCollapse(!isComponentOutside)
    }, [isComponentOutside])


    return (                                    
        <StyledCollapseSection ref={ref} $forceCollapse={forseCollapse}>
            <input type="checkbox" className="w-[1px] h-[1px]"/> 
            <StyledCollapseSectionTitle>
                Avatar
            </StyledCollapseSectionTitle>
            <StyledCollapseSectionContent>  
                <SettingsContentDelimeter />
                <StyledSettingsDiv>
                    <StyledSettingsField>
                        <StyledSettingsLabel>Avatar image source:</StyledSettingsLabel>
                        <AvatarPicker 
                        imageUrl={avatar?.imageUrl ? avatar.imageUrl : ''} 
                        croppedImageUrl={avatar?.croppedImageUrl ? avatar.croppedImageUrl : null}
                        setImageUrl={setImageUrl}
                        setCroppedImageUrl={setCroppedImageUrl} />
                    </StyledSettingsField>
                </StyledSettingsDiv> 
            </StyledCollapseSectionContent>
        </StyledCollapseSection>
    )
}

export default VisualsAvatar