import { FC, useState,  useEffect } from "react"
import TableItem from "./table/table-item"
import WithTabs from "./tabs"

import TableHead from "./table/table-head"

type Props = {}
const Collapse: FC = (props: Props) => {

  return (<>
        <h1>Collapse</h1>
        <p>Collapse is used for showing and hiding content but only one item can stay open at a time.</p>

        <div className="not-prose mt-6 mb-10 overflow-x-auto">
          <table className="table-compact table w-full">
            
            <TableHead />
            
            <tbody className="text-base-content dark:text-base-content-dark">
              
              <TableItem name='collapse' type='component' description="Container element" />
              <TableItem name='collapse-title' type='component' description="Title element" />
              <TableItem name='collapse-content' type='component' description="Container for content" />

              <TableItem name='collapse-arrow' type='modifier' description="Adds arrow icon" />
              <TableItem name='collapse-plus' type='modifier' description="Adds plus/minus icon" />
              <TableItem name='collapse-open' type='modifier' description="Force open" />
              <TableItem name='collapse-close' type='modifier' description="Force close" />
              
            </tbody>
          </table>
        </div>

        <div className="alert text-sm mt-4">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <span>Also see <a href="/design-system/accordion/" className="link">accordion</a> examples</span>
            </div>
        </div>
        
        <CollapseFocusTabs />
        <CollapseCheckboxTabs />
        <CollapseDetailsTabs />

        <div className="alert text-sm mt-4">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <div>Using <code>&lt;details&gt;</code> tag, we can't have animations because <code>&lt;details&gt;</code> tag doesn't allow CSS transitions.</div>
            </div>
        </div>

        <CollapseBorderTabs />
        <WithArrowCollapseTabs />
        <WithArrowPlusMinusCollapseTabs />
        <ForceOpenCollapseTabs />
        <ForceCloseCollapseTabs />
        <CustomColorsCollapseTabs />
        <CustomColorsCheckboxCollapseTabs />
    </>
    
  )
}

export default Collapse

const CollapseFocusTabs:FC = () => <WithTabs title="Collapse with focus" comment="This collapse works with focus. When div loses focus, it gets closed">
    <div tabIndex={0} className="collapse bg-base-200 dark:bg-base-200-dark text-base-content dark:text-base-content-dark"> 
        <div className="collapse-title text-xl font-medium">
            Focus me to see content
        </div>
        <div className="collapse-content"> 
            <p>tabIndex={0} attribute is necessary to make the div focusable</p>
        </div>
    </div>
</WithTabs>

const CollapseCheckboxTabs:FC = () => <WithTabs title="Collapse with checkbox" comment="This collapse works with checkbox instead of focus. It needs to get clicked again to get closed.">
    <div className="collapse bg-base-200 dark:bg-base-200-dark text-base-content dark:text-base-content-dark">
        <input type="checkbox" /> 
        <div className="collapse-title text-xl font-medium">
            Click me to show/hide content
        </div>
        <div className="collapse-content"> 
            <p>hello</p>
        </div>
    </div>
</WithTabs>

const CollapseDetailsTabs:FC = () => <WithTabs title="Collapse using <details> and <summary> tag" comment="`collapse-open` and `collapse-close` doesn't work with this method. You can add/remove `open` attribute to the <details> instead">
    <details className="collapse bg-base-200 dark:bg-base-200-dark text-base-content dark:text-base-content-dark">
        <summary className="collapse-title text-xl font-medium">Click to open/close</summary>
        <div className="collapse-content"> 
            <p>content</p>
        </div>
    </details>
</WithTabs>

const CollapseBorderTabs:FC = () => <WithTabs title="With border and background color">
    <div tabIndex={0} className="collapse border border-base-300 dark:border-base-300-dark bg-base-200 dark:bg-base-200-dark text-base-content dark:text-base-content-dark"> 
        <div className="collapse-title text-xl font-medium">
            Focus me to see content
        </div>
        <div className="collapse-content"> 
            <p>tabIndex={0} attribute is necessary to make the div focusable</p>
        </div>
    </div>
</WithTabs>

const WithArrowCollapseTabs:FC = () => <WithTabs title="With arrow icon">
    <div tabIndex={0} className="collapse collapse-arrow border border-base-300 dark:border-base-300-dark bg-base-200 dark:bg-base-200-dark text-base-content dark:text-base-content-dark">
        <div className="collapse-title text-xl font-medium">
            Focus me to see content
        </div>
        <div className="collapse-content"> 
            <p>tabIndex={0} attribute is necessary to make the div focusable</p>
        </div>
    </div>
</WithTabs>

const WithArrowPlusMinusCollapseTabs:FC = () => <WithTabs title="With arrow plus/minus icon">
    <div tabIndex={0} className="collapse collapse-plus border border-base-300 dark:border-base-300-dark bg-base-200 dark:bg-base-200-dark text-base-content dark:text-base-content-dark">
        <div className="collapse-title text-xl font-medium">
            Focus me to see content
        </div>
        <div className="collapse-content"> 
            <p>tabIndex={0} attribute is necessary to make the div focusable</p>
        </div>
    </div>
</WithTabs>

const ForceOpenCollapseTabs:FC = () => <WithTabs title="Force open">
    <div tabIndex={0} className="collapse collapse-open border border-base-300 dark:border-base-300-dark bg-base-200 dark:bg-base-200-dark text-base-content dark:text-base-content-dark"> 
        <div className="collapse-title text-xl font-medium">
            I have collapse-open class
        </div>
        <div className="collapse-content"> 
            <p>tabIndex={0} attribute is necessary to make the div focusable</p>
        </div>
    </div>
</WithTabs>

const ForceCloseCollapseTabs:FC = () => <WithTabs title="Force close">
    <div tabIndex={0} className="collapse collapse-close border border-base-300 dark:border-base-300-dark bg-base-200 dark:bg-base-200-dark text-base-content dark:text-base-content-dark"> 
        <div className="collapse-title text-xl font-medium">
            I have collapse-open class
        </div>
        <div className="collapse-content"> 
            <p>tabIndex={0} attribute is necessary to make the div focusable</p>
        </div>
    </div>
</WithTabs>

const CustomColorsCollapseTabs:FC = () => <WithTabs title="Custom colors for collapse that works with focus" comment="Use Tailwind CSS `group` and `group-focus` utilities to apply style when parent div is focused">
    <div tabIndex={0} className="collapse bg-primary text-primary-content focus:bg-secondary focus:text-secondary-content dark:bg-primary-dark dark:text-primary-content-dark dark:focus:bg-secondary-dark dark:focus:text-secondary-content-dark">
        <div className="collapse-title">
            Focus me to see content
        </div>
        <div className="collapse-content"> 
            <p>tabIndex={0} attribute is necessary to make the div focusable</p>
        </div>
    </div>
</WithTabs>

const CustomColorsCheckboxCollapseTabs:FC = () => <WithTabs title="Custom colors for collapse that works with checkbox" comment="Use Tailwind CSS `peer` and `peer-checked` utilities to apply style when sibling checkbox is checked">
    <div className="collapse bg-base-200 dark:bg-base-200-dark">
        <input type="checkbox" className="peer" /> 
        <div className="collapse-title bg-primary text-primary-content [input:checked~&]:bg-secondary [input:checked~&]:text-secondary-content dark:bg-primary-dark dark:text-primary-content-dark dark:[input:checked~&]:bg-secondary-dark dark:[input:checked~&]:text-secondary-content-dark">
            Click me to show/hide content
        </div>
        <div className="collapse-content bg-primary text-primary-content [input:checked~&]:bg-secondary [input:checked~&]:text-secondary-content dark:bg-primary-dark dark:text-primary-content-dark dark:[input:checked~&]:bg-secondary-dark dark:[input:checked~&]:text-secondary-content-dark"> 
            <p>hello</p>
        </div>
    </div>
</WithTabs>