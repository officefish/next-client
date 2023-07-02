import { FC, useState,  useEffect } from "react"
import TableItem from "./table/table-item"
import WithTabs from "./tabs"

import TableHead from "./table/table-head"

type Props = {}
const RadialProgress: FC = (props: Props) => {

  return (<>
        <h1>Progress</h1>
        <p>Radial progress can be used to show the progress of a task or to show the passing of time.

        Radial progress needs --value CSS variable to work.
        To change the size, use --size CSS variable which has a default value of 4rem.
        To change the thickness, use --thickness CSS variable which is 10% of the size by default.</p>

        <div className ='alert alert-info text-sm'>
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current flex-shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                " For radial progress we use &lt;div&gt; instead of &lt;progress&gt; tag because Browsers are unable to show the text inside &lt;progress&gt; tag and Firefox doesn't show the pseudo elements inside &lt;progress&gt; bar at all."
            </div>
        </div>

        <div className="not-prose mt-6 mb-10 overflow-x-auto">
          <table className="table-compact table w-full">
            <TableHead />
            <tbody className="text-base-content dark:text-base-content-dark">         
              <TableItem name='radial-progress' type='component' description="Shows a radial progress" />
            </tbody>
          </table>
        </div>

        <RadialProgressTabs /> 
        <DifferentValuesRadialProgressTabs /> 
        <CustomColorRadialProgressTabs />
        <WithBgBorderRadialProgressTabs />
        <WithCustonSizeTicknessRadialProgressTabs />
    </>
  )
}

export default RadialProgress

const RadialProgressTabs:FC = () => {
    const style = { "--value": 70 } as React.CSSProperties
    return <WithTabs title="Progress color">
        <div className="radial-progress text-base-content dark:text-base-content-dark" style={style}>70%</div>
    </WithTabs>
}

const DifferentValuesRadialProgressTabs:FC = () => {
    const style0 = { "--value": 0 } as React.CSSProperties
    const style20 = { "--value": 20 } as React.CSSProperties
    const style60 = { "--value": 60 } as React.CSSProperties
    const style80 = { "--value": 80 } as React.CSSProperties
    const style100 = { "--value": 100 } as React.CSSProperties
    return <WithTabs title="Different values">
        <div className="radial-progress text-base-content dark:text-base-content-dark" style={style0}>0%</div>
        <div className="radial-progress text-base-content dark:text-base-content-dark" style={style20}>20%</div>
        <div className="radial-progress text-base-content dark:text-base-content-dark" style={style60}>60%</div>
        <div className="radial-progress text-base-content dark:text-base-content-dark" style={style80}>80%</div>
        <div className="radial-progress text-base-content dark:text-base-content-dark" style={style100}>100%</div>
    </WithTabs>
}

const CustomColorRadialProgressTabs:FC = () => {
    const style = { "--value": 70 } as React.CSSProperties
    return <WithTabs title="Custom color">
        <div className="!text-primary !dark:text-primary-dark radial-progress" style={style}>70%</div>
    </WithTabs>
}

const WithBgBorderRadialProgressTabs:FC = () => {
    const style = { "--value": 70 } as React.CSSProperties
    return <WithTabs title="With background color and border">
        <div className="!text-primary-content !dark:text-primary-dark-content border-4 border-primary dark:border-primary-dark radial-progress bg-primary dark:bg-primary-dark" style={style}>70%</div>
    </WithTabs>
}

const WithCustonSizeTicknessRadialProgressTabs:FC = () => {
    const style1 = { "--value": 70, "--size": "12rem", "--thickness": "2px" } as React.CSSProperties
    const style2 = { "--value": 70, "--size": "12rem", "--thickness": "2rem" } as React.CSSProperties
    return <WithTabs title="Custom size and custom thickness">
        <div className="radial-progress text-base-content dark:text-base-content-dark" style={style1}>70%</div>
        <div className="radial-progress text-base-content dark:text-base-content-dark" style={style2}>70%</div>
    </WithTabs>
}





