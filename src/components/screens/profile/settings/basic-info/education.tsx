import { FC, useState, ChangeEvent, useEffect } from "react"
import useComponentOutside from "@/hooks/component-outside"

import {
    StyledCollapseSection,
    StyledCollapseSectionTitle,
    StyledCollapseSectionContent,
    SettingsContentDelimeter,
    StyledSettingsForm,
    StyledSettingsField,
    StyledSettingsLabel,
    StyledSettingsInput
} from '../../styled-profile'

import { useProfileSettingStore } from "@/providers" 

type Props = {}

const BasicInfoEducation: FC = (props: Props) => {

    const { ref, isComponentOutside } = useComponentOutside(true)
    const [forseCollapse, setForseCollapse] = useState(false)

    const {education, setEducation, invalidEducation} = useProfileSettingStore()

    const setUniversity = (e:ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setEducation({...education, university:e.target.value})
        invalidEducation()
    }

    const setFaculty = (e:ChangeEvent<HTMLInputElement>) => {
        e.preventDefault()
        setEducation({...education, faculty:e.target.value})
        invalidEducation()
    }

    useEffect(() => {
        setForseCollapse(!isComponentOutside)
    }, [isComponentOutside])

    return (                                    
        <StyledCollapseSection ref={ref} $forceCollapse={forseCollapse}>
            <input type="checkbox" className="w-[1px] h-[1px]"/> 
            <StyledCollapseSectionTitle>
                Education:
            </StyledCollapseSectionTitle>
            <StyledCollapseSectionContent>  
                <SettingsContentDelimeter />
                <StyledSettingsForm action="">
                    <StyledSettingsField>
                        <StyledSettingsLabel>University:</StyledSettingsLabel>
                        <StyledSettingsInput type="text" 
                        value={education?.university ? education.university : ''} 
                        onChange={setUniversity}/>
                    </StyledSettingsField>
                    <StyledSettingsField>
                        <StyledSettingsLabel>Faculty:</StyledSettingsLabel>
                        <StyledSettingsInput type="text" 
                        value={education?.faculty ? education.faculty : ''} 
                        onChange={setFaculty} />
                    </StyledSettingsField>
                </StyledSettingsForm> 
            </StyledCollapseSectionContent>
        </StyledCollapseSection>
    )
}

export default BasicInfoEducation