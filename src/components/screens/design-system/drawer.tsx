import { FC, useState,  useEffect } from "react"
import TableItem from "./table/table-item"
import WithTabs from "./tabs"

import TableHead from "./table/table-head"

type Props = {}
const Drawer: FC = (props: Props) => {

  return (<>
        <h1>Drawer</h1>
        <p>Drawer is a grid layout that can show/hide a sidebar on the left or right side of the page.</p>

        <div className="not-prose mt-6 mb-10 overflow-x-auto">
          <table className="table-compact table w-full">
            
            <TableHead />
            
            <tbody className="text-base-content dark:text-base-content-dark">
              
              <TableItem name='drawer' type='component' description="Container element" />
              <TableItem name='drawer-toggle' type='component' description="For checkbox element that controls the drawer" />
              <TableItem name='drawer-content' type='component' description="The content container" />
              <TableItem name='drawer-side' type='component' description="The sidebar container" />
              <TableItem name='drawer-overlay' type='component' description="The label covers the content when drawer is open" />

              <TableItem name='drawer-mobile' type='modifier' description="Makes drawer to open/close on mobile but will be always visible on desktop" />
              <TableItem name='drawer-end' type='modifier' description="puts drawer to the right" />
         
            </tbody>
          </table>
        </div>

        <DrawerTabs />
        <MobileDrawerTabs />
        <RightSideDrawerTabs />
      
    </>
  )
}

export default Drawer

const DrawerTabs:FC = () => <WithTabs title="Drawer">
    <div className="drawer h-56 rounded">
        <input id="my-drawer" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col items-center justify-center">
            <label htmlFor="my-drawer" className="btn btn-primary drawer-button">Open drawer</label>
        </div> 
        <div className="drawer-side">
            <label htmlFor="my-drawer" className="drawer-overlay"></label>
            <ul className="menu p-4 w-80 bg-base-100 text-base-content dark:bg-base-100-dark dark:text-base-content-dark">
                <li><a>Sidebar Item 1</a></li>
                <li><a>Sidebar Item 2</a></li>
            </ul>
        </div>
    </div>
</WithTabs>

const MobileDrawerTabs:FC = () => <WithTabs title="Drawer for mobile + fixed sidebar for desktop">
    <div className="drawer drawer-mobile h-56 rounded">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        
        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>
      
      </div> 
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label> 
        <ul className="menu p-4 w-80 bg-base-100 text-base-content dark:bg-base-100-dark dark:text-base-content-dark">
          <li><a>Sidebar Item 1</a></li>
          <li><a>Sidebar Item 2</a></li>
        </ul>
      
      </div>
  </div>
</WithTabs>

const RightSideDrawerTabs:FC = () => <WithTabs title="Drawer that opens from right side of page">
    <div className="drawer drawer-mobile h-56 rounded drawer-end">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        
        <label htmlFor="my-drawer-4" className="drawer-button btn btn-primary">Open drawer</label>
      </div> 
      <div className="drawer-side">
        <label htmlFor="my-drawer-4" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 bg-base-100 text-base-content dark:bg-base-100-dark dark:text-base-content-dark">
          <li><a>Sidebar Item 1</a></li>
          <li><a>Sidebar Item 2</a></li>
        </ul>
      </div>
    </div>
</WithTabs>








