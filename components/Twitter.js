import Link from 'next/link'

export const Twitter = ({ dark }) => {
  const txtClrInv = !dark ? 'var(--clr-text-dp)' : 'var(--clr-text-p)'

  return (
    <>
      <div className='twitter'>
        <Link href='https://twitter.com/jRobertsWebDev'>
          <a target='_blank' className='inner'>
            <img className='svg' src='img/twitter.svg' alt='twitter logo' />
            <h2>@jRobertsWebDev</h2>
          </a>
        </Link>
      </div>
      <style jsx>
        {`
          h2 {
            font-family: var(--ff-poppins);
            font-weight: 400;
            color: ${txtClrInv};
            cursor: pointer;
          }
          .twitter {
            margin: 0.25rem 0;
            padding: 1rem 2rem;
            border-radius: 55px;
            background-color: ${!dark ? 'var(--clr-text-p)' : 'var(--clr-bg-l)'};
            max-width: 100%;
            display: flex;
          }
          .inner {
            position: relative;
            display: flex;
            width: 100%;
            justify-content: center;
          }
          .svg {
            filter: ${!dark && 'invert(0.8)'};
            width: 40px;
            position: absolute;
            left: 0px;
          }
        `}
      </style>
    </>
  )
}
