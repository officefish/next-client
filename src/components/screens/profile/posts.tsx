import { FC } from "react"
import { useUser } from "@services/user.service"

import UnderConstruction from "@/components/dev/under-construction"

const MyPosts: FC = () => {

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
export default MyPosts

