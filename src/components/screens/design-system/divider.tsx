import { FC, useState,  useEffect } from "react"
import TableItem from "./table/table-item"
import WithTabs from "./tabs"

import TableHead from "./table/table-head"

type Props = {}
const Divider: FC = (props: Props) => {

  return (<>
        <h1>Divider</h1>
        <p>Divider will be used to separate content vertically or horizontally.</p>

        <div className="not-prose mt-6 mb-10 overflow-x-auto">
          <table className="table-compact table w-full">
            
            <TableHead />
            
            <tbody className="text-base-content dark:text-base-content-dark">
              
              <TableItem name='divider' type='component' description="Put a divider line between two elements" />
              <TableItem name='divider-vertical' type='responsive' description="Put a divider line between two elements" />
              <TableItem name='divider-horizontal' type='responsive' description="Divide elements next to each other" />
         
            </tbody>
          </table>
        </div>

        <DividerTabs />
        <DividerHorizontalTabs />
        <DividerNoTextTabs />
        <ResponsiveDividerTabs />
    </>
  )
}

export default Divider

const DividerTabs:FC = () => <WithTabs title="Divider">
    <div className="flex flex-col w-full border-opacity-50">
      <div className="grid h-20 card bg-base-300 dark:bg-base-300-dark rounded-box place-items-center">content</div>
      <div className="divider">OR</div>
      <div className="grid h-20 card bg-base-300 dark:bg-base-300-dark rounded-box place-items-center">content</div>
    </div>
</WithTabs>

const DividerHorizontalTabs:FC = () => <WithTabs title="Divider horizontal">
    <div className="flex w-full">
      <div className="grid h-20 flex-grow card bg-base-300 dark:bg-base-300-dark rounded-box place-items-center">content</div>
      <div className="divider divider-horizontal h-20">OR</div>
      <div className="grid h-20 flex-grow card bg-base-300 dark:bg-base-300-dark rounded-box place-items-center">content</div>
    </div>
</WithTabs>

const DividerNoTextTabs:FC = () => <WithTabs title="Divider with no text">
   <div className="flex flex-col w-full">
      <div className="grid h-20 card bg-base-300 dark:bg-base-300-dark rounded-box place-items-center">content</div> 
      <div className="divider"></div> 
      <div className="grid h-20 card bg-base-300 dark:bg-base-300-dark rounded-box place-items-center">content</div>
  </div>
</WithTabs>

const ResponsiveDividerTabs:FC = () => <WithTabs title="Divider with no text">
   <div className="flex flex-col w-full lg:flex-row">
      <div className="grid flex-grow h-32 card bg-base-300 dark:bg-base-300-dark rounded-box place-items-center">content</div> 
      <div className="divider lg:divider-horizontal">OR</div> 
      <div className="grid flex-grow h-32 card bg-base-300 dark:bg-base-300-dark rounded-box place-items-center">content</div>
    </div>
</WithTabs>










