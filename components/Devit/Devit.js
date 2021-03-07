import PropTypes from "prop-types"
import { Avatar } from "components/Avatar"
import styles from "./Devit.styles"
import useTimeAgo from "../../hooks/useTimeAgo"
import useDateTimeFormat from "hooks/useDateTimeFormat"
import Link from "next/link"
import { useRouter } from "next/router"

function Devit({ username, message, id, avatar, createdAt, userId, img }) {
  const timeAgo = useTimeAgo(createdAt)
  const createdAtFormated = useDateTimeFormat(createdAt)
  const router = useRouter()

  const handleArticleClick = (e) => {
    e.preventDefault()
    router.push(`status/${id}`)
  }

  return (
    <>
      <article key={id} onClick={handleArticleClick}>
        <div>
          <Avatar src={avatar} alt={username} />
        </div>
        <section>
          <header>
            <strong>{`@${username}`}</strong>
            <span> - </span>
            <Link href={`status/${id}`}>
              <time title={createdAtFormated}>{timeAgo}</time>
            </Link>
          </header>
          <p>{message}</p>
          {img && <img src={img} />}
        </section>
      </article>
      <style jsx>{styles}</style>
    </>
  )
}

Devit.propTypes = {
  username: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  createdAt: PropTypes.number.isRequired,
  userId: PropTypes.string.isRequired,
  img: PropTypes.string,
}

export default Devit
