import React from 'react'
import styled from '@emotion/styled'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FillButton } from '../'

import { Person, Home } from '../../assets/icons'

export default function Navbar() {
  const navigate = useNavigate()
  const { pathname } = useLocation()
  return (
    <Wrapper className='flex-between'>
      <nav className='flex-between gap-3'>
        <Link to='/'>سپید سیستم شریف</Link>
      </nav>
      <div className='container flex-between gap-4'>
        <FillButton
          color='var(--primary-500)'
          style={{ padding: '.5rem 1rem' }}
          fn={() => {
            pathname === '/profile' ? navigate('/') : navigate('/profile')
          }}
        >
          {pathname === '/profile' ? (
            <Home />
          ) : (
            <>
              <Person /> پنل کاربری
            </>
          )}
        </FillButton>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled('div')(() => ({
  maxWidth: 'var(--maxWidth)',
  padding: '1rem ',
  borderBottom: '1px solid var(--text-100)',
  margin: 'auto',
  a: {
    color: 'var(--primary-500)',
    cursor: 'pointer',
  },
}))
