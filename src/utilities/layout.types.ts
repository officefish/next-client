import { DesignSystemProviderProps } from '@/providers/design-system-provider/types'
import { ThemeProviderProps } from '@/providers/theme-provider/types'
import type { NextPage } from 'next'

export type NextPageWithLayout<T = {}> = NextPage<T> & {
  getLayout?: (page: React.ReactElement) => React.ReactNode
  theme?: ThemeProviderProps
  designSystem?: DesignSystemProviderProps
}
