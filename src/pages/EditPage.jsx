import styled from '@emotion/styled/macro'
import React, { useEffect } from 'react'
import { Edit } from '../components'
export default function EditPage() {
  useEffect(() => window.scrollTo(0, 0), [])
  return (
    <Wrapper>
      <Edit />
    </Wrapper>
  )
}
const Wrapper = styled.div`
  max-width: 650px;
  margin: auto;
  min-height: 70vh;
  display: grid;
  place-items: center;
`
