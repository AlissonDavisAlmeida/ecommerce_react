import { createContext, useEffect, useState } from "react";
import { createUserDocumentFromAuth, logout, onAuthStateChangedListener } from "../utils/firebase/firebase_utils";

interface UserContextProps {
    user: any;
    setUser?:React.Dispatch<React.SetStateAction<any>>
}


export const UserContext = createContext<UserContextProps>({
    user: null,

})


interface UserProviderProps {
    children: React.ReactNode;
}




export const UserProvider = ({ children }: UserProviderProps) => {

    const [user, setUser] = useState(null)

    
    const initialSettings = {
        user,
        setUser
    }

    useEffect(()=>{
       const unsubscribe = onAuthStateChangedListener((user: any)=>{

            if(user){
                createUserDocumentFromAuth(user)
            }
            console.log(user)
            setUser(user)
        })


        return unsubscribe
    },[])

    return (
        <UserContext.Provider value={initialSettings}>
            {children}
        </UserContext.Provider>
    )
}