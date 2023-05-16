import Link from 'next/link'

export const Github = ({ dark }) => {
  const txtClrInv = !dark ? 'var(--clr-text-dp)' : 'var(--clr-text-p)'
  return (
    <>
      <div className='github'>
        <Link href='https://github.com/FlapShatner'>
          <a target='_blank' className='inner'>
            <img className='svg' src='img/github.svg' alt='github logo' />
            <h2>FlapShatner</h2>
          </a>
        </Link>
      </div>
      <style jsx>
        {`
          h2 {
            font-family: var(--ff-primary);
            font-weight: 400;
            color: ${txtClrInv};
            cursor: pointer;
          }
          .github {
            padding: 1rem 2rem;
            border-radius: 55px;
            background-color: ${!dark ? 'var(--clr-text-p)' : 'var(--clr-bg-l)'};
            max-width: 100%;
            display: flex;
          }
          .inner {
            position: relative;
            display: flex;
            width: 100%;
            justify-content: center;
          }
          .svg {
            position: absolute;
            filter: ${!dark && 'invert(0.8)'};
            width: 40px;
            left: 0px;
          }
        `}
      </style>
    </>
  )
}
