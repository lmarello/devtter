import { useEffect } from "react"
import useUser, { USER_STATES } from "hooks/useUser"
import { Button } from "components/Button"
import styles from "styles/Home.styles"
import { GitHub, Logo } from "components/Icons"
import { loginWithGitHub } from "firebase/client"
import { useRouter } from "next/router"

export default function Index() {
  const user = useUser()
  const router = useRouter()

  useEffect(() => {
    user && router.replace("/home")
  }, [user])

  const handleClick = () => {
    loginWithGitHub().catch((err) => console.log(err))
  }

  return (
    <>
      <section>
        <Logo width={120} />
        <h1>devtter</h1>
        <h2>
          Talk about development <br />
          with developers 💻
        </h2>
        <div>
          {user === USER_STATES.NOT_LOGGED && (
            <Button onClick={handleClick}>
              <GitHub width={24} height={24} fill={"#fff"} />
              Login with GitHub
            </Button>
          )}
          {user === USER_STATES.UNKNOW && <img src="/spinner.gif" />}
        </div>
      </section>
      <style jsx>{styles}</style>
    </>
  )
}
