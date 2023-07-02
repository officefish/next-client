import { FC, useState,  useEffect } from "react"
import TableItem from "./table/table-item"
import WithTabs from "./tabs"

import TableHead from "./table/table-head"

type Props = {}
const Pagination: FC = (props: Props) => {

  return (<>
        <h1>Pagination</h1>
        <p>Pagination is a group of buttons that allow the user to navigate between a set of related content.</p>

        <div className="not-prose mt-6 mb-10 overflow-x-auto">
          <table className="table-compact table w-full">
            <TableHead />
            <tbody className="text-base-content dark:text-base-content-dark">         
             
              <TableItem name='join' type='component' description="Groups buttons together" />
             
            </tbody>
          </table>
        </div>

        <PaginationTabs /> 
        <PaginationSizesTabs />
        <PaginationDisabledTabs />
        <CounterPaginationTabs />
        <NextPrevPaginationTabs />
        <RadioInputsPaginationTabs />
    </>
  )
}

export default Pagination

const PaginationTabs:FC = () => <WithTabs title="Pagination with an active button">
   <div className="join">
        <button className="join-item btn">1</button>
        <button className="join-item btn btn-active">2</button>
        <button className="join-item btn">3</button>
        <button className="join-item btn">4</button>
    </div>
</WithTabs>

const PaginationSizesTabs:FC = () => <WithTabs title="Sizes">
    <div className="flex flex-col items-center gap-3">
        <div className="join">
            <button className="join-item btn btn-xs">1</button>
            <button className="join-item btn btn-xs btn-active">2</button>
            <button className="join-item btn btn-xs">3</button>
            <button className="join-item btn btn-xs">4</button>
        </div>
        <div className="join">
            <button className="join-item btn btn-sm">1</button>
            <button className="join-item btn btn-sm btn-active">2</button>
            <button className="join-item btn btn-sm">3</button>
            <button className="join-item btn btn-sm">4</button>
        </div>
        <div className="join">
            <button className="join-item btn btn-md">1</button>
            <button className="join-item btn btn-md btn-active">2</button>
            <button className="join-item btn btn-md">3</button>
            <button className="join-item btn btn-md">4</button>
        </div>
        <div className="join">
            <button className="join-item btn btn-lg">1</button>
            <button className="join-item btn btn-lg btn-active">2</button>
            <button className="join-item btn btn-lg">3</button>
            <button className="join-item btn btn-lg">4</button>
        </div>
    </div>
</WithTabs>

const PaginationDisabledTabs:FC = () => <WithTabs title="With a disabled button">
   <div className="join">
        <button className="join-item btn">1</button>
        <button className="join-item btn">2</button>
        <button className="join-item btn btn-disabled">...</button>
        <button className="join-item btn">99</button>
        <button className="join-item btn">100</button>
    </div>
</WithTabs>

const CounterPaginationTabs:FC = () => <WithTabs title="Extra small buttons">
   <div className="join">
        <button className="join-item btn">«</button>
        <button className="join-item btn">Page 22</button>
        <button className="join-item btn">»</button>
    </div>
</WithTabs>

const NextPrevPaginationTabs:FC = () => <WithTabs title="Nex/Prev outline buttons with equal width">
   <div className="join grid grid-cols-2">
        <button className="join-item btn btn-outline">Previous page</button>
        <button className="join-item btn btn-outline">Next</button>
    </div>
</WithTabs>

const RadioInputsPaginationTabs:FC = () => <WithTabs title="Nex/Prev outline buttons with equal width">
   <div className="join">
        <input className="join-item btn btn-square" type="radio" name="options" aria-label="1" checked />
        <input className="join-item btn btn-square" type="radio" name="options" aria-label="2" />
        <input className="join-item btn btn-square" type="radio" name="options" aria-label="3" />
        <input className="join-item btn btn-square" type="radio" name="options" aria-label="4" />
    </div>
</WithTabs>