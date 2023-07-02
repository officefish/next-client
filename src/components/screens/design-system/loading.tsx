import { FC, useState,  useEffect } from "react"
import TableItem from "./table/table-item"
import WithTabs from "./tabs"

import TableHead from "./table/table-head"

type Props = {}
const Loading: FC = (props: Props) => {

  return (<>
        <h1>Loading</h1>
        <p>Loading shows an animation to indicate that something is loading.</p>

        <div className="not-prose mt-6 mb-10 overflow-x-auto">
          <table className="table-compact table w-full">
            <TableHead />
            <tbody className="text-base-content dark:text-base-content-dark">         
             
              <TableItem name='loading' type='component' description="loading element" />
             
              <TableItem name='loading-spinner' type='modifier' description="Shows the spinner animation" />
              <TableItem name='loading-dots' type='modifier' description="Shows the dots animation" />

              <TableItem name='loading-ring' type='modifier' description="Shows the ring animation" />
              <TableItem name='loading-ball' type='modifier' description="Shows the ball animation" />
              <TableItem name='loading-bars' type='modifier' description="Shows the bars animation" />
              <TableItem name='loading-infinity' type='modifier' description="Shows the infinity animation" />

              <TableItem name='loading-xs' type='responsive' description="Extra small size animation" />
              <TableItem name='loading-sm' type='responsive' description="Small size animation" />
              <TableItem name='loading-md' type='responsive' description="Medium size animation" />
              <TableItem name='loading-lg' type='responsive' description="Large size animation" />
              
            </tbody>
          </table>
        </div>

        <LoadingSpinnerTabs /> 
        <LoadingDotsTabs />
        <LoadingRingTabs /> 
        <LoadingBallTabs />
        <LoadingBarsTabs /> 
        <LoadingInfinityTabs />
        <LoadingWithColorsTabs />
      
    </>
  )
}

export default Loading

const LoadingSpinnerTabs:FC = () => <WithTabs title="Loading spinner">
    <div className="flex flex-row gap-4 text-base-content dark:text-base-content-dark">
        <span className="loading loading-spinner loading-xs"></span>
        <span className="loading loading-spinner loading-sm"></span>
        <span className="loading loading-spinner loading-md"></span>
        <span className="loading loading-spinner loading-lg"></span>
    </div>
</WithTabs>

const LoadingDotsTabs:FC = () => <WithTabs title="Loading dots">
    <div className="flex flex-row gap-4 text-base-content dark:text-base-content-dark">
        <span className="loading loading-dots loading-xs"></span>
        <span className="loading loading-dots loading-sm"></span>
        <span className="loading loading-dots loading-md"></span>
        <span className="loading loading-dots loading-lg"></span>
    </div>
</WithTabs>

const LoadingRingTabs:FC = () => <WithTabs title="Loading ring">
    <div className="flex flex-row gap-4 text-base-content dark:text-base-content-dark">
        <span className="loading loading-ring loading-xs"></span>
        <span className="loading loading-ring loading-sm"></span>
        <span className="loading loading-ring loading-md"></span>
        <span className="loading loading-ring loading-lg"></span>
    </div>
</WithTabs>

const LoadingBallTabs:FC = () => <WithTabs title="Loading ball">
    <div className="flex flex-row gap-4 text-base-content dark:text-base-content-dark">
        <span className="loading loading-ball loading-xs"></span>
        <span className="loading loading-ball loading-sm"></span>
        <span className="loading loading-ball loading-md"></span>
        <span className="loading loading-ball loading-lg"></span>
    </div>
</WithTabs>


const LoadingBarsTabs:FC = () => <WithTabs title="Loading bars">
    <div className="flex flex-row gap-4 text-base-content dark:text-base-content-dark">
        <span className="loading loading-bars loading-xs"></span>
        <span className="loading loading-bars loading-sm"></span>
        <span className="loading loading-bars loading-md"></span>
        <span className="loading loading-bars loading-lg"></span>
    </div>
</WithTabs>

const LoadingInfinityTabs:FC = () => <WithTabs title="Loading infinity">
    <div className="flex flex-row gap-4 text-base-content dark:text-base-content-dark">
        <span className="loading loading-infinity loading-xs"></span>
        <span className="loading loading-infinity loading-sm"></span>
        <span className="loading loading-infinity loading-md"></span>
        <span className="loading loading-infinity loading-lg"></span>
    </div>
</WithTabs>

const LoadingWithColorsTabs:FC = () => <WithTabs title="Loading infinity">
    <div className="flex flex-row gap-4">
        <span className="loading loading-spinner text-primary dark:text-primary-dark"></span>
        <span className="loading loading-spinner text-secondary dark:text-secondary-dark"></span>
        <span className="loading loading-spinner text-accent dark:text-accent-dark"></span>
        <span className="loading loading-spinner text-neutral dark:text-neutral-dark"></span>
        <span className="loading loading-spinner text-info dark:text-info-dark"></span>
        <span className="loading loading-spinner text-success dark:text-success-dark"></span>
        <span className="loading loading-spinner text-warning dark:text-warning-dark"></span>
        <span className="loading loading-spinner text-error dark:text-error-dark"></span>
    </div>
</WithTabs>