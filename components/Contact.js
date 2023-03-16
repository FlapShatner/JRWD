import { Email } from './Email'
import { Twitter } from './Twitter'
import { Github } from './Github'
import { animated } from '@react-spring/web'
import { useClickOutside } from '../hooks/useClickOutside'
import { useRef } from 'react'

export const Contact = ({ dark, styles, close }) => {
  const Container = animated.div

  const ref = useRef()
  useClickOutside(ref, close)

  return (
    <>
      <Container ref={ref} style={styles} className='container'>
        <Email close={close} dark={dark} />
        <Twitter dark={dark} />
        <Github dark={dark} />
      </Container>
      <style jsx>{`
        .container {
          position: absolute;
          right: 75px;
          display: flex;
          flex-direction: column;
          z-index: 20;
        }
      `}</style>
    </>
  )
}
