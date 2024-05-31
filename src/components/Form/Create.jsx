import React, { useState } from 'react'
import { Button, Loader, FormRow } from '..'
import styled from '@emotion/styled/macro'
import { BankNotes, Person } from '../../assets/icons'
import { useDispatch } from 'react-redux'
import { createPost } from '../../features/post/postSlice'
import { toast } from 'react-toastify'

export default function Create({ toggler }) {
  const dispatch = useDispatch()
  const [payload, setPayload] = useState({ title: '', body: '' })

  const [isLoading, setIsLoading] = useState(false)

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
    setIsLoading(true)
    dispatch(createPost(payload))
    setIsLoading(false)
    setPayload({ title: '', body: '' })
    toggler()
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
            'Create'
          )}
        </Button>
        <Button
          fn={toggler}
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
  display: 'flex',
  flexDirection: 'column',
  gap: '1rem',
  border: '1px solid var(--text-100)',
  padding: '1rem',
  borderRadius: '.5rem',
}))
