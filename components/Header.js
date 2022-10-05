/* eslint-disable @next/next/no-img-element */

import Link from 'next/link'

export default function Header({ toggleDark, dark, contactOpen }) {
  const darkToggle = dark ? 'Light' : 'Dark'

  const logo = '{J}'
  return (
    <>
      <header>
        <div className='logo'>{logo}</div>
        <nav>
          <li>
            <label className='toggle-wrapper' htmlFor='toggle'>
              <div className={`toggle ${dark ? 'dark' : 'light'}`}>
                <span className='hidden'>{dark ? 'Dark Mode' : 'Light Mode'}</span>
                <div className='icons'>
                  <img className='sun' src={'/img/sun.svg'} width='26px' height='26px' alt='sun' />
                  <img className='moon' src={'/img/moon.svg'} width='26px' height='26px' alt='moon' />
                </div>
                <input type='checkbox' name='toggle' id='toggle' checked={dark} onChange={toggleDark} />
              </div>
            </label>
          </li>
          <li>
            <Link href='#projects'>
              <a>Projects</a>
            </Link>
          </li>
          <li onClick={contactOpen}>
            <a>Contact Me</a>
          </li>
        </nav>
      </header>
      <style jsx>{`
        header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        nav {
          display: flex;
          align-items: center;
          gap: 50px;
          margin-right: 5rem;
        }
        .logo {
          font-family: var(--ff-heebo);
          font-size: 48px;
          line-height: 1;
          margin: 1.5rem;
          background-color: hsl(185, 100%, 49.2%);
          background-image: var(--gradient);
          background-size: 100%;
          background-clip: text;
          color: transparent;
        }

        a {
          cursor:pointer;
          position: relative;
          font-family: var(--ff-poppins);
          font-size: 24px;
          font-weight: 500;
          color: ${dark ? 'var(--clr-text-dp)' : 'var(--clr-text-p)'};
          transition: text-shadow 0.2s ease;
        }

        a:hover {
          text-shadow: ${
            dark &&
            '0 0 5px var(--shadow), 0 0 10px var(--shadow), 0 0 15px var(--shadow), 0 0 20px var(--shadow), 0 0 25px var(--shadow);'
          };
        }
        a::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 2px;
          background-color: ${dark ? 'var(--clr-text-ds)' : 'var(--clr-text-s)'};
          transform: scaleX(0);
          transition: transform var(--transition);
          transform-origin: right center;
        }
        a:hover::after {
          box-shadow: 0 0 5px var(--shadow), 0 0 10px var(--shadow), 0 0 15px var(--shadow);
          transform: scaleX(1);
          transform-origin: left center;
          transition-duration: 0.5s;
        }

        .hidden {
          clip: rect(0 0 0 0);
          clip-path: inset(50%);
          height: 1px;
          overflow: hidden;
          position: absolute;
          white-space: nowrap;
          width: 1px;
        }
        .toggle-wrapper {
          width: min-content;
          display: block;
        }
        .toggle {
          height: 36px;
          width: 65px;
          background-color: var(--clr-text-s);
          border-radius: 40px;
          padding: 0;
          position: relative;
          margin: auto;
          cursor: pointer;
        }
        .toggle.dark {
          background-color: var(--clr-bg-l);
        }
        .toggle::before {
          content: '';
          display: block;
          height: 30px;
          width: 30px;
          border-radius: 30px;
          background-color: var(--clr-bg-l);
          position: absolute;
          top: 3px;
          left: 3px;
          transform: translate(0);
          transition: all var(--transition);
        }
        .toggle.dark::before {
          background-color: var(--clr-bg-d);
          transform: translateX(29px);
        }
        .toggle input {
          position: absolute;
          top: 0;
          opacity: 0;
        }
        .icons {
          display: flex;
          align-items: center;
          height: 100%;
          padding-left: 5px;
          gap: 2px;
        }
        @media (max-width: 950px) {
          a {
            font-size: 18px;
          }
        }
        @media (max-width: 770px) {
          nav {
            gap: 2rem;
            width:100%;
            margin-right:1rem;
          }
          a{
            font-size: 16px;
          }
          
          
          }
        }
      `}</style>
    </>
  )
}

// .toggle-wrapper {
//   position: absolute;
//   top: 120px;
//   right: 3rem;
