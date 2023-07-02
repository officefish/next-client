import { FC } from "react"
import { UserMin } from "@models/user.model"
import Link from "next/link"

const UserItem:FC<UserMin> = ({name}) => {
    return (
    <div>
        <Link className='ml-5 mr-2 hover:text-cyan-500 cursor-pointer text-lg whitespace-nowrap' href='/me'>{name}.</Link>
    </div>

    )
}

export default UserItem