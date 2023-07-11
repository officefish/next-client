import { FC } from "react"

import BasicInfoFullname from "./fullname"
import BasicInfoLocation from "./location"
import BasicInfoCareer from "./career"
import BasicInfoEducation from "./education"

import {
    StyledCollapseContainer,
} from '../../styled-profile'


type Props = {}

const BasicInfoSettings: FC = (props: Props) => {

    return (
        <StyledCollapseContainer>                     
            <BasicInfoFullname />
            <BasicInfoLocation />
            <BasicInfoCareer />
            <BasicInfoEducation />
        </StyledCollapseContainer>
    )
}

export default BasicInfoSettings