import { Header } from './components/Header'

export default function Home() {
  const imageText = '</>'

  const email = 'Jordan@jRobertsWeb.dev'

  return (
    <>
      <div className='container'>
        <Header />
        <div className='main'>
          <div className='bio'>
            <h1>Jordan Roberts</h1>
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
          <div className='image'>
            <span>{imageText}</span>
          </div>
        </div>
      </div>

      <style jsx>
        {`
          .container {
            height: 100vh;
            background-color: var(--clr-bg-l);
          }
          .main {
            display: flex;
            margin: 12vh 140px;
            justify-content: center;
          }
          .bio {
            width: 500px;
            min-width: 500px;
          }
          h1 {
            font-family: var(--ff-poppins);
            font-weight: 500;
            font-size: 64px;
            color: var(--clr-text-p);
          }
          h2 {
            font-family: var(--ff-mont);
            font-weight: 600;
            color: var(--clr-text-s);
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
          }
          .email {
            font-weight: 400;
            font-family: var(--ff-poppins);
            color: var(--clr-text-s);
            opacity: 75%;
          }
          .image {
            display: flex;
          }
          span {
            font-family: var(--ff-rubik);
            font-size: 280px;
            line-height: 1;
            padding-top: 40px;
            padding-left: 60px;
            background-color: hsl(185, 100%, 49.2%);
            background-image: var(--gradient);
            background-size: 100%;
            background-clip: text;
            color: transparent;
          }

          @media (max-width: 1115px) {
            h1 {
              font-size: 48px;
            }
            .bio {
              min-width: 300px;
              max-width: 500px;
            }
            span {
              font-size: 200px;
              padding-left: auto;
            }
          }
        `}
      </style>
    </>
  )
}
