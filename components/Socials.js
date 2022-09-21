/* eslint-disable @next/next/no-img-element */
import { useSpring, animated } from '@react-spring/web'
import { useState } from 'react'
import Github from './Github'

export default function Socials({ dark, repos, data, close }) {
  const [isOpen, setIsOpen] = useState(false)

  const ghProps = useSpring({ to: { opacity: 0 }, from: { opacity: 1 }, reset: true, reverse: 'flip', delay: 200 })

  const onClose = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <>
      <div className='pill'>
        <div onClick={onClose} className='wrap github'>
          <img src='/img/github.svg' alt='Github Link' />
        </div>
        <Github dark={dark} repos={repos} data={data} isOpen={isOpen} close={onClose} />
        <div className='wrap twitter'>
          <img src='/img/twitter.svg' alt='Twitter Link' />
        </div>
        <div className='wrap email'>
          <img src='/img/email.svg' alt='Email Link' />
        </div>
      </div>

      <style jsx>
        {`
          .pill {
            position: relative;
            display: flex;
            flex-direction: row;
            width: 170px;
            justify-content: space-between;
            height: 50px;
            background-color: ${dark ? 'var(--clr-text-dp)' : 'var(--clr-text-p)'};
            border: 2px solid ${dark ? 'var(--clr-text-dp)' : 'var(--clr-text-p)'};
            border-radius: 55px;
            align-items: center;
            padding: 4px 0;
          }
          img {
            padding: 1px;
            width: 48px;

            filter: ${!dark && 'invert(.9)'};
            transition: transform 0.3s ease;
          }
          img:hover {
            transform: scale(115%);
          }
          .twitter {
            position: absolute;
            right: 59px;
          }
          .github img {
            visibility: ${isOpen ? 'hidden' : 'visible'};
          }

          @media (max-width: 770px) {
            .pill {
              position: absolute;
              flex-direction: column-reverse;
              width: 50px;
              height: 170px;
              padding: 0;
              top: 38px;
              right: 50px;
            }
            .twitter {
              position: relative;
              right: 0px;
            }
          }
        `}
      </style>
    </>
  )
}

// border: 2px solid ${dark ? 'var(--clr-text-dp)' : 'var(--clr-text-p)'};
