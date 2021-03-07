import React from "react"
import PropTypes from "prop-types"
import styles from "./Header.styles"

const Header = ({ title, Icon }) => {
  return (
    <>
      <header>
        {Icon && <Icon />}
        <h2>{title}</h2>
      </header>
      <style jsx>{styles}</style>
    </>
  )
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
  Icon: PropTypes.func,
}

export default Header
