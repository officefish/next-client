import { FC, useState,  useEffect } from "react"
import TableItem from "./table/table-item"
import WithTabs from "./tabs"

import TableHead from "./table/table-head"

type Props = {}
const Countdown: FC = (props: Props) => {

  return (<>
        <h1>Countdown</h1>
        <p>Countdown gives you a transition effect of changing numbers.</p>
        <p>You need to change to --value CSS variable using JS. Value must be a number between 0 and 99.</p>

        <div className="not-prose mt-6 mb-10 overflow-x-auto">
          <table className="table-compact table w-full">
            
            <TableHead />
            
            <tbody className="text-base-content dark:text-base-content-dark">
              
              <TableItem name='countdown' type='component' description="Container element" />
         
            </tbody>
          </table>
        </div>

        <CountdownTabs />
      
    </>
  )
}

export default Countdown


const CountdownTabs:FC =  () => {
    const style = {"--value":60} as React.CSSProperties
    return (
        <WithTabs title="Countdown">
            <span className="countdown">
                <span style={style}></span>
            </span>
        </WithTabs>
    )
}










