import { FC, useState,  useEffect } from "react"
import TableItem from "./table/table-item"
import WithTabs from "./tabs"

import TableHead from "./table/table-head"
import Image from "next/image"

import avatarSrc from '@public/avatar.jpg'
import shoesSrc from '@public/shoes.jpg'

type Props = {}
const Indicator: FC = (props: Props) => {

  return (<>
        <h1>Indicator</h1>
        <p>Indicators are used to place an element on the corner of another element.</p>

        <div className="not-prose mt-6 mb-10 overflow-x-auto">
          <table className="table-compact table w-full">
            <TableHead />
            <tbody className="text-base-content dark:text-base-content-dark">         
              <TableItem name='indicator' type='component' description="Container element" />
              <TableItem name='indicator-item' type='component' description="will be placed on the corner of sibling" />
              <TableItem name='indicator-start' type='responsive' description="align horizontally to the left" />
              <TableItem name='indicator-center' type='responsive' description="align horizontally to the center" />
              <TableItem name='indicator-end' type='responsive' description="align horizontally to the right (default)" />
              <TableItem name='indicator-top' type='responsive' description="align vertically to top (default)" />
              <TableItem name='indicator-middle' type='component' description="align vertically to middle" />
              <TableItem name='indicator-bottom' type='responsive' description="align vertically to bottom" />
            </tbody>
          </table>
        </div>

        <IndicatorTabs />
        <BadgeIndicatorTabs />
        <IndicatorForButtonTabs />
        <IndicatorForTabTabs />
        <IndicatorForAvatarTabs />
        <IndicatorForInputTabs />
        <IndicatorForCardTabs />
        <IndicatorInImageCenterTabs />

        <IndicatorTopStartTabs />
        <IndicatorTopCenterTabs />
        <IndicatorTopEndTabs />
        <IndicatorMiddleStartTabs />
        <IndicatorMiddleCenterTabs />
        <IndicatorMiddleEndTabs />
        <IndicatorBottomStartTabs />
        <IndicatorBottomCenterTabs />
        <IndicatorBottomEndTabs />
        <MultiplyIndicatorTabs />
        <ResponsiveIndicatorTabs />
        
    </>
  )
}

export default Indicator

const IndicatorTabs:FC = () => <WithTabs title="Empty badge as indicator">
    <div className="indicator">
        <span className="indicator-item badge badge-secondary"></span> 
        <div className="grid w-32 h-32 text-base-content dark:text-base-content-dark bg-base-300 dark:bg-base-300-dark place-items-center">content</div>
    </div>
</WithTabs>

const BadgeIndicatorTabs:FC = () => <WithTabs title="Badge as indicator">
    <div className="indicator">
      <span className="indicator-item badge badge-primary">new</span> 
      <div className="grid w-32 h-32 text-base-content dark:text-base-content-dark bg-base-300 dark:bg-base-300-dark place-items-center">content</div>
    </div>
</WithTabs>

const IndicatorForButtonTabs:FC = () => <WithTabs title="For button">
    <div className="indicator">
      <span className="indicator-item badge badge-secondary">99+</span> 
      <button className="btn">inbox</button>
    </div>
</WithTabs>

const IndicatorForTabTabs:FC = () => <WithTabs title="For tab">
    <div className="tabs">
      <a className="tab tab-lifted">Messages</a> 
      <a className="indicator tab tab-lifted tab-active">
        Notifications 
        <span className="indicator-item badge">8</span>
      </a> 
      <a className="tab tab-lifted">Requests</a>
    </div>
</WithTabs>

const IndicatorForAvatarTabs:FC = () => <WithTabs title="For avatar">
    <div className="avatar indicator">
      <span className="indicator-item badge badge-secondary">typing…</span> 
      <div className="w-20 h-20 rounded-lg">
      <Image alt="shoes" 
            src={avatarSrc} 
            width={80} 
            height={80} 
            />
      </div>
    </div>
</WithTabs>

const IndicatorForInputTabs:FC = () => <WithTabs title="For input">
    <div className="indicator">
      <span className="indicator-item badge">Required</span>
      <input type="text" placeholder="Your email address" className="input input-bordered" />
    </div>
</WithTabs>

const IndicatorForCardTabs:FC = () => <WithTabs title="A button as an indicator for a card">
    <div className="indicator my-6 mx-10">
      <div className="indicator-item indicator-bottom">
        <button className="btn btn-primary">Apply</button>
      </div> 
      <div className="card border">
        <div className="card-body">
          <h2 className="card-title">Job Title</h2> 
          <p>Rerum reiciendis beatae tenetur excepturi</p>
        </div>
      </div>
    </div>
</WithTabs>

const IndicatorInImageCenterTabs:FC = () => <WithTabs title="A button as an indicator for a card">
    <div className="indicator">
      <span className="indicator-item indicator-center indicator-middle badge badge-secondary">Uploading Image...</span> 
      <Image alt="shoes" 
      src={shoesSrc} 
      width={384} 
      height={226} 
      />
    </div>
</WithTabs>

const IndicatorTopStartTabs:FC = () => <WithTabs title="indicator-top (default) indicator-start">
   <div className="indicator">
    <span className="indicator-item badge indicator-start badge-secondary"></span>
    <div className="grid w-32 h-32 text-base-content dark:text-base-content-dark bg-base-300 dark:bg-base-300-dark place-items-center">content</div>
  </div>
</WithTabs>

const IndicatorTopCenterTabs:FC = () => <WithTabs title="indicator-top (default) indicator-center">
   <div className="indicator">
      <span className="indicator-item indicator-center badge badge-secondary"></span>
      <div className="grid w-32 h-32 text-base-content dark:text-base-content-dark bg-base-300 dark:bg-base-300-dark place-items-center">content</div>
    </div>
</WithTabs>

const IndicatorTopEndTabs:FC = () => <WithTabs title="indicator-top (default) indicator-end (default)">
   <div className="indicator">
      <span className="indicator-item badge badge-secondary"></span>
      <div className="grid w-32 h-32 text-base-content dark:text-base-content-dark bg-base-300 dark:bg-base-300-dark place-items-center">content</div>
    </div>
</WithTabs>

const IndicatorMiddleStartTabs:FC = () => <WithTabs title="indicator-middle (default) indicator-start">
   <div className="indicator">
    <span className="indicator-item badge indicator-middle indicator-start badge-secondary"></span>
    <div className="grid w-32 h-32 text-base-content dark:text-base-content-dark bg-base-300 dark:bg-base-300-dark place-items-center">content</div>
  </div>
</WithTabs>

const IndicatorMiddleCenterTabs:FC = () => <WithTabs title="indicator-middle (default) indicator-center">
   <div className="indicator">
      <span className="indicator-item indicator-middle indicator-center badge badge-secondary"></span>
      <div className="grid w-32 h-32 text-base-content dark:text-base-content-dark bg-base-300 dark:bg-base-300-dark place-items-center">content</div>
    </div>
</WithTabs>

const IndicatorMiddleEndTabs:FC = () => <WithTabs title="indicator-middle (default) indicator-end (default)">
   <div className="indicator">
      <span className="indicator-item indicator-middle badge badge-secondary"></span>
      <div className="grid w-32 h-32 text-base-content dark:text-base-content-dark bg-base-300 dark:bg-base-300-dark place-items-center">content</div>
    </div>
</WithTabs>

const IndicatorBottomStartTabs:FC = () => <WithTabs title="indicator-bottom (default) indicator-start">
   <div className="indicator">
    <span className="indicator-item badge indicator-bottom indicator-start badge-secondary"></span>
    <div className="grid w-32 h-32 text-base-content dark:text-base-content-dark bg-base-300 dark:bg-base-300-dark place-items-center">content</div>
  </div>
</WithTabs>

const IndicatorBottomCenterTabs:FC = () => <WithTabs title="indicator-bottom (default) indicator-center">
   <div className="indicator">
      <span className="indicator-item indicator-bottom indicator-center badge badge-secondary"></span>
      <div className="grid w-32 h-32 text-base-content dark:text-base-content-dark bg-base-300 dark:bg-base-300-dark place-items-center">content</div>
    </div>
</WithTabs>

const IndicatorBottomEndTabs:FC = () => <WithTabs title="indicator-bottom (default) indicator-end (default)">
   <div className="indicator">
      <span className="indicator-item indicator-bottom badge badge-secondary"></span>
      <div className="grid w-32 h-32 text-base-content dark:text-base-content-dark bg-base-300 dark:bg-base-300-dark place-items-center">content</div>
    </div>
</WithTabs>

const MultiplyIndicatorTabs:FC = () => <WithTabs title="multiple indicators">
  <div className="indicator">
    <span className="indicator-item indicator-top indicator-start badge badge-secondary">top+start</span>
    <span className="indicator-item indicator-top indicator-center badge badge-secondary">top+center</span>
    <span className="indicator-item indicator-top indicator-end badge badge-secondary">top+end</span>
    <span className="indicator-item indicator-middle indicator-start badge badge-secondary">middle+start</span>
    <span className="indicator-item indicator-middle indicator-center badge badge-secondary">middle+center</span>
    <span className="indicator-item indicator-middle indicator-end badge badge-secondary">middle+end</span>
    <span className="indicator-item indicator-bottom indicator-start badge badge-secondary">bott0m+strt</span>
    <span className="indicator-item indicator-bottom indicator-center badge badge-secondary">bottom+center</span>
    <span className="indicator-item indicator-bottom indicator-end badge badge-secondary">bottom+end</span>
    <div className="grid w-60 h-32 text-base-content dark:text-base-content-dark bg-base-300 dark:bg-base-300-dark place-items-center">content</div>
  </div>
</WithTabs>

const ResponsiveIndicatorTabs:FC = () => <WithTabs title="Responsive">
   <div className="indicator">
  <span className="indicator-item indicator-start sm:indicator-middle md:indicator-bottom lg:indicator-center xl:indicator-end badge badge-secondary"></span> 
  <div className="grid w-32 h-32 text-base-content dark:text-base-content-dark bg-base-300 dark:bg-base-300-dark place-items-center">content</div>
</div>
</WithTabs>