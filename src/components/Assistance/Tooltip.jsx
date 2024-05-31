import styled from '@emotion/styled/macro'
import React, { useState } from 'react'

export default function Tooltip({ delay, children, content, placement }) {
  let timeout
  const [active, setActive] = useState(false)

  const show = () => {
    timeout = setTimeout(() => {
      setActive(true)
    }, delay || 100)
  }

  const hide = () => {
    clearTimeout(timeout)
    setActive(false)
  }

  return (
    <Wrapper
      onMouseEnter={show}
      onMouseLeave={hide}
      onTouchStartCapture={show}
      onTouchEndCapture={hide}
    >
      {children}
      {active && (
        <div className={`tooltip ${placement || 'top'}`}>{content}</div>
      )}
    </Wrapper>
  )
}

const Wrapper = styled('div')(() => ({
  position: 'relative',
  '.tooltip': {
    position: 'absolute',
    borderRadius: '.5rem',
    left: '50%',
    transform: ' translateX(-50%)',
    padding: '6px',
    color: 'var(--text-white)',
    background: 'var(--info-500)',
    zIndex: '100',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '.5rem',
    minWidth: '200px',
    p: {
      fontSize: '.9rem',
    },

    '::before': {
      content: '""',
      left: '50%',
      border: ' solid transparent',
      height: '0',
      width: '0',
      position: 'absolute',
      borderWidth: '4px',
      marginLeft: '-4px',
    },
  },

  '.tooltip.top ': {
    top: ' -70px',
    '::before': {
      top: ' 100%',
      borderTopColor: 'var(--info-500)',
    },
  },
  '.tooltip.right': {
    left: 'calc(100% + 10px)',
    top: ' 50%',
    transform: ' translateX(0) translateY(-60%)',
    '::before': {
      left: '-4px',
      top: ' 50%',
      transform: 'translateX(0) translateY(-50%)',
      borderRightColor: 'var(--info-500)',
    },
  },
  ' .tooltip.bottom': {
    bottom: '-50px',
    '::before': {
      bottom: '100%',
      borderBottomColor: 'var(--info-500)',
    },
  },
  ' .tooltip.left': {
    left: 'auto',
    right: ' calc(100% + 10px)',
    top: ' 50%',
    transform: 'translateX(0) translateY(-60%)',
    '::before': {
      left: 'auto',
      right: '-8px',
      top: '50%',
      transform: ' translateX(0) translateY(-50%)',
      borderLeftColor: 'var(--info-500)',
    },
  },
}))
