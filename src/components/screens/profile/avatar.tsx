import { FC } from "react"
import Image, { StaticImageData } from "next/image"
import styles from './Profile.module.scss'

interface AvatarProps {
    avatar: StaticImageData
}

const Avatar: FC<AvatarProps> = ({avatar}) => {

    return (
        <div className={styles.avatar_layout}>  
            <div className={styles.avatar_wrapper}>
                <Image alt="avatar" 
                    src={avatar.src} 
                    width={120} 
                    height={120} 
                    className={styles.avatar_image} />
            </div>
        </div>  
    )
}
export default Avatar