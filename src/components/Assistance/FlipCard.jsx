import styled from '@emotion/styled'

export default function FlipCard({ condition, frontSide, backSide }) {
  return (
    <Wrapper condition={condition}>
      <div className='card-inner'>
        <div className='card-front '>{frontSide}</div>
        <div className='card-back '>{backSide}</div>
      </div>
    </Wrapper>
  )
}
const Wrapper = styled('article')(({ condition }) => ({
  width: '95%',
  maxWidth: '500px',
  maxHeight: '98dvh',
  height: '800px',
  perspective: '1000px',
  '.card-inner': {
    width: '100%',
    height: '100%',
    position: 'relative',
    transformStyle: 'preserve-3d',
    transition: 'transform 0.999s',
    transform: condition && ' rotateY(180deg)',
  },

  ' .card-front , .card-back': {
    position: 'absolute',
    width: ' 100%',
    height: '100%',
    backfaceVisibility: 'hidden',
  },
  '.card-front ': {
    transform: 'rotateY(0deg)',
  },
  '.card-back': {
    transform: ' rotateY(180deg)',
  },
}))
