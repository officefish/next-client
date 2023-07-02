import { FC, PropsWithChildren } from "react"
import { PreviewContainer, Preview } from "../preview"

interface TabsProps {
    title: string,
    comment?: string
}



const WithTabs: FC<PropsWithChildren<TabsProps>> = ({children, title, comment}) => {
    return (
        <div className="component-preview not-prose text-base-content my-4 max-w-4xl" id="button">
            <div className="pb-2 text-sm font-bold">
                <a className="opacity-20 hover:opacity-60" href="#button">#</a>
                <span className="component-preview-title">{title}</span>
            </div>
            {comment && <div className="pb-2 text-xs opacity-70">
                {comment}
            </div>}
            <div className="grid">
            <div className="tabs z-10 -mb-px">
                <button className="tab tab-lifted tab-active tab-bg-base-200">
                Preview
                </button>
                <button className="tab tab-lifted tab-border-transparent">
                HTML
                </button>
                <button className="tab tab-lifted tab-border-transparent">
                JSX
                </button>
                <button className="tab tab-lifted mr-6 flex-1 cursor-default tab-border-transparent"></button>
            </div>
            <PreviewContainer>
                <Preview>
                    {children}
                </Preview>
            </PreviewContainer>
            </div>
        </div>
    )
}

export default WithTabs

