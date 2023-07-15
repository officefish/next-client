import { FC, useState } from "react"

import CollapseSection from "../../ui/collapse.section"

import {
    StyledSettingsDiv,
    StyledSettingsField,
    StyledSettingsLabel,
} from '../../../styled-profile'

import { useProfileSettingStore } from "@/providers"

import { ITartanPatternColors } from "@/models/profile.types"
import TartanPicker from "./tartan-picker"

const VisualsTartan:FC = () => {

    //const [imageUrl, setImageUrl] = useState(coverSrc)

    const {tartan, setTartan, invalidTartan} = useProfileSettingStore()

    const setColors = (newColors:ITartanPatternColors) => {
        if(tartan === undefined) return
        setTartan({...tartan, colors: [...newColors]})
        invalidTartan()
    }

    const setSvgSrc = (svgSrc:string) => {
        if(tartan === undefined) return
        setTartan({...tartan, svgSrc})
        invalidTartan()
    }

    const setPngSrc = (pngSrc:string) => {
        if(tartan === undefined) return
        setTartan({...tartan, pngSrc})
        invalidTartan()
    }

    
    return (                                    
        <CollapseSection name="Tartan">
            <StyledSettingsDiv>
                <StyledSettingsField>
                    <StyledSettingsLabel>Tartan pattern:</StyledSettingsLabel>
                    <div className="flex flex-row w-full">
                        <TartanPicker 
                        colors={tartan?.colors}
                        setColors={setColors}
                        pngSrc={tartan?.pngSrc ? tartan.pngSrc : null}
                        setPngSrc={setPngSrc}
                        svgSrc={tartan?.svgSrc ? tartan.svgSrc : null}
                        setSvgSrc={setSvgSrc}
                        isCollapsed={false}
                        />
                    </div>
                </StyledSettingsField>
            </StyledSettingsDiv>
        </CollapseSection>     
    )
}

export default VisualsTartan