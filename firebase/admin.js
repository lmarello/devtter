const admin = require("firebase-admin")

const serviceAccount = process.env.NEXT_PUBLIC_FIREBASE_CREDENTIALS

try {
  admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
  })
} catch (error) {}

export const firestore = admin.firestore()
