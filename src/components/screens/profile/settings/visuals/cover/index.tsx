import { FC, useState } from "react"

import CollapseSection from "../../ui/collapse.section"

import {
    StyledSettingsDiv,
    StyledSettingsField,
    StyledSettingsLabel,
} from '../../../styled-profile'

import CoverPicker from "./cover.picker"

import { useProfileSettingStore } from "@/providers" 

const VisualsCover:FC = () => {

    //const [imageUrl, setImageUrl] = useState(coverSrc)

    const {cover, setCover, invalidCover} = useProfileSettingStore()

    const setImageUrl = (value:string) => {
        
        setCover({
            id: cover?.id ? cover.id : '1', 
            imageUrl: value})

        invalidCover()
    }
    
    return (                                    
        <CollapseSection name="Cover">
            <StyledSettingsDiv>
                <StyledSettingsField>
                    <StyledSettingsLabel>Cover image source:</StyledSettingsLabel>
                    <CoverPicker imageUrl={cover?.imageUrl? cover.imageUrl : ''} setImageUrl={setImageUrl} />
                </StyledSettingsField>
            </StyledSettingsDiv>
        </CollapseSection>     
    )
}

export default VisualsCover