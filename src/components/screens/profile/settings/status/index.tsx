import { FC } from "react"

import {
    StyledCollapseContainer,
} from '../../styled-profile'

import StatusQuote from "./quote"
import StatusDomain from "./domain"

type Props = {}

const StatusSettings: FC = (props: Props) => {

    return (
        <StyledCollapseContainer>                     
            <StatusQuote />
            <StatusDomain />
        </StyledCollapseContainer>
    )
}

export default StatusSettings