import {FC, useState } from 'react'
import ColorItem from './color-item'


const ColorScheme: FC = () => {

    return (
       <div className='w-full bg-slate-50'>
          <h3 className="mt-10 oft-row">Theme. Color Scheme.</h3>
          <h4 className="mt-4 oft-row">Light mode.</h4>
          <h5 className="mt-4 oft-row">Key colors.</h5>
          <div className='grid grid-cols-6 w-full mt-2'>
            <div>
              <div className='w-[1px] h-[1px] bg-primary'></div>
              <div className='w-[1px] h-[1px] bg-secondary'></div>
              <div className='w-[1px] h-[1px] bg-accent'></div>
              <div className='w-[1px] h-[1px] bg-neutral'></div>
            </div>
            <ColorItem tag='primary' />
            <ColorItem tag='secondary' />
            <ColorItem tag='accent' />
            <ColorItem tag='neutral' />
          </div>
          <h5 className="mt-4 oft-row">Key text colors.</h5>
          <div className='mt-2 grid grid-cols-6 w-full'>
              <div>
                <div className='w-[1px] h-[1px] bg-primary-content'></div>
                <div className='w-[1px] h-[1px] bg-secondary-content'></div>
                <div className='w-[1px] h-[1px] bg-accent-content'></div>
                <div className='w-[1px] h-[1px] bg-neutral-content'></div>
              </div>
              <ColorItem tag='primary-content' />
              <ColorItem tag='secondary-content' />
              <ColorItem tag='accent-content' />
              <ColorItem tag='neutral-content' />
          </div>
          <h5 className="mt-4 oft-row">Base colors.</h5>
          <div className='mt-2 grid grid-cols-6 w-full'>
              <div>
                <div className='w-[1px] h-[1px] bg-base-100'></div>
                <div className='w-[1px] h-[1px] bg-base-200'></div>
                <div className='w-[1px] h-[1px] bg-base-300'></div>
              </div>
              <ColorItem tag='base-100' />
              <ColorItem tag='base-200' />
              <ColorItem tag='base-300' />
          </div>
          <h5 className="mt-4 oft-row">Functional colors.</h5>
          <div className='mt-2 grid grid-cols-6 w-full'>
              <div>
                <div className='w-[1px] h-[1px] bg-info'></div>
                <div className='w-[1px] h-[1px] bg-success'></div>
                <div className='w-[1px] h-[1px] bg-warning'></div>
                <div className='w-[1px] h-[1px] bg-error'></div>
              </div>
              <ColorItem tag='info' />
              <ColorItem tag='success' />
              <ColorItem tag='warning' />
              <ColorItem tag='error' />
          </div>
          <h5 className="mt-4 oft-row">Functional text colors.</h5>
          <div className='mt-2 grid grid-cols-6 w-full'>
              <div>
                <div className='w-[1px] h-[1px] bg-info-content'></div>
                <div className='w-[1px] h-[1px] bg-success-content'></div>
                <div className='w-[1px] h-[1px] bg-warning-content'></div>
                <div className='w-[1px] h-[1px] bg-error-content'></div>
              </div>
              <ColorItem tag='info-content' />
              <ColorItem tag='success-content' />
              <ColorItem tag='warning-content' />
              <ColorItem tag='error-content' />
          </div>
          <h5 className="mt-4 oft-row">Focus colors.</h5>
          <div className='mt-2 grid grid-cols-6 w-full'>
              <div>
                <div className='w-[1px] h-[1px] bg-primary-focus'></div>
                <div className='w-[1px] h-[1px] bg-secondary-focus'></div>
                <div className='w-[1px] h-[1px] bg-accent-focus'></div>
                <div className='w-[1px] h-[1px] bg-neutral-focus'></div>
              </div>
              <ColorItem tag='primary-focus' />
              <ColorItem tag='secondary-focus' />
              <ColorItem tag='accent-focus' />
              <ColorItem tag='neutral-focus' />
          </div>
          
          <h4 className="mt-4 oft-row">Dark mode.</h4>
          <h5 className="mt-4 oft-row">Key colors.</h5>
          <div className='grid grid-cols-6 w-full mt-2'>
            <div>
              <div className='w-[1px] h-[1px] bg-primary-dark'></div>
              <div className='w-[1px] h-[1px] bg-secondary-dark'></div>
              <div className='w-[1px] h-[1px] bg-accent-dark'></div>
              <div className='w-[1px] h-[1px] bg-neutral-dark'></div>
            </div>
            <ColorItem tag='primary-dark' />
            <ColorItem tag='secondary-dark' />
            <ColorItem tag='accent-dark' />
            <ColorItem tag='neutral-dark' />
          </div>
          <h5 className="mt-4 oft-row">Key text colors.</h5>
          <div className='mt-2 grid grid-cols-6 w-full'>
              <div>
                <div className='w-[1px] h-[1px] bg-primary-content-dark'></div>
                <div className='w-[1px] h-[1px] bg-secondary-content-dark'></div>
                <div className='w-[1px] h-[1px] bg-accent-content-dark'></div>
                <div className='w-[1px] h-[1px] bg-neutral-content-dark'></div>
              </div>
              <ColorItem tag='primary-content-dark' />
              <ColorItem tag='secondary-content-dark' />
              <ColorItem tag='accent-content-dark' />
              <ColorItem tag='neutral-content-dark' />
          </div>
          <h5 className="mt-4 oft-row">Base colors.</h5>
          <div className='mt-2 grid grid-cols-6 w-full'>
              <div>
                <div className='w-[1px] h-[1px] bg-base-100-dark'></div>
                <div className='w-[1px] h-[1px] bg-base-200-dark'></div>
                <div className='w-[1px] h-[1px] bg-base-300-dark'></div>
              </div>
              <ColorItem tag='base-100-dark' />
              <ColorItem tag='base-200-dark' />
              <ColorItem tag='base-300-dark' />
          </div>
          <h5 className="mt-4 oft-row">Functional colors.</h5>
          <div className='mt-2 grid grid-cols-6 w-full'>
              <div>
                <div className='w-[1px] h-[1px] bg-info-dark'></div>
                <div className='w-[1px] h-[1px] bg-success-dark'></div>
                <div className='w-[1px] h-[1px] bg-warning-dark'></div>
                <div className='w-[1px] h-[1px] bg-error-dark'></div>
              </div>
              <ColorItem tag='info-dark' />
              <ColorItem tag='success-dark' />
              <ColorItem tag='warning-dark' />
              <ColorItem tag='error-dark' />
          </div>
          <h5 className="mt-4 oft-row">Functional text colors.</h5>
          <div className='mt-2 grid grid-cols-6 w-full'>
              <div>
                <div className='w-[1px] h-[1px] bg-info-content-dark'></div>
                <div className='w-[1px] h-[1px] bg-success-content-dark'></div>
                <div className='w-[1px] h-[1px] bg-warning-content-dark'></div>
                <div className='w-[1px] h-[1px] bg-error-content-dark'></div>
              </div>
              <ColorItem tag='info-content-dark' />
              <ColorItem tag='success-content-dark' />
              <ColorItem tag='warning-content-dark' />
              <ColorItem tag='error-content-dark' />
          </div>
          <h5 className="mt-4 oft-row">Focus colors.</h5>
          <div className='mt-2 grid grid-cols-6 w-full'>
              <div>
                <div className='w-[1px] h-[1px] bg-primary-focus-dark'></div>
                <div className='w-[1px] h-[1px] bg-secondary-focus-dark'></div>
                <div className='w-[1px] h-[1px] bg-accent-focus-dark'></div>
                <div className='w-[1px] h-[1px] bg-neutral-focus-dark'></div>
              </div>
              <ColorItem tag='primary-focus-dark' />
              <ColorItem tag='secondary-focus-dark' />
              <ColorItem tag='accent-focus-dark' />
              <ColorItem tag='neutral-focus-dark' />
          </div>
       </div>
    )
}
  
export default ColorScheme