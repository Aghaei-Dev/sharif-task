import React from 'react'
import styled from '@emotion/styled'
export default function FillButton({
  children,
  fn,
  type = 'button',
  color,
  style,
  disable,
}) {
  const styles = {
    color,
    style,
    disable,
  }
  return (
    <Button styles={styles} disabled={disable} type={type} onClick={fn}>
      {children}
    </Button>
  )
}
const Button = styled('button')(({ styles: { color, style, disable } }) => ({
  padding: '0.8em 1.7em',
  borderRadius: '0.3em',
  position: 'relative',
  overflow: 'hidden',
  cursor: 'pointer',
  transition: '0.5s',
  fontSize: '1rem',
  border: '1px solid',
  fontFamily: 'inherit',
  fontWeight: 'inherit',
  textTransform: 'uppercase',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '.5rem',
  zIndex: '2',
  color: disable ? 'var(--text-500)' : color,
  pointerEvents: disable ? 'none' : 'auto',

  ...style,
  '::before , ::after ': {
    content: "''",
    cursor: 'pointer',
    display: 'block',
    width: '50px',
    height: '50px',
    transform: 'translate(-50%, -50%)',
    position: 'absolute',
    borderRadius: '50%',
    zIndex: '-1',
    backgroundColor: color,
    transition: ' 1s ease',
  },
  '::before': {
    top: ' -1em',
    left: '-1em',
  },

  '::after': {
    left: 'calc(100% + 1em)',
    top: 'calc(100% + 1em)',
  },
  ':hover::before , :hover::after': {
    height: '900px',
    width: '900px',
  },
  ':hover': {
    color: 'var(--text-white)',
    borderColor: color,
  },
  ':active': {
    filter: 'brightness(0.8)',
  },
}))
