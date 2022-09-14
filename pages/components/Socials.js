/* eslint-disable @next/next/no-img-element */

export default function Socials({ dark }) {
  return (
    <>
      <div className='pill'>
        <div className='wrap email'>
          <img src='/img/email.svg' alt='Email Link' />
        </div>
        <div className='wrap twitter'>
          <img src='/img/twitter.svg' alt='Twitter Link' />
        </div>
        <div className='wrap github'>
          <img src='/img/github.svg' alt='Github Link' />
        </div>
      </div>
      <style jsx>
        {`
          .pill {
            display: flex;
            width: 200px;
            justify-content: space-between;
            height: 58px;
            border: 2px solid ${dark ? 'var(--clr-text-dp)' : 'var(--clr-text-p)'};
            border-radius: 55px;
            align-items: center;
            padding: 0 4px;
          }
          img {
            padding: 1px;
            width: 48px;
            opacity: 80%;
            filter: ${dark && 'invert(.8)'};
            transition: opacity 0.3s ease;
          }
          img:hover {
            opacity: 100%;
          }
          .wrap {
            border-radius: 50%;
            transition: background-color 0.3s ease, filter 0.3s ease;
          }
        `}
      </style>
    </>
  )
}

// border: 2px solid ${dark ? 'var(--clr-text-dp)' : 'var(--clr-text-p)'};
