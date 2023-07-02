import { FC, useState,  useEffect } from "react"
import TableItem from "./table/table-item"
import WithTabs from "./tabs"

import TableHead from "./table/table-head"

type Props = {}
const MockupPhone: FC = (props: Props) => {

  return (<>
        <h1>Code mockup</h1>
        <p>Phone mockup shows a mockup of an iPhone.</p>

        <div className="not-prose mt-6 mb-10 overflow-x-auto">
          <table className="table-compact table w-full">
            
            <TableHead />
            
            <tbody className="text-base-content dark:text-base-content-dark">
              
              <TableItem name='mockup-phone' type='component' description="Container element" />
             
            </tbody>
          </table>
        </div>

        <MockupPhoneTabs />
       <MockupColorPhoneTabs />
    </>
    
  )
}

export default MockupPhone

const MockupPhoneTabs:FC = () => <WithTabs title="iPhone mockup">
    <div className="mockup-phone">
        <div className="camera"></div> 
        <div className="display">
            <div className="artboard artboard-demo phone-1">Hi.</div>
        </div>
    </div>
</WithTabs>


const MockupColorPhoneTabs:FC = () => <WithTabs title="With color">
    <div className="mockup-phone border-primary dark:border-primary-dark">
        <div className="camera"></div> 
        <div className="display">
            <div className="artboard artboard-demo phone-1">Hi.</div>
        </div>
    </div>
</WithTabs>
