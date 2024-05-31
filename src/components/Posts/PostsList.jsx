import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { getPosts } from '../../features/post/postSlice'
import styled from '@emotion/styled/macro'
import { CubeLoader } from '../Loader'
import SinglePost from './SinglePost'
import { FillButton } from '../Buttons'
import { useToggle } from '../../hook'
import { Create } from '../Form'

export default function PostsList() {
  const dispatch = useDispatch()
  //fetch
  const { posts, isLoading } = useSelector((store) => store.post)
  const [isCreate, toggleCreteForm] = useToggle(false)
  //array
  useEffect(() => {
    dispatch(getPosts())
  }, [])

  return (
    <Wrapper>
      {isLoading ? (
        <CubeLoader />
      ) : (
        <>
          {isCreate && <Create toggler={toggleCreteForm} />}
          {!isCreate && (
            <FillButton
              style={{ width: '100%' }}
              color='var(--success-500)'
              fn={toggleCreteForm}
            >
              Create a Post
            </FillButton>
          )}
          <section>
            {posts.map((item) => {
              return <SinglePost key={item.id} {...item} />
            })}
          </section>
        </>
      )}
    </Wrapper>
  )
}
const Wrapper = styled('main')(() => ({
  width: '100%',
  padding: '1rem',
  margin: 'auto',

  section: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
    justifyContent: 'center',
    gap: '1rem',
    paddingTop: '1rem',
  },
}))
