import { FC, useState,  useEffect } from "react"
import TableItem from "./table/table-item"
import WithTabs from "./tabs"

import TableHead from "./table/table-head"

type Props = {}
const Tooltip: FC = (props: Props) => {

  return (<>
        <h1>Tooltip</h1>
        <p>Tooltip can be used to show a message when hovering over an element.</p>

        <div className="not-prose mt-6 mb-10 overflow-x-auto">
          <table className="table-compact table w-full">
            <TableHead />
            <tbody className="text-base-content dark:text-base-content-dark">         
             
              <TableItem name='tooltip' type='component' description="Container element" />
              <TableItem name='tooltip-open' type='component' description="Force open tooltip" />

              <TableItem name='tooltip-top' type='modifier' description="Put tooltip on top" />
              <TableItem name='tooltip-bottom' type='modifier' description="Put tooltip on bottom" />
              <TableItem name='tooltip-left' type='modifier' description="Put tooltip on left" />
              <TableItem name='tooltip-right' type='modifier' description="Put tooltip on right" />
              
              <TableItem name='tooltip-primary' type='modifier' description="Adds `primary` color to tooltip" />
              <TableItem name='tooltip-secondary' type='modifier' description="Adds `secondary` color to tooltip" />
              <TableItem name='tooltip-accent' type='modifier' description="Adds `accent` color to tooltip" />

              <TableItem name='tooltip-info' type='modifier' description="Adds `info` color to tooltip" />
              <TableItem name='tooltip-success' type='modifier' description="Adds `success` color to tooltip" />
              <TableItem name='tooltip-warning' type='modifier' description="Adds `warning` color to tooltip" />
              <TableItem name='tooltip-error' type='modifier' description="Adds `error` color to tooltip" />
              
            </tbody>
          </table>
        </div>

        <TooltipTabs />
        <ForcedTooltipTabs />
        <TopTooltipTabs />
        <BottomTooltipTabs />
        <LeftTooltipTabs />
        <RightTooltipTabs />
        <PrimaryTooltipTabs />
        <SecondaryTooltipTabs />
        <AccentTooltipTabs />

        <InfoTooltipTabs />
        <SuccessTooltipTabs />
        <WarningTooltipTabs />
        <ErrorTooltipTabs />
        
    </>
  )
}

export default Tooltip

const TooltipTabs:FC = () => <WithTabs title="Tooltip">
  <div className="my-6">
    <div className="tooltip" data-tip="hello">
      <button className="btn">Hover me</button>
    </div>
  </div>
</WithTabs>

const ForcedTooltipTabs:FC = () => <WithTabs title="Forced Tooltip">
  <div className="my-6">
    <div className="tooltip tooltip-open" data-tip="hello">
      <button className="btn">Force open</button>
    </div>
  </div>
</WithTabs>

const TopTooltipTabs:FC = () => <WithTabs title="Top Tooltip">
  <div className="my-6">
    <div className="tooltip tooltip-open tooltip-top" data-tip="hello">
      <button className="btn">Top</button>
    </div>
  </div>
</WithTabs>

const BottomTooltipTabs:FC = () => <WithTabs title="Bottom Tooltip">
  <div className="my-6">
    <div className="tooltip tooltip-open tooltip-bottom" data-tip="hello">
      <button className="btn">Bottom</button>
    </div>
  </div>
</WithTabs>

const LeftTooltipTabs:FC = () => <WithTabs title="Left Tooltip">
  <div className="my-6">
    <div className="tooltip tooltip-open tooltip-left" data-tip="hello">
      <button className="btn">Left</button>
    </div>
  </div>
</WithTabs>

const RightTooltipTabs:FC = () => <WithTabs title="Right Tooltip">
  <div className="my-6">
    <div className="tooltip tooltip-open tooltip-right" data-tip="hello">
      <button className="btn">Right</button>
    </div>
  </div>
</WithTabs>

const PrimaryTooltipTabs:FC = () => <WithTabs title="Primary Tooltip">
  <div className="my-6">
    <div className="tooltip tooltip-open tooltip-primary" data-tip="hello">
      <button className="btn btn-primary">Right</button>
    </div>
  </div>
</WithTabs>

const SecondaryTooltipTabs:FC = () => <WithTabs title="Secondary Tooltip">
  <div className="my-6">
    <div className="tooltip tooltip-open tooltip-secondary" data-tip="hello">
      <button className="btn btn-secondary">Right</button>
    </div>
  </div>
</WithTabs>

const AccentTooltipTabs:FC = () => <WithTabs title="Accent Tooltip">
  <div className="my-6">
    <div className="tooltip tooltip-open tooltip-accent" data-tip="hello">
      <button className="btn btn-accent">Right</button>
    </div>
  </div>
</WithTabs>

const InfoTooltipTabs:FC = () => <WithTabs title="Info Tooltip">
  <div className="my-6">
    <div className="tooltip tooltip-open tooltip-info" data-tip="hello">
      <button className="btn btn-info">Right</button>
    </div>
  </div>
</WithTabs>

const SuccessTooltipTabs:FC = () => <WithTabs title="Success Tooltip">
  <div className="my-6">
    <div className="tooltip tooltip-open tooltip-success" data-tip="hello">
      <button className="btn btn-success">Right</button>
    </div>
  </div>
</WithTabs>

const WarningTooltipTabs:FC = () => <WithTabs title="Warning Tooltip">
  <div className="my-6">
    <div className="tooltip tooltip-open tooltip-warning" data-tip="hello">
      <button className="btn btn-warning">Right</button>
    </div>
  </div>
</WithTabs>

const ErrorTooltipTabs:FC = () => <WithTabs title="Error Tooltip">
  <div className="my-6">
    <div className="tooltip tooltip-open tooltip-error" data-tip="hello">
      <button className="btn btn-error">Right</button>
    </div>
  </div>
</WithTabs>

