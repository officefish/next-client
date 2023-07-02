import { FC, useState,  useEffect } from "react"
import TableItem from "./table/table-item"
import WithTabs from "./tabs"

import TableHead from "./table/table-head"

type Props = {}
const Menu: FC = (props: Props) => {

  return (<>
        <h1>Menu</h1>
        <p>Menu is used to display a list of links vertically or horizontally.</p>

        <div className="not-prose mt-6 mb-10 overflow-x-auto">
          <table className="table-compact table w-full">
            <TableHead />
            <tbody className="text-base-content dark:text-base-content-dark">         
             
              <TableItem name='menu' type='component' description="Container <ul> element" />
              <TableItem name='menu-title' type='component' description="Specifies the title of menu" />

              <TableItem name='disabled' type='modifier' description="Sets <li> as disabled" />
              <TableItem name='active' type='modifier' description="Applies actives style to the element inside <li>" />
              <TableItem name='focus' type='modifier' description="Applies focus style to the element inside <li>" />
              <TableItem name='menu-dropdown-toggle' type='component' description="Class name for the toggle to show/hide the `menu-dropdown` using JS" />
              <TableItem name='menu-dropdown' type='component' description="Class name for the collapsible <ul> if you want to show it using JS" />

              <TableItem name='menu-dropdown-show' type='modifier' description="Shows the `menu-dropdown-toggle` and `menu-dropdown` collapsible submenu using JS" />
              
              <TableItem name='menu-lg' type='responsive' description="Large size" />
              <TableItem name='menu-md' type='responsive' description="Medium size (default)" />
              <TableItem name='menu-sm' type='responsive' description="Small size" />
              <TableItem name='menu-xs' type='responsive' description="Extra small size" />

              <TableItem name='menu-vertical' type='responsive' description="Vertical menu (default)" />
              <TableItem name='menu-horizontal' type='responsive' description="Horizontal menu" />
             
            </tbody>
          </table>
        </div>

        <MenuTabs /> 
        <ResponsiveMenuTabs />
        <MenuWithIconsTabs />
        <MenuWithIconsHorisontalTabs />
        <MenuWithIconTooltipTabs />
        <MenuWithIconTooltipHorizontalTabs />
        <MenuTabsSizes />
        <MenuDisabledItemsTabs />
        <MenuWithIconsAndBagesTabs />
        <MenuWithoutPaddingBorderRadiusTabs />
        <WithTitleMenuTabs />
        <WithTitleAsParentMenuTabs />
        <SubmenuTabs />
        <CollapsibleSubmenuTabs /> 
        <CollapsibleSubmenuClassnamesTabs />
        <FileTreeMenuTabs />
        <MenuActiveTabs />
        <HorizontalSubMenuTabs />
        <MegaMenuTabs />
        <CollabsiveSubmenuTabs />
    </>
  )
}

export default Menu

const MenuTabs:FC = () => <WithTabs title="Menu">
    <ul className="menu menu-md bg-base-300 dark:bg-base-300-dark text-base-content dark:text-base-content-dark w-56 rounded-box">
        <li><a>Item 1</a></li>
        <li><a>Item 2</a></li>
        <li><a>Item 3</a></li>
    </ul>
</WithTabs>

const ResponsiveMenuTabs:FC = () => <WithTabs title="Responsive: vertical on small screen, horizontal on large screen">
    <ul className="menu menu-md menu-vertical lg:menu-horizontal bg-base-300 dark:bg-base-300-dark text-base-content dark:text-base-content-dark w-56 rounded-box">
        <li><a>Item 1</a></li>
        <li><a>Item 2</a></li>
        <li><a>Item 3</a></li>
    </ul>
</WithTabs>

const MenuWithIconsTabs:FC = () => <WithTabs title="Menu with icon only">
   <ul className="menu menu-md rounded-box bg-base-300 dark:bg-base-300-dark text-base-content dark:text-base-content-dark">
    <li>
      <a>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
      </a>
    </li>
    <li>
      <a>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
      </a>
    </li>
    <li>
      <a>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
      </a>
    </li>
  </ul>
</WithTabs>

const MenuWithIconsHorisontalTabs:FC = () => <WithTabs title="Menu with icon only (horizontal)">
    <ul className="menu menu-md menu-horizontal bg-base-300 dark:bg-base-300-dark text-base-content dark:text-base-content-dark w-56 rounded-box">
        <li>
        <a>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
        </a>
      </li>
      <li>
        <a>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        </a>
      </li>
      <li>
        <a>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
        </a>
      </li>
    </ul>
</WithTabs>

const MenuWithIconTooltipTabs:FC = () => <WithTabs title="Menu with icon only with tooltip">
    <ul className="menu menu-md bg-base-300 dark:bg-base-300-dark text-base-content dark:text-base-content-dark rounded-box">
      <li>
        <a className="tooltip tooltip-right" data-tip="Home">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
        </a>
      </li>
      <li>
        <a className="tooltip tooltip-right" data-tip="Details">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        </a>
      </li>
      <li>
        <a className="tooltip tooltip-right" data-tip="Stats">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
        </a>
      </li>
    </ul>
</WithTabs>

const MenuWithIconTooltipHorizontalTabs:FC = () => <WithTabs title="Menu with icon only (horizontal) with tooltip">
    <ul className="menu menu-horizontal menu-md bg-base-300 dark:bg-base-300-dark text-base-content dark:text-base-content-dark rounded-box">
      <li>
        <a className="tooltip" data-tip="Home">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
        </a>
      </li>
      <li>
        <a className="tooltip" data-tip="Details">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        </a>
      </li>
      <li>
        <a className="tooltip" data-tip="Stats">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
        </a>
      </li>
    </ul>
</WithTabs>

const MenuTabsSizes:FC = () => <WithTabs title="Menu sizes">
  <div className="flex flex-col gap-2">
    <ul className="menu menu-xs bg-base-300 dark:bg-base-300-dark text-base-content dark:text-base-content-dark w-56 rounded-box">
      <li><a>xs item 1</a></li>
      <li><a>xs item 2</a></li>
    </ul>
    <ul className="menu menu-sm bg-base-300 dark:bg-base-300-dark text-base-content dark:text-base-content-dark w-56 rounded-box">
      <li><a>sm item 1</a></li>
      <li><a>sm item 2</a></li>
    </ul>
    <ul className="menu menu-md bg-base-300 dark:bg-base-300-dark text-base-content dark:text-base-content-dark w-56 rounded-box">
      <li><a>md item 1</a></li>
      <li><a>md item 2</a></li>
    </ul>
    <ul className="menu menu-lg bg-base-300 dark:bg-base-300-dark text-base-content dark:text-base-content-dark w-56 rounded-box">
      <li><a>lg item 1</a></li>
      <li><a>lg item 2</a></li>
    </ul>
  </div>
</WithTabs>

const MenuDisabledItemsTabs:FC = () => <WithTabs title="Menu with disabled items">
  <ul className="menu menu-md bg-base-300 dark:bg-base-300-dark text-base-content dark:text-base-content-dark w-56 rounded-box">
    <li><a>Enabled item</a></li>
    <li className="disabled"><a>disabled item</a></li>
    <li className="disabled"><a>disabled item</a></li>
  </ul>
</WithTabs>

const MenuWithIconsAndBagesTabs:FC = () => <WithTabs title="Menu with icons and badge (responsive)">
  <div className="flex flex-col">
      <ul className="menu menu-md bg-base-300 dark:bg-base-300-dark text-base-content dark:text-base-content-dark w-56 lg:menu-horizontal rounded-box">
      <li>
        <a>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
          Inbox
          <span className="badge badge-sm">99+</span>
        </a>
      </li>
      <li>
        <a>
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
          Updates
          <span className="badge badge-sm badge-warning">NEW</span>
        </a>
      </li>
      <li>
        <a>
          Stats
          <span className="badge badge-xs badge-info"></span>
        </a>
      </li>
    </ul>
  </div>
</WithTabs>

const MenuWithoutPaddingBorderRadiusTabs:FC = () => <WithTabs title="Menu without padding and border radius">
    <ul className="p-0 [&_li>*]:rounded-none menu menu-md bg-base-300 dark:bg-base-300-dark text-base-content dark:text-base-content-dark w-56 rounded-box">
        <li><a>Item 1</a></li>
        <li><a>Item 2</a></li>
        <li><a>Item 3</a></li>
    </ul>
</WithTabs>

const WithTitleMenuTabs:FC = () => <WithTabs title="Menu with title">
    <ul className="menu menu-md bg-base-300 dark:bg-base-300-dark text-base-content dark:text-base-content-dark w-56 rounded-box">
        <li className="menu-title">Title</li>
        <li><a>Item 1</a></li>
        <li><a>Item 2</a></li>
        <li><a>Item 3</a></li>
    </ul>
</WithTabs>

const WithTitleAsParentMenuTabs:FC = () => <WithTabs title="Menu with title as a parent">
    <ul className="menu menu-md bg-base-300 dark:bg-base-300-dark text-base-content dark:text-base-content-dark w-56 rounded-box">
      <li>
        <h2 className="menu-title">Title</h2>
        <ul>
          <li><a>Item 1</a></li>
          <li><a>Item 2</a></li>
          <li><a>Item 3</a></li>
        </ul>
      </li>
    </ul>
</WithTabs>

const SubmenuTabs:FC = () => <WithTabs title="Menu with title as a parent">
    <ul className="menu menu-md bg-base-300 dark:bg-base-300-dark text-base-content dark:text-base-content-dark w-56 rounded-box">
      <li><a>Item 1</a></li>
      <li>
        <a>Parent</a>
        <ul>
          <li><a>level 2 item 1</a></li>
          <li><a>level 2 item 2</a></li>
          <li>
            <a>Parent</a>
            <ul>
              <li><a>level 3 item 1</a></li>
              <li><a>level 3 item 2</a></li>
            </ul>
          </li>
        </ul>
      </li>
      <li><a>Item 3</a></li>
    </ul>
</WithTabs>

const CollapsibleSubmenuTabs:FC = () => <WithTabs title="Collapsible submenu">
    <ul className="menu menu-md bg-base-300 dark:bg-base-300-dark text-base-content dark:text-base-content-dark w-56 rounded-box">
      <li><a>Item 1</a></li>
      <li>
        <details open>
          <summary>Parent</summary>
          <ul>
            <li><a>level 2 item 1</a></li>
            <li><a>level 2 item 2</a></li>
            <li>
              <details open>
                <summary>Parent</summary>
                <ul>
                  <li><a>level 3 item 1</a></li>
                  <li><a>level 3 item 2</a></li>
                </ul>
              </details>
            </li>
          </ul>
        </details>
      </li>
      <li><a>Item 3</a></li>
    </ul>
</WithTabs>


const CollapsibleSubmenuClassnamesTabs:FC = () => <WithTabs title="Collapsible submenu that works with class names">
     <ul className="menu menu-md bg-base-300 dark:bg-base-300-dark text-base-content dark:text-base-content-dark w-56 rounded-box">
        <li><a>Item 1</a></li>
      <li>
        <span className="menu-dropdown-toggle">Parent</span>
        <ul className="menu-dropdown">
          <li><a>level 2 item 1</a></li>
          <li><a>level 2 item 2</a></li>
        </ul>
      </li>
    </ul>
    <ul className="menu menu-md bg-base-300 dark:bg-base-300-dark text-base-content dark:text-base-content-dark w-56 rounded-box">
      <li><a>Item 1</a></li>
      <li>
        <span className="menu-dropdown-toggle menu-dropdown-show">Parent</span>
        <ul className="menu-dropdown menu-dropdown-show">
          <li><a>level 2 item 1</a></li>
          <li><a>level 2 item 2</a></li>
        </ul>
      </li>
    </ul>
</WithTabs>

const FileTreeMenuTabs:FC = () => <WithTabs title="File tree">
    <ul className="menu menu-md bg-base-300 dark:bg-base-300-dark text-base-content dark:text-base-content-dark w-56 rounded-box">
        <li><a>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg>
        resume.pdf
      </a></li>
      <li>
        <details open>
          <summary>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" /></svg>
            My Files
          </summary>
          <ul>
            <li><a>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg>
              Project-final.psd
            </a></li>
            <li><a>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg>
              Project-final-2.psd
            </a></li>
            <li>
              <details open>
                <summary>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" /></svg>
                  Images
                </summary>
                <ul>
                  <li><a>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" /></svg>
                    Screenshot1.png
                  </a></li>
                  <li><a>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" /></svg>
                    Screenshot2.png
                  </a></li>
                  <li>
                    <details open>
                      <summary>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" /></svg>
                        Others
                      </summary>
                      <ul>
                        <li><a>
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5zm10.5-11.25h.008v.008h-.008V8.25zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" /></svg>
                          Screenshot3.png
                        </a></li>
                      </ul>
                    </details>
                  </li>
                </ul>
              </details>
            </li>
          </ul>
        </details>
      </li>
      <li><a>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-4 h-4"><path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" /></svg>
        reports-final-2.pdf
      </a></li>
    </ul>
</WithTabs>

const MenuActiveTabs:FC = () => <WithTabs title="Menu">
    <ul className="menu menu-md bg-base-300 dark:bg-base-300-dark text-base-content dark:text-base-content-dark w-56 rounded-box">
      <li><a>Item 1</a></li>
      <li><a className="active">Item 2</a></li>
      <li><a>Item 3</a></li>
    </ul>
</WithTabs>

const HorizontalSubMenuTabs:FC = () => <WithTabs title="Horizontal submenu">
    <ul className="menu menu-md menu-horizontal bg-base-300 dark:bg-base-300-dark text-base-content dark:text-base-content-dark rounded-box">
      <li><a>Item 1</a></li>
      <li>
        <a>Parent</a>
        <ul>
          <li><a>level 2 item 1</a></li>
          <li><a>level 2 item 2</a></li>
        </ul>
      </li>
      <li><a>Item 3</a></li>
    </ul>
</WithTabs>

const MegaMenuTabs:FC = () => <WithTabs title="Mega menu with submenu (responsive)">
    <ul className="menu menu-md xl:menu-horizontal lg:min-w-max bg-base-300 dark:bg-base-300-dark text-base-content dark:text-base-content-dark rounded-box">
      <li>
        <a>Solutions</a>
        <ul>
          <li><a>Design</a></li>
          <li><a>Development</a></li>
          <li><a>Hosting</a></li>
          <li><a>Domain register</a></li>
        </ul>
      </li>
      <li>
        <a>Enterprise</a>
        <ul>
          <li><a>CRM software</a></li>
          <li><a>Marketing management</a></li>
          <li><a>Security</a></li>
          <li><a>Consulting</a></li>
        </ul>
      </li>
      <li>
        <a>Products</a>
        <ul>
          <li><a>UI Kit</a></li>
          <li><a>Wordpress themes</a></li>
          <li><a>Wordpress plugins</a></li>
          <li>
            <a>Open source</a>
            <ul>
              <li><a>Auth management system</a></li>
              <li><a>VScode theme</a></li>
              <li><a>Color picker app</a></li>
            </ul>
          </li>
        </ul>
      </li>
      <li>
        <a>Company</a>
        <ul>
          <li><a>About us</a></li>
          <li><a>Contact us</a></li>
          <li><a>Privacy policy</a></li>
          <li><a>Press kit</a></li>
        </ul>
      </li>
    </ul>
</WithTabs>

const CollabsiveSubmenuTabs:FC = () => <WithTabs title="Collapsible with submenu (responsive)">
    <ul className="menu menu-md lg:menu-horizontal lg:mb-64 bg-base-300 dark:bg-base-300-dark text-base-content dark:text-base-content-dark w-56 rounded-box">
      <li><a>Item 1</a></li>
      <li>
        <details open>
          <summary>Parent item</summary>
          <ul>
            <li><a>level 2 item 1</a></li>
            <li><a>level 2 item 2</a></li>
            <li>
              <details open>
                <summary>Parent</summary>
                <ul>
                  <li><a>item 1</a></li>
                  <li><a>item 2</a></li>
                </ul>
              </details>
            </li>
          </ul>
        </details>
      </li>
      <li><a>Item 3</a></li>
    </ul>
</WithTabs>


