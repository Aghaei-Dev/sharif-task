import styled from '@emotion/styled/macro'
import React from 'react'
import { CornerButton } from '../Buttons'
import { useDispatch } from 'react-redux'
import { deletePost } from '../../features/post/postSlice'
import { useNavigate } from 'react-router-dom'

export default function SinglePost({ title, body, id }) {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  return (
    <Wrapper className='flex-between'>
      <h3> title :{title}</h3>
      <p>desc :{body}</p>
      <div className='flex-between gap-4'>
        <CornerButton
          color='var(--primary-500)'
          text='edit'
          fn={() => navigate(`edit/${id}`)}
        />
        <CornerButton
          color='var(--error-500)'
          text='delete'
          fn={() => dispatch(deletePost(id))}
        />
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  border-radius: 0.5rem;
  padding: 1rem;
  border: 1px solid var(--text-100);
  font-family: var(--english);
  flex-direction: column;
  gap: 1rem;
  h3 {
    color: var(--text-main);
    font-size: 1rem;
    direction: ltr;
  }
  p {
    color: var(--text-300);
    font-size: 0.8rem;
    direction: ltr;
  }
`
