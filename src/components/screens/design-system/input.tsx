import { FC, useState,  useEffect } from "react"
import TableItem from "./table/table-item"
import WithTabs from "./tabs"

import TableHead from "./table/table-head"

type Props = {}
const Input: FC = (props: Props) => {

  return (<>
        <h1>Text Input</h1>
        <p>Text Input is a simple input field.</p>

        <div className="not-prose mt-6 mb-10 overflow-x-auto">
          <table className="table-compact table w-full">
            
            <TableHead />
            
            <tbody className="text-base-content dark:text-base-content-dark">
              
              <TableItem name='form-control' type='component' description="Container element" />
              <TableItem name='label' type='component' description="For helper text" />
              <TableItem name='input' type='component' description="For <input> element" />

              <TableItem name='input-bordered' type='modifier' description="Adds border to input" />
              <TableItem name='input-ghost' type='modifier' description="Adds ghost style to input" />
              <TableItem name='input-primary' type='modifier' description="Adds `primary` color to input" />
              <TableItem name='input-secondary' type='modifier' description="Adds `secondary` color to input" />
              <TableItem name='input-accent' type='modifier' description="Adds `accent` color to input" />
              <TableItem name='input-info' type='modifier' description="Adds `info` color to input" />
              <TableItem name='input-success' type='modifier' description="Adds `success` color to input" />
              <TableItem name='input-warning' type='modifier' description="Adds `warning` color to input" />
              <TableItem name='input-error' type='modifier' description="Adds `error` color to input" />

              <TableItem name='input-lg' type='responsive' description="Large size for input" />
              <TableItem name='input-md' type='responsive' description="Medium (default) size for input" />
              <TableItem name='input-sm' type='responsive' description="Small size for input" />
              <TableItem name='input-xs' type='responsive' description="Extra small size for input" />
           
            </tbody>
          </table>
        </div>

        <WithTextInputTabs />
        <InputWithBorderTabs /> 
        <GhostInputTabs />
        <WithFormControlAndLabelTabs />
        <PrimaryInputTabs />
        <SecondaryInputTabs />
        <AccentInputTabs />
        <SuccessInputTabs />
        <InfoInputTabs />
        <WarningInputTabs />
        <ErrorInputTabs />
        <InputSizesTabs />
        <DisabledTabs />
    </>
    
  )
}

export default Input

const WithTextInputTabs:FC = () => <WithTabs title="Text input">
  <input type="text" placeholder="Type here" className="input w-full max-w-xs" />
</WithTabs>

const InputWithBorderTabs:FC = () => <WithTabs title="Text input with border">
  <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
</WithTabs>

const GhostInputTabs:FC = () => <WithTabs title="Text input with border">
  <input type="text" placeholder="Type here" className="input input-ghost w-full max-w-xs" />
</WithTabs> 

const WithFormControlAndLabelTabs:FC = () => <WithTabs title="With form-control and labels">
  <div className="form-control w-full max-w-xs">
  <label className="label">
    <span className="label-text">What is your name?</span>
    <span className="label-text-alt">Top Right label</span>
  </label>
  <input type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
  <label className="label">
    <span className="label-text-alt">Bottom Left label</span>
    <span className="label-text-alt">Bottom Right label</span>
  </label>
</div>
</WithTabs> 

const PrimaryInputTabs:FC = () => <WithTabs title="Primary color">
  <input type="text" placeholder="Type here" className="input input-bordered input-primary w-full max-w-xs" />
</WithTabs> 

const SecondaryInputTabs:FC = () => <WithTabs title="Secondary color">
  <input type="text" placeholder="Type here" className="input input-bordered input-secondary w-full max-w-xs" />
</WithTabs> 

const AccentInputTabs:FC = () => <WithTabs title="Accent color">
  <input type="text" placeholder="Type here" className="input input-bordered input-accent w-full max-w-xs" />
</WithTabs> 

const SuccessInputTabs:FC = () => <WithTabs title="Success color">
  <input type="text" placeholder="Type here" className="input input-bordered input-success w-full max-w-xs" />
</WithTabs> 

const InfoInputTabs:FC = () => <WithTabs title="Info color">
  <input type="text" placeholder="Type here" className="input input-bordered input-info w-full max-w-xs" />
</WithTabs> 

const WarningInputTabs:FC = () => <WithTabs title="Warning color">
  <input type="text" placeholder="Type here" className="input input-bordered input-warning w-full max-w-xs" />
</WithTabs> 

const ErrorInputTabs:FC = () => <WithTabs title="Error color">
  <input type="text" placeholder="Type here" className="input input-bordered input-error w-full max-w-xs" />
</WithTabs> 

const InputSizesTabs:FC = () => <WithTabs title="Sizes">
  <div className='flex flex-col gap-5'>
    <input type="text" placeholder="Type here" className="input input-bordered input-xs w-full max-w-xs" />
    <input type="text" placeholder="Type here" className="input input-bordered input-sm w-full max-w-xs" />
    <input type="text" placeholder="Type here" className="input input-bordered input-md w-full max-w-xs" />
    <input type="text" placeholder="Type here" className="input input-bordered input-lg w-full max-w-xs" />
  </div>
</WithTabs> 

const DisabledTabs:FC = () => <WithTabs title="Disabled">
  <input type="text" placeholder="You can't touch this" className="input input-bordered w-full max-w-xs" disabled />
</WithTabs>