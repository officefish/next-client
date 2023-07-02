import { FC, useState,  useEffect } from "react"
import TableItem from "./table/table-item"
import WithTabs from "./tabs"
import TableHead from "./table/table-head"

type Props = {}
const Select: FC = (props: Props) => {

  return (<>
        <h1>Select</h1>
        <p>Select is used to pick a value from a list of options.</p>

        <div className="not-prose mt-6 mb-10 overflow-x-auto">
          <table className="table-compact table w-full">
            
            <TableHead />
            
            <tbody className="text-base-content dark:text-base-content-dark">
              
              <TableItem name='form-control' type='component' description="Container element" />
              <TableItem name='label' type='component' description="For helper text" />
              <TableItem name='select' type='component' description="For <select> element" />

              <TableItem name='select-bordered' type='modifier' description="Adds border to select" />
              <TableItem name='select-ghost' type='modifier' description="Adds ghost style to select" />
              <TableItem name='select-primary' type='modifier' description="Adds `primary` color to select" />
              <TableItem name='select-secondary' type='modifier' description="Adds `secondary` color to select" />
              <TableItem name='select-accent' type='modifier' description="Adds `accent` color to select" />
              <TableItem name='select-info' type='modifier' description="Adds `info` color to select" />
              <TableItem name='select-success' type='modifier' description="Adds `success` color to select" />
              <TableItem name='select-warning' type='modifier' description="Adds `warning` color to select" />
              <TableItem name='select-error' type='modifier' description="Adds `error` color to select" />

              <TableItem name='select-lg' type='responsive' description="Large size for select" />
              <TableItem name='select-md' type='responsive' description="Medium (default) size for select" />
              <TableItem name='select-sm' type='responsive' description="Small size for select" />
              <TableItem name='select-xs' type='responsive' description="Extra small size for select" />
         
            </tbody>
          </table>
        </div>

        <SelectTabs />
        <SelectBorderedTabs />
        <SelectGhostTabs />
        <SelectPrimaryTabs />
        <SelectSecondaryTabs />
        <SelectAccentTabs />
        <SelectInfoTabs />
        <SelectSuccessTabs />
        <SelectWarningTabs />
        <SelectErrorTabs />
        <SelectSizesTabs />
        <SelectDisabledTabs />

    </>
  )
}

export default Select

const SelectContent:FC = () => {
  return (
    <>
      <option disabled>Pick your favorite Simpson</option>
      <option>Homer</option>
      <option>Marge</option>
      <option>Bart</option>
      <option>Lisa</option>
      <option>Maggie</option>
    </>
  )
}

const SelectTabs:FC =  () => <WithTabs title="Select">
  <select className="select w-full max-w-xs">
    <SelectContent />
  </select>
</WithTabs>

const SelectBorderedTabs:FC =  () => <WithTabs title="Select with border">
  <select className="select select-bordered w-full max-w-xs">
    <SelectContent />
  </select>
</WithTabs>

const SelectGhostTabs:FC =  () => <WithTabs title="Ghost (no background)">
  <select className="select select-ghost w-full max-w-xs">
    <SelectContent />
  </select>
</WithTabs>

const SelectPrimaryTabs:FC =  () => <WithTabs title="Primary">
  <select className="select select-primary w-full max-w-xs">
    <SelectContent />
  </select>
</WithTabs>

const SelectSecondaryTabs:FC =  () => <WithTabs title="Secondary">
  <select className="select select-secondary w-full max-w-xs">
    <SelectContent />
  </select>
</WithTabs>

const SelectAccentTabs:FC =  () => <WithTabs title="Accent">
  <select className="select select-accent w-full max-w-xs">
    <SelectContent />
  </select>
</WithTabs>

const SelectInfoTabs:FC =  () => <WithTabs title="Info">
  <select className="select select-info w-full max-w-xs">
    <SelectContent />
  </select>
</WithTabs>

const SelectSuccessTabs:FC =  () => <WithTabs title="Success">
  <select className="select select-success w-full max-w-xs">
    <SelectContent />
  </select>
</WithTabs>

const SelectWarningTabs:FC =  () => <WithTabs title="Warning">
  <select className="select select-warning w-full max-w-xs">
    <SelectContent />
  </select>
</WithTabs>

const SelectErrorTabs:FC =  () => <WithTabs title="Error">
  <select className="select select-error w-full max-w-xs">
    <SelectContent />
  </select>
</WithTabs>

const SelectSizesTabs:FC =  () => <WithTabs title="Sizes">
  <select className="select select-bordered select-lg w-full max-w-xs" defaultValue="Large">
    <option disabled >Large</option>
    <option>Large Apple</option>
    <option>Large Orange</option>
    <option>Large Tomato</option>
  </select>
  <select className="select select-bordered w-full max-w-xs" defaultValue="Normal">
    <option disabled >Normal</option>
    <option>Normal Apple</option>
    <option>Normal Orange</option>
    <option>Normal Tomato</option>
  </select>
  <select className="select select-bordered select-sm w-full max-w-xs" defaultValue="Small">
    <option disabled>Small</option>
    <option>Small Apple</option>
    <option>Small Orange</option>
    <option>Small Tomato</option>
  </select>
  <select className="select select-bordered select-xs w-full max-w-xs" defaultValue="Tiny">
    <option disabled>Tiny</option>
    <option>Tiny Apple</option>
    <option>Tiny Orange</option>
    <option>Tiny Tomato</option>
  </select>
</WithTabs>

const SelectDisabledTabs:FC =  () => <WithTabs title="Disabled">
  <select className="select w-full max-w-xs" disabled>
    <option>You can't touch this</option>
  </select>
</WithTabs>