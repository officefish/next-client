import { FC, useState,  useEffect } from "react"
import TableItem from "./table/table-item"
import WithTabs from "./tabs"

import TableHead from "./table/table-head"

type Props = {}
const ButtonGroup: FC = (props: Props) => {

  return (<>
        <h1>Button group</h1>
        <p>Button group shows buttons next to each other.</p>

        <div className="not-prose mt-6 mb-10 overflow-x-auto">
          <table className="table-compact table w-full">
            
            <TableHead />
            
            <tbody className="text-base-content dark:text-base-content-dark">
              
              <TableItem name='btn-group' type='component' description="Container for grouping multiple buttons" />
              <TableItem name='btn-group-horizontal' type='responsive' description="Show buttons horizontally (default)" />
              <TableItem name='btn-group-vertical' type='responsive' description="Show buttons vertically" />
              
            </tbody>
          </table>
        </div>

        <ButtonGroupTabs />
        <ButtonGroupVerticalTabs />
        <ButtonGroupResponsiveTabs />
        <ButtonGroupRadioTabs />
    </>
        
    
  )
}

export default ButtonGroup

const ButtonGroupTabs:FC = () => <WithTabs title="Button group">
    <div className="btn-group">
        <button className="btn btn-active">Button</button>
        <button className="btn">Button</button>
        <button className="btn">Button</button>
    </div>
</WithTabs>

const ButtonGroupVerticalTabs:FC = () => <WithTabs title="Button group vertical">
   <div className="btn-group btn-group-vertical">
        <button className="btn btn-active">Button</button>
        <button className="btn">Button</button>
        <button className="btn">Button</button>
    </div>
</WithTabs>

const ButtonGroupResponsiveTabs:FC = () => <WithTabs title="Responsive - Vertical for small screen, Horizontal on large screen">
   <div className="btn-group btn-group-vertical lg:btn-group-horizontal">
        <button className="btn btn-active">Button</button>
        <button className="btn">Button</button>
        <button className="btn">Button</button>
    </div>
</WithTabs>

const ButtonGroupRadioTabs:FC = () => <WithTabs title="Button group with radio buttons">
   <div className="btn-group">
        <input type="radio" name="options" data-title="1" className="btn" />
        <input type="radio" name="options" data-title="2" className="btn" checked onChange={()=>{}} />
        <input type="radio" name="options" data-title="3" className="btn" />
        <input type="radio" name="options" data-title="4" className="btn" />
    </div>
</WithTabs>