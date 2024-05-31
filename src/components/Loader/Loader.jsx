import styled from '@emotion/styled'
import React from 'react'

export default function Loader({ color, border }) {
  const styles = { color, border }
  return (
    <Wrapper styles={styles}>
      <div className='circle'></div>
      <div className='circle'></div>
      <div className='circle'></div>
      <div className='circle'></div>
    </Wrapper>
  )
}

const Wrapper = styled('div')(({ styles: { color, border } }) => ({
  width: '1.5rem',
  height: '1.5rem',
  position: 'relative',
  animation: 'spin988 2s linear infinite',
  margin: 'auto',

  '.circle': {
    width: '.7rem',
    height: '.7rem',
    backgroundColor: color,
    border: `1px solid ${border}`,
    borderRadius: '50%',
    position: 'absolute',
  },
  '.circle:nth-of-type(1)': {
    top: 0,
    left: 0,
  },
  ' .circle:nth-of-type(2)': {
    top: 0,
    right: 0,
  },
  '.circle:nth-of-type(3)': {
    bottom: 0,
    left: 0,
  },
  '.circle:nth-of-type(4)': {
    bottom: 0,
    right: 0,
  },
  '@keyframes spin988': {
    '0% ': {
      transform: 'scale(1) rotate(0)',
    },
    '20%, 25%': {
      transform: 'scale(1.3) rotate(90deg)',
    },
    '45%,50%': {
      transform: 'scale(1) rotate(180deg)',
    },
    '70%, 75% ': {
      transform: 'scale(1.3) rotate(270deg)',
    },
    '95%,100%': {
      transform: 'scale(1) rotate(360deg)',
    },
  },
}))
