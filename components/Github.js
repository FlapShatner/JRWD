/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */

export default function Github({ dark, data, repos, close, isOpen }) {
  const txtClr = !dark ? 'var(--clr-text-dp)' : 'var(--clr-text-p)'
  const txtClrSec = !dark ? 'var(--clr-text-ds)' : 'var(--clr-text-s)'
  const repoLength = repos.length

  return (
    <>
      <div className='card'>
        <div className='icon' onClick={close}>
          <img className='close' src='/img/close.svg' alt='Close Profile Card' />
        </div>
        <div className='avatar'>
          <a href={data.html_url}>
            <img className='prof-pic' src={data.avatar_url} alt='github avatar picture' />
          </a>
        </div>
        <h3 className='name'>{data.name}</h3>
        <p className='i username'>
          <img className='github' src='/img/github.svg' />
          <a href={data.html_url}>{data.login}</a>
        </p>

        <p className='i bio'>{data.bio}</p>
        <p className='i location'>{data.location}</p>

        <div className='i repos'>{repoLength} repos</div>
      </div>
      <style jsx>
        {`
          .card {
            position: relative;
            right: 93px;
            top: 85px;
            max-width: 300px;
            background-color: ${!dark ? 'var(--clr-text-p)' : 'var(--clr-text-dp)'};

            border-radius: 55px;
            display: ${isOpen ? 'flex' : 'none'};
            flex-direction: column;
            align-items: center;
            padding: 2rem 2rem;
            transition: all 0.5s ease;
            isolation: isolate;
            z-index: 99;
          }
          .icon {
            position: absolute;
            top: 15px;
            right: 20px;
            cursor: pointer;
          }

          .close {
            width: 36px;
            opacity: 85%;
            filter: ${!dark && 'invert(1)'};
          }
          .avatar {
            width: 200px;
            height: 200px;
          }
          img.prof-pic {
            border-radius: 50%;
          }
          .name {
            font-family: var(--ff-poppins);
            font-weight: 500;
            color: ${txtClr};
          }
          .i {
            font-family: var(--ff-mont);
            color: ${txtClrSec};
            margin: 0.6rem;
            text-align: center;
          }
          .username {
            display: flex;
          }
          .github {
            filter: ${!dark && 'invert(0.8)'};
            width: 18px;
          }

          a {
            color: ${txtClrSec};
            text-decoration: underline;
          }
        `}
      </style>
    </>
  )
}
