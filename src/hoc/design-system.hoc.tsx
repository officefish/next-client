import { FC } from 'react'
import { NextPageWithLayout } from "@utilities/layout.types"
import DesignSystemLayout from '@/components/layout/design-system'
import Providers from '@/providers'

export const DesignSystemPage = (Component: FC) => {
    
    const DSPage: NextPageWithLayout = () => {
        return <Component />
    }

    DSPage.getLayout = function getLayout(page: React.ReactElement) {
        return (
          <Providers 
          themeProps={DSPage.theme}
          designSystemProps={DSPage.designSystem}
          >
            <DesignSystemLayout title='Design system | Summary'>
              {page}
            </DesignSystemLayout>
          </Providers>
        )
    } 
    DSPage.theme = {
        themes: ['daisy', 'cmyk'],
    } 
    DSPage.designSystem = {
        pages: [
          'summary', 
          'color-schema', 
          'typography',
          'alert',
          'avatar',
          'artboard',
          'badge',
          'breadcrumbs',
          'button',
          'button-group',
          'card',
          'chat',
          'checkbox',
          'collapse',
          'countdown',
          'bottom-navigation',
          'divider',
          'drawer',
          'dropdown',
          'file-input',
          'footer',
          'join',
          'indicator',
          'input',
          'input-group',
          'link',
          'loading',
          'mask',
          'menu',
          'mockup-code',
          'mockup-phone',
          'mockup-window',
          'modal',
          'navbar',
          'radial-progress',
          'pagination',
          'progress',
          'radio',
          'range',
          'rating',
          'select',
          'swap',
          'stat',
          'stack',
          'tab',
          'table',
          'textarea',
          'toast',
          'toggle',
          'tooltip'
        ],
        //forcedPage: 'summary'
    }
    return DSPage
}
export default DesignSystemPage