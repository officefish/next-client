import { FC, PropsWithChildren } from "react"
//import Header from "./header/Header"
import Meta, {IMeta} from "@components/seo"
import Header from "../header/Header"
import DSHeaderContent from "./header-content"
import DSBodyContainer from "./body-container"

const DesignSystemLayout: FC<PropsWithChildren<IMeta>> = ({title, description, children}) => {
    return (
        <Meta title={title} description={description}>
            <Header>
                <DSHeaderContent />
            </Header>
            <DSBodyContainer>
               {children}
            </DSBodyContainer>
        </Meta>
    )
}

export default DesignSystemLayout