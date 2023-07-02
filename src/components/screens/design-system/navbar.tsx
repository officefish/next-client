import { FC, useState,  useEffect } from "react"
import TableItem from "./table/table-item"
import WithTabs from "./tabs"

import TableHead from "./table/table-head"
import Image from "next/image"

import avatarSrc from '@public/avatar.jpg'

type Props = {}
const Navbar: FC = (props: Props) => {

  return (<>
        <h1>Navbar</h1>
        <p>Navbar is used to show a navigation bar on the top of the page.</p>

        <div className="not-prose mt-6 mb-10 overflow-x-auto">
          <table className="table-compact table w-full">
            <TableHead />
            <tbody className="text-base-content dark:text-base-content-dark">         
             
              <TableItem name='navbar' type='component' description="Container element" />
             
              <TableItem name='navbar-start' type='component' description="Child element, fills 50% of width to be on start" />
              <TableItem name='navbar-center' type='component' description="Child element, fills remaining space to be on center" />
              <TableItem name='navbar-end' type='component' description="Child element, fills 50% of width to be on end" />
           
            </tbody>
          </table>
        </div>

        <NavbarTabs /> 
        <NavbarWithTitleTabs />
        <NavbarWithIconsTabs />
        <NavbarWithMenuTabs />
        <NavbarWithSearchTabs />
        <NavbarWithIndicatorTabs />
        <NavbarWithLogoTabs />
        <ResponsiveNavbarTabs />
        <NavbarWithColorsTabs />
    </>
  )
}

export default Navbar

const NavbarTabs:FC = () => <WithTabs title="Navbar with title only">
    <div className="navbar bg-base-100 dark:bg-base-100-dark shadow-xl">
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
    </div>
</WithTabs>

const NavbarWithTitleTabs:FC = () => <WithTabs title="Navbar with title only">
    <div className="navbar bg-base-100 dark:bg-base-100-dark shadow-xl">
        <div className="flex-1">
            <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>
        <div className="flex-none">
            <button className="btn btn-square btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
            </button>
        </div>
    </div>
</WithTabs>

const NavbarWithIconsTabs:FC = () => <WithTabs title="Navbar with icon at start and end">
    <div className="navbar bg-base-100 dark:bg-base-100-dark shadow-xl">
        <div className="flex-none">
            <button className="btn btn-square btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path></svg>
            </button>
        </div>
        <div className="flex-1">
            <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>
        <div className="flex-none">
            <button className="btn btn-square btn-ghost">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"></path></svg>
            </button>
        </div>
    </div>
</WithTabs>

const NavbarWithMenuTabs:FC = () => <WithTabs title="Navbar with menu and submenu">
    <div className="navbar bg-base-100 dark:bg-base-100-dark mb-32 shadow-xl">
        <div className="flex-1">
            <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>
        <div className="flex-none">
            <ul className="menu menu-horizontal px-1 text-base-content dark:text-base-content-dark">
            <li><a>Link</a></li>
            <li>
                <details>
                <summary>
                    Parent
                </summary>
                <ul className="p-2 bg-base-100 dark:bg-base-100-dark">
                    <li><a>Link 1</a></li>
                    <li><a>Link 2</a></li>
                </ul>
                </details>
            </li>
            </ul>
        </div>
    </div>
</WithTabs>

const NavbarWithSearchTabs:FC = () => <WithTabs title="Navbar with search input and dropdown">
    <div className="navbar bg-base-100 dark:bg-base-100-dark shadow-xl mb-32">
        <div className="flex-1">
            <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>
        <div className="flex-none gap-2">
            <div className="form-control">
            <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
            </div>
            <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                <Image alt="shoes" 
                    src={avatarSrc} 
                    width={40} 
                    height={40} 
            />
                </div>
            </label>
            <ul tabIndex={0} className="mt-3 p-2 text-base-content dark:text-base-content-dark shadow menu menu-sm dropdown-content bg-base-100 dark:bg-base-100-dark rounded-box w-52">
                <li>
                <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                </a>
                </li>
                <li><a>Settings</a></li>
                <li><a>Logout</a></li>
            </ul>
            </div>
        </div>
    </div>
</WithTabs>

const NavbarWithIndicatorTabs:FC = () => <WithTabs title="Navbar with icon, indicator and dropdown">
    <div className="navbar bg-base-100 dark:bg-base-100-dark shadow-xl mb-32">
        <div className="flex-1">
            <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>
        <div className="flex-none text-base-content dark:text-base-content-dark">
            <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
                <div className="indicator">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" /></svg>
                <span className="badge badge-sm indicator-item">8</span>
                </div>
            </label>
            <div tabIndex={0} className="mt-3 card card-compact dropdown-content w-52 bg-base-100 dark:bg-base-100-dark shadow">
                <div className="card-body">
                <span className="font-bold text-lg">8 Items</span>
                <span className="text-info">Subtotal: $999</span>
                <div className="card-actions">
                    <button className="btn btn-primary btn-block">View cart</button>
                </div>
                </div>
            </div>
            </div>
            <div className="dropdown dropdown-end ">
            <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-10 rounded-full">
                <Image alt="shoes" 
                    src={avatarSrc} 
                    width={40} 
                    height={40} 
            />
                </div>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 dark:bg-base-100-dark rounded-box w-52">
                <li>
                <a className="justify-between">
                    Profile
                    <span className="badge">New</span>
                </a>
                </li>
                <li><a>Settings</a></li>
                <li><a>Logout</a></li>
            </ul>
            </div>
        </div>
    </div>
</WithTabs>

const NavbarWithLogoTabs:FC = () => <WithTabs title="Navbar with dropdown, center logo and icon">
    <div className="navbar bg-base-100 dark:bg-base-100-dark mb-32 shadow-xl">
        <div className="navbar-start">
            <div className="dropdown text-base-content dark:text-base-content-dark">
            <label tabIndex={0} className="btn btn-ghost btn-circle">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h7" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 dark:bg-base-100-dark rounded-box w-52">
                <li><a>Homepage</a></li>
                <li><a>Portfolio</a></li>
                <li><a>About</a></li>
            </ul>
            </div>
        </div>
        <div className="navbar-center">
            <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>
        <div className="navbar-end">
            <button className="btn btn-ghost btn-circle">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </button>
            <button className="btn btn-ghost btn-circle">
            <div className="indicator">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /></svg>
                <span className="badge badge-xs badge-primary indicator-item"></span>
            </div>
            </button>
        </div>
    </div>
</WithTabs>


const ResponsiveNavbarTabs:FC = () => <WithTabs title="responsive (dropdown menu on small screen, center menu on large screen)">
    <div className="navbar bg-base-100 dark:bg-base-100-dark mb-32 shadow-xl text-base-content dark:text-base-content-dark">
        <div className="navbar-start">
            <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
            </label>
            <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 dark:bg-base-100-dark rounded-box w-52">
                <li><a>Item 1</a></li>
                <li>
                <a>Parent</a>
                <ul className="p-2">
                    <li><a>Submenu 1</a></li>
                    <li><a>Submenu 2</a></li>
                </ul>
                </li>
                <li><a>Item 3</a></li>
            </ul>
            </div>
            <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
            <li><a>Item 1</a></li>
            <li tabIndex={0}>
                <details>
                <summary>Parent</summary>
                <ul className="p-2">
                    <li><a>Submenu 1</a></li>
                    <li><a>Submenu 2</a></li>
                </ul>
                </details>
            </li>
            <li><a>Item 3</a></li>
            </ul>
        </div>
        <div className="navbar-end">
            <a className="btn">Button</a>
        </div>
    </div>
</WithTabs>

const NavbarWithColorsTabs:FC = () => <WithTabs title="Navbar with title only">
    <div className="navbar bg-neutral text-neutral-content dark:bg-neutral-dark dark:text-neutral-content-dark rounded-box shadow-xl">
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
    </div>
    <div className="navbar bg-base-100 dark:bg-base-100-dark dark:text-base-content-dark rounded-box shadow-xl">
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
    </div>
    <div className="navbar bg-primary text-primary-content dark:bg-primary-dark dark:text-primary-content-dark rounded-box shadow-xl">
        <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
    </div>
</WithTabs>