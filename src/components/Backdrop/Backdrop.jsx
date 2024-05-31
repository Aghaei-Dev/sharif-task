import styled from '@emotion/styled'
export default function Backdrop({ closeFn, condition, zIndex = '99' }) {
  return (
    <Wrapper
      onClick={closeFn}
      style={{ display: condition && 'block', zIndex }}
    />
  )
}

const Wrapper = styled('div')(() => ({
  position: 'fixed',
  width: '100%',
  height: '100%',
  background: 'var(--bg-backdrop)',
  top: 0,
  right: 0,
  display: 'none',
}))
