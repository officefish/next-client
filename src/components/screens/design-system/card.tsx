import { FC, useState,  useEffect } from "react"
import TableItem from "./table/table-item"
import WithTabs from "./tabs"

import TableHead from "./table/table-head"

import shoesSrc from '@public/shoes.jpg'
import spiderManSrc from '@public/spider-man.jpg'
import casseteSrc from '@public/cassete.jpg'
import Image from "next/image"

type Props = {}
const Card: FC = (props: Props) => {

  return (<>
        <h1>Card</h1>
        <p>Cards are used to group and display content in a way that is easily readable.</p>

        <div className="not-prose mt-6 mb-10 overflow-x-auto">
          <table className="table-compact table w-full">
            
            <TableHead />
            
            <tbody className="text-base-content dark:text-base-content-dark">
              
              <TableItem name='card' type='component' description="Container element" />
              <TableItem name='card-title' type='component' description="Title of card" />
              <TableItem name='card-body' type='component' description="Container for content" />
              <TableItem name='card-actions' type='component' description="Container for buttons" />

              <TableItem name='card-bordered' type='modifier' description="Adds border to <card>" />
              <TableItem name='image-full' type='modifier' description="The image in <figure> element will be the background" />

              <TableItem name='card-normal' type='responsive' description="Applies default paddings" />
              <TableItem name='card-compact' type='responsive' description="Applies smaller padding" />
              <TableItem name='card-side' type='responsive' description="The image in <figure> will be on to the side" />
             
            </tbody>
          </table>
        </div>

        <CardTabs />
        <CompactCardTabs />
        <WithBageCardTabs />
        <WithBottomImageCardTabs />
        <CenteredContentCardTabs />
        <ImageOverlayCardTabs />
        <NoImageCardTabs />
        <WithCustomColorCardTabs />
        <WithNeutralColorCardTabs />
        <WithActionOnTopCardTabs />
        <WithGlassCardTabs />
        <OnSideImageCardTabs />
        <ResponsiveCardTabs />
    </>
        
    
  )
}

export default Card

const CardTabs:FC = () => <WithTabs title="Card">
  <div className="card w-96 bg-base-100 dark:bg-base-100-dark shadow-xl">
  <figure>
    <Image alt="shoes" 
      src={shoesSrc} 
      width={384} 
      height={226} 
      />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
</WithTabs>

const CompactCardTabs:FC = () => <WithTabs title="Compact card (less padding for `card-body`)">
  <div className="card card-compact w-96 bg-base-100 dark:bg-base-100-dark shadow-xl">
    <figure>
      <Image alt="shoes" 
        src={shoesSrc} 
        width={384} 
        height={226} 
        />
    </figure>
    <div className="card-body">
      <h2 className="card-title">Shoes!</h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>
      <div className="card-actions justify-end">
        <button className="btn btn-primary">Buy Now</button>
      </div>
    </div>
  </div>
</WithTabs>

const WithBageCardTabs:FC = () => <WithTabs title="Card with badge">
  <div className="card w-96 bg-base-100 dark:bg-base-100-dark shadow-xl">
    <figure>
        <Image alt="shoes" 
          src={shoesSrc} 
          width={384} 
          height={226} 
          />
    </figure>
    <div className="card-body">
      <h2 className="card-title">
        Shoes!
        <div className="badge badge-secondary">NEW</div>
      </h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>
      <div className="card-actions justify-end">
        <div className="badge badge-outline">Fashion</div>
        <div className="badge badge-outline">Products</div>
      </div>
    </div>
  </div>
</WithTabs>

const WithBottomImageCardTabs:FC = () => <WithTabs title="Card with bottom image">
 <div className="card w-96 bg-base-100 dark:bg-base-100-dark shadow-xl">
    <div className="card-body">
      <h2 className="card-title">Shoes!</h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>
    </div>
    <figure>
          <Image alt="shoes" 
            src={shoesSrc} 
            width={384} 
            height={226} 
            />
      </figure>
  </div>
</WithTabs>

const CenteredContentCardTabs:FC = () => <WithTabs title="Card with centered content and paddings">
 <div className="card w-96 bg-base-100 dark:bg-base-100-dark shadow-xl">
    <figure className="px-10 pt-10">
      <Image alt="shoes" 
        src={shoesSrc} 
        width={384} 
        height={226} 
        />
    </figure>
    <div className="card-body items-center text-center">
      <h2 className="card-title">Shoes!</h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>
      <div className="card-actions">
        <button className="btn btn-primary">Buy Now</button>
      </div>
    </div>
  </div>
</WithTabs>

const ImageOverlayCardTabs:FC = () => <WithTabs title="Card with image overlay">
 <div className="card w-96 bg-base-100 dark:bg-base-100-dark shadow-xl image-full">
 <figure>
    <Image alt="shoes" 
      src={shoesSrc} 
      width={384} 
      height={226} 
      />
  </figure>
  <div className="card-body">
    <h2 className="card-title">Shoes!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
</WithTabs>

const NoImageCardTabs:FC = () => <WithTabs title="Card with no image">
 <div className="card w-96 bg-base-100 dark:bg-base-100-dark shadow-xl">
    <div className="card-body">
      <h2 className="card-title">Card title!</h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>
      <div className="card-actions justify-end">
        <button className="btn btn-primary">Buy Now</button>
      </div>
    </div>
  </div>
</WithTabs>

const WithCustomColorCardTabs:FC = () => <WithTabs title="Card with custom color">
  <div className="card w-96 bg-primary dark:bg-primary-dark text-primary-content dark:text-primary-content-dark">
    <div className="card-body">
      <h2 className="card-title">Card title!</h2>
      <p>If a dog chews shoes whose shoes does he choose?</p>
      <div className="card-actions justify-end">
        <button className="btn">Buy Now</button>
      </div>
    </div>
  </div>
</WithTabs>

const WithNeutralColorCardTabs:FC = () => <WithTabs title="Centered card with neutral color">
  <div className="card w-96 bg-neutral text-neutral-content dark:bg-neutral-dark dark:text-neutral-content-dark">
  <div className="card-body items-center text-center">
    <h2 className="card-title">Cookies!</h2>
    <p>We are using cookies for no reason.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Accept</button>
      <button className="btn btn-ghost">Deny</button>
    </div>
  </div>
</div>
</WithTabs>

const WithActionOnTopCardTabs:FC = () => <WithTabs title="Card with action on top">
  <div className="card w-96 bg-base-100 dark:bg-base-100-dark shadow-xl">
  <div className="card-body">
    <div className="card-actions justify-end">
      <button className="btn btn-square btn-sm">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
      </button>
    </div>
    <p>We are using cookies for no reason.</p>
  </div>
</div>
</WithTabs>

const WithGlassCardTabs:FC = () => <WithTabs title="Card glass">
  <div className="card w-96 glass">
  <figure>
    <Image alt="shoes" 
      src={shoesSrc} 
      width={384} 
      height={226} 
      />
  </figure>
    <div className="card-body">
      <h2 className="card-title">Life hack</h2>
      <p>How to park your car at your garage?</p>
      <div className="card-actions justify-end">
        <button className="btn btn-primary">Learn now!</button>
      </div>
    </div>
  </div>
</WithTabs>

const OnSideImageCardTabs:FC = () => <WithTabs title="Card with image on side">
  <div className="card card-side bg-base-100 dark:bg-base-100-dark shadow-xl">
    <figure>
      <Image alt="spiderMan" 
        src={spiderManSrc} 
        width={200} 
        height={280} 
        />
    </figure>
    <div className="card-body">
      <h2 className="card-title">New movie is released!</h2>
      <p>Click the button to watch on Jetflix app.</p>
      <div className="card-actions justify-end">
        <button className="btn btn-primary">Watch</button>
      </div>
    </div>
  </div>
</WithTabs>

const ResponsiveCardTabs:FC = () => <WithTabs title="Responsive card (vertical on small screen, horizontal on large screen)">
  <div className="card lg:card-side bg-base-100 dark:bg-base-100-dark shadow-xl">
  <figure>
      <Image alt="cassete" 
        src={casseteSrc} 
        width={400} 
        height={400} 
        />
    </figure>
  <div className="card-body">
    <h2 className="card-title">New album is released!</h2>
    <p>Click the button to listen on Spotiwhy app.</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Listen</button>
    </div>
  </div>
</div>
</WithTabs>