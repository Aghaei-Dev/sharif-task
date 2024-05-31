import styled from '@emotion/styled'
import { useGlobalContext } from '../../context'
import { Close, Success } from '../../assets/icons'
import { Button, Backdrop } from '../'

export default function Alert({
  background = 'var(--success-500)',
  color = 'var(--text-white)',
  icon = <Success />,
  content,
  iconColor = 'var(--text-white)',
  confirm,
  confirmBtn1,
  confirmBtn2,
  background1,
  hover1,
  fn1,
  background2,
  hover2,
  fn2,
  fontSize,
}) {
  const { hideAlert, isAlertShow, alertProps } = useGlobalContext()

  const styles = {
    background,
    color,
    iconColor,
    isAlertShow,
    fontSize,
  }

  return (
    <>
      {alertProps.disableHide && (
        <Backdrop
          zIndex='200'
          closeFn={() => hideAlert()}
          condition={isAlertShow}
        />
      )}
      <Wrapper
        style={{ top: isAlertShow ? '0' : '-200px' }}
        styles={styles}
        className='flex-column gap-2'
      >
        <div className='flex-between'>
          <div className='flex-center gap-2'>
            {icon}
            <h1>{content}</h1>
          </div>
          <button className='close-btn' onClick={hideAlert}>
            <Close />
          </button>
        </div>

        {confirm && (
          <div className='confirm'>
            <Button background={background1} hover={hover1} fn={fn1}>
              {confirmBtn1}
            </Button>
            <Button background={background2} hover={hover2} fn={fn2}>
              {confirmBtn2}
            </Button>
          </div>
        )}
      </Wrapper>
    </>
  )
}

const Wrapper = styled('div')(
  ({ styles: { background, color, iconColor, isAlertShow, fontSize } }) => ({
    background,
    color,

    position: 'fixed',
    zIndex: '202',
    top: '-200px',
    left: '50%',
    transition: '.3s all',
    transform: 'translate(-50%,0)',
    marginTop: '3rem',
    width: '95vw',
    maxWidth: '500px',
    padding: '1rem',
    borderRadius: '9px',
    h1: {
      fontWeight: '600',
      fontSize: fontSize ? fontSize : '1.3rem',
    },
    svg: {
      fill: iconColor,
      width: '25px',
    },
    '.close-btn': { cursor: 'pointer', '*': { cursor: 'pointer' } },
    '.confirm': {
      display: 'flex',
      justifyContent: 'center',
      gap: '1rem',
      button: {
        width: '100%',
      },
    },
  })
)
