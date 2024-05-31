import React from 'react'
import styled from '@emotion/styled'
import { PostsList } from '../components'

export default function Home() {
  return (
    <Wrapper className='fixed-width flex-column gap-3'>
      <PostsList />
    </Wrapper>
  )
}

const Wrapper = styled('section')(() => ({
  maxWidth: '650px',
  padding: '1rem',
  minHeight: '100dvh',
  overflowX: 'visible',
}))
