import { useState, useEffect } from "react"
import { Button } from "components/Button"
import styles from "styles/Home.styles"
import { GitHub, Logo } from "components/Icons"
import { loginWithGitHub, onAuthStateChanged } from "firebase/client"
import { useRouter } from "next/router"

export default function Index() {
  const [user, setUser] = useState(undefined)
  const router = useRouter()

  useEffect(() => {
    onAuthStateChanged(setUser)
  }, [])

  useEffect(() => {
    user && router.replace("/home")
  }, [user])

  const handleClick = () => {
    loginWithGitHub()
      .then((user) => {
        setUser(user)
      })
      .catch((err) => console.log(err))
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
          {user === null && (
            <Button onClick={handleClick}>
              <GitHub width={24} height={24} fill={"#fff"} />
              Login with GitHub
            </Button>
          )}
          {user === undefined && <img src="/spinner.gif" />}
        </div>
      </section>
      <style jsx>{styles}</style>
    </>
  )
}
