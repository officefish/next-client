import { FC } from "react"
import styles from './Profile.module.scss'

interface Cover {
    background: string
}
const Cover: FC<Cover> = ({background}) => {

  return (
    <section className={styles.cover_wrapper}>
        <div 
            className={styles.cover_image}
            style={{
             "backgroundImage": `url(${background})`
            }}
            >
            <span id="blackOverlay" className={styles.cover_tonner}></span>
            <div className="lattice_profile"></div>
        </div>
        {/* <div className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-[50%]" 
             style={{"transform": `translateZ(0px)`}}
            >
            <svg className="absolute bottom-0 overflow-hidden" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none" version="1.1" viewBox="0 0 2560 100" x="0" y="0">
                <polygon className="text-blue-200 fill-current" points="2560 0 2560 100 0 100"></polygon>
            </svg>
        </div> */}
  </section>  
  )
}
export default Cover