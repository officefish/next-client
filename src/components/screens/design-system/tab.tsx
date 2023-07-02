import { FC, useState,  useEffect } from "react"
import TableItem from "./table/table-item"

import { Preview, PreviewContainer } from "./preview"

type Props = {}
const Tab: FC = (props: Props) => {

  return (<>
        <h1>Tabs</h1>
        <p>Tabs can be used to show a list of links in a tabbed format.</p>

        <div className="not-prose mt-6 mb-10 overflow-x-auto">
          <table className="table-compact table w-full">
            <thead className="text-base-content dark:text-base-content-dark">
              <tr>
                  <th className="flex items-center gap-2 normal-case">
                    ClassName
                  </th>
                  <th className="normal-case">Type</th>
                  <th></th>
              </tr>
            </thead>
            <tbody className="text-base-content dark:text-base-content-dark">
              <TableItem name='tabs' type='component' description="Container of tab items" />
              <TableItem name='tabs-boxed' type='modifier' description="Adds a box style to tabs container" />
              <TableItem name='tab' type='component' description="A tab item" />
              <TableItem name='tabs-active' type='modifier' description="For the active tab" />
              <TableItem name='tab-disabled' type='modifier' description="For a visually disabled tab" />
              <TableItem name='tab-bordered' type='modifier' description="Adds bottom border to tab item" />
              <TableItem name='tab-lifted' type='modifier' description="Adds lifted style to tab item" />
              <TableItem name='tab-bg-base-100' type='modifier' description="Set tab background color to base-100" />
              <TableItem name='tab-bg-base-200' type='modifier' description="Set tab background color to base-200" />
              <TableItem name='tab-bg-base-300' type='modifier' description="Set tab background color to base-300" />
              <TableItem name='tab-bg-transparent' type='modifier' description="Set tab background color to transparent" />
              <TableItem name='tab-border-transparent' type='modifier' description="Set tab border color to transparent" />
              <TableItem name='tab-xs' type='responsive' description="Shows tab in extra small size" />
              <TableItem name='tab-sm' type='responsive' description="Shows tab in small size" />
              <TableItem name='tab-md' type='responsive' description="Shows tab in medium (default) size" />
              <TableItem name='tab-lg' type='responsive' description="Shows tab in large size" />
            </tbody>
          </table>
        </div>

        <div className="component-preview not-prose text-base-content my-4 max-w-4xl" id="button">
          <div className="pb-2 text-sm font-bold">
            <a className="opacity-20 hover:opacity-60" href="#button">#</a>
            <span className="component-preview-title">Tabs</span>
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
                <div className="tabs">
                  <a className="tab">Tab 1</a> 
                  <a className="tab tab-active">Tab 2</a> 
                  <a className="tab">Tab 3</a>
                </div>
              </Preview>
            </PreviewContainer>
          </div>
        </div>
    </>)
}
export default Tab