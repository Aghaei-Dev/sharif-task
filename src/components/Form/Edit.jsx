import React, { useState, useEffect } from 'react'
import { Button, Loader, FormRow } from '..'
import styled from '@emotion/styled/macro'
import { BankNotes, Person } from '../../assets/icons'
import { useDispatch, useSelector } from 'react-redux'
import { editPost, getSpecificPost } from '../../features/post/postSlice'
import { toast } from 'react-toastify'
import { useNavigate, useParams } from 'react-router-dom'

export default function Edit() {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { id } = useParams()
  const { post, isLoading } = useSelector((store) => store.post)

  useEffect(() => {
    dispatch(getSpecificPost(id))
    console.log(`single post is :`)
    console.table(post)
  }, [])

  const [payload, setPayload] = useState({
    title: post.title,
    body: post.body,
    id: id,
  })

  const inputHandler = (e) => {
    const { value, name } = e.target

    payload[name] = value

    setPayload({ ...payload })
  }

  const submitHandler = (e) => {
    e.preventDefault()
    if (!payload.title || !payload.body) {
      toast.error('pls fill the fields')
      return
    }
    dispatch(editPost(payload))
    setPayload({ title: '', body: '' })
    navigate('/')
  }
  return (
    <Form onSubmit={(e) => submitHandler(e)}>
      <FormRow
        handleChange={(e) => inputHandler(e)}
        value={payload.title}
        name='title'
        labelText='Tilte'
        icon={<Person />}
        type='text'
        required
        placeholder='Tilte'
      />
      <FormRow
        handleChange={(e) => inputHandler(e)}
        value={payload.body}
        name='body'
        labelText='Description'
        icon={<BankNotes />}
        type='text'
        required
        placeholder='Description'
      />
      <div className='flex-between gap-4'>
        <Button
          background='var(--success-700)'
          hover='var(--success-800)'
          type='submit'
          style={{ width: '100%' }}
        >
          {isLoading ? (
            <Loader color='var(--text-white)' border='var(--primary-500)' />
          ) : (
            'Edit'
          )}
        </Button>
        <Button
          fn={() => navigate('/')}
          background='var(--error-700)'
          hover='var(--error-800)'
          type='button'
          style={{ width: '100%' }}
        >
          Cancel
        </Button>
      </div>
    </Form>
  )
}

const Form = styled('form')(() => ({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  border: '1px solid var(--text-100)',
  padding: '1rem',
  borderRadius: '.5rem',
}))
