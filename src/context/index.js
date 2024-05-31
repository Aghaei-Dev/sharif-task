import React, { useState, useContext, useEffect, createContext } from 'react'
import { useStorage } from '../hook'

export const AppContext = createContext()

export const AppProvider = ({ children }) => {
  const [authUser, setAuthUser] = useStorage('localStorage', 'token', null)

  const [isAlertShow, setIsAlertShow] = useState(false)
  const [alertProps, setAlertProps] = useState({})

  const showAlert = () => setIsAlertShow(true)

  const hideAlert = () => setIsAlertShow(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      !alertProps.disableHide && hideAlert()
    }, 3000)
    return () => {
      clearTimeout(timer)
    }
  }, [isAlertShow, alertProps])

  const [user, setUser] = useStorage('localStorage', 'user', null)

  const ctxValue = {
    isAlertShow,
    setIsAlertShow,
    alertProps,
    setAlertProps,
    showAlert,
    hideAlert,
    authUser,
    setAuthUser,
    setUser,
    user,
  }
  return <AppContext.Provider value={ctxValue}>{children}</AppContext.Provider>
}

export const useGlobalContext = () => useContext(AppContext)
