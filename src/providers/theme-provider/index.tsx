import React, {
    Fragment,
    createContext,
    useCallback,
    useContext,
    useEffect,
    useState,
    useMemo,
    memo
} from 'react'
import type { UseThemeProps, ThemeProviderProps } from './types'
import { getLocalStorageValue, getLocalStorageJsonValue } from '@services/local-storage.service'

const systemColorSchemas = ['light', 'dark']
const MEDIA = '(prefers-color-scheme: dark)'
const ThemeContext = createContext<UseThemeProps | undefined>(undefined)

const defaultContext: UseThemeProps = { 
    theme: '',
    systemTheme: 'light',
    themes: [],
    setTheme: (_) => {},
    setSystemTheme: (_) => {}
}
  
export const useColorSchemas = () => {
    const context = useContext(ThemeContext) ?? defaultContext
    return {
        themes: context?.themes,
        theme: context?.theme,
        setTheme: context?.setTheme 
    }
}

export const useSystemColorSchemas = () => {
    const context = useContext(ThemeContext) ?? defaultContext
    return {
        modes: systemColorSchemas,
        mode: context?.systemTheme,
        setMode: context?.setSystemTheme 
    }
}

export const ThemeProvider: React.FC<ThemeProviderProps> = props => {
    const context = useContext(ThemeContext)

    // Ignore nested context providers, just passthrough children
    if (context) return <Fragment>{props.children}</Fragment>
    return <Theme {...props} />
}
    
const Theme: React.FC<ThemeProviderProps> = ({
    forcedTheme,
    forcedSystemTheme,
    disableTransitionOnChange = false,
    enableColorScheme = true,
    themeStorageKey = 'theme',
    systemThemeStorageKey = 'system-theme',
    availableThemesStorageKey = 'available-themes',
    themes = [],
    defaultTheme = '',
    defaultSystemTheme = 'light',
    systemAttribute = 'class',
    attribute = 'data-theme',
    children,
    nonce
}) => {

    const [theme, setThemeState] = useState(() => 
        getLocalStorageValue(themeStorageKey, forcedTheme?? defaultTheme))
    const [systemTheme, setSystemThemeState] = useState(() => 
        getLocalStorageValue(systemThemeStorageKey, forcedSystemTheme?? defaultSystemTheme ))
    const [availableThemes, setAvailableThemesState] =  useState(() => 
        getLocalStorageJsonValue(availableThemesStorageKey, themes))
    
    const applySystemTheme = useCallback( (newSystemTheme: string | undefined) => {
      
      const name = newSystemTheme
      const enable = disableTransitionOnChange ? disableAnimation() : null
      const d = document.documentElement
  
      if (systemAttribute === 'class') {
        d.classList.remove(...systemColorSchemas)
        if (name) d.classList.add(name)
      } else {
        if (name) {
          d.setAttribute(attribute, name)
        } else {
          d.removeAttribute(attribute)
        }
      }
  
      if (enableColorScheme) {
        const fallback = systemColorSchemas.includes(defaultSystemTheme) ? defaultSystemTheme : null
        const colorScheme = systemColorSchemas.includes(systemTheme as string) ? systemTheme : fallback
        d.style.colorScheme = colorScheme as string
      }
      enable?.()
    }, [])

    const applyTheme = useCallback( (newTheme: string | undefined) => {
       
        const name = newTheme
        const enable = disableTransitionOnChange ? disableAnimation() : null
        const d = document.documentElement
    
        if (attribute === 'class') {
          d.classList.remove(...themes)
          if (name) d.classList.add(name)
        } else {
          if (name) {
            d.setAttribute(attribute, name)
          } else {
            d.removeAttribute(attribute)
          }
        }
    
        if (enableColorScheme) {
          const fallback = themes.includes(defaultTheme) ? defaultTheme : ''
          const colorScheme = themes.includes(theme as string) ? theme : fallback
          d.style.colorScheme = colorScheme as string
        }
        enable?.()
      }, [])
    
    const setSystemTheme = useCallback( (newSystemTheme: string) => {
        setSystemThemeState (newSystemTheme)
        // Save to storage
        try {
          localStorage.setItem(systemThemeStorageKey, newSystemTheme)
        } catch (e) {
          // Unsupported
        }
      },
      [forcedSystemTheme]
    )

    const setTheme = useCallback( (newTheme: string) => {
        setThemeState (newTheme)
        // Save to storage
        try {
          localStorage.setItem(themeStorageKey, newTheme)
        } catch (e) {
          // Unsupported
        }
      },
      [forcedTheme]
    )

    const setAvailableThemes = useCallback( (themes: string[]) => {
        setAvailableThemesState (themes)
        // Save to storage
        try {
          localStorage.setItem(availableThemesStorageKey, JSON.stringify(themes))
        } catch (e) {
          // Unsupported
        }
      },
      []
    )

    // localStorage event handling
    useEffect(() => {

        const handleStorage = (e: StorageEvent) => {
            if (e.key === themeStorageKey) {
                const newTheme = e.newValue || defaultTheme
                setTheme(newTheme)
            }
            if (e.key === systemThemeStorageKey) {
                const newSystemTheme = e.newValue || defaultSystemTheme
                setSystemTheme(newSystemTheme)
            }
            if (e.key === availableThemesStorageKey) {
                const themesList = (e.newValue || []) as Array<string>
                setAvailableThemes(themesList)
            }        
        }
        window.addEventListener('storage', handleStorage)
        return () => window.removeEventListener('storage', handleStorage)

    }, [setTheme, setSystemTheme])
  
    // Whenever theme or forcedTheme changes, apply it
    useEffect(() => {
      applySystemTheme(forcedSystemTheme ?? systemTheme)
    }, [forcedSystemTheme, systemTheme])

    useEffect(() => {
        applyTheme(forcedTheme ?? theme)
    }, [forcedTheme, theme])

    useEffect(() => {
        setAvailableThemes(themes)
    }, [themes])
  
    const providerValue = useMemo(() => ({
      theme: theme,
      setTheme,
      forcedTheme,
      themes: availableThemes,
      systemTheme: systemTheme as 'light' | 'dark' | undefined,
      setSystemTheme,
      forcedSystemTheme: forcedSystemTheme as 'light' | 'dark' | undefined
    }), [
        theme, setTheme, forcedTheme, themes, 
        systemTheme, setSystemTheme, forcedSystemTheme])
  
    return (
      <ThemeContext.Provider
        value={providerValue}
      >
        {/* <ThemeScript
          {...{
            forcedTheme,
            disableTransitionOnChange,
            enableSystem,
            enableColorScheme,
            storageKey,
            themes,
            defaultTheme,
            attribute,
            value,
            children,
            attrs,
            nonce
          }}
        /> */}
        {children}
      </ThemeContext.Provider>
    )
  }
  
  /*
  const ThemeScript = memo(
    ({
      forcedTheme,
      storageKey,
      attribute,
      enableSystem,
      enableColorScheme,
      defaultTheme,
      value,
      attrs,
      nonce
    }: ThemeProviderProps & { attrs: string[]; defaultTheme: string }) => {
      const defaultSystem = defaultTheme === 'system'
  
      // Code-golfing the amount of characters in the script
      const optimization = (() => {
        if (attribute === 'class') {
          const removeClasses = `c.remove(${attrs.map((t: string) => `'${t}'`).join(',')})`
  
          return `var d=document.documentElement,c=d.classList;${removeClasses};`
        } else {
          return `var d=document.documentElement,n='${attribute}',s='setAttribute';`
        }
      })()
  
      const fallbackColorScheme = (() => {
        if (!enableColorScheme) {
          return ''
        }
  
        const fallback = colorSchemes.includes(defaultTheme) ? defaultTheme : null
  
        if (fallback) {
          return `if(e==='light'||e==='dark'||!e)d.style.colorScheme=e||'${defaultTheme}'`
        } else {
          return `if(e==='light'||e==='dark')d.style.colorScheme=e`
        }
      })()
  
      const updateDOM = (name: string, literal: boolean = false, setColorScheme = true) => {
        const resolvedName = value ? value[name] : name
        const val = literal ? name + `|| ''` : `'${resolvedName}'`
        let text = ''
  
        // MUCH faster to set colorScheme alongside HTML attribute/class
        // as it only incurs 1 style recalculation rather than 2
        // This can save over 250ms of work for pages with big DOM
        if (enableColorScheme && setColorScheme && !literal && colorSchemes.includes(name)) {
          text += `d.style.colorScheme = '${name}';`
        }
  
        if (attribute === 'class') {
          if (literal || resolvedName) {
            text += `c.add(${val})`
          } else {
            text += `null`
          }
        } else {
          if (resolvedName) {
            text += `d[s](n,${val})`
          }
        }
  
        return text
      }
  
      const scriptSrc = (() => {
        if (forcedTheme) {
          return `!function(){${optimization}${updateDOM(forcedTheme)}}()`
        }
  
        if (enableSystem) {
          return `!function(){try{${optimization}var e=localStorage.getItem('${storageKey}');if('system'===e||(!e&&${defaultSystem})){var t='${MEDIA}',m=window.matchMedia(t);if(m.media!==t||m.matches){${updateDOM(
            'dark'
          )}}else{${updateDOM('light')}}}else if(e){${
            value ? `var x=${JSON.stringify(value)};` : ''
          }${updateDOM(value ? `x[e]` : 'e', true)}}${
            !defaultSystem ? `else{` + updateDOM(defaultTheme, false, false) + '}' : ''
          }${fallbackColorScheme}}catch(e){}}()`
        }
  
        return `!function(){try{${optimization}var e=localStorage.getItem('${storageKey}');if(e){${
          value ? `var x=${JSON.stringify(value)};` : ''
        }${updateDOM(value ? `x[e]` : 'e', true)}}else{${updateDOM(
          defaultTheme,
          false,
          false
        )};}${fallbackColorScheme}}catch(t){}}();`
      })()
  
      return <script nonce={nonce} dangerouslySetInnerHTML={{ __html: scriptSrc }} />
    },
    // Never re-render this component
    () => true
  )
  */

  // Helpers

  
  const disableAnimation = () => {
    const css = document.createElement('style')
    css.appendChild(
      document.createTextNode(
        `*{-webkit-transition:none!important;-moz-transition:none!important;-o-transition:none!important;-ms-transition:none!important;transition:none!important}`
      )
    )
    document.head.appendChild(css)
  
    return () => {
      // Force restyle
      ;(() => window.getComputedStyle(document.body))()
  
      // Wait for next tick before removing
      setTimeout(() => {
        document.head.removeChild(css)
      }, 1)
    }
  }
  
  const getSystemTheme = (e?: MediaQueryList | MediaQueryListEvent) => {
    if (!e) e = window.matchMedia(MEDIA)
    const isDark = e.matches
    const systemTheme = isDark ? 'dark' : 'light'
    return systemTheme
  }
  