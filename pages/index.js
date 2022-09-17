import Head from 'next/head'
import Header from '../components/Header'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Footer from '../components/Footer'
import { useState } from 'react'

export default function Home({ data, repos }) {
  const imageText = '</>'
  const bio =
    "I have always been fascinated by the Internet's nuts and bolts, so a few years ago I set about teaching myself everything I could about web development."

  const email = 'Jordan@jRobertsWeb.dev'
  const [dark, setDark] = useState(true)

  return (
    <>
      <div className='wrapper'>
        <Head>
          <title>Jordan Roberts</title>
          <meta name='viewport' content='width=500' />
        </Head>
        <div className='container'>
          <Header dark={dark} data={data} repos={repos} toggleDark={() => setDark(!dark)} />

          <div className='mobile'>
            <h1>Jordan Roberts</h1>
            <h2>Full stack web developer</h2>
          </div>
          <div className='main'>
            <div className='col bio'>
              <h1 className='desktop'>Jordan Roberts</h1>
              <h2 className='desktop'>Full stack web developer</h2>
              <div className='text'>
                <p>{bio}</p>
                <p>Now I spend my time putting together the nuts and bolts and building things for the Internet</p>
                <p> Solving problems and making cool stuff with code is my favorite thing.</p>
              </div>

              <p className='email'>{email}</p>
            </div>
            <div className='col image'>
              <span>{imageText}</span>
            </div>
          </div>
        </div>

        <Skills id='skills' dark={dark} />
        <Projects dark={dark} />
        <Footer dark={dark} />
      </div>

      <style jsx>
        {`
          .wrapper {
            padding: 0.5rem 1rem;
          }
          .container {
            min-height: 100vh;
            background-color: ${dark ? 'var(--clr-bg-d)' : 'var(--clr-bg-l)'};
            width: 100%;
            max-width: 1600px;
            margin: 0 auto;
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
            padding: 0;
            align-items: center;
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
            .bio {
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
              padding: 4rem;
              text-align: center;
            }
            .image {
              align-items: flex-start;
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
          @media (max-width: 770px) {
            .main {
              flex-direction: column-reverse;
            }
            h1 {
              margin-top: 3rem;
              font-size: 4.5rem;
              line-height: 1.25;
            }
            h2 {
              margin-top: 2rem;
              font-size: 2rem;
              line-height: 1.25;
            }
            span {
              max-width: 400px;
              font-size: 250px;
              padding: 0;
            }
            .bio {
              width: 100%;
              max-width: 100%;
            }
            p {
              line-height: 1.5;
              max-width: 90%;
              margin: 2rem auto;
              text-align: center;
              font-size: 1.5rem;
            }
            .email {
              margin-bottom: 2rem;
            }
            .text {
              margin-top: 1rem;
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

export async function getStaticProps(ctx) {
  const API_URL = 'https://api.github.com/users/FlapShatner'
  const REPO_URL = 'https://api.github.com/users/FlapShatner/repos'

  const getUser = async () => {
    const res = await fetch(API_URL)
    const data = await res.json()
    if (data && data.message !== 'Not Found') {
      // console.log(data)
      return data
    } else {
      console.log('Could not get data')
    }
  }

  const getRepos = async () => {
    const res = await fetch(REPO_URL)
    const data = await res.json()
    if (data && data.message !== 'Not Found') {
      // console.log(data)
      return data
    } else {
      console.log('Could not get data')
    }
  }

  const data = await getUser()
  const repos = await getRepos()

  return {
    props: { data, repos },
  }
}
