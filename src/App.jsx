import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import {
  ErrorPage,
  Wrapper,
  PrivateRoute,
  Auth,
  Home,
  Profile,
  EditPage,
} from './pages'
import './global/index.css'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import styled from '@emotion/styled/macro'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path='' element={<Wrapper />}>
          <Route
            path='/'
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
          />
          <Route
            path='/profile'
            element={
              <PrivateRoute>
                <Profile />
              </PrivateRoute>
            }
          />

          <Route path='/edit/:id' element={<EditPage />} />

          <Route path='*' element={<ErrorPage />} />
        </Route>
        <Route path='/auth' element={<Auth />} />
      </Routes>
      <ToastWrapper position='top-center' />
    </Router>
  )
}

const ToastWrapper = styled(ToastContainer)`
  .Toastify__toast-body {
    font-family: var(--primary-bold);
  }
  .Toastify__close-button {
    cursor: pointer;
    svg {
      cursor: pointer;
    }
  }
`
