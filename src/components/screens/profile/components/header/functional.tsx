import { FC, MouseEvent, useState } from "react"
import { useRouter } from "next/router"

import { faGear } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { 
  StyledFunctional,
  SettingsButton,
  NewPostButton
 } from "../../styled-profile"

interface IWithSettings {
    activeSettings: boolean
} 

const HeaderFunctional:FC<IWithSettings> = ({activeSettings}) => {

    const [invalidData, setInvalidData] = useState(false)

    const router = useRouter()

    const newPostClick = (e:MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        router.push('/post/new/edit')
    }

    const settingsClick = (e:MouseEvent<HTMLButtonElement>) => {
        e.preventDefault()
        router.push('/me/settings')
    }

    return (
        <StyledFunctional>

            { activeSettings 
            ?   <NewPostButton type="button" onClick={newPostClick}>
                    New Post
                </NewPostButton>
            : <button className="btn btn-accent btn-outline" disabled={!invalidData}>Save changes</button>
            }
            
            <SettingsButton $active={activeSettings} disabled={!activeSettings} type="button" onClick={settingsClick}>
                Settings
                <FontAwesomeIcon icon={faGear} />
            </SettingsButton>
        </StyledFunctional>
    )
}
export default HeaderFunctional
