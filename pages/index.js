import Header from './components/Header'
import Skills from './components/Skills'
import { useState } from 'react'

export default function Home() {
  const imageText = '</>'

  const email = 'Jordan@jRobertsWeb.dev'
  const [dark, setDark] = useState(true)

  return (
    <>
      <div className='container'>
        <Header dark={dark} toggleDark={() => setDark(!dark)} />
        <div className='mobile'>
          <h1>Jordan Roberts</h1>
        </div>
        <div className='main'>
          <div className='col bio'>
            <h1 className='desktop'>Jordan Roberts</h1>
            <h2>Full stack web developer</h2>
            <div className='text'>
              <p>
                In 2021 I discovered my passion for code and thus began a journey to learn as much as I can about web
                development.
              </p>
              <p>I love honing my skills and making things for the Internet. </p>
            </div>

            <p className='email'>{email}</p>
          </div>
          <div className='col image'>
            <span>{imageText}</span>
          </div>
        </div>
      </div>

      <Skills id='skills' dark={dark} />

      <style jsx>
        {`
          .container {
            height: 100vh;
            background-color: ${dark ? 'var(--clr-bg-d)' : 'var(--clr-bg-l)'};
            width: calc(100vw - 40px);
            max-width: 1600px;
            margin: 10px auto;
            border: 2px solid ${dark ? 'var(--clr-text-dp)' : 'var(--clr-text-s)'};
            border-radius: 55px;
            transition: background-color 0.5s ease;
          }
          .main {
            padding: 0 7%;
            display: flex;
            justify-content: center;
          }
          .col {
            padding: 10% 0 0 0;
          }
          .image {
          }
          .bio {
            width: 55%;
          }
          h1 {
            font-family: var(--ff-poppins);
            font-weight: 500;
            font-size: clamp(4rem, 2.7143rem + 2.2857vw, 5rem);
            color: ${dark ? 'var(--clr-text-dp)' : 'var(--clr-text-p)'};
          }
          .desktop {
            display: block;
          }

          h2 {
            font-family: var(--ff-mont);
            font-size: clamp(1.5rem, 0.2143rem + 2.2857vw, 2.5rem);
            font-weight: 600;
            color: ${dark ? 'var(--clr-text-ds)' : 'var(--clr-text-s)'};
          }
          .text {
            margin-block: 3rem;
          }
          p {
            max-width: 400px;
            font-family: var(--ff-mont);
            font-weight: 500;
            font-size: 16px;
            margin-block: 1rem;
            color: ${dark ? 'var(--clr-text-ds)' : 'var(--clr-text-s)'};
          }
          .email {
            font-weight: 400;
            font-family: var(--ff-poppins);
            color: ${dark ? 'var(--clr-text-ds)' : 'var(--clr-text-s)'};
            opacity: ${dark ? '50%' : '75%'};
          }
          .image {
            display: flex;
          }
          span {
            font-family: var(--ff-rubik);
            font-size: clamp(15rem, 2.1429rem + 22.8571vw, 25rem);
            line-height: 1;
            max-width: 900px;
            margin: 0 auto;
            padding-top: 2rem;
            background-color: hsl(185, 100%, 49.2%);
            background-image: var(--gradient);
            background-size: 300% 300%;
            background-clip: text;

            animation: gradient 5s ease infinite;
            color: transparent;
          }
          .mobile {
            display: none;
          }
          @keyframes gradient {
            0% {
              background-position: 0% 100%;
            }
            50% {
              background-position: 100% 0%;
            }
            100% {
              background-position: 0% 100%;
            }
          }

          @media (max-width: 1250px) {
            h1 {
              font-size: 52px;
            }
            .bio {
              min-width: 300px;
              max-width: 500px;
            }
            .col {
              padding-top: 18%;
            }
          }
          @media (max-width: 950px) {
            .desktop {
              display: none;
            }
            .mobile {
              display: flex;
              flex-direction: column;
              padding: 7rem 7% 2rem;
            }

            .main {
              gap: 1rem;
            }
            .col {
              padding-top: 0%;
            }
            h1 {
              font-size: 68px;
            }
            h2 {
              font-size: 28px;
            }
          }
        `}
      </style>
      <style jsx global>
        {`
          body {
            background-color: ${dark ? 'var(--clr-bg-d)' : 'var(--clr-bg-l)'};
            transition: background-color var(--transition);
          }
        `}
      </style>
    </>
  )
}
