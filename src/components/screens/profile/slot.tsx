import { FC } from "react"
import styles from './Profile.module.scss'
import { capitalized } from "@utilities/string.format"

interface ISlot {
    value: string
    name: string
}
const Slot: FC<ISlot> = ({name, value}) => {

  name = capitalized(name)
  return (
    <div className={styles.slot_layout}>
        <span className={styles.slot_value}>{value}</span>
        <span className={styles.slot_name}>{name}</span>
    </div>
  )
}
export default Slot