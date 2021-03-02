import { useState, useEffect } from "react"
import { onAuthStateChanged } from "firebase/client"
import { useRouter } from "next/router"

export const USER_STATES = {
  NOT_LOGGED: null,
  UNKNOW: undefined,
}

export default function useUser() {
  const [user, setUser] = useState(() => USER_STATES.UNKNOW)
  const router = useRouter()

  useEffect(() => {
    onAuthStateChanged(setUser)
  }, [])

  useEffect(() => {
    user === USER_STATES.NOT_LOGGED && router.push("/")
  }, [user])

  return user
}
