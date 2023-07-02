import { FC, useState,  useEffect } from "react"
import TableItem from "./table/table-item"
import WithTabs from "./tabs"

import TableHead from "./table/table-head"

type Props = {}
const Badge: FC = (props: Props) => {

  return (<>
        <h1>Badges</h1>
        <p>Badges are used to inform the user of the status of specific data.</p>

        <div className="not-prose mt-6 mb-10 overflow-x-auto">
          <table className="table-compact table w-full">
            
            <TableHead />
            
            <tbody className="text-base-content dark:text-base-content-dark">
              
              <TableItem name='badge' type='component' description="Container element" />
             
              <TableItem name='badge-outline' type='modifier' description="transparent badge with [colorful] border" />

              <TableItem name='badge-primary' type='modifier' description="badge with `primary` color" />
              <TableItem name='badge-secondary' type='modifier' description="badge with `secondary` color" />
              <TableItem name='badge-accent' type='modifier' description="badge with `accent` color" />

              <TableItem name='badge-info' type='modifier' description="badge with `info` color" />
              <TableItem name='badge-success' type='modifier' description="badge with `success` color" />
              <TableItem name='badge-warning' type='modifier' description="badge with `warning` color" />
              <TableItem name='badge-error' type='modifier' description="badge with `error` color" />

              <TableItem name='badge-lg' type='responsive' description="badge with large size" />
              <TableItem name='badge-md' type='responsive' description="badge with medium size (default)" />
              <TableItem name='badge-sm' type='responsive' description="badge with small size" />
              <TableItem name='badge-xs' type='responsive' description="badge with extra small size" />

            </tbody>
          </table>
        </div>

        <BadgeTabs />
        <BrandColorBadgeTabs />
        <OutlineBadgeTabs />
        <BadgeSizesTabs />
        <EmptyBadgeTabs />
        <StateColorsBadgeTabs />
        <BadgeInTextTabs />
        <BadgeInButtonTabs />
    </>
        
    
  )
}

export default Badge

const BadgeTabs:FC = () => <WithTabs title="Badge">
    <span className="badge">Badge</span>
</WithTabs>

const BrandColorBadgeTabs:FC = () => <WithTabs title="Badge with brand colors">
    <div className="badge">neutral</div>
    <div className="badge badge-primary">primary</div>
    <div className="badge badge-secondary">secondary</div>
    <div className="badge badge-accent">accent</div>
    <div className="badge badge-ghost">ghost</div>
</WithTabs>

const OutlineBadgeTabs:FC = () => <WithTabs title="Outline badge">
    <div className="badge badge-outline badge-neutral">neutral</div>
    <div className="badge badge-primary badge-outline">primary</div>
    <div className="badge badge-secondary badge-outline">secondary</div>
    <div className="badge badge-accent badge-outline">accent</div>
</WithTabs>

const BadgeSizesTabs:FC = () => <WithTabs title="Badge sizes">
    <div className="badge badge-lg">987,654</div>
    <div className="badge badge-md">987,654</div>
    <div className="badge badge-sm">987,654</div>
    <div className="badge badge-xs">987,654</div>
</WithTabs>

const EmptyBadgeTabs:FC = () => <WithTabs title="Empty badge">
    <div className="badge badge-lg"></div>
    <div className="badge badge-md"></div>
    <div className="badge badge-sm"></div>
    <div className="badge badge-xs"></div>
</WithTabs>

const StateColorsBadgeTabs:FC = () => <WithTabs title="Badge with state colors">
   <div className="badge badge-info gap-2">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-4 h-4 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
    info
    </div>
    <div className="badge badge-success gap-2">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-4 h-4 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
    success
    </div>
    <div className="badge badge-warning gap-2">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-4 h-4 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
    warning
    </div>
    <div className="badge badge-error gap-2">
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-4 h-4 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
    error
    </div>
</WithTabs>

const BadgeInTextTabs:FC = () => <WithTabs title="Badge in a text">
    <div className="flex flex-col dark:text-base-content-dark">
        <h2 className="text-xl">
        Heading
        <span className="ml-2 badge badge-lg">NEW</span>
        </h2>
        <h3 className="text-lg">
        Heading
        <span className="ml-2 badge badge-md">NEW</span>
        </h3>
        <h4 className="text-base">
        Heading
        <span className="ml-2 badge badge-sm">NEW</span>
        </h4>
        <h5 className="text-sm">
        Heading
        <span className="ml-2 badge badge-xs">NEW</span>
        </h5>
    </div>
</WithTabs>

const BadgeInButtonTabs:FC = () => <WithTabs title="Badge in a button">
   <button className="btn gap-2">
    Inbox
    <div className="badge">+99</div>
    </button>
    <button className="btn gap-2">
    Inbox
    <div className="badge badge-secondary">+99</div>
    </button>
</WithTabs>

