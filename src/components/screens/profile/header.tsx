import { FC } from "react"
import styles from './Profile.module.scss'
import Slot from "./slot"

const Header: FC = () => {

  return (
    <div className={styles.profile_header}>

        <div className={styles.slots_block}>
            <Slot name='posts' value="22" />
            <Slot name='comments' value="89" />
            <Slot name='followers' value="9" />
        </div>

        <div className={styles.functional_block}>
                <button className="
                bg-pink-500 
                active:bg-pink-600 
                uppercase 
                text-white 
                font-bold 
                hover:shadow-md 
                shadow 
                text-xs 
                px-4 py-2 
                rounded 
                outline-none 
                focus:outline-none 
                ease-linear 
                transition-all 
                duration-150" type="button">
                    Connect
                </button>
        </div>

    </div>
  )
}
export default Header