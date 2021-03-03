import { useState, useEffect } from "react"
import styles from "./ComposeDevit.styles"
import { Button } from "components/Button"
import useUser from "hooks/useUser"
import { Avatar } from "components/Avatar"
import { addDevit, uploadImage } from "firebase/client"
import { useRouter } from "next/router"
import Head from "next/head"
import { Close } from "components/Icons"

const COMPOSE_STATUS = {
  USER_UNKNOW: "userUnknow",
  LOADING: "loading",
  SUCCESS: "success",
  ERROR: "error",
}

const DRAG_IMAGE_STATUS = {
  ERROR: -1,
  NONE: 0,
  DRAGGING: 1,
  UPLOADING: 2,
  UPLOAD: 3,
}

export default function ComposeDevit() {
  const [message, setMessage] = useState("")
  const [status, setStatus] = useState(COMPOSE_STATUS.USER_UNKNOW)
  const [drag, setDrag] = useState(DRAG_IMAGE_STATUS.NONE)
  const [task, setTask] = useState(null)
  const [imgURL, setImgURL] = useState(null)

  const user = useUser()
  const router = useRouter()

  useEffect(() => {
    if (task) {
      const onProgress = () => {}
      const onError = () => {}
      const onComplete = () => {
        task.snapshot.ref.getDownloadURL().then((url) => setImgURL(url))
      }
      task.on("state_changed", onProgress, onError, onComplete)
    }
  }, [task])

  if (!user) return null

  const { avatar, username, uid } = user

  const handleChange = (event) => {
    const { value } = event.target
    setMessage(value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setStatus(COMPOSE_STATUS.LOADING)

    addDevit({
      avatar,
      userName: username,
      userId: uid,
      content: message,
      img: imgURL,
    })
      .then(() => {
        router.push("/home")
      })
      .catch((err) => {
        console.log(err)
        setStatus(COMPOSE_STATUS.ERROR)
      })
  }

  const handleDragEnter = (e) => {
    e.preventDefault()
    setDrag(DRAG_IMAGE_STATUS.DRAGGING)
  }

  const handleDragLeave = (e) => {
    e.preventDefault()
    setDrag(DRAG_IMAGE_STATUS.NONE)
  }

  const handleDrop = (e) => {
    e.preventDefault()
    setDrag(DRAG_IMAGE_STATUS.NONE)

    const file = e.dataTransfer.files[0]
    const task = uploadImage(file)
    setTask(task)
  }

  const isButtonDisabled = !message.length || status === COMPOSE_STATUS.LOADING

  return (
    <>
      <Head>
        <title>Crear Devit / Devtter 🐦</title>
      </Head>
      <section className="container">
        <section className="avatar-container">
          <Avatar src={avatar} alt={username} className="avatar" />
        </section>
        <form onSubmit={handleSubmit}>
          <textarea
            onChange={handleChange}
            onDragEnter={handleDragEnter}
            onDragLeave={handleDragLeave}
            onDrop={handleDrop}
            placeholder="¿Qué esta pasando?"
            className={`${
              drag === DRAG_IMAGE_STATUS.DRAGGING ? "dragging" : ""
            }`}
          ></textarea>
          {imgURL && (
            <section className="section-image">
              <Close
                width={32}
                height={32}
                stroke="#fff"
                onClick={() => setImgURL(null)}
              />
              <img src={imgURL} />
            </section>
          )}
          <div>
            <Button disabled={isButtonDisabled} onClick={() => {}}>
              <span>Devitear</span>
            </Button>
          </div>
        </form>
      </section>
      <style jsx>{styles}</style>
    </>
  )
}
