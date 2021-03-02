import firebase from "firebase"

const firebaseConfig = {
  apiKey: "AIzaSyAFYBj5ImSzKD0hBwnc27xMXO7gVHBHAEo",
  authDomain: "devtter-8b967.firebaseapp.com",
  projectId: "devtter-8b967",
  storageBucket: "devtter-8b967.appspot.com",
  messagingSenderId: "139674375697",
  appId: "1:139674375697:web:30e047c5e0a572a3ea03b0",
  measurementId: "G-SMDBCLS25H",
}

!firebase.apps.length && firebase.initializeApp(firebaseConfig)

const db = firebase.firestore()

const mapUserFormFirebaseAuthToUser = (user) => {
  const { photoURL, email, displayName, uid } = user
  return {
    avatar: photoURL,
    username: displayName,
    email,
    uid,
  }
}

export const onAuthStateChanged = (onChange) => {
  return firebase.auth().onAuthStateChanged((user) => {
    const normalizeUser = user ? mapUserFormFirebaseAuthToUser(user) : null
    onChange(normalizeUser)
  })
}

export const loginWithGitHub = () => {
  const gitHubProvider = new firebase.auth.GithubAuthProvider()
  return firebase.auth().signInWithPopup(gitHubProvider)
}

export const addDevit = ({ avatar, userName, userId, content }) => {
  return db.collection("devits").add({
    avatar,
    userName,
    userId,
    content,
    createdAt: firebase.firestore.Timestamp.fromDate(new Date()),
    likesCount: 0,
    sharedCount: 0,
  })
}

export const fetchLatestDevits = async () => {
  return db
    .collection("devits")
    .orderBy("createdAt", "desc")
    .get()
    .then(({ docs }) => {
      return docs.map((doc) => {
        const data = doc.data()
        const id = doc.id
        const { createdAt } = data

        return {
          ...data,
          id,
          createdAt: +createdAt.toDate(),
        }
      })
    })
}

export const uploadImage = (file) => {
  const ref = firebase.storage().ref(`images/${file.name}`)
  const task = ref.put(file)
  return task
}
