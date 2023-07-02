import { FC, PropsWithChildren } from "react"
import styles from './Profile.module.scss'
import Avatar from "./avatar"
import { StaticImageData } from "next/image"

interface AvatarProps {
    avatar: StaticImageData
}

const ProfileLayout: FC<PropsWithChildren<AvatarProps>> = ({children, avatar}) => {
    return (
        <section className={styles.profile_layout}>
            <div className={styles.profile_wrapper}>
                <Avatar avatar={avatar} />
                <div className={styles.profile_body}>
                    {children}
                </div>
            </div>
        </section>       
    )
}
export default ProfileLayout