import { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'

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

  const content = show ? (
    <>
      <div onClick={handleClick} className='overlay'>
        <div className='container'>
          <div className='btn-wrap'>
            <button className='back' onClick={handleClick}>
              Back
            </button>
          </div>
          <div className='desc'>
            <h2>{p.title}</h2>
            <div className='cols'>
              <p>{p.desc}</p>
              <div className='links'>
                <Link href={p.liveUrl}>
                  <button className='link'>Visit on the web</button>
                </Link>
                <Link href={p.srcUrl}>
                  <button className='link'>View source code</button>
                </Link>
              </div>
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
          .container {
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            width: 80%;
            max-width: 900px;
            height: 80vh;
            border-radius: 55px;
            background-color: ${dark ? 'var(--clr-bg-d)' : 'var(--clr-bg-l)'};
            background-image: url('/img/scrshts/${p.imgUrl}');
            background-position: center 60px;
            background-size: cover;
            color: ${txtClr};
            isolation: isolate;
          }
          .desc {
            position: relative;
            height: max-content;
            padding: 3rem 5rem;
          }
          .desc::after {
            content: '';
            position: absolute;
            inset: 0;
            background: ${dark ? 'var(--clr-bg-d)' : 'var(--clr-bg-l)'};
            opacity: 0.9;
            z-index: -1;
            border-bottom-left-radius: 35px;
            border-bottom-right-radius: 35px;
          }
          .btn-wrap {
            background-color: ${dark ? 'var(--clr-bg-d)' : 'var(--clr-bg-l)'};
            border-top-left-radius: 50px;
            border-top-right-radius: 50px;
          }
          button {
            background-color: ${!dark ? 'var(--clr-bg-d)' : 'var(--clr-bg-l)'};
            color: ${!dark ? 'var(--clr-text-ds)' : 'var(--clr-text-s)'};
            padding: 0 2rem;
            font-family: var(--ff-poppins);
            font-weight: 500;
            margin: 1rem 3rem;
            border-radius: 20px;
          }
          h2 {
            font-family: var(--ff-poppins);
            color: ${txtClr};
            font-size: 1.5rem;
            text-align: center;
          }
          p {
            font-family: var(--ff-poppins);
            font-weight: 500;
            color: ${txtClrSec};
            font-size: 1.25rem;
            margin-block: 0.5rem;
            max-width: 60%;
            line-height: 2;
          }
          .cols {
            display: flex;
            padding: 2rem 0;
          }
          .back {
            align-self: end;
          }
          .link {
            min-width: 250px;
            height: 3rem;
          }
        `}
      </style>
    </>
  ) : null

  if (isBrowser) {
    return ReactDOM.createPortal(content, document.getElementById('modal-root'))
  } else {
    return null
  }
}

export default DetailsModal
