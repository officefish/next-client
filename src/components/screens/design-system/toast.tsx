import { FC, useState,  useEffect } from "react"
import TableItem from "./table/table-item"
import WithTabs from "./tabs"

import TableHead from "./table/table-head"

type Props = {}
const Toast: FC = (props: Props) => {

  return (<>
        <h1>Toast</h1>
        <p>Toast is a wrapper to stack elements, positioned on the corner of page.</p>

        <div className="not-prose mt-6 mb-10 overflow-x-auto">
          <table className="table-compact table w-full">
            <TableHead />
            <tbody className="text-base-content dark:text-base-content-dark">         
             
              <TableItem name='toast' type='component' description="Container element that sticks to the corner of page" />
              
              <TableItem name='toast-start' type='responsive' description="Align horizontally to the left" />
              <TableItem name='toast-center' type='responsive' description="Align horizontally to the center" />
              <TableItem name='toast-end' type='responsive' description="Align horizontally to the right (default)" />
              <TableItem name='toast-top' type='responsive' description="Align vertically to top" />
              <TableItem name='toast-middle' type='responsive' description="Align vertically to middle" />
              <TableItem name='toast-bottom' type='responsive' description="Align vertically to bottom (default)" />
              
            </tbody>
          </table>
        </div>

        <ToastWithAlertTabs />
        <ToastTopStartTabs />
        <ToastTopCenterTabs />
        <ToastTopEndTabs />
        <ToastMiddleStartTabs />
        <ToastMiddleCenterTabs />
        <ToastMiddleEndTabs />
        <ToastBottomStartTabs />
        <ToastBottomCenterTabs />
        <ToastBottomEndTabs />
       
    </>
  )
}

export default Toast

const ToastWithAlertTabs:FC = () => <WithTabs title="toast with alert inside">
    <div className="relative w-full h-32">
        <div className="toast absolute">
            <div className="alert alert-info">
                <div>
                <span>New message arrived.</span>
                </div>
            </div>
        </div>
    </div>
</WithTabs>

const ToastTopStartTabs:FC = () => <WithTabs title="toast-top toast-start">
    <div className="relative w-full h-64">
        <div className="absolute toast toast-top toast-start">
            <div className="alert alert-info">
                <div>
                <span>New mail arrived.</span>
                </div>
            </div>
            <div className="alert alert-success">
                <div>
                <span>Message sent successfully.</span>
                </div>
            </div>
        </div>
    </div>
</WithTabs>

const ToastTopCenterTabs:FC = () => <WithTabs title="toast-top toast-center">
    <div className="relative w-full h-64">
        <div className="absolute toast toast-top toast-center">
            <div className="alert alert-info">
                <div>
                <span>New mail arrived.</span>
                </div>
            </div>
            <div className="alert alert-success">
                <div>
                <span>Message sent successfully.</span>
                </div>
            </div>
        </div>
    </div>
</WithTabs>

const ToastTopEndTabs:FC = () => <WithTabs title="toast-top toast-center">
    <div className="relative w-full h-64">
        <div className="absolute toast toast-top toast-end">
            <div className="alert alert-info">
                <div>
                <span>New mail arrived.</span>
                </div>
            </div>
            <div className="alert alert-success">
                <div>
                <span>Message sent successfully.</span>
                </div>
            </div>
        </div>
    </div>
</WithTabs>

const ToastMiddleStartTabs:FC = () => <WithTabs title="toast-middle toast-start">
    <div className="relative w-full h-64">
        <div className="absolute toast toast-middle toast-start">
            <div className="alert alert-info">
                <div>
                <span>New mail arrived.</span>
                </div>
            </div>
            <div className="alert alert-success">
                <div>
                <span>Message sent successfully.</span>
                </div>
            </div>
        </div>
    </div>
</WithTabs>

const ToastMiddleCenterTabs:FC = () => <WithTabs title="toast-middle toast-center">
    <div className="relative w-full h-64">
        <div className="absolute toast toast-middle toast-center">
            <div className="alert alert-info">
                <div>
                <span>New mail arrived.</span>
                </div>
            </div>
            <div className="alert alert-success">
                <div>
                <span>Message sent successfully.</span>
                </div>
            </div>
        </div>
    </div>
</WithTabs>

const ToastMiddleEndTabs:FC = () => <WithTabs title="toast-middle toast-center">
    <div className="relative w-full h-64">
        <div className="absolute toast toast-middle toast-end">
            <div className="alert alert-info">
                <div>
                <span>New mail arrived.</span>
                </div>
            </div>
            <div className="alert alert-success">
                <div>
                <span>Message sent successfully.</span>
                </div>
            </div>
        </div>
    </div>
</WithTabs>


const ToastBottomStartTabs:FC = () => <WithTabs title="toast-bottom toast-start">
    <div className="relative w-full h-64">
        <div className="absolute toast toast-bottom toast-start">
            <div className="alert alert-info">
                <div>
                <span>New mail arrived.</span>
                </div>
            </div>
            <div className="alert alert-success">
                <div>
                <span>Message sent successfully.</span>
                </div>
            </div>
        </div>
    </div>
</WithTabs>

const ToastBottomCenterTabs:FC = () => <WithTabs title="toast-bottom toast-center">
    <div className="relative w-full h-64">
        <div className="absolute toast toast-bottom toast-center">
            <div className="alert alert-info">
                <div>
                <span>New mail arrived.</span>
                </div>
            </div>
            <div className="alert alert-success">
                <div>
                <span>Message sent successfully.</span>
                </div>
            </div>
        </div>
    </div>
</WithTabs>

const ToastBottomEndTabs:FC = () => <WithTabs title="toast-bottom toast-center">
    <div className="relative w-full h-64">
        <div className="absolute toast toast-bottom toast-end">
            <div className="alert alert-info">
                <div>
                <span>New mail arrived.</span>
                </div>
            </div>
            <div className="alert alert-success">
                <div>
                <span>Message sent successfully.</span>
                </div>
            </div>
        </div>
    </div>
</WithTabs>


