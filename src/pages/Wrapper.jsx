import React from 'react'
import { Outlet } from 'react-router-dom'
import { Navbar, Footer, Alert } from '../components'
import { useGlobalContext } from '../context'

export default function Wrapper() {
  const { alertProps } = useGlobalContext()
  return (
    <>
      <Alert {...alertProps} />

      <Navbar />
      <Outlet />
      <Footer />
    </>
  )
}
