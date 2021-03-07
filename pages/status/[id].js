import { Header } from "components/Header"
import React from "react"
import { ArrowLeft } from "../../components/Icons"
import Link from "next/link"
import { Devit } from "components/Devit"
import PropTypes from "prop-types"

const DevitPage = ({ data }) => {
  const Icon = () => (
    <Link href="/home">
      <a>
        <ArrowLeft width={28} height={28} stroke="#09f" />
      </a>
    </Link>
  )

  const { id, userName, avatar, content, createdAt, userId, img } = data

  return (
    <>
      <Header title="Volver" Icon={Icon} />
      <Devit
        id={id}
        username={userName}
        avatar={avatar}
        message={content}
        createdAt={createdAt}
        userId={userId}
        img={img}
      />
    </>
  )
}

DevitPage.propTypes = {
  data: PropTypes.object,
}

export async function getServerSideProps(context) {
  const { params, res } = context
  const { id } = params

  const response = await fetch(`http://localhost:3000/api/devits/${id}`)

  if (response.ok) {
    const data = await response.json()
    return { props: { data } }
  }

  if (res) res.writeHead(301, { Location: "/home" }).end()
}

export default DevitPage
