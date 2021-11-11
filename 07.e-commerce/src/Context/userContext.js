import React,{createContext,useContext, useState} from "react";

const userContext = createContext();
const updateUserContext = createContext();

export const useUserContext = () => useContext(userContext);
export const useUpdateUserContext = () => useContext(updateUserContext);


export const UserProvider = ({children}) => {

    const [user,setUser] = useState(null);

    const updateUser = (user) => {
        setUser(user);
    }


    return(
        <userContext.Provider value={user}>
            <updateUserContext.Provider value={updateUser}>
                
            {children}
            </updateUserContext.Provider>
        </userContext.Provider>
    
    )
}