import styles from "./Timeline.module.css"
import Link from "next/link"
import { AppLayout } from "components/AppLayout"
import PropTypes from "prop-types"

function Timeline({ name }) {
  return (
    <AppLayout>
      <h1 className={styles.title}>timeline</h1>
      <Link href="/">Go Home</Link>
      <span>{name}</span>
    </AppLayout>
  )
}

export async function getStaticProps() {
  return {
    props: {
      name: "Leo",
    },
  }
}

Timeline.propTypes = {
  name: PropTypes.string.isRequired,
}

export default Timeline
