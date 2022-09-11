export function Header() {
  const logo = '{J}'
  return (
    <>
      <header>
        <div className='logo'>{logo}</div>
        <nav>
          <li>
            <a href='#'>Projects</a>
          </li>
          <li>
            <a href='#'>Contact me</a>
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
          gap: 120px;
          margin-right: 130px;
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
          font-family: var(--ff-poppins);
          font-size: 24px;
          font-weight: 500;
          color: var(--clr-text-p);
        }
      `}</style>
    </>
  )
}
