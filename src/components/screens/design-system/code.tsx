import { FC, useState,  useEffect } from "react"
import TableItem from "./table/table-item"
import WithTabs from "./tabs"

import TableHead from "./table/table-head"

type Props = {}
const MockupCode: FC = (props: Props) => {

  return (<>
        <h1>Code mockup</h1>
        <p>Code mockup is used to show a block of code in a box that looks like a code editor.</p>

        <div className="not-prose mt-6 mb-10 overflow-x-auto">
          <table className="table-compact table w-full">
            
            <TableHead />
            
            <tbody className="text-base-content dark:text-base-content-dark">
              
              <TableItem name='mockup-code' type='component' description="Container element" />
             
            </tbody>
          </table>
        </div>

        <MockupTabs />
        <MultilineMockupTabs />
        <HighlighedMockupTabs />
        <WithScrollMockupTabs />
        <WithoutPrefixMockupTabs />
        <WithoutColorMockupTabs />
    </>
        
    
  )
}

export default MockupCode

const MockupTabs:FC = () => <WithTabs title="Mockup code with line prefix">
    <div className="mockup-code">
        <pre data-prefix="$"><code>npm i daisyui</code></pre>
    </div>
</WithTabs>

const MultilineMockupTabs:FC = () => <WithTabs title="Mockup code with line prefix">
  <div className="mockup-code">
    <pre data-prefix="$"><code>npm i daisyui</code></pre> 
    <pre data-prefix=">" className="text-warning"><code>installing...</code></pre> 
    <pre data-prefix=">" className="text-success"><code>Done!</code></pre>
  </div>
</WithTabs>

const HighlighedMockupTabs:FC = () => <WithTabs title="Highlighted line">
  <div className="mockup-code">
    <pre data-prefix="1"><code>npm i daisyui</code></pre> 
    <pre data-prefix="2"><code>installing...</code></pre> 
    <pre data-prefix="3" className="bg-warning text-warning-content"><code>Error!</code></pre>
  </div>
</WithTabs>

const WithScrollMockupTabs:FC = () => <WithTabs title="Long line will scroll">
  <div className="mockup-code">
    <pre data-prefix="~"><code>Magnam dolore beatae necessitatibus nemopsum itaque sit. Et porro quae qui et et dolore ratione.</code></pre>
  </div>
</WithTabs>

const WithoutPrefixMockupTabs:FC = () => <WithTabs title="Without prefix mockup tabs">
  <div className="mockup-code">
    <pre><code>without prefix</code></pre>
  </div>
</WithTabs>

const WithoutColorMockupTabs:FC = () => <WithTabs title="With color mockup tabs">
  <div className="mockup-code bg-primary text-primary-content dark:bg-primary-dark dark:text-primary-content-dark">
    <pre><code>can be any color!</code></pre>
  </div>
</WithTabs>