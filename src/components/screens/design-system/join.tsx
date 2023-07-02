import { FC, useState,  useEffect } from "react"
import TableItem from "./table/table-item"
import WithTabs from "./tabs"

import TableHead from "./table/table-head"
import Image from "next/image"

import maskBgSrc from '@public/mask-bg.jpg'

type Props = {}
const Join: FC = (props: Props) => {

  return (<>
        <h1>Join</h1>
        <p>Join is a container for grouping multiple items, it can be used to group buttons, inputs, or any other element. Join applies border radius to the first and last item. Join can be used to create a horizontal or vertical list of items.</p>

        <div className="not-prose mt-6 mb-10 overflow-x-auto">
          <table className="table-compact table w-full">
            <TableHead />
            <tbody className="text-base-content dark:text-base-content-dark">         
             
              <TableItem name='join' type='component' description="Container for grouping multiple items" />
              <TableItem name='join-item' type='component' description="Item inside join. Can be a button, input, etc." />

              <TableItem name='join-vertical' type='responsive' description="Show items vertically" />
              <TableItem name='join-horizontal' type='responsive' description="Show items horizontally" />

            </tbody>
          </table>
        </div>

        <JoinTabs /> 
        <JoinVerticalTabs />
        <ResponsiveJoinTabs />
        <WithExtraJoinTabs />
        <WithCustomBorderJoinTabs />
        <WithRadioButtonJoinTabs />
       
    </>
  )
}

export default Join

const JoinTabs:FC = () => <WithTabs title="Join">
    <div className="join">
        <button className="btn join-item">Button</button>
        <button className="btn join-item">Button</button>
        <button className="btn join-item">Button</button>
    </div>
</WithTabs>

const JoinVerticalTabs:FC = () => <WithTabs title="Group items vertically">
    <div className="join join-vertical">
        <button className="btn join-item">Button</button>
        <button className="btn join-item">Button</button>
        <button className="btn join-item">Button</button>
    </div>
</WithTabs>

const ResponsiveJoinTabs:FC = () => <WithTabs title="Responsive: it's vertical on small screen and horizontal on large screen">
    <div className="join join-vertical lg:join-horizontal">
      <button className="btn join-item">Button</button>
      <button className="btn join-item">Button</button>
      <button className="btn join-item">Button</button>
  </div>
</WithTabs>

const WithExtraJoinTabs:FC = () => <WithTabs title="With extra elements in the group">
   <div className="join">
    <div>
      <div>
        <input className="input join-item" placeholder="Search..."/>
      </div>
    </div>
    <select className="select join-item">
      <option disabled selected>Category</option>
      <option>Sci-fi</option>
      <option>Drama</option>
      <option>Action</option>
    </select>
    <div className="indicator">
      <span className="indicator-item badge badge-secondary">new</span> 
      <button className="btn join-item">Search</button>
    </div>
  </div>
</WithTabs>

const WithCustomBorderJoinTabs:FC = () => <WithTabs title="Custom border radius">
   <div className="join">
    <input className="input join-item" placeholder="Email"/>
    <button className="btn join-item rounded-r-full">Subscribe</button>
  </div>
</WithTabs>


const WithRadioButtonJoinTabs:FC = () => <WithTabs title="Custom border radius">
   <div className="join">
    <input className="join-item btn" type="radio" name="options" aria-label="Radio 1" />
    <input className="join-item btn" type="radio" name="options" aria-label="Radio 2" />
    <input className="join-item btn" type="radio" name="options" aria-label="Radio 3" />
  </div>
</WithTabs>


