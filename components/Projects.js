import { useState } from 'react'
import { useSpring, animated } from '@react-spring/web'
import { projects } from '../data/projects'
import useMeasure from '../hooks/useMeasure'

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
            padding: 2rem;
            display: grid;
            grid: auto-flow / 1fr 1fr 1fr;
            gap: 1rem;
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
    const Acc = animated.div
    const [on, toggle] = useState(false)
    const [bind, { height, top }] = useMeasure()

    const styles = useSpring({
      overflow: 'hidden',
      height: on ? height + top * 2 : 0,
    })

    return (
      <>
        <div onMouseEnter={() => toggle(true)} onMouseLeave={() => toggle(false)} className='card'>
          <div className='desc-wrapper'>
            <div className='desc'>
              <h4>{p.title}</h4>
              <animated.div style={styles}>
                <Acc {...bind} className='accordion'>
                  <p className='outline'>{p.desc}</p>
                </Acc>
              </animated.div>
              <div className='links'>
                <a href={p.srcUrl} className='code'>
                  Source code
                </a>
                <a href={p.liveUrl} className='link'>
                  View live
                </a>
              </div>
            </div>
          </div>
        </div>
        <style jsx>
          {`
            .card {
              max-width: 600px;
              min-width: 300px;
              aspect-ratio: 1/1;
              background-image: url('/img/scrshts/${p.imgUrl}');
              border: 2px solid ${txtClr};
              border-radius: 35px;
              background-size: contain;
              display: flex;
              align-items: flex-end;
              isolation: isolate;
            }

            .accordion {
              padding: 0.25rem;
              overflow: hidden;
            }

            .desc {
              padding: 0.5rem 1rem;
              position: relative;
              border-bottom-left-radius: 35px;
              border-bottom-right-radius: 35px;
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
            h4 {
              font-family: var(--ff-poppins);
              color: ${txtClr};
              font-size: 1.5rem;
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
              padding: 0 10px;
            }
            .links {
              display: flex;
              justify-content: space-around;
              padding-top: 0.5rem;
            }
          `}
        </style>
      </>
    )
  }
}
