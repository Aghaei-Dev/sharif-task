import React, { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import { useNavigate } from 'react-router-dom'
import { Button } from '../components'
import { useGlobalContext } from '../context'
import { Error, Logout, User } from '../assets/icons'
import axios from 'axios'

export default function Profile() {
  const navigate = useNavigate()
  const {
    authUser,
    setAuthUser,
    setAlertProps,
    showAlert,
    hideAlert,
    user,
    setUser,
  } = useGlobalContext()

  const [isLoading, setIsLoading] = useState(false)
  const [userInformation, setUserInformation] = useState({})

  const logout = () => {
    setAuthUser(null)
    setUser(null)
    hideAlert()
    navigate('/')
  }

  const getUserInformation = () => {
    setIsLoading(true)
    axios
      .get(`${process.env.REACT_APP_API_BASE_URL}/api/user/data`, {
        headers: {
          authorization: `Bearer ${authUser}`,
        },
      })
      .then((response) => {
        if (response.status === 200) {
          setUserInformation(response.data)
        }
      })
      .catch((err) => {
        console.log(err)
      })
      .finally(() => setIsLoading(false))
  }

  useEffect(() => {
    getUserInformation()
    //eslint-disable-next-line
  }, [])

  return (
    <Wrapper className='flex-column gap-3'>
      <UserCard admin={user.sub[3]}>
        {userInformation.pic ? (
          <img
            src={userInformation.pic}
            alt={userInformation.email}
            className='user'
          />
        ) : (
          <User fill='var(--text-main)' />
        )}

        <Row className='top flex-between'>
          <h1>نام کاربری: </h1>
          {isLoading ? (
            <div className={isLoading ? 'loading' : undefined}></div>
          ) : (
            <h1>{user.sub[0]}</h1>
          )}
        </Row>
        <Row className='flex-between'>
          <h1>ایمیل : </h1>
          {isLoading ? (
            <div className={isLoading ? 'loading' : undefined}></div>
          ) : (
            <h1>{userInformation.email}</h1>
          )}
        </Row>
        <Row className='flex-between'>
          <h1>شماره تلفن :</h1>
          {isLoading ? (
            <div className={isLoading ? 'loading' : undefined}></div>
          ) : (
            <h1>{userInformation.phone}</h1>
          )}
        </Row>
        <Row className='flex-between'>
          <h1>نام کاربری استیم:</h1>
          {isLoading ? (
            <div className={isLoading ? 'loading' : undefined}></div>
          ) : (
            <h1>{userInformation.steam_username || '-'}</h1>
          )}
        </Row>
        <div className='wrapper flex-column gap-2'>
          <Button
            fn={() => {
              showAlert()
              setAlertProps({
                disableHide: true,
                background: 'var(--card-bg)',
                color: 'var(--text-700)',
                iconColor: 'var(--text-700)',
                icon: <Error />,
                content: ' آیا مطمئن هستید؟ ',
                confirm: true,
                confirmBtn1: 'بله',
                confirmBtn2: 'خیر',
                background1: 'var(--error-700)',
                hover1: 'var(--error-800)',
                background2: 'var(--success-500)',
                hover2: 'var(--success-600)',
                fn1: logout,
                fn2: hideAlert,
              })
            }}
            background='var(--error-500)'
            hover='var(--error-600)'
          >
            <Logout />
            خروج از حساب کاربری
          </Button>
        </div>
      </UserCard>
    </Wrapper>
  )
}
const Wrapper = styled('main')(() => ({
  maxWidth: '650px',
  minHeight: '70dvh',
  padding: '1rem',
  margin: 'auto',

  '.user': {
    display: 'flex',
    alignItems: 'center',
    gap: '2rem',
    h1: { color: 'var(--text-main)' },
    '.img': {
      background: 'blue',
      borderRadius: '50%',
      width: '50px',
      height: '50px',
    },
  },
  '.btn-container': {
    display: 'flex',
    alignItems: 'stretch',
    justifyContent: 'center',
    gap: '1rem',
    button: {
      width: '100%',
    },
  },
}))
const Row = styled('div')(() => ({
  padding: '0 1rem',
  h1: {
    color: 'var(--text-main)',
    fontSize: '1rem',
    alignSelf: 'center',
  },
  '.loading': {
    flexGrow: '1',
    maxWidth: '200px',
    borderRadius: '.5rem',
    animation: ' pulse 2s linear infinite',
    height: '25px',
  },
  '@keyframes pulse': {
    '0% , to ': {
      backgroundColor: ' var(--text-50)',
    },
    '50%': {
      backgroundColor: 'var(--text-100)',
    },
  },
}))
const Card = styled('article')(() => ({
  background: 'var(--card-bg)',
  borderRadius: '5px',
  padding: '1rem',
}))

const UserCard = styled(Card)(({ admin }) => ({
  display: 'grid',
  gridTemplateColumns: '70px auto',
  gap: '1rem',
  position: 'relative',
  overflow: 'hidden',
  border: '1px solid var(--text-100)',
  '.user': {
    gridRow: 'span 5',
    alignSelf: 'start',
    width: '70px',
    height: '70px',
  },
  img: {
    borderRadius: '50%',
    border: '1px dashed var(--primary-500)',
    padding: '2px',
  },

  '.wrapper': {
    gridColumn: 'span 2',
  },

  '.top': {
    marginTop: '1.5rem',
  },
  '::after': {
    content: admin ? "'مدیر'" : "'کاربر '",
    textAlign: 'center',
    color: 'var(--primary-500)',
    width: '80px',
    position: 'absolute',
    left: '0',
    transform: 'rotate(-45deg) translate(-25%,-20%)',
  },
  '@media (width < 650px)': {
    '.edit-wrapper': {
      gridColumn: 'span 2',
      '.btn-container': {
        display: 'flex',
        flexDirection: 'column',
        gap: '.5rem',
      },
    },
  },
}))
