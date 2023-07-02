import { FC, useState,  useEffect } from "react"
import TableItem from "./table/table-item"
import WithTabs from "./tabs"

import TableHead from "./table/table-head"
import Image from "next/image"

import avatarSrc from '@public/avatar.jpg'


type Props = {}
const Avatar: FC = (props: Props) => {

  return (<>
        <h1>Avatar</h1>
        <p>Avatars are used to show a thumbnail representation of an individual or business in the interface.</p>

        <div className="not-prose mt-6 mb-10 overflow-x-auto">
          <table className="table-compact table w-full">
            
            <TableHead />
            
            <tbody className="text-base-content dark:text-base-content-dark">
              
              <TableItem name='avatar' type='component' description="Container element" />
              <TableItem name='avatar-group' type='component' description="Container for grouping multiple avatars" />
             
              <TableItem name='online' type='modifier' description="shows a green dot as online indicator" />
              <TableItem name='offline' type='modifier' description="shows a gray dot as offline indicator" />
              <TableItem name='placeholder' type='modifier' description="to show some letters as avatar placeholder" />
            </tbody>
          </table>
        </div>

        <AvatarTabs />
        <CustomSizesAvatarTabs />
        <AvatarRoundedTabs />
        <AvatarWithMaskTabs />
        <AvatarGroupTabs />
        <AvatarCounterGroupTabs />
        <AvatarWithRingTabs />
        <AvatarWithPresenceIndicatorTabs />
        <AvatarPlaceholderTabs />

    </>        
  )
}

export default Avatar

const AvatarTabs:FC = () => <WithTabs title="Avatar">
    <div className="avatar">
        <div className="w-24 rounded">
        <Image alt="shoes" 
            src={avatarSrc} 
            width={96} 
            height={96} 
            />
        </div>
    </div>
</WithTabs>

const CustomSizesAvatarTabs:FC = () => <WithTabs title="Avatar in custom sizes">
    <div className="avatar">
        <div className="w-32 rounded">
        <Image alt="shoes" 
            src={avatarSrc} 
            width={128} 
            height={128} 
            />
        </div>
    </div>
    <div className="avatar">
        <div className="w-20 rounded">
        <Image alt="shoes" 
            src={avatarSrc} 
            width={80} 
            height={80} 
            />
        </div>
    </div>
    <div className="avatar">
        <div className="w-16 rounded">
        <Image alt="shoes" 
            src={avatarSrc} 
            width={64} 
            height={64} 
            />
        </div>
    </div>
    <div className="avatar">
        <div className="w-8 rounded">
        <Image alt="shoes" 
            src={avatarSrc} 
            width={32} 
            height={32} 
            />
        </div>
    </div>
</WithTabs>

const AvatarRoundedTabs:FC = () => <WithTabs title="Avatar rounded">
    <div className="avatar">
        <div className="w-24 rounded-xl">
        <Image alt="shoes" 
            src={avatarSrc} 
            width={96} 
            height={96} 
            />
        </div>
    </div>
    <div className="avatar">
        <div className="w-24 rounded-full">
        <Image alt="shoes" 
            src={avatarSrc} 
            width={96} 
            height={96} 
            />
        </div>
    </div>
</WithTabs>

const AvatarWithMaskTabs:FC = () => <WithTabs title="Avatar with mask">
    <div className="avatar">
        <div className="w-24 rounded mask mask-squircle">
        <Image alt="shoes" 
            src={avatarSrc} 
            width={96} 
            height={96} 
            />
        </div>
    </div>
    <div className="avatar">
        <div className="w-24 rounded mask mask-hexagon">
        <Image alt="shoes" 
            src={avatarSrc} 
            width={96} 
            height={96} 
            />
        </div>
    </div>
    <div className="avatar">
        <div className="w-24 rounded mask mask-triangle">
        <Image alt="shoes" 
            src={avatarSrc} 
            width={96} 
            height={96} 
            />
        </div>
    </div>
</WithTabs>

const AvatarGroupTabs:FC = () => <WithTabs title="Avatar group">
    <div className="avatar-group -space-x-6">
        <div className="avatar">
            <div className="w-12">
            <Image alt="shoes" 
                src={avatarSrc} 
                width={48} 
                height={48} 
                />
            </div>
        </div>
        <div className="avatar">
            <div className="w-12">
            <Image alt="shoes" 
                src={avatarSrc} 
                width={48} 
                height={48} 
                />
            </div>
        </div>
        <div className="avatar">
            <div className="w-12">
            <Image alt="shoes" 
                src={avatarSrc} 
                width={48} 
                height={48} 
                />
            </div>
        </div>
        <div className="avatar">
            <div className="w-12">
            <Image alt="shoes" 
                src={avatarSrc} 
                width={48} 
                height={48} 
                />
            </div>
        </div>

    </div>
    
</WithTabs>

const AvatarCounterGroupTabs:FC = () => <WithTabs title="Avatar group with counter">
    <div className="avatar-group -space-x-6">
        <div className="avatar">
            <div className="w-12">
            <Image alt="shoes" 
                src={avatarSrc} 
                width={48} 
                height={48} 
                />
            </div>
        </div>
        <div className="avatar">
            <div className="w-12">
            <Image alt="shoes" 
                src={avatarSrc} 
                width={48} 
                height={48} 
                />
            </div>
        </div>
        <div className="avatar">
            <div className="w-12">
            <Image alt="shoes" 
                src={avatarSrc} 
                width={48} 
                height={48} 
                />
            </div>
        </div>
        <div className="avatar placeholder">
            <div className="w-12 bg-neutral-focus dark:bg-neutral-focus-dark text-neutral-content dark:text-neutral-content-dark">
            <span>+99</span>
            </div>
        </div>

    </div>
    
</WithTabs>

const AvatarWithRingTabs:FC = () => <WithTabs title="Avatar with ring">
   <div className="avatar">
        <div className="w-24 rounded-full ring ring-primary dark:ring-primary-dark ring-offset-base-100 dark:ring-offset-base-100-dark ring-offset-2">
        <Image alt="shoes" 
                src={avatarSrc} 
                width={96} 
                height={96} 
                />
        </div>
    </div>
</WithTabs>

const AvatarWithPresenceIndicatorTabs:FC = () => <WithTabs title="Avatar with presence indicator">
   <div className="avatar online">
        <div className="w-24 rounded-full">
        <Image alt="shoes" 
                src={avatarSrc} 
                width={96} 
                height={96} 
                />
        </div>
    </div>
    <div className="avatar offline">
        <div className="w-24 rounded-full">
        <Image alt="shoes" 
                src={avatarSrc} 
                width={96} 
                height={96} 
                />
        </div>
    </div>
</WithTabs>


const AvatarPlaceholderTabs:FC = () => <WithTabs title="Avatar placeholder">
    <div className="avatar placeholder">
        <div className="bg-neutral-focus text-neutral-content dark:bg-neutral-focus-dark dark:text-neutral-content-dark rounded-full w-24">
            <span className="text-3xl">K</span>
        </div>
    </div> 
    <div className="avatar online placeholder">
        <div className="bg-neutral-focus text-neutral-content dark:bg-neutral-focus-dark dark:text-neutral-content-dark rounded-full w-16">
            <span className="text-xl">JO</span>
        </div>
    </div> 
    <div className="avatar placeholder">
        <div className="bg-neutral-focus text-neutral-content dark:bg-neutral-focus-dark dark:text-neutral-content-dark rounded-full w-12">
            <span>MX</span>
        </div>
    </div> 
    <div className="avatar placeholder">
        <div className="bg-neutral-focus text-neutral-content dark:bg-neutral-focus-dark dark:text-neutral-content-dark rounded-full w-8">
            <span className="text-xs">AA</span>
        </div>
    </div>
</WithTabs>




