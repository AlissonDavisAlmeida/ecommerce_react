import { createContext, useState } from "react";

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

    return (
        <UserContext.Provider value={initialSettings}>
            {children}
        </UserContext.Provider>
    )
}