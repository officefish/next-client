import Link from "next/link"
import { FC, MouseEvent } from "react"

import { useRouter } from "next/router"

import { useUser } from "@services/user.service"
import { useSystemColorSchemas } from "@/providers/theme-provider"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSun } from '@fortawesome/free-solid-svg-icons'
import { faMoon } from '@fortawesome/free-solid-svg-icons'

import UserItem from "./UserItem"

import { 
    StyledHeaderNavigation,
    StyledDropdown,
    DropdownButton,
    DropdownContent,
    StyledButton

} from "./styled-header"

import {
    DropdownArrow
} from '@components/ui/svg'

const HeaderNavigation:FC = () => {

    const router = useRouter()
    const href = '/auth/sign-in'

    const signInHandleClick = (e:MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        router.push(href)
    }

    const {user} = useUser()
    const {mode, setMode, modes} = useSystemColorSchemas()

    const handleMode = (event: React.MouseEvent<HTMLButtonElement>) => {
        event.preventDefault()
        setMode(event.currentTarget.value)
    }

    return( 
        <StyledHeaderNavigation $fontFamily="old-english">
            {/* <Link className='mr-2 hidden xl:flex hover:text-cyan-500 cursor-pointer whitespace-nowrap' href='/about-us'>About us.</Link>
            <Link className='mr-2 hidden md:flex hover:text-cyan-500 cursor-pointer whitespace-nowrap' href='/contact-us'>Contact us.</Link>
            <Link className='mr-2 hidden lg:flex hover:text-cyan-500 cursor-pointer whitespace-nowrap' href='/studing'>Studing with us.</Link>
            <Link className='mr-2 hidden md:flex hover:text-cyan-500 cursor-pointer whitespace-nowrap' href='/donation'>Support us.</Link> */}
            
            <StyledDropdown title="Change mode">
                <DropdownButton tabIndex={0}>
                    { mode === 'light' 
                        ? ( <FontAwesomeIcon icon={faSun} /> )
                        : ( <FontAwesomeIcon icon={faMoon} /> )
                    }
                    <span className="hidden md:inline">Mode</span>
                    <DropdownArrow />
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
            </StyledDropdown>
            
            {user && user.authenticated ? (
                <UserItem name={user.name} />
            ):(
                <StyledButton onClick={signInHandleClick}>Sign In</StyledButton>
            )}
        </StyledHeaderNavigation>
    )
}

export default HeaderNavigation