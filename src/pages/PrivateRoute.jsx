import React from 'react'
import { Navigate } from 'react-router-dom'
import { useGlobalContext } from '../context'

export default function PrivateRoute({ children }) {
  const { authUser } = useGlobalContext()

  return !authUser ? <Navigate to='/auth' replace /> : children
}
