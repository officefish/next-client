import { FC, useState,  useEffect } from "react"
import TableItem from "./table/table-item"
import WithTabs from "./tabs"

import TableHead from "./table/table-head"

type Props = {}
const Checkbox: FC = (props: Props) => {

  return (<>
        <h1>Checkbox</h1>
        <p>Checkboxes are used to select or deselect a value.</p>

        <div className="not-prose mt-6 mb-10 overflow-x-auto">
          <table className="table-compact table w-full">
            
            <TableHead />
            
            <tbody className="text-base-content dark:text-base-content-dark">
              
              <TableItem name='form-control' type='component' description="Container element" />
              <TableItem name='checkbox' type='component' description="For checkbox" />
              
              <TableItem name='checkbox-primary' type='modifier' description="Adds `primary` to checkbox" />
              <TableItem name='checkbox-secondary' type='modifier' description="Adds `secondary` to checkbox" />
              <TableItem name='checkbox-accent' type='modifier' description="Adds `accent` to checkbox" />
              <TableItem name='checkbox-success' type='modifier' description="Adds `success` to checkbox" />
              <TableItem name='checkbox-info' type='modifier' description="Adds `info` to checkbox" />
              <TableItem name='checkbox-warning' type='modifier' description="Adds `warning` to checkbox" />
              <TableItem name='checkbox-error' type='modifier' description="Adds `error` to checkbox" />

              <TableItem name='checkbox-lg' type='responsive' description="Large checkbox" />
              <TableItem name='checkbox-md' type='responsive' description="Medium checkbox (default)" />
              <TableItem name='checkbox-sm' type='responsive' description="Small checkbox" />
              <TableItem name='checkbox-xs' type='responsive' description="Extra small checkbox" />
              
            </tbody>
          </table>
        </div>

        <CheckboxTabs />
        <WithLabelCheckboxTabs />
        <PrimaryColorCheckboxTabs />
        <SecondaryColorCheckboxTabs />
        <AccentColorCheckboxTabs />
        <SuccessColorCheckboxTabs />
        <InfoColorCheckboxTabs />
        <WarningColorCheckboxTabs />
        <ErrorColorCheckboxTabs />
        <CheckboxSizesTabs />
        <DisabledTabs />
        <DisabledCheckedTabs />
        <IndeterminateTabs />
    </>
        
    
  )
}

export default Checkbox

const CheckboxTabs:FC = () => <WithTabs title="Checkbox">
  <input type="checkbox" className="checkbox" />
</WithTabs>

const WithLabelCheckboxTabs:FC = () => <WithTabs title="With label and form-control">
  <div className="flex flex-col w-52">
    <label className="label cursor-pointer">
      <span className="label-text">Remember me</span> 
      <input type="checkbox" className="checkbox" />
    </label>
  </div>
</WithTabs>

const PrimaryColorCheckboxTabs:FC = () => <WithTabs title="Primary color">
  <div className="flex flex-col w-52">
  <label className="label cursor-pointer">
    <span className="label-text">Remember me</span> 
    <input type="checkbox" className="checkbox checkbox-primary" />
  </label>
</div>
</WithTabs>

const SecondaryColorCheckboxTabs:FC = () => <WithTabs title="Secondary color">
  <div className="flex flex-col w-52">
  <label className="label cursor-pointer">
    <span className="label-text">Remember me</span> 
    <input type="checkbox" className="checkbox checkbox-secondary" />
  </label>
</div>
</WithTabs>

const AccentColorCheckboxTabs:FC = () => <WithTabs title="Accent color">
  <div className="flex flex-col w-52">
  <label className="label cursor-pointer">
    <span className="label-text">Remember me</span> 
    <input type="checkbox" className="checkbox checkbox-accent" />
  </label>
</div>
</WithTabs>

const SuccessColorCheckboxTabs:FC = () => <WithTabs title="Success color">
  <div className="flex flex-col w-52">
  <label className="label cursor-pointer">
    <span className="label-text">Remember me</span> 
    <input type="checkbox" className="checkbox checkbox-success" />
  </label>
</div>
</WithTabs>

const InfoColorCheckboxTabs:FC = () => <WithTabs title="Info color">
  <div className="flex flex-col w-52">
  <label className="label cursor-pointer">
    <span className="label-text">Remember me</span> 
    <input type="checkbox" className="checkbox checkbox-info" />
  </label>
</div>
</WithTabs>

const WarningColorCheckboxTabs:FC = () => <WithTabs title="Warning color">
  <div className="flex flex-col w-52">
  <label className="label cursor-pointer">
    <span className="label-text">Remember me</span> 
    <input type="checkbox" className="checkbox checkbox-warning" />
  </label>
</div>
</WithTabs>

const ErrorColorCheckboxTabs:FC = () => <WithTabs title="Error color">
  <div className="flex flex-col w-52">
  <label className="label cursor-pointer">
    <span className="label-text">Remember me</span> 
    <input type="checkbox" className="checkbox checkbox-error" />
  </label>
</div>
</WithTabs>

const CheckboxSizesTabs:FC = () => <WithTabs title="Checkbox Sizes">
   <div className="flex flex-col w-full gap-2 items-center">
    <input type="checkbox" className="checkbox checkbox-xs" /> 
    <input type="checkbox" className="checkbox checkbox-sm" /> 
    <input type="checkbox" className="checkbox checkbox-md" /> 
    <input type="checkbox" className="checkbox checkbox-lg" />
   </div>
</WithTabs>

const DisabledTabs:FC = () => <WithTabs title="Disabled Checkbox">
   <input type="checkbox" className="checkbox" disabled />
</WithTabs>

const DisabledCheckedTabs:FC = () => <WithTabs title="Disabled Checkbox">
   <input type="checkbox" className="checkbox" disabled checked />
</WithTabs>

const IndeterminateTabs:FC = () => <WithTabs title="Indeterminate Checkbox">
  <script>
  document.getElementById("my-checkbox").indeterminate = true
</script>
<input type="checkbox" className="checkbox" id="my-checkbox" />
</WithTabs>