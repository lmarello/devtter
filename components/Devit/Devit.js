import PropTypes from "prop-types"
import { Avatar } from "components/Avatar"
import styles from "./Devit.styles"

function Devit({ username, message, id, avatar }) {
  return (
    <>
      <article key={id}>
        <div>
          <Avatar src={avatar} alt={username} />
        </div>
        <section>
          <strong>{`@${username}`}</strong>
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
  id: PropTypes.number.isRequired,
}

export default Devit
