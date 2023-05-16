/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import { front1, front2, back1, back2, dev1, dev2 } from '../data/skills'

export default function Skills({ dark }) {
  const txtClr = dark ? 'var(--clr-text-dp)' : 'var(--clr-text-s)'
  const txtClrSec = dark ? 'var(--clr-text-ds)' : 'var(--clr-text-s)'

  return (
    <>
      <div className='wrapper'>
        <h2>Skills and Tools</h2>
        <div className='cards'>
          <div className='card frontend'>
            <h3>Frontend</h3>
            <ul>
              <div className='one'>
                {front1.map((s) => (
                  <li key={s.title}>
                    <img className='svg' src={s.img} />
                    {s.title}
                  </li>
                ))}
              </div>
              <div className='two'>
                {front2.map((s) => (
                  <li key={s.title}>
                    <img className='svg' src={s.img} />
                    {s.title}
                  </li>
                ))}
              </div>
            </ul>
          </div>
          <div className='card backend'>
            <h3>Backend</h3>
            <ul>
              <div className='one'>
                {back1.map((s) => (
                  <li key={s.title}>
                    <img className='svg' src={s.img} />
                    {s.title}
                  </li>
                ))}
              </div>
              <div className='two'>
                {back2.map((s) => (
                  <li key={s.title}>
                    <img className='svg' src={s.img} />
                    {s.title}
                  </li>
                ))}
              </div>
            </ul>
          </div>
          <div className='card tools'>
            <h3>Dev Tools</h3>
            <ul>
              <div className='one'>
                {dev1.map((s) => (
                  <li key={s.title}>
                    <img className='svg' src={s.img} />
                    {s.title}
                  </li>
                ))}
              </div>
              <div className='two'>
                {dev2.map((s) => (
                  <li key={s.title}>
                    <img className='svg' src={s.img} />
                    {s.title}
                  </li>
                ))}
              </div>
            </ul>
          </div>
        </div>
      </div>
      <style jsx>
        {`
          .wrapper {
            width: 100%;
          }
          h2 {
            font-family: var(--ff-primary);
            color: ${txtClr};
            font-size: 2.25rem;
            font-weight: 500;
            text-align: center;
            margin: 1rem;
          }
          .cards {
            max-width: 1600px;
            display: grid;
            grid-template-columns: 1fr 1fr 1fr;
            gap: 2rem;
            margin: 0 auto;
          }
          .card {
            border-radius: 55px;
            border: 2px solid ${dark ? 'var(--clr-text-dp)' : 'var(--clr-text-s)'};
            padding-bottom: 3rem;
          }
          h3 {
            display: block;
            font-family: var(--ff-second);
            font-size: 1.5rem;
            width: max-content;
            color: ${txtClrSec};
            padding: 0 1rem;
            margin: 1rem auto;
            border-bottom: 2px solid ${txtClrSec};
          }
          ul {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 1rem;
            width: max-content;
            margin: 0 auto;
          }
          li {
            display: flex;
            justify-content: flex-start;
            gap: 0.5rem;
            margin: 0.5rem;
            color: ${txtClrSec};
            font-size: 20px;
            font-family: var(--ff-second);
            font-weight: 500;
          }
          img {
            width: 26px;
          }
          .svg {
            filter: ${dark && 'invert(0.8)'};
            z-index: -0;
          }
          @media (max-width: 1040px) {
            .cards {
              grid-template-columns: 1fr;
            }
          }
        `}
      </style>
    </>
  )
}
