import { FC, useState,  useEffect } from "react"
import TableItem from "./table/table-item"
import WithTabs from "./tabs"

import TableHead from "./table/table-head"

type Props = {}
const InputGroup: FC = (props: Props) => {

  return (<>
        <h1>Input Group</h1>
        <p>Input group puts an input next to a text or a button.</p>

        <div className="not-prose mt-6 mb-10 overflow-x-auto">
          <table className="table-compact table w-full">
            
            <TableHead />
            
            <tbody className="text-base-content dark:text-base-content-dark">
              
              <TableItem name='input-group' type='component' description="Container for grouping elements" />
              <TableItem name='input-group-vertical' type='modifier' description="Vertical direction for input-group items" />
              
              <TableItem name='input-group-lg' type='responsive' description="Large size for input-group wrapper" />
              <TableItem name='input-group-md' type='responsive' description="Medium (default) size for input-group wrapper" />
              <TableItem name='input-group-sm' type='responsive' description="Small size for input-group wrapper" />
              <TableItem name='input-group-xs' type='responsive' description="Extra small size for input-group wrapper" />
           
            </tbody>
          </table>
        </div>

        <InputGroupTabs />
        <InputGroupHorizontalyTabs />
        <BothSidesInputGroupTabs />
        <VerticalInputGroupTabs />
        <SizesInputGroupTabs />
        <InputGroupWithButtonTabs />
        <InputGroupWithSelectTabs />
    </>
    
  )
}

export default InputGroup

const InputGroupTabs:FC = () => <WithTabs title="Group label and text input horizontally">
    <div className="form-control">
        <label className="label">
            <span className="label-text">Your Email</span>
        </label>
        <label className="input-group">
            <span>Email</span>
            <input type="text" placeholder="info@site.com" className="input input-bordered" />
        </label>
    </div>
</WithTabs>

const InputGroupHorizontalyTabs:FC = () => <WithTabs title="Group text input and label horizontally">
    <div className="form-control">
        <label className="label">
            <span className="label-text">Enter amount</span>
        </label>
        <label className="input-group">
            <input type="text" placeholder="0.01" className="input input-bordered" />
            <span>BTC</span>
        </label>
    </div>
</WithTabs>

const BothSidesInputGroupTabs:FC = () => <WithTabs title="label on both sides">
    <div className="form-control">
        <label className="label">
            <span className="label-text">Enter amount</span>
        </label>
        <label className="input-group">
            <span>Price</span>
            <input type="text" placeholder="10" className="input input-bordered" />
            <span>USD</span>
        </label>
    </div>
</WithTabs>

const VerticalInputGroupTabs:FC = () => <WithTabs title="Group label and text input vertically">
    <div className="form-control">
        <label className="label">
            <span className="label-text">Your Email</span>
        </label>
        <label className="input-group input-group-vertical">
            <span>Email</span>
            <input type="text" placeholder="info@site.com" className="input input-bordered" />
        </label>
    </div>
</WithTabs>

const SizesInputGroupTabs:FC = () => <WithTabs title="Sizes">
    <div className="flex flex-col gap-4 items-center">
        <div className="form-control">
            <label className="input-group input-group-lg">
                <span>LG</span>
                <input type="text" placeholder="Type here" className="input input-bordered input-lg" />
            </label>
        </div>
        <div className="form-control">
            <label className="input-group input-group-md">
                <span>MD</span>
                <input type="text" placeholder="Type here" className="input input-bordered input-md" />
            </label>
        </div>
        <div className="form-control">
            <label className="input-group input-group-sm">
                <span>SM</span>
                <input type="text" placeholder="Type here" className="input input-bordered input-sm" />
            </label>
        </div>
            <div className="form-control">
            <label className="input-group input-group-xs">
                <span>XS</span>
                <input type="text" placeholder="Type here" className="input input-bordered input-xs" />
            </label>
        </div>
    </div>
</WithTabs>

const InputGroupWithButtonTabs:FC = () => <WithTabs title="Group text input and button">
    <div className="form-control">
        <div className="input-group">
            <input type="text" placeholder="Search…" className="input input-bordered" />
            <button className="btn btn-square">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
            </button>
        </div>
    </div>
</WithTabs>

const InputGroupWithSelectTabs:FC = () => <WithTabs title="Group text input and button">
    <div className="form-control">
        <div className="input-group">
            <select className="select select-bordered">
            <option disabled selected>Pick category</option>
            <option>T-shirts</option>
            <option>Mugs</option>
            </select>
            <button className="btn">Go</button>
        </div>
    </div>
</WithTabs>

