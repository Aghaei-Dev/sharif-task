import styled from '@emotion/styled'

import { SubFooter } from '../'
import { Email, Location, Phone, Telegram, Youtube } from '../../assets/icons'
import { e_namad } from '../../assets/img'

export default function Footer() {
  return (
    <Wrapper>
      <section className='fixed-width'>
        {/* <img src={logo} alt='logo' /> */}

        <div className='content'>
          <article>
            <h5>دسترسی سریع</h5>

            <a href=''>لینک مفید شماره یک برای دسترسی</a>
            <a href=''>لینک مفید شماره دو برای دسترسی</a>
            <a href=''>لینک مفید شماره سه برای دسترسی</a>
            <a href=''>لینک مفید شماره چهار برای دسترسی</a>
          </article>

          <article>
            <h5>لینک های مفید</h5>
            <a href=''>شماره چهار</a>
            <a href=''>لینک مفید</a>
            <a href=''>لینک مفید شماره چهار </a>

            <a href=''>لینک برای دسترسی</a>
          </article>

          <article>
            <h5>نماس با ما</h5>
            <Row>
              <Location />
              تهران، خیابان میرزای شیرازی، کوچه هفدهم، پلاک ۱۷
            </Row>

            <Row>
              <Phone />
              ۰۲۱-۴۲۹۱۹۰۰۰
            </Row>
            <Row>
              <Email />
              info@irtournament.ir
            </Row>
          </article>

          <article className='group'>
            <div className='social-links'>
              <p>با ما باشید</p>
              <div className='links'>
                {/* 
                <Twitter /> */}
                <Telegram />
                <Telegram />
                <Telegram />

                <Youtube />
              </div>
            </div>
            <div className='e_namad'>
              <p style={{ color: 'var(--primary-500)' }}>
                دقیق و امن، با مهر همراه شما هستیم
              </p>
              <img src={e_namad} alt='' />
            </div>
          </article>
        </div>
      </section>
      <SubFooter />
    </Wrapper>
  )
}

const Wrapper = styled.header`
  direction: rtl;
  background: rgba(46, 45, 43, 0.03);

  section {
    padding: 1rem;

    img {
      filter: grayscale(1);
      opacity: 0.8;
    }
    h5 {
      color: var(--gray-700);
    }
    a {
      color: var(--gray-900);
    }
    .content {
      margin-top: 2rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      gap: 2rem;
      article {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 0.5rem;
        h5 {
          font-size: 1rem;
        }
        a {
          font-size: 0.9rem;
          font-family: var(--primary);
        }
      }
      .group {
        display: flex;
        flex-direction: row;
        justify-content: space-around;
        text-align: center;
        gap: 1rem;
        p {
          margin-bottom: 1rem;
        }
        .links {
          display: grid;
          grid-template-columns: 1fr 1fr;
          justify-content: center;
          gap: 0.5rem;
          align-items: center;

          svg {
            justify-self: center;
            width: 30px;
            height: 30px;
            align-self: center;
          }
        }
      }
      @media (width>=800px) {
        flex-direction: row;
        .group {
          flex-direction: column;
          .links {
            display: flex;
          }
        }
      }
    }
  }
`

const Row = styled.a`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 1rem;
`
