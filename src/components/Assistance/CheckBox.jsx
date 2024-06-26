import React from 'react'
import styled from '@emotion/styled'

export default function CheckBox({ value, handleChange, name }) {
 
  return (
    <Wrapper className='container'>
      <input
        type='checkbox'
        id='cbx'
        style={{ display: 'none' }}
        name={name}
        checked={value}
        onChange={handleChange}
      />
      <label htmlFor='cbx' className='check'>
        <svg width='18px' height='18px' viewBox='0 0 18 18'>
          <path d='M1,9 L1,3.5 C1,2 2,1 3.5,1 L14.5,1 C16,1 17,2 17,3.5 L17,14.5 C17,16 16,17 14.5,17 L3.5,17 C2,17 1,16 1,14.5 L1,9 Z'></path>
          <polyline points='1 9 7 14 15 4'></polyline>
        </svg>
      </label>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  *,
  > * {
    cursor: pointer;
  }

  .check {
    cursor: pointer;
    position: relative;
    margin: auto;

    display: grid;
    place-items: center;
    -webkit-tap-highlight-color: transparent;
    transform: translate3d(0, 0, 0);
  }

  .check:before {
    content: '';
    position: absolute;
    top: -15px;
    left: -15px;
    width: 48px;
    height: 48px;
    border-radius: 50%;

    opacity: 0;
    transition: opacity 0.2s ease;
  }

  .check svg {
    position: relative;
    z-index: 1;
    fill: none;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke: var(--primary-500);
    stroke-width: 1.5;
    transform: translate3d(0, 0, 0);
    transition: all 0.2s ease;
  }

  .check svg path {
    stroke-dasharray: 60;
    stroke-dashoffset: 0;
  }

  .check svg polyline {
    stroke-dasharray: 22;
    stroke-dashoffset: 66;
  }

  .check:hover:before {
    opacity: 1;
  }

  .check:hover svg {
    stroke: var(--primary-500);
  }

  #cbx:checked + .check svg {
    stroke: var(--primary-500);
  }

  #cbx:checked + .check svg path {
    stroke-dashoffset: 60;
    transition: all 0.3s linear;
  }

  #cbx:checked + .check svg polyline {
    stroke-dashoffset: 42;
    transition: all 0.2s linear;
    transition-delay: 0.15s;
  }
`
