import { FC, useState,  useEffect } from "react"
import TableItem from "./table/table-item"
import WithTabs from "./tabs"

import TableHead from "./table/table-head"
import Image from "next/image"

import maskBgSrc from '@public/mask-bg.jpg'

type Props = {}
const Mask: FC = (props: Props) => {

  return (<>
        <h1>Mask</h1>
        <p>Mask crops the content of the element to common shapes.</p>

        <div className="not-prose mt-6 mb-10 overflow-x-auto">
          <table className="table-compact table w-full">
            <TableHead />
            <tbody className="text-base-content dark:text-base-content-dark">         
             
              <TableItem name='mask' type='component' description="Masks the content with shape" />
             
              <TableItem name='mask-squircle' type='modifier' description="Applies `squircle` shape" />
              <TableItem name='mask-heart' type='modifier' description="Applies `heart` shape" />
              <TableItem name='mask-hexagon' type='modifier' description="Applies `hexagon` shape" />
              <TableItem name='mask-hexagon-2' type='modifier' description="Applies `hexagon` alternative shape" />
              <TableItem name='mask-decagon' type='modifier' description="Applies `decagon` shape" />
              <TableItem name='mask-pentagon' type='modifier' description="Applies `pentagon` shape" />
              <TableItem name='mask-diamond' type='modifier' description="Applies `diamond` shape" />

              <TableItem name='mask-square' type='modifier' description="Applies `square` shape" />
              <TableItem name='mask-circle' type='modifier' description="Applies `circle` shape" />
              <TableItem name='mask-parallelogram' type='modifier' description="Applies `parallelogram` shape" />
              <TableItem name='mask-parallelogram-2' type='modifier' description="Applies `parallelogram` alternative shape" />
              <TableItem name='mask-parallelogram-3' type='modifier' description="Applies `parallelogram` alternative shape" />
              <TableItem name='mask-parallelogram-3' type='modifier' description="Applies `parallelogram` alternative shape" />
              <TableItem name='mask-parallelogram-4' type='modifier' description="Applies `parallelogram` alternative shape" />

              <TableItem name='mask-star' type='modifier' description="Applies `star` shape" />
              <TableItem name='mask-star-2' type='modifier' description="Applies `star` alternative shape" />
              <TableItem name='mask-triangle' type='modifier' description="Applies `triangle` shape" />
              <TableItem name='mask-triangle-2' type='modifier' description="Applies `triangle` alternative shape" />
              <TableItem name='mask-triangle-3' type='modifier' description="Applies `triangle` alternative shape" />
              <TableItem name='mask-triangle-4' type='modifier' description="Applies `triangle` alternative shape" />
              <TableItem name='mask-half-1' type='modifier' description="Crops only the first half of mask" />
              <TableItem name='mask-half-2' type='modifier' description="Crops only the second half of mask" />

            </tbody>
          </table>
        </div>

        <SquircleMaskTabs /> 
        <HeartMaskTabs />
        <HexagonMaskTabs />
        <Hexagon2MaskTabs />
        <DecagorMaskTabs />
        <PentagonMaskTabs />
        <DiamondMaskTabs />
        <SquareMaskTabs />
        <CircleMaskTabs />
        <ParallelogramMaskTabs />
        <Parallelogram2MaskTabs />
        <Parallelogram3MaskTabs />
        <Parallelogram4MaskTabs />
        <StarMaskTabs />
        <Star2MaskTabs />
        <TrianlgeMaskTabs />
        <Trianlge2MaskTabs />
        <Trianlge3MaskTabs />
        <Trianlge4MaskTabs />
    </>
  )
}

export default Mask

const SquircleMaskTabs:FC = () => <WithTabs title="Squircle">
     <div className="rounded mask mask-squircle w-40 h-40">
        <Image alt="mask background" 
            src={maskBgSrc} 
            width={160} 
            height={160} 
            />
        </div>
</WithTabs>

const HeartMaskTabs:FC = () => <WithTabs title="Heart">
     <div className="rounded mask mask-heart w-40 h-40">
        <Image alt="mask background" 
            src={maskBgSrc} 
            width={160} 
            height={160} 
            />
        </div>
</WithTabs>

const HexagonMaskTabs:FC = () => <WithTabs title="Hexagon">
     <div className="rounded mask mask-hexagon w-40 h-40">
        <Image alt="mask background" 
            src={maskBgSrc} 
            width={160} 
            height={160} 
            />
        </div>
</WithTabs>

const Hexagon2MaskTabs:FC = () => <WithTabs title="Hexagon 2">
     <div className="rounded mask mask-hexagon-2 w-40 h-40">
        <Image alt="mask background" 
            src={maskBgSrc} 
            width={160} 
            height={160} 
            />
        </div>
</WithTabs>

const DecagorMaskTabs:FC = () => <WithTabs title="Decagon">
     <div className="rounded mask mask-decagon w-40 h-40">
        <Image alt="mask background" 
            src={maskBgSrc} 
            width={160} 
            height={160} 
            />
        </div>
</WithTabs>

const PentagonMaskTabs:FC = () => <WithTabs title="Pentagon">
     <div className="rounded mask mask-pentagon w-40 h-40">
        <Image alt="mask background" 
            src={maskBgSrc} 
            width={160} 
            height={160} 
            />
        </div>
</WithTabs>

const DiamondMaskTabs:FC = () => <WithTabs title="Pentagon">
     <div className="rounded mask mask-diamond w-40 h-40">
        <Image alt="mask background" 
            src={maskBgSrc} 
            width={160} 
            height={160} 
            />
        </div>
</WithTabs>

const SquareMaskTabs:FC = () => <WithTabs title="Square">
     <div className="rounded mask mask-square w-40 h-40">
        <Image alt="mask background" 
            src={maskBgSrc} 
            width={160} 
            height={160} 
            />
        </div>
</WithTabs>

const CircleMaskTabs:FC = () => <WithTabs title="Circle">
     <div className="rounded mask mask-circle w-40 h-40">
        <Image alt="mask background" 
            src={maskBgSrc} 
            width={160} 
            height={160} 
            />
        </div>
</WithTabs>

const ParallelogramMaskTabs:FC = () => <WithTabs title="Parallelogram">
     <div className="rounded mask mask-parallelogram w-40 h-40">
        <Image alt="mask background" 
            src={maskBgSrc} 
            width={160} 
            height={160} 
            />
        </div>
</WithTabs>

const Parallelogram2MaskTabs:FC = () => <WithTabs title="Parallelogram-2">
     <div className="rounded mask mask-parallelogram-2 w-40 h-40">
        <Image alt="mask background" 
            src={maskBgSrc} 
            width={160} 
            height={160} 
            />
        </div>
</WithTabs>

const Parallelogram3MaskTabs:FC = () => <WithTabs title="Parallelogram-3">
     <div className="rounded mask mask-parallelogram-3 w-40 h-40">
        <Image alt="mask background" 
            src={maskBgSrc} 
            width={160} 
            height={160} 
            />
        </div>
</WithTabs>

const Parallelogram4MaskTabs:FC = () => <WithTabs title="Parallelogram-4">
     <div className="rounded mask mask-parallelogram-4 w-40 h-40">
        <Image alt="mask background" 
            src={maskBgSrc} 
            width={160} 
            height={160} 
            />
        </div>
</WithTabs>

const StarMaskTabs:FC = () => <WithTabs title="Star">
     <div className="rounded mask mask-star w-40 h-40">
        <Image alt="mask background" 
            src={maskBgSrc} 
            width={160} 
            height={160} 
            />
        </div>
</WithTabs>

const Star2MaskTabs:FC = () => <WithTabs title="Star-2">
     <div className="rounded mask mask-star-2 w-40 h-40">
        <Image alt="mask background" 
            src={maskBgSrc} 
            width={160} 
            height={160} 
            />
        </div>
</WithTabs>

const TrianlgeMaskTabs:FC = () => <WithTabs title="Trianlge">
     <div className="rounded mask mask-triangle w-40 h-40">
        <Image alt="mask background" 
            src={maskBgSrc} 
            width={160} 
            height={160} 
            />
        </div>
</WithTabs>

const Trianlge2MaskTabs:FC = () => <WithTabs title="Trianlge-2">
     <div className="rounded mask mask-triangle-2 w-40 h-40">
        <Image alt="mask background" 
            src={maskBgSrc} 
            width={160} 
            height={160} 
            />
        </div>
</WithTabs>

const Trianlge3MaskTabs:FC = () => <WithTabs title="Trianlge-3">
     <div className="rounded mask mask-triangle-3 w-40 h-40">
        <Image alt="mask background" 
            src={maskBgSrc} 
            width={160} 
            height={160} 
            />
        </div>
</WithTabs>

const Trianlge4MaskTabs:FC = () => <WithTabs title="Trianlge-4">
     <div className="rounded mask mask-triangle-4 w-40 h-40">
        <Image alt="mask background" 
            src={maskBgSrc} 
            width={160} 
            height={160} 
            />
        </div>
</WithTabs>