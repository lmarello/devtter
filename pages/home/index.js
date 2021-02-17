import { Devit } from "components/Devit"
import { useState, useEffect } from "react"
import styles from "./Home.styles"

export default function HomePage() {
  const [timeline, setTimeline] = useState([])

  useEffect(() => {
    fetch("http://localhost:3000/api/statuses/home_timeline")
      .then((res) => res.json())
      .then(setTimeline)
  }, [])

  return (
    <>
      <header>
        <h2>Inicio</h2>
      </header>
      <section>
        {timeline.map(({ id, username, avatar, message }) => (
          <Devit
            key={id}
            id={id}
            username={username}
            avatar={avatar}
            message={message}
          />
        ))}
      </section>
      <nav>NAV</nav>
      <style jsx>{styles}</style>
    </>
  )
}
