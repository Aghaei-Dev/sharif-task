import React from 'react'
import styled from '@emotion/styled'

export default function CornerButton({ color, text, disable, fn, style }) {
  const styles = { color, disable, style }
  return (
    <Wrapper styles={styles} disabled={disable} onClick={fn}>
      <span>{text}</span>
    </Wrapper>
  )
}

const Wrapper = styled('button')(({ styles: { color, disable, style } }) => ({
  position: 'relative',
  height: '50px',
  padding: '0 30px',
  border: `2px solid `,
  borderColor: disable ? 'var(--text-500)' : color,
  background: 'var(--text-white)',
  userSelect: 'none',
  whiteSpace: 'nowrap',
  transition: 'all 0.05s linear',
  fontFamily: 'inherit',
  cursor: 'pointer',
  display: 'grid',
  placeItems: 'center',
  pointerEvents: disable ? 'none' : 'auto',
  ...style,
  ':before , :after': {
    content: "''",
    cursor: 'pointer',
    position: 'absolute',
    background: ' var(--text-white)',
    transition: 'all 0.2s linear',
  },
  ' :before': {
    width: 'calc(100% + 6px)',
    height: 'calc(100% - 16px)',
    top: '8px',
    left: '-3px',
  },
  ' :after': {
    width: 'calc(100% - 16px)',
    height: 'calc(100% + 6px)',
    top: '-3px',
    left: '8px',
  },
  ' :active ': {
    transform: 'scale(0.95)',
  },
  ' :hover:before': {
    height: 'calc(100% - 32px)',
    top: '16px',
  },
  ':hover:after': {
    width: 'calc(100% - 32px)',
    left: '16px',
  },
  span: {
    fontSize: '15px',
    zIndex: '3',
    position: 'relative',
    fontWeight: '600',
    color: disable ? 'var(--text-500)' : color,
    cursor: 'pointer',
  },
}))
