import { FC, useState,  useEffect } from "react"
import TableItem from "./table/table-item"
import WithTabs from "./tabs"

import TableHead from "./table/table-head"

type Props = {}
const TextArea: FC = (props: Props) => {

  return (<>
        <h1>Textarea</h1>
        <p>Textarea allows users to enter text in multiple lines.</p>

        <div className="not-prose mt-6 mb-10 overflow-x-auto">
          <table className="table-compact table w-full">
            <TableHead />
            <tbody className="text-base-content dark:text-base-content-dark">         
             
              <TableItem name='form-control' type='component' description="Container element" />
              <TableItem name='textarea' type='component' description="For <textarea> element" />
              <TableItem name='label' type='component' description="For helper text" />

              <TableItem name='textarea-bordered' type='modifier' description="Adds border to textarea" />
              <TableItem name='textarea-ghost' type='modifier' description="Adds ghost style to textarea" />
 
              <TableItem name='textarea-primary' type='modifier' description="Adds `primary` to textarea" />
              <TableItem name='textarea-secondary' type='modifier' description="Adds `secondary` to textarea" />
              <TableItem name='textarea-accent' type='modifier' description="Adds `accent` to textarea" />
              <TableItem name='textarea-success' type='modifier' description="Adds `success` to textarea" />
              <TableItem name='textarea-warning' type='modifier' description="Adds `warning` to textarea" />
              <TableItem name='textarea-info' type='modifier' description="Adds `info` to textarea" />
              <TableItem name='textarea-error' type='modifier' description="Adds `error` to textarea" />
             
              <TableItem name='textarea-lg' type='responsive' description="Large textarea" />
              <TableItem name='textarea-md' type='responsive' description="Medium textarea (default)" />
              <TableItem name='textarea-sm' type='responsive' description="Small textarea" />
              <TableItem name='textarea-xs' type='responsive' description="Extra small textarea" />
              
            </tbody>
          </table>
        </div>

        <TextareaTabs />
        <TextareaBorderTabs />
        <TextareaGhostTabs />
        <FormControlLabelTextareaTabs />
        <PrimaryTabs />
        <SecondaryTabs />
        <AccentTabs />
        <SuccessTabs />
        <InfoTabs />
        <WarningTabs />
        <ErrorTabs />
        <SizesTabs />
        <DisabledTabs />
    </>
  )
}

export default TextArea

const TextareaTabs:FC = () => <WithTabs title="TextArea">
    <textarea className="textarea" placeholder="Bio"></textarea>
</WithTabs>

const TextareaBorderTabs:FC = () => <WithTabs title="Textarea bordered">
  <textarea className="textarea textarea-bordered" placeholder="Bio"></textarea>
</WithTabs>

const TextareaGhostTabs:FC = () => <WithTabs title="Textarea ghost">
  <textarea className="textarea textarea-ghost" placeholder="Bio"></textarea>
</WithTabs>

const FormControlLabelTextareaTabs:FC = () => <WithTabs title="Textarea ghost">
  <div className="form-control">
  <label className="label">
    <span className="label-text">Your bio</span>
    <span className="label-text-alt">Alt label</span>
  </label>
  <textarea className="textarea textarea-bordered h-24" placeholder="Bio"></textarea>
  <label className="label">
    <span className="label-text-alt">Your bio</span>
    <span className="label-text-alt">Alt label</span>
  </label>
</div>
</WithTabs>

const PrimaryTabs:FC = () => <WithTabs title="Primary Tabs">
  <textarea className="textarea textarea-primary" placeholder="Bio"></textarea>
</WithTabs>

const SecondaryTabs:FC = () => <WithTabs title="Secondary Tabs">
  <textarea className="textarea textarea-secondary" placeholder="Bio"></textarea>
</WithTabs>

const AccentTabs:FC = () => <WithTabs title="Accent Tabs">
  <textarea className="textarea textarea-accent" placeholder="Bio"></textarea>
</WithTabs>

const SuccessTabs:FC = () => <WithTabs title="Success Tabs">
  <textarea className="textarea textarea-success" placeholder="Bio"></textarea>
</WithTabs>

const InfoTabs:FC = () => <WithTabs title="Info Tabs">
  <textarea className="textarea textarea-info" placeholder="Bio"></textarea>
</WithTabs>

const WarningTabs:FC = () => <WithTabs title="Warning Tabs">
  <textarea className="textarea textarea-info" placeholder="Bio"></textarea>
</WithTabs>

const ErrorTabs:FC = () => <WithTabs title="Error Tabs">
  <textarea className="textarea textarea-error" placeholder="Bio"></textarea>
</WithTabs>

const SizesTabs:FC = () => <WithTabs title="Sizes Tabs">
  <div className="flex flex-col gap-2">
    <textarea placeholder="Bio" className="textarea textarea-bordered textarea-xs w-full max-w-xs" ></textarea>
    <textarea placeholder="Bio" className="textarea textarea-bordered textarea-sm w-full max-w-xs" ></textarea>
    <textarea placeholder="Bio" className="textarea textarea-bordered textarea-md w-full max-w-xs" ></textarea>
    <textarea placeholder="Bio" className="textarea textarea-bordered textarea-lg w-full max-w-xs" ></textarea>
  </div>
</WithTabs>

const DisabledTabs:FC = () => <WithTabs title="Disabled Tabs">
 <textarea className="textarea" placeholder="Bio" disabled></textarea>
</WithTabs>