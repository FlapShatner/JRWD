import { useClipboard } from 'use-clipboard-copy'

export default function Footer({ dark }) {
  const logo = '{J}'
  const txtClr = dark ? 'var(--clr-text-dp)' : 'var(--clr-text-p)'
  const txtClrSec = dark ? 'var(--clr-text-ds)' : 'var(--clr-text-s)'
  const year = new Date().getFullYear()

  //   Clipboard API
  const clipboard = useClipboard({
    copiedTimeout: 800, // timeout duration in milliseconds
  })

  const handleCopy = () => {
    const address = 'jordan@jrobertsweb.dev'
    clipboard.copy(address)
  }

  return (
    <>
      <div className='container'>
        <div className='logo new-logo'>
          <img src='/img/jr-logo.svg' alt='' />
        </div>
        <div className='wrapper'>
          <h4>Jordan Roberts</h4>
          <a onClick={handleCopy}>{clipboard.copied ? 'copied' : 'jordan@jRobertsWeb.dev'}</a>
          <p>© {year} Jordan Roberts </p>
        </div>
      </div>
      <style jsx>
        {`
          .container {
            border: 2px solid ${txtClr};
            border-radius: 55px;
            width: 100%;
            max-width: 1600px;
            margin: 0 auto;
            display: flex;
            align-items: center;
          }
          .logo {
            width: min-content;
            font-family: var(--ff-heebo);
            font-size: 48px;
            line-height: 1;
            margin: 1.5rem;
            background-image: var(--gradient);
            background-size: cover;
            background-clip: text;
            color: transparent;
          }
          .new-logo {
            width: 52px;
          }
          .wrapper {
            position: relative;
            display: flex;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            margin-right: 2rem;
          }
          a,
          p {
            font-family: var(--ff-mont);
            color: ${txtClrSec};
          }
          a {
            cursor: pointer;
          }
          h4 {
            color: ${txtClrSec};
            font-family: var(--ff-poppins);
            font-size: 24px;
            font-weight: 500;
          }
          @media (max-width: 600px) {
            .wrapper {
              flex-direction: column;
              margin-top: 1rem;
              margin-right: 3rem;
              gap: 1rem;
              align-items: flex-end;
            }
            h4 {
              display: none;
            }
            p {
              font-size: 14px;
            }
            a {
              font-size: 1.125rem;
            }
          }
        `}
      </style>
    </>
  )
}
