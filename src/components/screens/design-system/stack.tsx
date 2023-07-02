import { FC, useState,  useEffect } from "react"
import TableItem from "./table/table-item"
import WithTabs from "./tabs"

import TableHead from "./table/table-head"
import Image from "next/image"

import blueSrc from '@public/blue-bg-for-stack.jpg'
import pinkSrc from '@public/pink-bg-for-stack.jpg'
import yellowSrc from '@public/yellow-bg-for-stack.jpg'

type Props = {}
const Stack: FC = (props: Props) => {

  return (<>
        <h1>Stack</h1>
        <p>Stack visually puts elements on top of each other.</p>

        <div className="not-prose mt-6 mb-10 overflow-x-auto">
          <table className="table-compact table w-full">
            <TableHead />
            <tbody className="text-base-content dark:text-base-content-dark">         
                <TableItem name='stack' type='component' description="Puts the child elements on top of each other" />
            </tbody>
          </table>
        </div>

        <WithoutStackTabs />
        <WithStackTabs /> 
        <WithImagesStackTabs />
        <WithCardStackTabs />
        <WithShadowCardStackTabs />
        <StackedCardsTabs />
    </>
  )
}

export default Stack

const WithoutStackTabs:FC =  () => <WithTabs title="Without stack divs">
    <div>
  <div className="grid w-32 h-20 rounded bg-primary text-primary-content dark:bg-primary-dark dark:text-primary-content-dark place-content-center">1</div> 
  <div className="grid w-32 h-20 rounded bg-accent text-accent-content dark:bg-accent-dark dark:text-accent-content-dark place-content-center">2</div> 
  <div className="grid w-32 h-20 rounded bg-secondary text-secondary-content dark:bg-secondary-dark dark:text-secondary-content-dark place-content-center">3</div>
</div>
</WithTabs>

const WithStackTabs:FC =  () => <WithTabs title="With stack divs">
    <div className="stack w-32 mb-4">
        <div className="grid h-20 rounded bg-primary text-primary-content dark:bg-primary-dark dark:text-primary-content-dark place-content-center">1</div> 
        <div className="grid h-20 rounded bg-accent text-accent-content dark:bg-accent-dark dark:text-accent-content-dark place-content-center">2</div> 
        <div className="grid h-20 rounded bg-secondary text-secondary-content dark:bg-secondary-dark dark:text-secondary-content-dark place-content-center">3</div>
    </div>
</WithTabs>

const WithImagesStackTabs:FC =  () => <WithTabs title="Stacked images">
    <div className="stack w-32 mb-4">
        <Image alt="blue" 
            src={blueSrc} 
            width={112} 
            height={150} 
            className="rounded" 
        />
        <Image alt="pink" 
            src={pinkSrc} 
            width={112} 
            height={150} 
            className="rounded" 
        />
        <Image alt="yellow" 
            src={yellowSrc} 
            width={112} 
            height={150} 
            className="rounded" 
        />
    </div>
</WithTabs>


const WithCardStackTabs:FC =  () => <WithTabs title="stacked cards">
    <div className="stack w-36">
        <div className="text-center border card w-36 border-base-content bg-base-100 dark:border-base-content-dark dark:bg-base-100-dark">
            <div className="card-body">A</div>
        </div> 
        <div className="text-center border border-base-content card w-36 bg-base-100 dark:border-base-content-dark dark:bg-base-100-dark">
            <div className="card-body">B</div>
        </div> 
        <div className="text-center border border-base-content card w-36 bg-base-100 dark:border-base-content-dark dark:bg-base-100-dark">
            <div className="card-body">C</div>
        </div>
    </div>
</WithTabs>

const WithShadowCardStackTabs:FC =  () => <WithTabs title="stacked cards with shadow">
    <div className="stack w-36">
        <div className="text-center shadow-md card w-36 bg-base-100 dark:bg-base-100-dark">
            <div className="card-body">A</div>
        </div> 
        <div className="text-center shadow-md card w-36 bg-base-100 dark:bg-base-100-dark">
            <div className="card-body">B</div>
        </div> 
        <div className="text-center shadow-md card w-36 bg-base-100 dark:bg-base-100-dark">
            <div className="card-body">C</div>
        </div>
    </div>
</WithTabs>


const StackedCardsTabs:FC =  () => <WithTabs title="stacked cards">
    <div className="stack">
        <div className="card shadow-md bg-primary text-primary-content dark:bg-primary-dark dark:text-primary-content-dark">
            <div className="card-body">
            <h2 className="card-title">Notification 1</h2> 
            <p>You have 3 unread messages. Tap here to see.</p>
            </div>
        </div> 
        <div className="card shadow bg-primary text-primary-content dark:bg-primary-dark dark:text-primary-content-dark">
            <div className="card-body">
            <h2 className="card-title">Notification 2</h2> 
            <p>You have 3 unread messages. Tap here to see.</p>
            </div>
        </div> 
        <div className="card shadow-sm bg-primary text-primary-content dark:bg-primary-dark dark:text-primary-content-dark">
            <div className="card-body">
            <h2 className="card-title">Notification 3</h2> 
            <p>You have 3 unread messages. Tap here to see.</p>
            </div>
        </div>
    </div>
</WithTabs>





