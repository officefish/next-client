import { FC, useState,  useEffect } from "react"
import TableItem from "./table/table-item"
import WithTabs from "./tabs"

import TableHead from "./table/table-head"

type Props = {}
const Button: FC = (props: Props) => {

  return (<>
        <h1>Button</h1>
        <p>Buttons allow the user to take actions or make choices.</p>

        <div className="not-prose mt-6 mb-10 overflow-x-auto">
          <table className="table-compact table w-full">
            
            <TableHead />
            
            <tbody className="text-base-content dark:text-base-content-dark">
              
              <TableItem name='btn' type='component' description="Button" />
              <TableItem name='btn-primary' type='modifier' description="Button with `primary` color" />
              <TableItem name='btn-secondary' type='modifier' description="Button with `secondary` color" />
              <TableItem name='btn-accent' type='modifier' description="Button with `accent` color" />
              <TableItem name='btn-info' type='modifier' description="Button with `info` color" />
              <TableItem name='btn-success' type='modifier' description="Button with `success` color" />
              <TableItem name='btn-warning' type='modifier' description="Button with `warning` color" />
              <TableItem name='btn-error' type='modifier' description="Button with `error` color" />
              
              <TableItem name='btn-ghost' type='modifier' description="Button with ghost style" />
              <TableItem name='btn-link' type='modifier' description="Button styled as a link" />
              <TableItem name='btn-outline' type='modifier' description="Transparent Button with colored border" />
              <TableItem name='btn-active' type='modifier' description="Force button to show active state" />
              <TableItem name='btn-disabled' type='modifier' description="Force button to show disabled state" />
              <TableItem name='glass' type='modifier' description="Button with a glass effect" />
              <TableItem name='btn-loading' type='modifier' description="Shows loading spinner" />
              <TableItem name='no-animation' type='modifier' description="Disables click animation" />

              <TableItem name='btn-lg' type='responsive' description="Large button" />
              <TableItem name='btn-md' type='responsive' description="Medium button (default)" />
              <TableItem name='btn-sm' type='responsive' description="Small button" />
              <TableItem name='btn-xs' type='responsive' description="Extra small button" />

              <TableItem name='btn-wide' type='responsive' description="Wide button (more horizontal padding)" />
              <TableItem name='btn-block' type='responsive' description="Full width button" />
              <TableItem name='btn-circle' type='responsive' description="Circle button with a 1:1 ratio" />
              <TableItem name='btn-square' type='responsive' description="Square button with a 1:1 ratio" />
            </tbody>
          </table>
        </div>

        <NeutralColorButtonTabs />
        <BrandColorsButtonsTabs />
        <BrandActiveButtonsTabs />
        <StateColorsButtonsTabs />
        <OutlineBrandColorsButtonsTabs />
        <OutlineStateColorsButtonsTabs />
        <ButtonsSizesTabs />
        <ResponsiveButtonTabs />
        <WideButtonTabs />
        <HTMLTagsButtonTabs />
        <DissabledButtonsTabs />
        <SquareButtonsTabs />
        <CircleButtonsTabs />
        <WithIconsButtonsTabs />
        <ButtonsBlocksTabs />
        <WithLoadingSpinnerTabs />
        <WithLoadingSpinnerTextTabs />
        <WithoutClickAnimationTabs />
    </>
        
    
  )
}

export default Button

const NeutralColorButtonTabs:FC = () => <WithTabs title="Button">
  <button className="btn">Button</button>
</WithTabs>

const BrandColorsButtonsTabs:FC = () => <WithTabs title="Buttons with brand colors">
  <button className="btn">Button</button>
  <button className="btn btn-primary">Primary</button>
  <button className="btn btn-secondary">Secondary</button>
  <button className="btn btn-accent">Accent</button>
  <button className="btn btn-ghost">Ghost</button>
  <button className="btn btn-link">Link</button>
</WithTabs>

const BrandActiveButtonsTabs:FC = () => <WithTabs title="Active buttons">
  <button className="btn btn-active">Button</button>
  <button className="btn btn-primary btn-active">Primary</button>
  <button className="btn btn-secondary btn-active">Secondary</button>
  <button className="btn btn-accent btn-active">Accent</button>
  <button className="btn btn-ghost btn-active">Ghost</button>
  <button className="btn btn-link btn-active">Link</button>
</WithTabs>

const StateColorsButtonsTabs:FC = () => <WithTabs title="Buttons with state colors">
  <button className="btn btn-info">Info</button>
  <button className="btn btn-success">Success</button>
  <button className="btn btn-warning">Warning</button>
  <button className="btn btn-error">Error</button>
</WithTabs>

const OutlineBrandColorsButtonsTabs:FC = () => <WithTabs title="Outline buttons">
  <button className="btn btn-outline">Neutral</button>
  <button className="btn btn-outline btn-primary">Primary</button>
  <button className="btn btn-outline btn-secondary">Secondary</button>
  <button className="btn btn-outline btn-accent">Accent</button>
</WithTabs>

const OutlineStateColorsButtonsTabs:FC = () => <WithTabs title="Outline buttons with state colors">
  <button className="btn btn-outline btn-info">Info</button>
  <button className="btn btn-outline btn-success">Success</button>
  <button className="btn btn-outline btn-warning">Warning</button>
  <button className="btn btn-outline btn-error">Error</button>
</WithTabs>

const ButtonsSizesTabs:FC = () => <WithTabs title="Button sizes">
  <button className="btn btn-lg">Large</button>
  <button className="btn">Normal</button>
  <button className="btn btn-sm">Small</button>
  <button className="btn btn-xs">Tiny</button>
</WithTabs>

const ResponsiveButtonTabs:FC = () => <WithTabs title="Responsive button">
  <button className="btn btn-xs sm:btn-sm md:btn-md lg:btn-lg">Responsive</button>
</WithTabs>

const WideButtonTabs:FC = () => <WithTabs title="Wide button">
  <button className="btn btn-wide">Wide</button>
</WithTabs>

const HTMLTagsButtonTabs:FC = () => <WithTabs title="Buttons with different HTML tags">
  <a role="button" className="btn">Link</a>
  <button type="submit" className="btn">Button</button>
  <input type="button" value="Input" className="btn" />
  <input type="submit" value="Submit" className="btn" />
  <input type="reset" value="Reset" className="btn" />
</WithTabs>

const DissabledButtonsTabs:FC = () => <WithTabs title="Disabled buttons">
  <button className="btn" disabled>Disabled using attribute</button>
  <button className="btn btn-disabled" tabIndex={-1} role="button" aria-disabled="true">Disabled using className name</button>
</WithTabs>

const SquareButtonsTabs:FC = () => <WithTabs title="Square button">
  <button className="btn btn-square">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
  </button>
  <button className="btn btn-square btn-outline">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
  </button>
</WithTabs>

const CircleButtonsTabs:FC = () => <WithTabs title="Circle button">
  <button className="btn btn-circle">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
  </button>
  <button className="btn btn-circle btn-outline">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
  </button>
</WithTabs>

const WithIconsButtonsTabs:FC =  () => <WithTabs title="With icons buttons">
  <button className="btn gap-2">
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
    Button
  </button>
  <button className="btn gap-2">
    Button
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" /></svg>
  </button>
</WithTabs>

const ButtonsBlocksTabs:FC =  () => <WithTabs title="Button block">
  <button className="btn btn-block">block</button>
</WithTabs>

const WithLoadingSpinnerTabs:FC =  () => <WithTabs title="Button with loading spinner">
  <button className="btn btn-square btn-loading"></button>
</WithTabs>

const WithLoadingSpinnerTextTabs:FC =  () => <WithTabs title="Button with loading spinner and text">
  <button className="btn btn-loading">loading</button>
</WithTabs>

const WithoutClickAnimationTabs:FC =  () => <WithTabs title="Button without click animation">
  <button className="btn no-animation">I don't have click animation</button>
</WithTabs>