import { FC } from "react"
import { useUser } from "@services/user.service"

import UnderConstruction from "@/components/dev/under-construction"

const MyFollowers: FC = () => {

  const {user, mutate} = useUser()

  return (
    <>
    {user 
        ? <UnderConstruction />
        : <div></div>
    }   
    </>
  )
}
export default MyFollowers

