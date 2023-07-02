
import { FC, PropsWithChildren } from "react"
//import { ThemeProvider } from 'next-themes'
import { ThemeProvider } from "./theme-provider"
import { ThemeProviderProps} from "./theme-provider/types"
import { DesignSystemProviderProps } from "./design-system-provider/types"
import { DesignSystemProvider } from "./design-system-provider"

interface ProviderProps {
    themeProps: ThemeProviderProps | undefined
    designSystemProps?: DesignSystemProviderProps | undefined
}

const Providers: FC<PropsWithChildren<ProviderProps>> =  ({ children, themeProps, designSystemProps }) => {
  return ( 
  <ThemeProvider {...themeProps}>
    {designSystemProps 
     ? <DesignSystemProvider {...designSystemProps}>{children}</DesignSystemProvider>
     : <>{children}</>
    } 
  </ThemeProvider>)
}

export default Providers