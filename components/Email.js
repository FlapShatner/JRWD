import { useClipboard } from 'use-clipboard-copy'
import { useState } from 'react'

export const Email = ({ dark, close }) => {
  const txtClrInv = !dark ? 'var(--clr-text-dp)' : 'var(--clr-text-p)'
  const txtClrSec = dark ? 'var(--clr-text-ds)' : 'var(--clr-text-s)'

  //   Clipboard API
  const clipboard = useClipboard({
    copiedTimeout: 800, // timeout duration in milliseconds
  })

  const handleCopy = () => {
    const address = 'jordan@jrobertsweb.dev'
    clipboard.copy(address)
  }

  //   Send message with Sendgrid
  const [message, setMessage] = useState('')
  const [email, setEmail] = useState('')
  const [btnTxt, setBtnTxt] = useState('Send')
  const [errors, setErrors] = useState({})
  const [isError, setIsError] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const validate = () => {
    let tempErrors = {}
    let isValid = true

    if (email.length <= 0) {
      tempErrors['email'] = true
      isValid = false
    }

    if (message.length <= 0) {
      tempErrors['message'] = true
      isValid = false
    }

    setErrors({ ...tempErrors })
    console.log('errors', errors)
    return isValid
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setBtnTxt('Sending')
    let formIsValid = validate()

    if (formIsValid) {
      const res = await fetch('api/sendgrid', {
        body: JSON.stringify({
          email: email,
          message: message,
        }),
        headers: {
          'Content-Type': 'application/json',
        },
        method: 'POST',
      })

      const { error } = await res.json()
      if (error) {
        console.log(error)
        setBtnTxt('Send')
        setIsError(true)
        setEmail('')
        setMessage('')
        return
      }
      setBtnTxt('Sent!')
      setIsSuccess('Message was delivered')
      setMessage('')
      setEmail('')
      console.log(email, message)
    }
  }

  return (
    <>
      <div className='email'>
        <img onClick={() => close()} src='/img/close.svg' />
        <h2 className='cta'>Email me:</h2>
        <h2 onClick={handleCopy}>Jordan@jrobertsweb.dev</h2>

        <button onClick={handleCopy} className='copy'>
          {clipboard.copied ? 'Copied' : 'Copy'}
        </button>
        <form onSubmit={handleSubmit}>
          <label htmlFor='message'>Or send me a message:</label>
          <textarea
            value={message}
            name='message'
            id='message'
            rows='4'
            onChange={(e) => {
              setMessage(e.target.value)
            }}
          />
          <label htmlFor='email'>Your email address:</label>
          <input
            value={email}
            name='email'
            id='email'
            type='email'
            onChange={(e) => {
              setEmail(e.target.value)
            }}
          />
          {isError && <p className='err'>Message failed to send</p>}
          {isSuccess && <p className='suc'>Message was delivered!</p>}
          <button type='submit' className='send'>
            {btnTxt}
          </button>
        </form>
      </div>
      <style jsx>{`
        .email {
          padding: 1rem 2rem;
          border-radius: 55px;
          background-color: ${!dark ? 'var(--clr-text-p)' : 'var(--clr-bg-l)'};
          max-width: max-content;
          display: flex;
          flex-direction: column;
          align-items: flex-end;
        }
        h2 {
          font-family: var(--ff-poppins);
          font-weight: 400;
          color: ${txtClrInv};

          cursor: pointer;
        }
        .cta {
          place-self: flex-start;
          font-size: 1rem;
        }
        button {
          color: ${txtClrSec};
          background-color: ${dark ? 'var(--clr-text-p)' : 'var(--clr-bg-l)'};
          border: 2px solid ${dark ? 'var(--clr-text-p)' : 'var(--clr-bg-l)'};
          border-radius: 15px;
          padding: 0 10px;
          font-family: var(--ff-poppins);
          font-weight: 500;
          cursor: pointer;
          font-size: 14px;
        }
        .copy {
          width: 90px;
        }
        form {
          display: flex;
          flex-direction: column;
          width: 100%;
          margin: 1rem auto;
        }
        label {
          font-family: var(--ff-poppins);
          color: ${txtClrInv};
        }
        input,
        textarea {
          border: none;
          background-color: var(--clr-text-ds);
          font-family: var(--ff-mont);
        }
        .send {
          margin-top: 1rem;
          width: 50%;
          align-self: flex-end;
        }
        p {
          font-family: var(--ff-mont);
        }
        .err {
          color: red;
        }
        .suc {
          color: green;
        }
        img {
          cursor: pointer;
        }
      `}</style>
    </>
  )
}
