import styles from "./AppLayout.styles"
import PropTypes from "prop-types"

function AppLayout({ children }) {
  return (
    <>
      <div>
        <main>{children}</main>
      </div>
      <style jsx>{styles}</style>
    </>
  )
}

AppLayout.propTypes = {
  children: PropTypes.element.isRequired,
}

export default AppLayout
