import { FC, useState } from "react"

import CollapseSection from "../../ui/collapse.section"

import {
    StyledSettingsDiv,
    StyledSettingsField,
    StyledSettingsLabel,
} from '../../../styled-profile'

import { useProfileSettingStore } from "@/providers"
import { ITartanPatternData, TartanPattern } from "@/services/tartan"

const pattern = [
    {color: '#d7e1e8', size:23},
    {color: "#bd8c16", size:14},
    {color: '#d7e1e8', size:9},
    {color: '#0c2449', size:32},
    {color: '#d7e1e8', size:39},
    {color: '#bd8c16', size:15},
    {color: '#d7e1e8', size:2}
  ] satisfies ITartanPatternData

const VisualsTartan:FC = () => {

    //const [imageUrl, setImageUrl] = useState(coverSrc)

    // const {cover, setCover, invalidCover} = useProfileSettingStore()

    // const setImageUrl = (value:string) => {
        
    //     setCover({
    //         id: cover?.id ? cover.id : '1', 
    //         imageUrl: value})

    //     invalidCover()
    // }
    
    return (                                    
        <CollapseSection name="Tartan">
            <StyledSettingsDiv>
                <StyledSettingsField>
                    <StyledSettingsLabel>Tartan pattern:</StyledSettingsLabel>
                    <div className="flex flex-row w-full">
                        <TartanPattern colors={pattern}/>
                    </div>
                </StyledSettingsField>
            </StyledSettingsDiv>
        </CollapseSection>     
    )
}

export default VisualsTartan