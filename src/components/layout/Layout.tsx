import { FC, PropsWithChildren } from "react"
import Header from "./header/Header"
import Meta, {IMeta} from "../seo"
import HeaderContent from "./header/HeaderContent"

const Layout:FC<PropsWithChildren<IMeta>> = ({title, description, children}) => {
    return (
        <Meta title={title} description={description}>
            <Header>
                <HeaderContent />        
            </Header>
            {children}
        </Meta>
    )
}

export default Layout