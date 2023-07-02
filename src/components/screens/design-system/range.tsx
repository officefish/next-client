import { FC, useState,  useEffect } from "react"
import TableItem from "./table/table-item"
import WithTabs from "./tabs"

import TableHead from "./table/table-head"

type Props = {}
const Range: FC = (props: Props) => {

  return (<>
        <h1>Range</h1>
        <p>Range slider is used to select a value by sliding a handle.</p>

        <div className="not-prose mt-6 mb-10 overflow-x-auto">
          <table className="table-compact table w-full">
            <TableHead />
            <tbody className="text-base-content dark:text-base-content-dark">         
                <TableItem name='range' type='component' description="Range input" />
                <TableItem name='range-primary' type='modifier' description="Adds `primary` to range" />
                <TableItem name='range-secondary' type='modifier' description="Adds `secondary` to range" />
                <TableItem name='range-accent' type='modifier' description="Adds `accent` to range" />
                <TableItem name='range-info' type='modifier' description="Adds `info` to range" />
                <TableItem name='range-success' type='modifier' description="Adds `success` to range" />
                <TableItem name='range-warning' type='modifier' description="Adds `warning` to range" />
                <TableItem name='range-error' type='modifier' description="Adds `error` to range" />

                <TableItem name='range-lg' type='responsive' description="Large range" />
                <TableItem name='range-md' type='responsive' description="Medium range (default)" />
                <TableItem name='range-sm' type='responsive' description="Small range" />
                <TableItem name='range-xs' type='responsive' description="Extra small range" />
            </tbody>
          </table>
        </div>

        <RangeTabs /> 
        <RangeWithStepsTabs />
        <PrimaryRangeTabs />
        <SecondaryRangeTabs />
        <AccentRangeTabs />
        <InfoRangeTabs />
        <SuccessRangeTabs />
        <WarningRangeTabs />
        <ErrorRangeTabs />
        <SizesRangeTabs />
       
    </>
  )
}

export default Range

const RangeTabs:FC =  () => <WithTabs title="Range">
    <input type="range" min="0" max="100" value="40" className="range" onChange={()=>{}}/>
</WithTabs>

const RangeWithStepsTabs:FC =  () => <WithTabs title="With steps and measure">
    <input type="range" min="0" max="100" value="25" className="range" step="25" onChange={()=>{}}/>
    <div className="w-full flex justify-between text-xs px-2 text-base-content dark:text-base-content-dark">
        <span>|</span>
        <span>|</span>
        <span>|</span>
        <span>|</span>
        <span>|</span>
    </div>
</WithTabs>

const PrimaryRangeTabs:FC =  () => <WithTabs title="Primary color">
    <input type="range" min="0" max="100" value="40" className="range range-primary" onChange={()=>{}}/>
</WithTabs>

const SecondaryRangeTabs:FC =  () => <WithTabs title="Secondary color">
    <input type="range" min="0" max="100" value="40" className="range range-secondary" onChange={()=>{}} />
</WithTabs>

const AccentRangeTabs:FC =  () => <WithTabs title="Accent color">
    <input type="range" min="0" max="100" value="40" className="range range-accent" onChange={()=>{}} />
</WithTabs>


const InfoRangeTabs:FC =  () => <WithTabs title="Info color">
    <input type="range" min="0" max="100" value="40" className="range range-info" onChange={()=>{}}/>
</WithTabs>

const SuccessRangeTabs:FC =  () => <WithTabs title="Success color">
    <input type="range" min="0" max="100" value="40" className="range range-success" onChange={()=>{}} />
</WithTabs>

const WarningRangeTabs:FC =  () => <WithTabs title="Warning color">
    <input type="range" min="0" max="100" value="40" className="range range-warning" onChange={()=>{}} />
</WithTabs>

const ErrorRangeTabs:FC =  () => <WithTabs title="Error color">
    <input type="range" min="0" max="100" value="40" className="range range-error" onChange={()=>{}}/>
</WithTabs>

const SizesRangeTabs:FC =  () => <WithTabs title="Sizes">
    <div className="flex flex-col gap-4 w-full items-center">
        <input type="range" min="0" max="100" value="40" className="range range-xs" onChange={()=>{}}/> 
        <input type="range" min="0" max="100" value="50" className="range range-sm" onChange={()=>{}}/> 
        <input type="range" min="0" max="100" value="60" className="range range-md" onChange={()=>{}}/> 
        <input type="range" min="0" max="100" value="70" className="range range-lg" onChange={()=>{}}/>
    </div>
</WithTabs>








