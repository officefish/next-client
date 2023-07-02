import { FC, useState,  useEffect } from "react"
import TableItem from "./table/table-item"
import WithTabs from "./tabs"

import TableHead from "./table/table-head"

type Props = {}
const Dropdown: FC = (props: Props) => {

  return (<>
        <h1>Dropdown</h1>
        <p>Dropdown can open a menu or any other element when the button is clicked.</p>

        <div className="not-prose mt-6 mb-10 overflow-x-auto">
          <table className="table-compact table w-full">
            
            <TableHead />
            
            <tbody className="text-base-content dark:text-base-content-dark">
              
              <TableItem name='dropdown' type='component' description="Container element" />
              <TableItem name='dropdown-content' type='component' description="Container for content" />

              <TableItem name='dropdown-end' type='modifier' description="Aligns to end" />
              <TableItem name='dropdown-top' type='modifier' description="Open from top" />
              <TableItem name='dropdown-bottom' type='modifier' description="Open from bottom" />
              <TableItem name='dropdown-left' type='modifier' description="Open from left" />
              <TableItem name='dropdown-right' type='modifier' description="Open from right" />
              <TableItem name='dropdown-hover' type='modifier' description="Opens on hover too" />
              <TableItem name='dropdown-open' type='modifier' description="Force open" />
         
            </tbody>
          </table>
        </div>

        <DropdownTabs />
        <DropdownEndTabs />
        <DropdownTopTabs />
        <DropdownTopEndTabs />
        <DropdownBottomTabs />
        <DropdownBottomEndTabs />
        <DropdownLeftTabs />
        <DropdownLeftEndTabs />
        <DropdownRightTabs />
        <DropdownRightEndTabs />
        <DropdownHoverTabs />
        <DropdownForceOpenTabs />
    </>
  )
}

export default Dropdown

const DropdownContent:FC = () => {
  return (
    <>
      <label tabIndex={0} className="btn m-1">Click</label>
      <ul tabIndex={0} className="dropdown-content menu p-2 shadow bg-base-100 dark:bg-base-100-dark rounded-box w-52">
        <li><button className="btn btn-ghost btn-block">Item 1</button></li>
        <li><button className="btn btn-ghost btn-block">Item 2</button></li>
      </ul>
    </>
  )
}

const DropdownTabs:FC =  () => <WithTabs title="Dropdown menu">
    <div className="dropdown mb-32">
      <DropdownContent />  
    </div>
</WithTabs>

const DropdownEndTabs:FC =  () => <WithTabs title="Dropdown / aligns to end">
    <div className="dropdown dropdown-end mb-32">
      <DropdownContent />  
    </div>
</WithTabs>

const DropdownTopTabs:FC =  () => <WithTabs title="Dropdown top">
    <div className="dropdown dropdown-top mt-32">
      <DropdownContent />  
    </div>
</WithTabs>

const DropdownTopEndTabs:FC =  () => <WithTabs title="Dropdown top / aligns to end">
    <div className="dropdown dropdown-top dropdown-end mt-32">
      <DropdownContent />  
    </div>
</WithTabs>

const DropdownBottomTabs:FC =  () => <WithTabs title="Dropdown bottom">
<div className="dropdown dropdown-bottom mb-32">
  <DropdownContent />  
</div>
</WithTabs>

const DropdownBottomEndTabs:FC =  () => <WithTabs title="Dropdown bottom / aligns to end">
<div className="dropdown dropdown-bottom dropdown-end mb-32">
  <DropdownContent />  
</div>
</WithTabs>

const DropdownLeftTabs:FC =  () => <WithTabs title="Dropdown left">
<div className="dropdown dropdown-left mb-16">
  <DropdownContent />  
</div>
</WithTabs>

const DropdownLeftEndTabs:FC =  () => <WithTabs title="Dropdown left / aligns to end">
<div className="dropdown dropdown-left dropdown-end mt-16">
  <DropdownContent />  
</div>
</WithTabs>

const DropdownRightTabs:FC =  () => <WithTabs title="Dropdown right">
<div className="dropdown dropdown-right mb-16">
  <DropdownContent />  
</div>
</WithTabs>

const DropdownRightEndTabs:FC =  () => <WithTabs title="Dropdown right / aligns to end">
<div className="dropdown dropdown-right dropdown-end mt-16">
  <DropdownContent />  
</div>
</WithTabs>

const DropdownHoverTabs:FC =  () => <WithTabs title="Dropdown on hover">
    <div className="dropdown dropdown-hover mb-32">
      <DropdownContent />  
    </div>
</WithTabs>

const DropdownForceOpenTabs:FC =  () => <WithTabs title="Dropdown open">
    <div className="dropdown dropdown-open mb-32">
      <DropdownContent />  
    </div>
</WithTabs>










