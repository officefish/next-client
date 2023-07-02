import { FC, useState,  useEffect } from "react"
import TableItem from "./table/table-item"
import WithTabs from "./tabs"
import TableHead from "./table/table-head"
import Image from "next/image"

import avatarSrc from '@public/avatar.jpg'

type Props = {}
const Stat: FC = (props: Props) => {

  return (<>
        <h1>Stat</h1>
        <p>Stat is used to show numbers and data in a box.</p>

        <div className="not-prose mt-6 mb-10 overflow-x-auto">
          <table className="table-compact table w-full">
            
            <TableHead />
            
            <tbody className="text-base-content dark:text-base-content-dark">
              
              <TableItem name='form-control' type='component' description="Container of multiple stat items" />
              <TableItem name='stat' type='component' description="One stat item" />
              <TableItem name='stat-title' type='component' description="Title text" />
              <TableItem name='stat-value' type='component' description="Value text" />
              <TableItem name='stat-desc' type='component' description="Description text" />
              <TableItem name='stat-figure' type='component' description="Description text" />
              <TableItem name='stat-actions' type='component' description="For buttons, input, etc" />

              <TableItem name='stats-horizontal' type='responsive' description="Shows items horizontally (default)" />
              <TableItem name='stat-vertical' type='responsive' description="Shows items vertically" />

            </tbody>
          </table>
        </div>

        <StatTabs />
        <StatWithIconsOrImageTabs />
        <StatWithIconsTabs />
        <ConteredStatTabs />
        <VerticalStatTabs />
        <ResponsiveStatTabs />
        <CustomColorStatTabs />
    </>
  )
}

export default Stat

const StatTabs:FC =  () => <WithTabs title="Stat">
  <div className="stats shadow">
        <div className="stat">
            <div className="stat-title">Total Page Views</div>
            <div className="stat-value">89,400</div>
            <div className="stat-desc">21% more than last month</div>
        </div>
    </div>
</WithTabs>

const StatWithIconsOrImageTabs:FC =  () => <WithTabs title="# Stat with icons or image">
  <div className="stats shadow">
  
        <div className="stat">
            <div className="stat-figure text-primary dark:text-primary-dark">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"></path></svg>
            </div>
            <div className="stat-title">Total Likes</div>
            <div className="stat-value text-primary dark:text-primary-dark">25.6K</div>
            <div className="stat-desc">21% more than last month</div>
        </div>
        
        <div className="stat">
            <div className="stat-figure text-secondary dark:text-secondary-dark">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
            </div>
            <div className="stat-title">Page Views</div>
            <div className="stat-value text-secondary">2.6M</div>
            <div className="stat-desc">21% more than last month</div>
        </div>
        
        <div className="stat">
            <div className="stat-figure text-secondary dark:text-secondary-dark">
            <div className="avatar online">
                <div className="w-16 rounded-full">
                <Image alt="shoes" 
                    src={avatarSrc} 
                    width={64} 
                    height={64} 
                    />
                </div>
            </div>
            </div>
            <div className="stat-value">86%</div>
            <div className="stat-title">Tasks done</div>
            <div className="stat-desc text-secondary dark:text-secondary-dark">31 tasks remaining</div>
        </div>
    </div>
</WithTabs>

const StatWithIconsTabs:FC =  () => <WithTabs title="Stat with icons.">
    
    <div className="stats shadow">
    
        <div className="stat">
            <div className="stat-figure text-secondary dark:text-secondary-dark">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            </div>
            <div className="stat-title">Downloads</div>
            <div className="stat-value">31K</div>
            <div className="stat-desc">Jan 1st - Feb 1st</div>
        </div>
        
        <div className="stat">
            <div className="stat-figure text-secondary dark:text-secondary-dark">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"></path></svg>
            </div>
            <div className="stat-title">New Users</div>
            <div className="stat-value">4,200</div>
            <div className="stat-desc">↗︎ 400 (22%)</div>
        </div>
        
        <div className="stat">
            <div className="stat-figure text-secondary dark:text-secondary-dark">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-8 h-8 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"></path></svg>
            </div>
            <div className="stat-title">New Registers</div>
            <div className="stat-value">1,200</div>
            <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>
    
    </div>
</WithTabs>

const ConteredStatTabs:FC =  () => <WithTabs title="Contered Items">
    <div className="stats shadow">
        <div className="stat place-items-center">
            <div className="stat-title">Downloads</div>
            <div className="stat-value">31K</div>
            <div className="stat-desc">From January 1st to February 1st</div>
        </div>
        
        <div className="stat place-items-center">
            <div className="stat-title">Users</div>
            <div className="stat-value text-secondary dark:text-secondary-dark">4,200</div>
            <div className="stat-desc text-secondary dark:text-secondary-dark">↗︎ 40 (2%)</div>
        </div>
        
        <div className="stat place-items-center">
            <div className="stat-title">New Registers</div>
            <div className="stat-value">1,200</div>
            <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>
    </div>
</WithTabs>

const VerticalStatTabs:FC =  () => <WithTabs title="Vertical">
    
    <div className="stats stats-vertical shadow">
  
        <div className="stat place-items-center">
                <div className="stat-title">Downloads</div>
                <div className="stat-value">31K</div>
                <div className="stat-desc">From January 1st to February 1st</div>
            </div>
        
        <div className="stat place-items-center">
            <div className="stat-title">Users</div>
            <div className="stat-value text-secondary dark:text-secondary-dark">4,200</div>
            <div className="stat-desc text-secondary dark:text-secondary-dark">↗︎ 40 (2%)</div>
        </div>
        
        <div className="stat place-items-center">
            <div className="stat-title">New Registers</div>
            <div className="stat-value">1,200</div>
            <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>
    
    </div>
</WithTabs>

const ResponsiveStatTabs:FC =  () => <WithTabs title="Responsive (vertical on small screen, horizontal on large screen)">
    <div className="stats stats-vertical lg:stats-horizontal shadow">
    
        <div className="stat">
            <div className="stat-title">Downloads</div>
            <div className="stat-value">31K</div>
            <div className="stat-desc">Jan 1st - Feb 1st</div>
        </div>
        
        <div className="stat">
            <div className="stat-title">New Users</div>
            <div className="stat-value">4,200</div>
            <div className="stat-desc">↗︎ 400 (22%)</div>
        </div>
        
        <div className="stat">
            <div className="stat-title">New Registers</div>
            <div className="stat-value">1,200</div>
            <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>
    
    </div>
</WithTabs>

const CustomColorStatTabs:FC =  () => <WithTabs title="With custom colors and button">
    <div className="stats !bg-primary dark:bg-primary-dark !text-primary-content dark:text-primary-content-dark">
  
        <div className="stat">
            <div className="stat-title">Account balance</div>
            <div className="stat-value">$89,400</div>
            <div className="stat-actions">
            <button className="btn btn-sm btn-success">Add funds</button>
            </div>
        </div>
        
        <div className="stat">
            <div className="stat-title">Current balance</div>
            <div className="stat-value">$89,400</div>
            <div className="stat-actions flex flex-row gap-2">
            <button className="btn btn-sm">Withdrawal</button> 
            <button className="btn btn-sm">deposit</button>
            </div>
        </div>
    </div>
</WithTabs>