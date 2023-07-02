import { FC, useState,  useEffect } from "react"
import TableItem from "./table/table-item"
import WithTabs from "./tabs"

import TableHead from "./table/table-head"

type Props = {}
const MockupWindow: FC = (props: Props) => {

  return (<>
        <h1>Window</h1>
        <p>Window mockup shows a box that looks like an operating system window.</p>

        <div className="not-prose mt-6 mb-10 overflow-x-auto">
          <table className="table-compact table w-full">
            <TableHead />
            <tbody className="text-base-content dark:text-base-content-dark">         
             
              <TableItem name='mockup-window' type='component' description="Container element" />
              
            </tbody>
          </table>
        </div>

        <WindowTabs />
        <WithBackgroundWindowTabs />
    </>
  )
}

export default MockupWindow

const WindowTabs:FC = () => <WithTabs title="Window mockup with border">
    <div className="mockup-window border border-base-300 dark:border-base-300-dark">
        <div className="flex justify-center px-4 py-16 border-t border-base-300 dark:border-base-300-dark text-base-content dark:text-base-content-dark">Hello!</div>
    </div>
</WithTabs>

const WithBackgroundWindowTabs:FC = () => <WithTabs title="Window mockup with background color">
    <div className="mockup-window border bg-base-100 dark:bg-base-100-dark w-full">
        <div className="flex justify-center px-4 py-16 bg-base-200 dark:bg-base-200-dark text-base-content dark:text-base-content-dark">Hello!</div>
    </div>
</WithTabs>

