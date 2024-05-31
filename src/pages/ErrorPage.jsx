import React from 'react'
import styled from '@emotion/styled'
import { CornerButton } from '../components'
// import { iconOne } from '../assets/img'
import { ErrorTriangle } from '../assets/icons'
import { useNavigate } from 'react-router-dom'
export default function ErrorPage() {
  const navigate = useNavigate()

  return (
    <Wrapper>
      <ErrorTriangle className='triangle' />
      <article>
        <h1>۴۰۴</h1>
        <h2>صفحه مورد نظر یافت نشد !</h2>

        <CornerButton
          color='var(--primary-500)'
          text='بازگشت'
          fn={() => navigate('/')}
        />
      </article>
    </Wrapper>
  )
}

const Wrapper = styled('section')(() => ({
  display: 'grid',
  placeItems: 'center',
  height: '100dvh',
  //
  background: 'var(--card-bg)',
  position: 'relative',
  fontWeight: 'bold',
  article: {
    margin: '1rem',
    padding: '1rem 0',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '1.5rem',
    h1: { fontSize: '9rem', lineHeight: '1', color: 'var(--text-600)' },
    h2: {
      fontSize: '2rem',
      lineHeight: '1',
      color: 'var(--text-600)',
    },
    img: {
      position: 'absolute',
      right: '0%',
      bottom: '0%',
      transform: 'rotate(-180deg) translate(-19%,-93%)',
    },

    '@media (width<= 450px)': {
      h1: { fontSize: '5rem' },
      h2: {
        fontSize: '1.5rem',
        textAlign: 'center',
        lineHeight: '1.5',
      },
    },
  },

  '.triangle': {
    stroke: 'var(--primary-500)',
    width: '10vw',
    position: 'absolute',
    minWidth: '100px',
    top: '10%',
    left: '50%',
    animation: 'triangle 4s linear infinite',
    transform: 'translate(-50%,0)',
  },
  '@keyframes triangle': {
    '  0%': {
      transform: 'translate(-50%,0) scale(1)',
    },

    '50% ': {
      transform: ' translate(-50%,0) scale(0.8)',
    },

    '100% ': {
      transform: 'translate(-50%,0) scale(1)',
    },
  },
}))
