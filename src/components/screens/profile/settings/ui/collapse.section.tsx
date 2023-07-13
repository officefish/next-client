import { FC, useState, useEffect, PropsWithChildren } from "react"
import useComponentOutside from "@/hooks/component-outside"

import {
    StyledCollapseSection,
    StyledCollapseSectionTitle,
    StyledCollapseSectionContent,
    SettingsContentDelimeter
    
} from '../../styled-profile'

interface ICollapseSection extends PropsWithChildren {
    name: string
}


const CollapseSection:FC<ICollapseSection> = ({name, children}) => {

    const {ref, isComponentOutside } = useComponentOutside(true)
    const [forseCollapse, setForseCollapse] = useState(false)

    useEffect(() => {
       setForseCollapse(!isComponentOutside)
    }, [isComponentOutside])

    return (                                    
        <StyledCollapseSection ref={ref} $forceCollapse={forseCollapse}>
            <input type="checkbox" className="w-[1px] h-[1px]"/> 
            <StyledCollapseSectionTitle>
                {name}
            </StyledCollapseSectionTitle>
            <StyledCollapseSectionContent>  
                <SettingsContentDelimeter />
                {children}
            </StyledCollapseSectionContent>
        </StyledCollapseSection>
    )
}

export default CollapseSection