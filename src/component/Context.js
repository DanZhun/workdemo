import { createContext, useContext } from "react";
import { Navigate, useLocation } from 'react-router-dom'

export const AuthContext = createContext(null);

export const useAuth = () => {
    return useContext(AuthContext);
};

export const clearLocalUser = () => localStorage.clear();

export const getLocalUser = () => JSON.parse(localStorage.getItem('user'));

export const setLocalUser = (data) =>
    localStorage.setItem('user', JSON.stringify(data));

export const getLocalToken = () => JSON.parse(localStorage.getItem('authorization'));

export const setLocalToken = (data) =>
    localStorage.setItem('authorization', JSON.stringify(data));