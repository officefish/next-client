import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import { useUser } from "@services/user.service"

export default function useOnlyWithUser(redirect:string = '/auth/sign-in') {

    const {user, mutate} = useUser()
    const { push } = useRouter()

    const [mounted, setMounted] = useState(false)    
    // // useEffect only runs on the client, so now we can safely show the U
    useEffect(() => {
        if (mounted && user === undefined) {
            push(redirect)
        } else {
            setMounted(true)
        }
    }, [user])

    return { user, mutate }
}