import { FC } from "react"

import { StyledProfileHeader } from "../../styled-profile"
import HeaderStats from "./stats"
import HeaderFunctional from "./functional"
import SettingsBreadcrumbs from "./settings-breadcrumbs"

export enum EHeaderMode {
  Profile,
  Settings
}

import { IHeaderStatsData } from "@/models/profile.types"

interface IHeaderProps {
  stats?: IHeaderStatsData
  mode: EHeaderMode
}

const Header: FC<IHeaderProps> = ({mode, stats}) => {

return (
    <StyledProfileHeader>
        {renderSwitchStats(mode, stats)}
        {renderSwitchFunctional(mode)}
    </StyledProfileHeader>
  )
}
export default Header

const renderSwitchStats = (mode:EHeaderMode, stats?:IHeaderStatsData) => {
  switch(mode) {
    case EHeaderMode.Profile:
      return <HeaderStats data={stats} />
    case EHeaderMode.Settings:
      return <SettingsBreadcrumbs />
    default:
      return <></>
  }
}

const renderSwitchFunctional = (mode:EHeaderMode) => {
  switch(mode) {
    case EHeaderMode.Profile:
      return <HeaderFunctional activeSettings={true} />
    case EHeaderMode.Settings:
      return <HeaderFunctional activeSettings={false} />
    default:
      return <></>
  }
}

