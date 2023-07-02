import { FC, PropsWithChildren} from 'react'

const DSBodyContainer:FC<PropsWithChildren> = ({children}) => {
    return (
        <div className="oft-col py-16">
        <div className="flex flex-col justify-between gap-6">
            <div className="prose w-full max-w-4xl flex-grow">
                {children}
            </div>
        </div>
    </div>
    )
} 
export default DSBodyContainer