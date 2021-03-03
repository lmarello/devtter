import PropTypes from "prop-types"
import { Avatar } from "components/Avatar"
import styles from "./Devit.styles"
import useTimeAgo from "../../hooks/useTimeAgo"
import useDateTimeFormat from "hooks/useDateTimeFormat"

function Devit({ username, message, id, avatar, createdAt, userId, img }) {
  const timeAgo = useTimeAgo(createdAt)
  const createdAtFormated = useDateTimeFormat(createdAt)

  return (
    <>
      <article key={id}>
        <div>
          <Avatar src={avatar} alt={username} />
        </div>
        <section>
          <header>
            <strong>{`@${username}`}</strong>
            <span> - </span>
            <time title={createdAtFormated}>{timeAgo}</time>
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
  createdAt: PropTypes.string.isRequired,
  userId: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
}

export default Devit
