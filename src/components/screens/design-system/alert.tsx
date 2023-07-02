import { FC, useState,  useEffect } from "react"
import TableItem from "./table/table-item"
import WithTabs from "./tabs"

import TableHead from "./table/table-head"

type Props = {}
const Alert: FC = (props: Props) => {

  return (<>
        <h1>Alert</h1>
        <p>Alert informs users about important events.</p>

        <div className="not-prose mt-6 mb-10 overflow-x-auto">
          <table className="table-compact table w-full">
            
            <TableHead />
            
            <tbody className="text-base-content dark:text-base-content-dark">
              
              <TableItem name='alert' type='component' description="Container element" />
             
              <TableItem name='alert-success' type='modifier' description="Alert with `success` color" />
              <TableItem name='alert-info' type='modifier' description="Alert with `info` color" />
              <TableItem name='alert-warning' type='modifier' description="Alert with `warning` color" />
              <TableItem name='alert-error' type='modifier' description="Alert with `error` color" />

            </tbody>
          </table>
        </div>

        <AlertTabs />
        <InfoAlertTabs />
        <SuccessAlertTabs />
        <WarningAlertTabs />
        <ErrorAlertTabs />
        <AlertWithButtonsTabs />
        <AlertWithTitleTabs />
    </>
        
    
  )
}

export default Alert

const AlertTabs:FC = () => <WithTabs title="Alert">
    <div className="alert shadow-lg">
        <div>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info flex-shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
            <span>12 unread messages. Tap to see.</span>
        </div>
    </div>
</WithTabs>

const InfoAlertTabs:FC = () => <WithTabs title="Info">
    <div className="alert alert-info shadow-lg">
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current flex-shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        <span>New software update available.</span>
      </div>
    </div>
</WithTabs>

const SuccessAlertTabs:FC = () => <WithTabs title="Success">
    <div className="alert alert-success shadow-lg">
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        <span>Your purchase has been confirmed!</span>
      </div>
    </div>
</WithTabs>

const WarningAlertTabs:FC = () => <WithTabs title="Warning">
    <div className="alert alert-warning shadow-lg">
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
        <span>Warning: Invalid email address!</span>
      </div>
    </div>
</WithTabs>

const ErrorAlertTabs:FC = () => <WithTabs title="Error">
    <div className="alert alert-error shadow-lg">
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
        <span>Error! Task failed successfully.</span>
      </div>
    </div>
</WithTabs>

const AlertWithButtonsTabs:FC = () => <WithTabs title="Alert with buttons">
    <div className="alert shadow-lg">
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info flex-shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        <span>we use cookies for no reason.</span>
      </div>
      <div className="flex-none">
        <button className="btn btn-sm btn-ghost">Deny</button>
        <button className="btn btn-sm btn-primary">Accept</button>
      </div>
    </div>
</WithTabs>

const AlertWithTitleTabs:FC = () => <WithTabs title="Alert with title and description">
   <div className="alert shadow-lg">
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-info flex-shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        <div>
          <h3 className="font-bold">New message!</h3>
          <div className="text-xs">You have 1 unread message</div>
        </div>
      </div>
      <div className="flex-none">
        <button className="btn btn-sm">See</button>
      </div>
    </div>
</WithTabs>