import { Contact } from './Contact'
import { animated, config, useTransition } from '@react-spring/web'

export const ModalWrap = ({ show, dark }) => {
  const transition = useTransition(show, {
    from: { opacity: 1, transform: 'translateX(440px)' },
    enter: { opacity: 1, transform: 'translateX(0px)', config: config.gentle },
    leave: { opacity: 1, transform: 'translateX(440px)', config: config.gentle },
  })

  return transition((styles, show) => show && <Contact dark={dark} styles={styles} />)
}
