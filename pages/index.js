import { useState, useEffect } from "react"
import Head from "next/head"
import { AppLayout } from "../components/AppLayout"
import { Button } from "../components/Button"
import styles from "../styles/Home.styles"
import { GitHub } from "../components/Icons"
import { loginWithGitHub, onAuthStateChanged } from "../firebase/client"

export default function Home() {
  const [user, setUser] = useState(undefined)

  useEffect(() => {
    onAuthStateChanged(setUser)
  }, [])

  const handleClick = () => {
    loginWithGitHub()
      .then((user) => {
        setUser(user)
      })
      .catch((err) => console.log(err))
  }

  return (
    <>
      <Head>
        <title>devtter 🐦</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppLayout>
        <section>
          <img src="/devter-logo.png" alt="Logo" />
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
            {user?.avatar && (
              <div>
                <img src={user.avatar} />
                <strong>{user.email}</strong>
              </div>
            )}
          </div>
        </section>
      </AppLayout>
      <style jsx>{styles}</style>
    </>
  )
}
