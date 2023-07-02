import { FC } from "react"
import TableItem from "./table/table-item"
import TableHead from "./table/table-head"

import { Preview, PreviewContainer } from "./preview"

const Table: FC = () => {

  return (<>
        <h1>Table</h1>
        <p>Table can be used to show a list of data in a table format.</p>

        <div className="not-prose mt-6 mb-10 overflow-x-auto">
          <table className="table-compact table w-full">
            <TableHead />
            <tbody className="text-base-content dark:text-base-content-dark">
              <TableItem name='table' type='component' description="For <table> element" />
              
              <TableItem name='table-zebra' type='modifier' description="For <table> to zebra stripe rows" />
              <TableItem name='active' type='modifier' description="For <tr> to highlight current row" />
              <TableItem name='hover' type='modifier' description="For <tr> to highlight current row on hover" />
             
              <TableItem name='table-normal' type='responsive' description="Normal paddings" />
              <TableItem name='table-compact' type='responsive' description="Compact paddings" />
              
            </tbody>
          </table>
        </div>

        <div className="component-preview not-prose text-base-content my-4 max-w-4xl" id="button">
          <div className="pb-2 text-sm font-bold">
            <a className="opacity-20 hover:opacity-60" href="#button">#</a>
            <span className="component-preview-title">Table</span>
          </div>

          <div className="grid">
            <div className="tabs z-10 -mb-px">
              <button className="tab tab-lifted tab-active tab-bg-base-200">
                Preview
              </button>
              <button className="tab tab-lifted tab-border-transparent">
                HTML
              </button>
              <button className="tab tab-lifted tab-border-transparent">
                JSX
              </button>
              <button className="tab tab-lifted mr-6 flex-1 cursor-default tab-border-transparent"></button>
            </div>
            <PreviewContainer>
              <Preview>
                <TabExample />
              </Preview>
            </PreviewContainer>
          </div>
        </div>
    </>)
}
export default Table

const TabExample:FC = () => {
    return (
        <div className="overflow-x-auto">
        <table className="table w-full">
            {/* head */}
            <thead className="text-base-content dark:text-base-content-dark">
            <tr>
                <th></th>
                <th>Name</th>
                <th>Job</th>
                <th>Favorite Color</th>
            </tr>
            </thead>
            <tbody className="text-base-content dark:text-base-content-dark">
            {/* row 1 */}
            <tr>
                <th>1</th>
                <td>Cy Ganderton</td>
                <td>Quality Control Specialist</td>
                <td>Blue</td>
            </tr>
            {/* row 2 */}
            <tr>
                <th>2</th>
                <td>Hart Hagerty</td>
                <td>Desktop Support Technician</td>
                <td>Purple</td>
            </tr>
            {/* row 3 */}
            <tr>
                <th>3</th>
                <td>Brice Swyre</td>
                <td>Tax Accountant</td>
                <td>Red</td>
            </tr>
            </tbody>
        </table>
        </div>
    )
}