import { FC } from "react"
import { useUser } from "@services/user.service"
import Prototype from "./prototype"

type Props = {}
const Profile: FC = (props: Props) => {
  const {user, mutate} = useUser()

  return (
    <div className="">  
          {user &&
            <Prototype user={user} />

            // <div>
            //   <p>{user.email}</p> 
            //   <p>{user.id}</p> 
            //   <p>{user.authenticated.toString()}</p>  
            //   <p>{user.role}</p>
            // </div>
          }
        </div>   
  )
}

export default Profile