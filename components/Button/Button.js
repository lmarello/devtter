import styles from "./Button.styles"
import PropTypes from "prop-types"

function Button({ children, onClick }) {
  return (
    <>
      <button onClick={onClick}>{children}</button>
      <style jsx>{styles}</style>
    </>
  )
}

Button.propTypes = {
  children: PropTypes.element.isRequired,
  onClick: PropTypes.func.isRequired,
}

export default Button
