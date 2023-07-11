import { FC } from "react"

import { 
    WarningSVG
} from "@components/ui/svg"

const UnderConstruction: FC = () => {
    return (
        <div className="fixed w-screen h-screen flex flex-col items-center justify-center">
            <div className="w-80">
                <div className="alert alert-warning">
                    <WarningSVG />
                    Under Construction
                </div>
            </div>
        </div>
    )
}

export default UnderConstruction