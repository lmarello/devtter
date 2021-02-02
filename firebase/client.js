import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyAFYBj5ImSzKD0hBwnc27xMXO7gVHBHAEo',
  authDomain: 'devtter-8b967.firebaseapp.com',
  projectId: 'devtter-8b967',
  storageBucket: 'devtter-8b967.appspot.com',
  messagingSenderId: '139674375697',
  appId: '1:139674375697:web:30e047c5e0a572a3ea03b0',
  measurementId: 'G-SMDBCLS25H',
};

!firebase.apps.length && firebase.initializeApp(firebaseConfig);

const mapUserFormFirebaseAuthToUser = (user) => {
  const { photoURL, email, displayName } = user;
  return {
    username: displayName,
    avatar: photoURL,
    email,
  };
};

export const onAuthStateChanged = (onChange) => {
  return firebase.auth().onAuthStateChanged((user) => {
    const normalizeUser = mapUserFormFirebaseAuthToUser(user);
    return onChange(normalizeUser);
  });
};

export const loginWithGitHub = () => {
  const gitHubProvider = new firebase.auth.GithubAuthProvider();
  return firebase.auth().signInWithPopup(gitHubProvider);
};
