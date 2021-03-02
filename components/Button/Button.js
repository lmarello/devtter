import styles from "./Button.styles"
import PropTypes from "prop-types"

function Button({ children, onClick, disabled }) {
  const handleClick = () => {
    if (disabled) return
    onClick()
  }

  return (
    <>
      <button disabled={disabled} onClick={handleClick}>
        {children}
      </button>
      <style jsx>{styles}</style>
    </>
  )
}

Button.defaultProps = {
  disabled: false,
}

Button.propTypes = {
  children: PropTypes.element.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
}

export default Button
