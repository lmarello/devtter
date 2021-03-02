import styles from "./Avatar.styles"
import PropTypes from "prop-types"

function Avatar({ src, username }) {
  return (
    <div>
      <img src={src} title={username} alt={username} />
      {username && <span>{username}</span>}
      <style jsx>{styles}</style>
    </div>
  )
}

Avatar.defaultProps = {
  username: "",
}

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  username: PropTypes.string.isRequired,
  withText: PropTypes.bool,
}

export default Avatar
