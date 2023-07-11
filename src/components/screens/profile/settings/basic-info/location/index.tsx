import { FC, useState, useEffect, ChangeEvent } from "react"
import useComponentOutside from "@/hooks/component-outside"
import type { ITimezone } from "react-timezone-select"

import {
    StyledCollapseSection,
    StyledCollapseSectionTitle,
    StyledCollapseSectionContent,
    SettingsContentDelimeter,
    StyledSettingsForm,
    StyledSettingsField,
    StyledSettingsLabel
} from '../../../styled-profile'
import TimeZonePicker from "./timezone.picker"
import CountryPicker from "./country.picker"
import RegionPicker from "./region.picker"

import { useProfileSettingStore } from "@/providers" 

type Props = {}

const BasicInfoLocation: FC = (props: Props) => {

    const { ref, isComponentOutside } = useComponentOutside(true)
    const [forseCollapse, setForseCollapse] = useState(false)

    const {location, setLocation, invalidLocation} = useProfileSettingStore()

    const setCountry = (value:string) => {
        setLocation({...location, country:value})
        invalidLocation()
    }

    const setRegion = (value:string) => {
        setLocation({...location, region:value})
        invalidLocation()
    }

    const setTimeZone = (tz:string) => {        
        setLocation({...location, timeZone:tz})
        invalidLocation()
    }

    useEffect(() => {
        setForseCollapse(!isComponentOutside)
    }, [isComponentOutside])


    return (                                    
        <StyledCollapseSection ref={ref} $forceCollapse={forseCollapse}>
            <input type="checkbox" className="w-[1px] h-[1px]"/> 
            <StyledCollapseSectionTitle>
                Location:
            </StyledCollapseSectionTitle>
            <StyledCollapseSectionContent>  
                <SettingsContentDelimeter />
                <StyledSettingsForm action="">
                    <StyledSettingsField>
                        <StyledSettingsLabel>Country:</StyledSettingsLabel>
                        <CountryPicker country={location?.country} setCountry={setCountry} />
                    </StyledSettingsField>
                    <StyledSettingsField>
                        <StyledSettingsLabel>Region:</StyledSettingsLabel>
                        <RegionPicker country={location?.country} region={location?.region} setRegion={setRegion} />
                    </StyledSettingsField>
                    <StyledSettingsField>
                        <StyledSettingsLabel>TimeZone:</StyledSettingsLabel>
                        <TimeZonePicker timeZone={
                            location?.timeZone 
                            ? location?.timeZone
                            : Intl.DateTimeFormat().resolvedOptions().timeZone 
                        } setTimeZone={setTimeZone} />
                    </StyledSettingsField>
                </StyledSettingsForm> 
            </StyledCollapseSectionContent>
        </StyledCollapseSection>
    )
}

export default BasicInfoLocation