import { FC } from "react"

import {
    StyledCollapseContainer,
} from '../../styled-profile'

import { IVisualsSettingsProps } from "@/models/settings.model"

import VisualsAvatar from "./avatar"

const VisualsSettings: FC<IVisualsSettingsProps> = ({avatarSrc}) => {

    return (
        <StyledCollapseContainer>                     
            <VisualsAvatar avatarSrc={avatarSrc} />
        </StyledCollapseContainer>
    )
}

export default VisualsSettings