import { FC, useState,  useEffect } from "react"
import TableItem from "./table/table-item"
import WithTabs from "./tabs"

import TableHead from "./table/table-head"

type Props = {}
const Progress: FC = (props: Props) => {

  return (<>
        <h1>Progress</h1>
        <p>Progress bar can be used to show the progress of a task or to show the passing of time.</p>

        <div className="not-prose mt-6 mb-10 overflow-x-auto">
          <table className="table-compact table w-full">
            <TableHead />
            <tbody className="text-base-content dark:text-base-content-dark">         
             
              <TableItem name='progress' type='component' description="Progress element" />
             
              <TableItem name='progress-primary' type='modifier' description="Adds `primary` color" />
              <TableItem name='progress-secondary' type='modifier' description="Adds `secondary` color" />
              <TableItem name='progress-accent' type='modifier' description="Adds `accent` color" />
              <TableItem name='progress-info' type='modifier' description="Adds `info` color" />
              <TableItem name='progress-success' type='modifier' description="Adds `success` color" />
              <TableItem name='progress-warning' type='modifier' description="Adds `warning` color" />
              <TableItem name='progress-error' type='modifier' description="Adds `error` color" />
             
            </tbody>
          </table>
        </div>

        <ProgressTabs /> 
        <PrimaryProgressTabs />
        <SecondaryProgressTabs />
        <AccentProgressTabs />  
        <InfoProgressTabs />
        <SuccessProgressTabs />
        <WarningProgressTabs />
        <ErrorProgressTabs />
        <IndeterminateTabs />
    </>
  )
}

export default Progress

const ProgressTabs:FC = () => <WithTabs title="Progress color">
    <div className="flex flex-col gap-2 items-center">
        <progress className="progress w-56" value="0" max="100"></progress>
        <progress className="progress w-56" value="10" max="100"></progress>
        <progress className="progress w-56" value="40" max="100"></progress>
        <progress className="progress w-56" value="70" max="100"></progress>
        <progress className="progress w-56" value="100" max="100"></progress>
    </div>
</WithTabs>

const PrimaryProgressTabs:FC = () => <WithTabs title="Primary color">
    <div className="flex flex-col gap-2 items-center">
        <progress className="progress progress-primary w-56" value="0" max="100"></progress>
        <progress className="progress progress-primary w-56" value="10" max="100"></progress>
        <progress className="progress progress-primary w-56" value="40" max="100"></progress>
        <progress className="progress progress-primary w-56" value="70" max="100"></progress>
        <progress className="progress progress-primary w-56" value="100" max="100"></progress>
    </div>
</WithTabs>

const SecondaryProgressTabs:FC = () => <WithTabs title="Secondary color">
    <div className="flex flex-col gap-2 items-center">
        <progress className="progress progress-secondary w-56" value="0" max="100"></progress>
        <progress className="progress progress-secondary w-56" value="10" max="100"></progress>
        <progress className="progress progress-secondary w-56" value="40" max="100"></progress>
        <progress className="progress progress-secondary w-56" value="70" max="100"></progress>
        <progress className="progress progress-secondary w-56" value="100" max="100"></progress>
    </div>
</WithTabs>

const AccentProgressTabs:FC = () => <WithTabs title="Accent color">
    <div className="flex flex-col gap-2 items-center">
        <progress className="progress progress-accent w-56" value="0" max="100"></progress>
        <progress className="progress progress-accent w-56" value="10" max="100"></progress>
        <progress className="progress progress-accent w-56" value="40" max="100"></progress>
        <progress className="progress progress-accent w-56" value="70" max="100"></progress>
        <progress className="progress progress-accent w-56" value="100" max="100"></progress>
    </div>
</WithTabs>

const InfoProgressTabs:FC = () => <WithTabs title="Info color">
    <div className="flex flex-col gap-2 items-center">
        <progress className="progress progress-info w-56" value="0" max="100"></progress>
        <progress className="progress progress-info w-56" value="10" max="100"></progress>
        <progress className="progress progress-info w-56" value="40" max="100"></progress>
        <progress className="progress progress-info w-56" value="70" max="100"></progress>
        <progress className="progress progress-info w-56" value="100" max="100"></progress>
    </div>
</WithTabs>

const SuccessProgressTabs:FC = () => <WithTabs title="Success color">
    <div className="flex flex-col gap-2 items-center">
        <progress className="progress progress-success w-56" value="0" max="100"></progress>
        <progress className="progress progress-success w-56" value="10" max="100"></progress>
        <progress className="progress progress-success w-56" value="40" max="100"></progress>
        <progress className="progress progress-success w-56" value="70" max="100"></progress>
        <progress className="progress progress-success w-56" value="100" max="100"></progress>
    </div>
</WithTabs>

const WarningProgressTabs:FC = () => <WithTabs title="Warning color">
    <div className="flex flex-col gap-2 items-center">
        <progress className="progress progress-warning w-56" value="0" max="100"></progress>
        <progress className="progress progress-warning w-56" value="10" max="100"></progress>
        <progress className="progress progress-warning w-56" value="40" max="100"></progress>
        <progress className="progress progress-warning w-56" value="70" max="100"></progress>
        <progress className="progress progress-warning w-56" value="100" max="100"></progress>
    </div>
</WithTabs>

const ErrorProgressTabs:FC = () => <WithTabs title="Error color">
    <div className="flex flex-col gap-2 items-center">
        <progress className="progress progress-error w-56" value="0" max="100"></progress>
        <progress className="progress progress-error w-56" value="10" max="100"></progress>
        <progress className="progress progress-error w-56" value="40" max="100"></progress>
        <progress className="progress progress-error w-56" value="70" max="100"></progress>
        <progress className="progress progress-error w-56" value="100" max="100"></progress>
    </div>
</WithTabs>

const IndeterminateTabs:FC = () => <WithTabs title="#Indeterminate (without value)">
    <progress className="progress w-56"></progress>
</WithTabs>


