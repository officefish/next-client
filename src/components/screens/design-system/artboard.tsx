import { FC, useState,  useEffect } from "react"
import TableItem from "./table/table-item"
import WithTabs from "./tabs"

import TableHead from "./table/table-head"

type Props = {}
const Artboard: FC = (props: Props) => {

  return (<>
        <h1>Artboard</h1>
        <p>Artboard provides fixed size container to display a demo content on mobile size..</p>

        <div className="not-prose mt-6 mb-10 overflow-x-auto">
          <table className="table-compact table w-full">
            
            <TableHead />
            
            <tbody className="text-base-content dark:text-base-content-dark">
              
              <TableItem name='artboard' type='component' description="Component container" />
              <TableItem name='phone-1' type='modifier' description="Size 1 (320×568)" />
              <TableItem name='phone-2' type='modifier' description="Size 2 (375×667)" />
              <TableItem name='phone-3' type='modifier' description="Size 3 (414×736)" />
              <TableItem name='phone-4' type='modifier' description="Size 4 (375×812)" />
              <TableItem name='phone-5' type='modifier' description="Size 5 (414×896)" />
              <TableItem name='phone-6' type='modifier' description="Size 6 (320×1024)" />
              <TableItem name='artboard-horizontal' type='modifier' description="shows horizontal view" />
            
            </tbody>
          </table>
        </div>

        <ArtboardPhone1Tabs />
        <ArtboardPhone2Tabs />
        <ArtboardPhone3Tabs />
        <ArtboardPhone4Tabs />
        <ArtboardPhone5Tabs />
        <ArtboardPhone6Tabs />

        <ArtboardHorizontalPhone1Tabs/>
        <ArtboardHorizontalPhone2Tabs/>
        <ArtboardHorizontalPhone3Tabs/>
        <ArtboardHorizontalPhone4Tabs/>
        <ArtboardHorizontalPhone5Tabs/>
        <ArtboardHorizontalPhone6Tabs/>
    </>
        
    
  )
}

export default Artboard

const ArtboardPhone1Tabs:FC = () => <WithTabs title="Artboard size 1 (320×568)">
  <div className="artboard artboard-demo phone-1 bg-base-300 dark:bg-base-300-dark">320×568</div>
</WithTabs>

const ArtboardPhone2Tabs:FC = () => <WithTabs title="Artboard size 2 (375×667)">
  <div className="artboard artboard-demo phone-2 bg-base-300 dark:bg-base-300-dark">375×667</div>
</WithTabs>

const ArtboardPhone3Tabs:FC = () => <WithTabs title="Artboard size 3 (414×736)">
  <div className="artboard artboard-demo phone-3 bg-base-300 dark:bg-base-300-dark">414×736</div>
</WithTabs>

const ArtboardPhone4Tabs:FC = () => <WithTabs title="Artboard size 4 (375×812)">
  <div className="artboard artboard-demo phone-1 bg-base-300 dark:bg-base-300-dark">375×812</div>
</WithTabs>

const ArtboardPhone5Tabs:FC = () => <WithTabs title="Artboard size 5 (414×896)">
  <div className="artboard artboard-demo phone-2 bg-base-300 dark:bg-base-300-dark">414×896</div>
</WithTabs>

const ArtboardPhone6Tabs:FC = () => <WithTabs title="Artboard size 6 (320×1024)">
  <div className="artboard artboard-demo phone-3 bg-base-300 dark:bg-base-300-dark">320×1024</div>
</WithTabs>



const ArtboardHorizontalPhone1Tabs:FC = () => <WithTabs title="Artboard horizontal size 1 (568×320)">
  <div className="artboard artboard-demo artboard-horizontal phone-1 bg-base-300 dark:bg-base-300-dark">568×320</div>
</WithTabs>

const ArtboardHorizontalPhone2Tabs:FC = () => <WithTabs title="Artboard horizontal size 2 (667×375)">
  <div className="artboard artboard-demo artboard-horizontal phone-2 bg-base-300 dark:bg-base-300-dark">667×375</div>
</WithTabs>

const ArtboardHorizontalPhone3Tabs:FC = () => <WithTabs title="Artboard horizontal size 3 (736×414)">
  <div className="artboard artboard-demo artboard-horizontal phone-3 bg-base-300 dark:bg-base-300-dark">736×414</div>
</WithTabs>

const ArtboardHorizontalPhone4Tabs:FC = () => <WithTabs title="Artboard horizontal size 4 (812×375)">
  <div className="artboard artboard-demo artboard-horizontal phone-1 bg-base-300 dark:bg-base-300-dark">812×375</div>
</WithTabs>

const ArtboardHorizontalPhone5Tabs:FC = () => <WithTabs title="Artboard horizontal size 5 (896×414)">
  <div className="artboard artboard-demo artboard-horizontal phone-2 bg-base-300 dark:bg-base-300-dark">896×414</div>
</WithTabs>

const ArtboardHorizontalPhone6Tabs:FC = () => <WithTabs title="Artboard horizontal size 6 (1024×320)">
  <div className="artboard artboard-demo artboard-horizontal phone-3 bg-base-300 dark:bg-base-300-dark">1024×320</div>
</WithTabs>