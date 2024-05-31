import React, { useState } from 'react'
import styled from '@emotion/styled'

import { useNavigate } from 'react-router-dom'
import { useGlobalContext } from '../context'
import {
  FillButton,
  FormRow,
  Alert,
  CheckBox,
  Loader,
  FlipCard,
} from '../components'
import {
  Email,
  Eye,
  EyeSlash,
  User,
  ErrorTwo,
  Person,
  Phone,
} from '../assets/icons'
import { jwtDecode } from 'jwt-decode'

import {
  userNameValidator,
  emailValidator,
  passwordValidator,
  phoneNumberValidator,
} from '../functions'
import { useToggle } from '../hook'
import axios from 'axios'
import { toast } from 'react-toastify'
import { addUserToLocalStorage } from '../utils/localStorage'

export default function Auth() {
  const navigate = useNavigate()

  const { setAuthUser, setUser } = useGlobalContext()

  const [hasAccount, setHasAccount] = useToggle(false)
  const [toggle, setToggle] = useToggle(false)

  const [isLoading, setIsLoading] = useState(false)

  const toggleHasAccount = () => {
    setPayload({ username: '', email: '', password: '', phone: '' })
    setError({ username: '', email: '', password: '', phone: '' })
    setHasAccount((prev) => !prev)
  }

  const [payload, setPayload] = useState({
    username: '',
    email: '',
    password: '',
    phone: '',
    policy: false,
  })
  const [error, setError] = useState({
    username: '',
    email: '',
    password: '',
    phone: '',
  })

  const loginHandler = () => {
    if (error.password || error.email || payload.password.length === 0) {
      toast.error('لطفا تمام فیلد ها را پر کنید !')

      return
    }

    const loginPayload = {
      username: payload.username,
      password: payload.password,
    }
    setIsLoading(true)
    axios
      .post(
        `${process.env.REACT_APP_API_BASE_URL}/api/user/login`,
        loginPayload
      )
      .then((response) => {
        if (response.status === 200) {
          const token = response.data.access_token
          setAuthUser(token)
          setUser(jwtDecode(token))
          addUserToLocalStorage(token)
          navigate('/')
          toast.success('ورود انجام شد.')
        }
      })
      .catch((err) => {
        if (err?.response?.status >= 400 || err.code === 'ERR_NETWORK') {
          toast.error(`${err?.response?.data?.msg || 'تلاش ناموفق بود . '}`)
        }
      })
      .finally(() => setIsLoading(false))
  }

  const signUpHandler = () => {
    if (
      error.password ||
      error.email ||
      error.username ||
      error.phone ||
      payload.password.length === 0
    ) {
      toast.error('لطفا تمام فیلد ها را پر کنید !')

      return
    }
    if (!payload.policy) {
      toast.error('لطفا قوانین را تایید کنید !')

      return
    }
    setIsLoading(true)
    axios
      .post(`${process.env.REACT_APP_API_BASE_URL}/api/user/register`, payload)
      .then((response) => {
        if (response.status === 201) {
          setHasAccount(true)
          toast.success('ثبت نام انجام شد.')
        }
      })
      .catch((err) => {
        if (err) {
          toast.error(`${err?.response?.data?.msg || 'تلاش ناموفق بود . '}`)
        }
      })
      .finally(() => setIsLoading(false))
  }

  const inputHandler = (e) => {
    const { value, name } = e.target

    payload[name] = value

    setPayload({ ...payload })

    if (name === 'userName') {
      if (userNameValidator(value)) {
        error[name] = ''
      } else {
        error[name] =
          ' نام کاربری فقط میتواند شامل اعداد و حروف انگلیسی و _ باشد و تکراری نباشد .'
      }
    }

    if (name === 'email') {
      if (emailValidator(value)) {
        error[name] = ''
      } else {
        error[name] = ' ایمیل باید صحیح باشد .'
      }
    }

    if (name === 'password') {
      if (passwordValidator(value)) {
        error[name] = ''
      } else {
        error[name] =
          'رمز عبور باید دارای حداقل ۶ کاراکتر و حداکثر ۱۰ کاراکتر باشد و فقط میتواند شامل اعداد و حروف انگلیسی باشد. '
      }
    }

    if (name === 'phone') {
      if (phoneNumberValidator(value)) {
        error[name] = ''
      } else {
        error[name] =
          'شماره تلفن همراه معتبر نیست. لطفا فقط اعداد انگلیسی وارد کنید و بدون پیش شماره!'
      }
    }

    setError({ ...error })
  }
  const checkBoxHandler = (e) => {
    const { name, checked } = e.target

    payload[name] = checked

    setPayload({ ...payload })
  }

  return (
    <Wrapper>
      <FlipCard
        condition={hasAccount}
        frontSide={
          <div className='center'>
            <i className='two'>+</i>
            <i className='one'>+</i>
            <h1>{'ثبت نام در'} شریف سیستم</h1>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                signUpHandler()
              }}
            >
              <FormRow
                handleChange={(e) => inputHandler(e)}
                value={payload.username}
                name='username'
                required
                labelText='نام کاربری '
                icon={<Person />}
                placeholder=' فقط شامل حروف و اعداد انگلیسی'
                errorText={error.username}
              />

              <FormRow
                handleChange={(e) => inputHandler(e)}
                value={payload.email}
                name='email'
                labelText='ایمیل'
                icon={<Email />}
                type='text'
                required
                placeholder='ایمیل'
                errorText={error.email}
              />
              <FormRow
                handleChange={(e) => inputHandler(e)}
                value={payload.password}
                required
                name='password'
                labelText='کلمه عبور'
                placeholder='حداقل ۶ کاراکتر'
                onClick={setToggle}
                icon={toggle ? <Eye /> : <EyeSlash />}
                type={toggle ? 'text' : 'password'}
                errorText={error.password}
              />
              <FormRow
                handleChange={(e) => inputHandler(e)}
                value={payload.phone}
                required
                name='phone'
                labelText='شماره تلفن'
                placeholder='09123456789'
                icon={<Phone />}
                type={'text'}
                errorText={error.phone}
              />

              <div className='policy'>
                <CheckBox
                  value={payload.policy}
                  handleChange={(e) => checkBoxHandler(e)}
                  name='policy'
                />
                <span>قوانین و شرایط را قبول میکنم . </span>
              </div>
              <FillButton type='submit' color='var(--primary-500)'>
                {isLoading ? (
                  <Loader
                    color='var(--text-white)'
                    border='var(--primary-500)'
                  />
                ) : (
                  'ثبت نام'
                )}
              </FillButton>
            </form>
            <div className='bottom '>
              {'اکانت دارید؟'}
              <span onClick={toggleHasAccount}>{'وارد شوید'}</span>
            </div>
          </div>
        }
        backSide={
          <div className='center'>
            <i className='two'>+</i>
            <i className='one'>+</i>
            <h1>ورود به شریف سیستم</h1>
            <form
              onSubmit={(e) => {
                e.preventDefault()
                loginHandler()
              }}
            >
              <FormRow
                handleChange={(e) => inputHandler(e)}
                value={payload.username}
                name='username'
                required
                labelText='نام کاربری '
                icon={<User />}
                placeholder=' فقط شامل حروف و اعداد انگلیسی'
                errorText={error.username}
              />
              <FormRow
                handleChange={(e) => inputHandler(e)}
                value={payload.password}
                required
                name='password'
                labelText='کلمه عبور'
                placeholder='حداقل ۶ کاراکتر'
                onClick={setToggle}
                icon={toggle ? <Eye /> : <EyeSlash />}
                type={toggle ? 'text' : 'password'}
                errorText={error.password}
              />

              <FillButton type='submit' color='var(--primary-500)'>
                {isLoading ? (
                  <Loader
                    color='var(--text-white)'
                    border='var(--primary-500)'
                  />
                ) : (
                  'ورود'
                )}
              </FillButton>
            </form>
            <div className='bottom '>
              تا کنون ثبت نام نکرده اید؟
              <span onClick={toggleHasAccount}>ثبت نام</span>
            </div>
          </div>
        }
      />
    </Wrapper>
  )
}

const Wrapper = styled('section')(() => ({
  width: '100vw',
  height: '100dvh',
  display: 'grid',
  placeItems: 'center',
  overflow: 'hidden',

  '.center': {
    position: 'relative',
    transition: 'all .3s',
    background: 'var(--card-bg)',
    borderRadius: '10px',
    padding: '2rem 2.5rem',
    margin: 'auto',
    alignSelf: 'center',
    boxShadow: ' 15px 15px 30px #bebebe83,-15px -15px 30px #ffffff',

    h1: { color: 'var(--text-main)', textAlign: 'center' },

    form: {
      margin: '1rem 0',
      padding: '1rem 0',
      display: 'flex',
      flexDirection: 'column',
      gap: '1rem',
      button: {
        marginTop: '1rem',
      },
    },
    '.policy': {
      zIndex: 2,
      display: 'flex',
      gap: '.5rem',
      alignItems: 'center',
      a: {
        cursor: 'pointer',
        color: 'var(--primary-500)',
      },
    },
    '.bottom': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '.5rem',
      color: 'var(--text-main)',
      span: {
        zIndex: 2,
        cursor: 'pointer',
        color: 'var(--primary-500)',
        transition: '.3s all',
        ':hover': {
          color: 'var(--primary-600)',
        },
      },
    },

    ':hover': {
      boxShadow: ' 15px 15px 30px #afafaf90,-15px -15px 30px #ffffff',
    },
    '@media (width<= 500px)': {
      padding: '1rem 1.5rem',
      form: {
        gap: '.3rem',
      },
    },
  },

  i: {
    position: 'absolute',
    fontWeight: '500',
    color: 'var(--primary-600)',
    zIndex: 0,
    fontFamily: 'var(--pixel)',
  },
  '.one': {
    fontSize: '230px',
    top: '90%',
    left: '35%',
    animation: ' swimOne 24s linear infinite',
  },
  '.two': {
    fontSize: ' 140px',
    top: '-15%',
    left: '-7%',
    animation: 'swimTwo 6s linear infinite',
  },
  ' @keyframes swimOne': {
    '  0%': {
      transform: 'rotate(0deg) translateX(-200%)',
    },

    '50% ': {
      transform: 'rotate(180deg) translateX(-200%)',
    },

    '100% ': {
      transform: 'rotate(0deg) translateX(-200%)',
    },
  },
  '@keyframes swimTwo': {
    '  0%': {
      transform: 'rotate(0deg) scale(1)',
    },

    '50% ': {
      transform: ' rotate(180deg) scale(0.8)',
    },

    '100% ': {
      transform: 'rotate(0deg) scale(1)',
    },
  },
}))
