import { FirebaseOptions, initializeApp } from "firebase/app"
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    UserCredential,
    signOut,
    onAuthStateChanged
} from "firebase/auth"
import { collection, writeBatch, getFirestore, doc, getDoc, setDoc, query, getDocs } from "firebase/firestore"

const firebaseConfig: FirebaseOptions = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: "e-commerce-react-9ec02.firebaseapp.com",
    projectId: "e-commerce-react-9ec02",
    storageBucket: "e-commerce-react-9ec02.appspot.com",
    messagingSenderId: "968360383533",
    appId: "1:968360383533:web:083a17e95548cf7bb114a4"
};

initializeApp(firebaseConfig)

const provider = new GoogleAuthProvider()

provider.setCustomParameters({
    prompt: "select_account"
})

export const auth = getAuth()
export const signInWithGooglePopUp = async () => await signInWithPopup(auth, provider)
export const signInWithGoogleRedirect = async (): Promise<{ user: {} }> => await signInWithRedirect(auth, provider)
export const signInWithEmail = async (email: string, password: string): Promise<UserCredential> => {

    return await signInWithEmailAndPassword(auth, email, password)
}

export const logout = async () => {
    signOut(auth)
}

export const db = getFirestore()

export const addCollectionAndDocuments = async (collectionKey: string, objectsToAdd: any[]) => {
    const collectionRef = collection(db, collectionKey)
    const batch = writeBatch(db)

    objectsToAdd.forEach(obj => {
        const docRef = doc(collectionRef, obj.title.toLowerCase())
        batch.set(docRef, obj)
    })

    return await batch.commit()
}

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

export const getCategoriesAndDocuments = async () => {
    const collectionRef = collection(db, "categories")

    const querySnapshot = query(collectionRef)

    const categoriesSnapshot = await getDocs(querySnapshot)
    return categoriesSnapshot.docs.map(doc => doc.data())

    /* const categoriesMap = categoriesSnapshot.docs.reduce((acc: any, doc: any) => {
        const {title, items} = doc.data()
        acc[title.toLowerCase()] = items
        return acc
    }, {})
    

    return categoriesMap */

}

export const createUser = async (email: string, password: string) => {


    return await createUserWithEmailAndPassword(auth, email, password)
}

export const onAuthStateChangedListener = (callback: (user: any) => void) => onAuthStateChanged(auth, callback)