import { useEffect, useState, useRef } from 'react'
import ReactDOM from 'react-dom'
import Image from 'next/image'
import Link from 'next/link'

function DetailsModal({ p, show, close, dark }) {
  const txtClr = dark ? 'var(--clr-text-dp)' : 'var(--clr-text-p)'
  const txtClrSec = dark ? 'var(--clr-text-ds)' : 'var(--clr-text-s)'

  const [isBrowser, setIsBrowser] = useState(false)

  useEffect(() => {
    setIsBrowser(true)
  }, [])

  const handleClick = (e) => {
    e.preventDefault()
    close()
  }

  const content = (
    <>
      <div className='overlay'>
        <div className='wrapper'>
          <div className='container'>
            <div className='col col-left'>
              <button className='back' onClick={handleClick}>
                Back
              </button>
              <div className='desc'>
                <h2>{p.title}</h2>
                <p>{p.desc}</p>
                <div className='links'>
                  <Link href={p.liveUrl}>
                    <a target='_blank' className='link'>
                      Visit on the web
                    </a>
                  </Link>
                  <Link href={p.srcUrl}>
                    <a target='_blank' className='link'>
                      View source code
                    </a>
                  </Link>
                </div>
              </div>
            </div>
            <div className='col col-right'>
              <Link href={p.liveUrl}>
                <a target='_blank'>
                  <div className='screen'>
                    <Image src={`/img/scrshts/${p.imgUrl}`} layout='responsive' width={900} height={800} />
                  </div>
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .overlay {
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: rgba(0, 0, 0, 0.8);
          }
          .wrapper {
            position: relative;
            width: 80%;
            max-width: 900px;
            height: 80vh;
          }
          .container {
            display: flex;
            height: 100%;
            width: 100%;
            border-radius: 55px;
            border: 2px solid ${txtClr};
            background-color: ${dark ? 'var(--clr-bg-d)' : 'var(--clr-bg-l)'};
            color: ${txtClr};
            isolation: isolate;
          }
          .desc {
            position: relative;
            height: max-content;
            padding: 3rem;
          }

          button {
            background-color: ${!dark ? 'var(--clr-bg-d)' : 'var(--clr-bg-l)'};
            color: ${!dark ? 'var(--clr-text-ds)' : 'var(--clr-text-s)'};
            padding: 0.25rem 4rem;
            font-family: var(--ff-poppins);
            font-weight: 500;
            margin: 2.25rem;
            border-radius: 20px;
          }
          h2 {
            font-family: var(--ff-poppins);
            color: ${txtClr};
            font-size: 1.75rem;
          }
          a,
          p {
            font-family: var(--ff-poppins);
            font-weight: 500;
            color: ${txtClrSec};
            font-size: 1.125rem;
            margin-block: 2rem;
            line-height: 1.65;
          }

          .col {
            width: 50%;
            position: relative;
          }
          .links {
            display: flex;
            flex-direction: column;
          }
          .link {
            margin: 1rem;
            text-decoration: underline;
            font-size: 1.35rem;
            width: max-content;
          }
          .col-right {
            padding: 8rem 3rem 0 0;
          }
          .screen {
            position: relative;
          }
          .screen::after {
            content: 'Visit';
            font-family: var(--ff-mont);
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 68px;
            position: absolute;
            inset: 0;
            background-color: var(--clr-bg-d);
            opacity: 0;

            transition: all 0.4s ease;
          }
          .screen:hover::after {
            opacity: 0.8;
          }
          @media (max-width: 955px) {
            .container {
              flex-direction: column;
              height: fit-content;
              position: absolute;
              top: 40px;
            }
            .col {
              width: 100%;
            }
            .col-left {
              display: flex;
              flex-direction: column;
              align-items: center;
              text-align: center;
            }
            .col-right {
              padding: 2rem;
            }
            button {
              margin: 1rem 2rem;
            }
            .links {
              align-items: center;
            }
            .desc {
              padding-bottom: 1rem;
            }
          }
        `}
      </style>
    </>
  )

  if (isBrowser) {
    return ReactDOM.createPortal(content, document.getElementById('modal-root'))
  } else {
    return null
  }
}

export default DetailsModal
