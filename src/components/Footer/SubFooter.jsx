import styled from '@emotion/styled'
export default function SubFooter() {
  return (
    <Wrapper>
      <div className='fixed-width'>
        <p>
          تمامی حقوق این وبسایت، خدمات و محتوای مربوط به آن متعلق به سپید سیستم
          شریف می‌باشد. ( Powered by Aghaei-Dev )
        </p>
        <div className='btn-container'>
          <a href=''>سوالات متداول</a>
          <a href=''>قوانین و مقررات</a>
        </div>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.header`
  background: #e5e5e5;
  color: #434240;
  font-size: 10px;
  direction: rtl;
  padding: 0.75rem 0;
  > div {
    padding: 0 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;

    p {
      direction: rtl;
    }
    .btn-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: 0.5rem;
      a {
        color: #434240;
        text-wrap: nowrap;
      }
    }
    @media (max-width: 800px) {
      flex-direction: column;
      gap: 0.5rem;
      .btn-container {
        align-self: flex-end;
      }
    }
  }
`
