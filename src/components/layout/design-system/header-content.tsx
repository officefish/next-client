import { FC, useState, useEffect } from "react"

import Logo from '@components/ui/logo/Logo'
import { useColorSchemas, useSystemColorSchemas } from "@/providers/theme-provider"
import { useDesignSystemContext } from "@/providers/design-system-provider"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun } from '@fortawesome/free-solid-svg-icons'
import { faMoon } from '@fortawesome/free-solid-svg-icons'

import {
    HeaderDescriptionWrapper,
    HeaderDescription, 
    StyledHeaderNavigation,
    DropdownButton,
    DropdownContent 
} from "../header/styled-header"

const DSHeaderContent:FC = () => {

    const {theme, setTheme, themes} = useColorSchemas()
    const {mode, setMode, modes} = useSystemColorSchemas()
    const {page, setPage, pages} = useDesignSystemContext()
    const [mounted, setMounted] = useState(false)

    const handlePage = (event: React.ChangeEvent<HTMLSelectElement>) => {
        event.preventDefault()
        setPage(event.target.value)
    }
    
    const handleMode = (event: React.MouseEvent<HTMLButtonElement>) => {
      event.preventDefault()
      setMode(event.currentTarget.value)
    }
  
    const handleTheme = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        setTheme(event.currentTarget.value)
    }
    
    // useEffect only runs on the client, so now we can safely show the UI
    useEffect(() => {
      setMounted(true)
    }, [])
  
    if (!mounted) {
      return null
    }

    return( 
    <>
        <HeaderDescriptionWrapper>
            <Logo />
            <HeaderDescription $fontFamily="old-english">
               <span>Design system</span>
            </HeaderDescription>
        </HeaderDescriptionWrapper>
        <StyledHeaderNavigation $fontFamily="old-english">
            
            <div className="pb-2">
                {pages && <select 
                className="select select-sm w-36 max-w-xs" 
                defaultValue={page} 
                onChange={handlePage}>
                    {pages.map((item, i) => {
                    return <option key={i} value={item}>{item}</option>
                    })}
                </select>}
            </div>
           
            <div className="w-6"></div>

            <div title="Change mode" className="dropdown dropdown-end">
                <DropdownButton tabIndex={0}>
                    { mode === 'light' 
                        ? ( <FontAwesomeIcon icon={faSun} /> )
                        : ( <FontAwesomeIcon icon={faMoon} /> )
                    }
                    <span className="hidden md:inline">Mode</span>
                    <svg width="12px" height="12px" className="ml-1 hidden h-3 w-3 fill-current opacity-60 sm:inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048"><path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path></svg>
                </DropdownButton>
                <DropdownContent className="h-[19vh]">
                    <div className="grid grid-cols-1 gap-3 p-3">
                        { modes && <>
                            {modes.map((item, i) => {
                                return ( 
                                <button key={i} value={item} 
                                type="button"
                                className={`btn ${item === mode ? 'btn-primary' : 'btn-ghost'} `}
                                onClick={handleMode}
                                >{item}</button>
                                )
                            })}
                            </>
                        }
                    </div>
                </DropdownContent>
            </div>

            <div title="Change theme" className="dropdown dropdown-end">
                <DropdownButton tabIndex={0}>
                    <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg" 
                    fill="none" viewBox="0 0 24 24" className="inline-block h-5 w-5 stroke-current md:h-6 md:w-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"></path></svg>
                    <span className="hidden md:inline">Theme</span>
                    <svg width="12px" height="12px" className="ml-1 hidden h-3 w-3 fill-current opacity-60 sm:inline-block" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2048 2048"><path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z"></path></svg>
                </DropdownButton>
                <DropdownContent>
                    <div className="grid grid-cols-1 gap-3 p-3">
                        { themes && <>
                            {themes.map((item, i) => {
                                return ( 
                                <button key={i} value={item} 
                                type="button"
                                className={`btn ${item === theme ? 'btn-primary' : 'btn-ghost'} `}
                                onClick={handleTheme}
                                >{item}</button>
                                )
                            })}
                            </>
                        }
                    </div>
                </DropdownContent>
            </div>
           
        </StyledHeaderNavigation>
    </>
    )
}

export default DSHeaderContent