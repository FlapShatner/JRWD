import { projects } from '../data/projects'
import { useClickOutside } from '../hooks/useClickOutside'
import DetailsModal from './DetailsModal'
import { useState, useRef } from 'react'

export default function Projects({ dark }) {
  const txtClr = dark ? 'var(--clr-text-dp)' : 'var(--clr-text-p)'
  const txtClrSec = dark ? 'var(--clr-text-ds)' : 'var(--clr-text-s)'

  return (
    <>
      <h2>Projects</h2>
      <div className='container'>
        <div className='wrapper'>
          {projects.map((p) => (
            <Card key={p.name} p={p} />
          ))}
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
          }
          .wrapper {
            padding: 3rem;
            display: grid;
            grid: auto-flow / 1fr 1fr 1fr;
            gap: 2rem;
            margin: 0 auto;
            justify-items: center;
          }
          h2 {
            font-family: var(--ff-poppins);
            color: ${txtClr};
            font-size: 2.25rem;
            font-weight: 500;
            text-align: center;
            margin: 1rem;
          }
          @media (max-width: 1040px) {
            .wrapper {
              grid: auto-flow / 1fr 1fr;
            }
          }
          @media (max-width: 735px) {
            .wrapper {
              grid: auto-flow/ 1fr;
            }
          }
        `}
      </style>
    </>
  )

  function Card({ p }) {
    const [show, setShow] = useState(false)

    const detailRef = useRef(null)

    useClickOutside(detailRef, () => setShow(false))

    const handleClose = () => {
      setShow(false)
      console.log('clicked')
    }

    return (
      <>
        <div onClick={() => setShow(true)} className='card'>
          <div className='desc-wrapper'>
            <div className='desc'>
              <h4>{p.title}</h4>
              <div className='links'>
                <a className='code'>Details</a>
              </div>
            </div>
          </div>
        </div>
        {show && <DetailsModal ref={detailRef} show={show} close={handleClose} p={p} dark={dark} />}
        <style jsx>
          {`
            .card {
              max-width: 600px;
              width: 100%;
              min-width: 300px;
              aspect-ratio: 1/1;
              background-image: url('/img/scrshts/${p.imgUrl}');
              border: 2px solid ${txtClr};
              border-radius: 35px;
              background-size: contain;
              display: flex;
              align-items: flex-end;
              isolation: isolate;
              cursor: pointer;
            }

            .desc-wrapper {
              width: 100%;
            }

            .desc {
              padding: 1rem;
              position: relative;
              border-bottom-left-radius: 35px;
              border-bottom-right-radius: 35px;
              border-top: 2px solid var(--clr-bg-d);
            }
            .desc::before {
              content: '';
              position: absolute;
              inset: 0;
              background: ${dark ? 'var(--clr-bg-d)' : 'var(--clr-bg-l)'};
              opacity: 0.9;
              z-index: -1;
              border-bottom-left-radius: 35px;
              border-bottom-right-radius: 35px;
            }
            h4 {
              font-family: var(--ff-poppins);
              color: ${txtClr};
              font-size: 1.5rem;
              text-align: center;
            }
            p,
            a {
              font-family: var(--ff-poppins);
              font-weight: 500;
              color: ${txtClrSec};
              font-size: 1.25rem;
              margin-block: 0.5rem;
            }
            a {
              color: ${!dark ? 'var(--clr-text-ds)' : 'var(--clr-text-s)'};
              background-color: ${!dark ? 'var(--clr-bg-d)' : 'var(--clr-bg-l)'};
              border: none;
              border-radius: 15px;
              padding: 0 40px;
            }
            .links {
              display: flex;
              justify-content: center;
              padding-top: 0.5rem;
            }
          `}
        </style>
      </>
    )
  }
}
