import { useState, useEffect } from "react"
import { Devit } from "components/Devit"
import useUser from "hooks/useUser"
import styles from "./Home.styles"
import { fetchLatestDevits } from "firebase/client"
import Link from "next/link"
import { Create, Home, Search } from "components/Icons"
import Head from "next/head"

export default function HomePage() {
  const [timeline, setTimeline] = useState([])
  const user = useUser()

  useEffect(() => {
    user && fetchLatestDevits().then(setTimeline)
  }, [user])

  return (
    <>
      <Head>
        <title>Inicio / Devtter 🐦</title>
      </Head>
      <header>
        <h2>Inicio</h2>
      </header>
      <section>
        {timeline.map(
          ({ id, userName, avatar, content, createdAt, userId, img }) => (
            <Devit
              key={id}
              id={id}
              username={userName}
              avatar={avatar}
              message={content}
              createdAt={createdAt}
              userId={userId}
              img={img}
            />
          )
        )}
      </section>
      <nav>
        <Link href="/home">
          <a>
            <Home width={32} height={32} stroke="#09f" />
          </a>
        </Link>
        <Link href="/search">
          <a>
            <Search width={32} height={32} stroke="#09f" />
          </a>
        </Link>
        <Link href="/compose/devit">
          <a>
            <Create width={32} height={32} stroke="#09f" />
          </a>
        </Link>
      </nav>
      <style jsx>{styles}</style>
    </>
  )
}
