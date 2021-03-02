import PropTypes from "prop-types"
import { Avatar } from "components/Avatar"
import styles from "./Devit.styles"
import useTimeAgo from "../../hooks/useTimeAgo"
function Devit({ username, message, id, avatar, createdAt, userId }) {
  const timeAgo = useTimeAgo(createdAt)

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
            <date>{timeAgo}</date>
          </header>
          <p>{message}</p>
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
}

export default Devit
