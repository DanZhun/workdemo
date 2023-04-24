import { createContext, useContext } from "react"

export const AuthContext = createContext(null)
export const UserNameContext = createContext('')

export const useAuth = () => {
    return useContext(AuthContext)
}

export const useUserName = () => {
  return useContext(UserNameContext)
}