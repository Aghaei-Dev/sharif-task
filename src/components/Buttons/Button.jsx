import React from 'react'
import styled from '@emotion/styled'

export default function Button({
  className,
  children,
  background,
  hover,
  circle,
  fn,
  style,
  type = 'button',
  disable,
  color = 'var(--text-white)',
  fill = 'var(--text-white)',
  fontSize = '14px',
  fontWeight = '500',
}) {
  const styles = {
    background,
    hover,
    circle,
    color,
    fill,
    fontSize,
    fontWeight,
  }
  return (
    <Btn
      styles={styles}
      disabled={disable}
      type={type}
      style={style}
      className={className}
      onClick={fn}
    >
      {children}
    </Btn>
  )
}

const Btn = styled('button')(
  ({
    styles: { background, hover, circle, color, fill, fontSize, fontWeight },
  }) => ({
    fontFamily: 'var(--primary-bold)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '.5rem',
    padding: '12px 24px',
    border: `1px solid ${background}`,
    color: background,
    borderRadius: '4px',
    transition: 'all 0.2s ease-in',
    position: 'relative',
    overflow: 'hidden',
    fontSize: fontSize,
    cursor: 'pointer',
    zIndex: '1',
    'svg , *': {
      transition: 'all 0.2s ease-in',
      cursor: 'pointer',
      fill: background,
    },
    ':before': {
      content: "''",
      position: 'absolute',
      left: '50%',
      transform: 'translateX(-50%) scaleY(1) scaleX(1.25)',
      top: '100%',
      width: '140%',
      height: '180%',
      backgroundColor: 'rgba(0, 0, 0, 0.05)',
      borderRadius: '50%',
      display: 'block',
      transition: 'all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1)',
      zIndex: '-1',
    },
    ':after': {
      content: "''",
      position: 'absolute',
      left: ' 55%',
      transform: 'translateX(-50%) scaleY(1) scaleX(1.45)',
      top: ' 180%',
      width: '160%',
      height: '190%',
      backgroundColor: background,
      borderRadius: '50%',
      display: 'block',
      transition: 'all 0.5s 0.1s cubic-bezier(0.55, 0, 0.1, 1)',
      zIndex: '-1',
    },
    ':hover ': {
      color: '#ffffff',
      border: `1px solid ${background}`,
      'svg , *': {
        fill: '#ffffff',
      },
    },
    ':hover:before': {
      top: ' -35%',
      backgroundColor: background,
      transform: 'translateX(-50%) scaleY(1.3) scaleX(0.8)',
    },
    ':hover:after': {
      top: '-45%',
      backgroundColor: background,
      transform: 'translateX(-50%) scaleY(1.3) scaleX(0.8)',
    },
  })
)
