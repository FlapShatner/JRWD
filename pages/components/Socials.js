/* eslint-disable @next/next/no-img-element */
import { useState } from 'react'
import Github from './Github'

export default function Socials({ dark, repos, data, close }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div className='pill'>
        <div className='wrap email'>
          <img src='/img/email.svg' alt='Email Link' />
        </div>
        <div className='wrap twitter'>
          <img src='/img/twitter.svg' alt='Twitter Link' />
        </div>
        {isOpen ? (
          <div onClick={() => setIsOpen(!isOpen)} className='wrap github'>
            <img src='/img/github.svg' alt='Github Link' />
          </div>
        ) : (
          <Github dark={dark} repos={repos} data={data} close={() => setIsOpen(!isOpen)} />
        )}
      </div>
      <style jsx>
        {`
          .pill {
            position: fixed;
            top: 140px;
            right: 60px;
            display: flex;
            flex-direction: column;
            width: 58px;
            justify-content: space-between;
            height: 200px;
            background-color: ${dark ? 'var(--clr-text-dp)' : 'var(--clr-text-p)'};
            border: 2px solid ${dark ? 'var(--clr-text-dp)' : 'var(--clr-text-p)'};
            border-radius: 55px;
            align-items: center;
            padding: 4px 0;
            transition: all 0.5s ease;
          }
          img {
            padding: 1px;
            width: 48px;

            filter: ${!dark && 'invert(.9)'};
            transition: opacity 0.3s ease;
          }
          img:hover {
            opacity: 100%;
          }
          .wrap {
            border-radius: 50%;
            transition: background-color 0.3s ease, filter 0.3s ease;
          }
          .twitter {
            position: absolute;
            top: 75px;
          }
        `}
      </style>
    </>
  )
}

// border: 2px solid ${dark ? 'var(--clr-text-dp)' : 'var(--clr-text-p)'};
