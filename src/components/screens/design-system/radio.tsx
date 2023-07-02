import { FC, useState,  useEffect } from "react"
import TableItem from "./table/table-item"
import WithTabs from "./tabs"

import TableHead from "./table/table-head"

type Props = {}
const Radio: FC = (props: Props) => {

  return (<>
        <h1>Radio</h1>
        <p>Radio buttons allow the user to select one option from a set.</p>

        <div className="not-prose mt-6 mb-10 overflow-x-auto">
          <table className="table-compact table w-full">
            <TableHead />
            <tbody className="text-base-content dark:text-base-content-dark">         
             
              <TableItem name='form-control' type='component' description="Container element" />
              <TableItem name='radio' type='component' description="For radio input" />
 
              <TableItem name='radio-primary' type='modifier' description="Adds `primary` to radio" />
              <TableItem name='radio-secondary' type='modifier' description="Adds `secondary` to radio" />
              <TableItem name='radio-accent' type='modifier' description="Adds `accent` to radio" />
              <TableItem name='radio-success' type='modifier' description="Adds `success` to radio" />
              <TableItem name='radio-warning' type='modifier' description="Adds `warning` to radio" />
              <TableItem name='radio-info' type='modifier' description="Adds `info` to radio" />
              <TableItem name='radio-error' type='modifier' description="Adds `error` to radio" />
             
              <TableItem name='radio-lg' type='responsive' description="Large radio" />
              <TableItem name='radio-md' type='responsive' description="Medium radio (default)" />
              <TableItem name='radio-sm' type='responsive' description="Small radio" />
              <TableItem name='radio-xs' type='responsive' description="Extra small radio" />
              
            </tbody>
          </table>
        </div>

        <RadioTabs />
        <PrimaryRadioTabs />   
    </>
  )
}

export default Radio

const RadioTabs:FC = () => {

    const [radioState, setRadioState] = useState('radio1')

    return (<WithTabs title="Radio">
       
            {/* <input type="radio" name="radio" className='radio' />
            <input type="radio" name="radio" className="radio"  /> */}

            <div className="flex flex-col gap-1">
              
              <label className="form-control">
                <input type="radio" name="radio" checked={radioState === 'radio1'} onChange={() => setRadioState('radio1')}/>
                Radio
              </label>

              <label className="form-control">
                <input type="radio" name="radio" checked={radioState === 'radio2'} onChange={() => setRadioState('radio2')}/>
                Radio - checked
              </label> 
            
            </div>   

            <label className="w-4 h-4 grid place-content-center custom-input">
            </label>     

            

    </WithTabs>)
}

const PrimaryRadioTabs:FC = () => {

    const [radioState, setRadioState] = useState('radio1')

    return (<WithTabs title="Primary color">
        <input type="radio" className="radio radio-primary" checked={radioState === 'radio1'} onChange={() => setRadioState('radio1')}/>
        <input type="radio" className="radio radio-primary" checked={radioState === 'radio2'} onChange={() => setRadioState('radio2')} />
    </WithTabs>)
}
