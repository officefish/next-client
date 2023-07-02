import { FC, useState,  useEffect } from "react"
import TableItem from "./table/table-item"
import WithTabs from "./tabs"

import TableHead from "./table/table-head"

type Props = {}
const Breadcrumbs: FC = (props: Props) => {

  return (<>
        <h1>Breadcrumbs</h1>
        <p>Breadcrumbs helps users to navigate through the website.</p>

        <div className="not-prose mt-6 mb-10 overflow-x-auto">
          <table className="table-compact table w-full">
            
            <TableHead />
            
            <tbody className="text-base-content dark:text-base-content-dark">
              <TableItem name='breadcrumbs' type='component' description="Container element" />
            </tbody>
          </table>
        </div>

        <BreadcrumbsTabs />
        <BreadcrumbsWithIconsTabs />
        <BreadcrumbsWithMaxWidthTabs />
        
    </>
        
    
  )
}

export default Breadcrumbs

const BreadcrumbsTabs:FC = () => <WithTabs title="Breadcrumbs">
    <div className="text-sm breadcrumbs text-base-content dark:text-base-content-dark">
        <ul>
            <li><a>Home</a></li> 
            <li><a>Documents</a></li> 
            <li>Add Document</li>
        </ul>
    </div>
</WithTabs>

const BreadcrumbsWithIconsTabs:FC = () => <WithTabs title="Breadcrumbs with icons">
    <div className="text-sm breadcrumbs text-base-content dark:text-base-content-dark">
        <ul>
            <li>
            <a>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                Home
            </a>
            </li> 
            <li>
            <a>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path></svg>
                Documents
            </a>
            </li> 
            <li>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="w-4 h-4 mr-2 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 13h6m-3-3v6m5 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path></svg>
            Add Document
            </li>
        </ul>
    </div>
</WithTabs>

const BreadcrumbsWithMaxWidthTabs:FC = () => <WithTabs title="Breadcrumbs with max-width">
    <div className="max-w-xs text-sm breadcrumbs text-base-content dark:text-base-content-dark">
        <ul>
            <li>Long text 1</li>
            <li>Long text 2</li>
            <li>Long text 3</li>
            <li>Long text 4</li>
            <li>Long text 5</li>
        </ul>
    </div>
</WithTabs>

