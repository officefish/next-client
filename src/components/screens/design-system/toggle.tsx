import { FC, useState,  useEffect } from "react"
import TableItem from "./table/table-item"
import WithTabs from "./tabs"

import TableHead from "./table/table-head"

type Props = {}
const Toggle: FC = (props: Props) => {

  return (<>
        <h1>Toggle</h1>
        <p>Toggle is a checkbox that is styled to look like a switch button.</p>

        <div className="not-prose mt-6 mb-10 overflow-x-auto">
          <table className="table-compact table w-full">
            <TableHead />
            <tbody className="text-base-content dark:text-base-content-dark">         
             
              <TableItem name='form-control' type='component' description="Container element" />
              <TableItem name='toggle' type='component' description="For checkbox" />

              <TableItem name='toggle-primary' type='modifier' description="Adds `primary` to toggle" />
              <TableItem name='toggle-secondary' type='modifier' description="Adds `secondary` to toggle" />
              <TableItem name='toggle-accent' type='modifier' description="Adds `accent` to toggle" />

              <TableItem name='toggle-info' type='modifier' description="Adds `info` to toggle" />
              <TableItem name='toggle-success' type='modifier' description="Adds `success` to toggle" />
              <TableItem name='toggle-warning' type='modifier' description="Adds `warning` to toggle" />
              <TableItem name='toggle-error' type='modifier' description="Adds `error` to toggle" />
            
              <TableItem name='toggle-lg' type='responsive' description="Large toggle" />
              <TableItem name='toggle-md' type='responsive' description="Medium toggle (default)" />
              <TableItem name='toggle-sm' type='responsive' description="Small toggle" />
              <TableItem name='toggle-xs' type='responsive' description="Extra small toggle" />
              
            </tbody>
          </table>
        </div>

        <ToggleTabs />
        <WithLabelToggleTabs />
        <PrimaryToggleTabs />
        <SecondayToggleTabs />
        <AccentToggleTabs />
        <InfoToggleTabs />
        <SuccessToggleTabs />
        <WarningToggleTabs />
        <ErrorToggleTabs />
        <ToggleSizeTabs />
        <DisabledToggleTabs />
        <DisabledCheckedToggleTabs />
        <IndeterminateToggleTabs />
    </>
  )
}

export default Toggle

const  ToggleTabs:FC = () => {

    const [isChecked, setIsChecked] = useState(true)

    return (<WithTabs title="Toggle">
        <input type="checkbox" className="toggle" checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
    </WithTabs>)
}

const WithLabelToggleTabs:FC = () => {

    const [isChecked, setIsChecked] = useState(true)

    return (<WithTabs title="With label and form-control">
        <div className="form-control w-52">
        <label className="label cursor-pointer">
            <span className="label-text">Remember me</span> 
            <input type="checkbox" className="toggle" checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
        </label>
        </div>
    </WithTabs>)
}

const PrimaryToggleTabs:FC = () => {

    const [isChecked, setIsChecked] = useState(true)

    return (<WithTabs title="Primary color">
        <div className="form-control w-52">
        <label className="label cursor-pointer">
            <span className="label-text">Remember me</span> 
            <input type="checkbox" className="toggle toggle-primary" checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
        </label>
        </div>
    </WithTabs>)
}

const SecondayToggleTabs:FC = () => {

    const [isChecked, setIsChecked] = useState(true)

    return (<WithTabs title="Secondary color">
        <div className="form-control w-52">
        <label className="label cursor-pointer">
            <span className="label-text">Remember me</span> 
            <input type="checkbox" className="toggle toggle-secondary" checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
        </label>
        </div>
    </WithTabs>)
}

const AccentToggleTabs:FC = () => {

    const [isChecked, setIsChecked] = useState(true)

    return (<WithTabs title="Accent color">
        <div className="form-control w-52">
        <label className="label cursor-pointer">
            <span className="label-text">Remember me</span> 
            <input type="checkbox" className="toggle toggle-accent" checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
        </label>
        </div>
    </WithTabs>)
}

const InfoToggleTabs:FC = () => {

    const [isChecked, setIsChecked] = useState(true)

    return (<WithTabs title="Info color">
        <div className="form-control w-52">
        <label className="label cursor-pointer">
            <span className="label-text">Remember me</span> 
            <input type="checkbox" className="toggle toggle-info" checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
        </label>
        </div>
    </WithTabs>)
}

const SuccessToggleTabs:FC = () => {

    const [isChecked, setIsChecked] = useState(true)

    return (<WithTabs title="Success color">
        <div className="form-control w-52">
        <label className="label cursor-pointer">
            <span className="label-text">Remember me</span> 
            <input type="checkbox" className="toggle toggle-success" checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
        </label>
        </div>
    </WithTabs>)
}

const WarningToggleTabs:FC = () => {

    const [isChecked, setIsChecked] = useState(true)

    return (<WithTabs title="Warning color">
        <div className="form-control w-52">
        <label className="label cursor-pointer">
            <span className="label-text">Remember me</span> 
            <input type="checkbox" className="toggle toggle-warning" checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
        </label>
        </div>
    </WithTabs>)
}

const ErrorToggleTabs:FC = () => {

    const [isChecked, setIsChecked] = useState(true)

    return (<WithTabs title="Error color">
        <div className="form-control w-52">
        <label className="label cursor-pointer">
            <span className="label-text">Remember me</span> 
            <input type="checkbox" className="toggle toggle-error" checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
        </label>
        </div>
    </WithTabs>)
}

const ToggleSizeTabs:FC = () => {

    const [isLgChecked, setIsLgChecked] = useState(true)
    const [isMdChecked, setIsMdChecked] = useState(true)
    const [isSmChecked, setIsSmChecked] = useState(true)
    const [isXsChecked, setIsXsChecked] = useState(true)

    return (<WithTabs title="Toggle Sizes">
        <input type="checkbox" className="toggle toggle-lg" checked={isLgChecked} onChange={() => setIsLgChecked(!isLgChecked)} />
        <input type="checkbox" className="toggle toggle-md" checked={isMdChecked} onChange={() => setIsMdChecked(!isMdChecked)} />
        <input type="checkbox" className="toggle toggle-sm" checked={isSmChecked} onChange={() => setIsSmChecked(!isSmChecked)} />
        <input type="checkbox" className="toggle toggle-xs" checked={isXsChecked} onChange={() => setIsXsChecked(!isXsChecked)} /> 
    </WithTabs>)
}


const DisabledToggleTabs:FC = () => {

    return (<WithTabs title="Toggle disabled">
        <input type="checkbox" className="toggle" disabled/>
    </WithTabs>)
}

const DisabledCheckedToggleTabs:FC = () => {

    return (<WithTabs title="Toggle disabled and checked">
        <input type="checkbox" className="toggle" disabled checked/>
    </WithTabs>)
}

const IndeterminateToggleTabs:FC = () => {

    useEffect(() => {
        const myToggle = document.getElementById("my-toggle") as HTMLInputElement
        myToggle && (myToggle.indeterminate = true)
    })

    return (<WithTabs title="Toggle Inderteminate">
        <input type="checkbox" className="toggle" id="my-toggle" onClick={(e) => e.preventDefault()} />
    </WithTabs>)
}

