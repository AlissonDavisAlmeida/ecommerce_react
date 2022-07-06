import { FirebaseOptions, initializeApp } from "firebase/app"
import { getAuth, signInWithRedirect, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword } from "firebase/auth"
import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore"

const firebaseConfig: FirebaseOptions = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "e-commerce-react-9ec02.firebaseapp.com",
    projectId: "e-commerce-react-9ec02",
    storageBucket: "e-commerce-react-9ec02.appspot.com",
    messagingSenderId: "968360383533",
    appId: "1:968360383533:web:083a17e95548cf7bb114a4"
};

const firebaseApp = initializeApp(firebaseConfig)

const provider = new GoogleAuthProvider()

provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth()
export const signInWithGooglePopUp = async () => await signInWithPopup(auth, provider)
export const signInWithGoogleRedirect = async (): Promise<{ user: {} }> => await signInWithRedirect(auth, provider)

export const db = getFirestore()

export const createUserDocumentFromAuth = async (userAuth: any, additionalInformation: {} = {}) => {
    const userDocRef = doc(db, "users", userAuth.uid)

    const userSnapshot = await getDoc(userDocRef)

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth
        const createdAt = new Date()

        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createdAt,
                ...additionalInformation
            })
        } catch (error) {
            console.error("Error creating user document", error)
        }
    }

    return userDocRef
}

export const createUser = async (email: string, password: string) => {

    if (!email || !password) return

    return await createUserWithEmailAndPassword(auth, email, password)
}