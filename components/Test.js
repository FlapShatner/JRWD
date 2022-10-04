/* eslint-disable @next/next/no-img-element */
import { animated, useSpring, useTransition, useSpringRef, useChain, config } from '@react-spring/web'
import { useState } from 'react'

export default function Test() {
  const items = [
    {
      data: 'Tattooed pop-up JOMO, fixie actually lomo ugh hashtag unicorn kale chips. Mustache irony literally umami truffaut enamel pin 8-bit neutra 90s vinyl crucifix.',
      key: 1,
    },
    {
      data: 'Vibecession bushwick iceland fam, leggings kickstarter live-edge williamsburg. Literally viral migas sustainable, food truck portland PBR&B cloud bread tumeric ',
      key: 2,
    },
    { data: ' Glossier master cleanse pork belly try-hard gochujang. Health goth ethical cliche mlkshk ', key: 3 },
  ]

  const [on, toggle] = useState(false)
  const Card = animated.div

  const widthRef = useSpringRef()
  const { width } = useSpring({
    ref: widthRef,
    from: { width: '75%' },
    to: { width: on ? '100%' : '75%' },
    config: config.default,
  })

  const heightRef = useSpringRef()
  const { height } = useSpring({
    ref: heightRef,
    from: { height: '50px' },
    to: { height: on ? '300px' : '50px' },
    config: config.default,
  })

  const transRef = useSpringRef()
  const transition = useTransition(on ? items : [], {
    ref: transRef,
    trail: 200 / items.length,
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
  })

  // const { backgroundColor, x } = useSpring({
  //   backgroundColor: on ? '#fff' : 'tomato',
  //   x: on ? -50 : 0,
  // })

  useChain(on ? [widthRef, heightRef, transRef] : [transRef, widthRef, heightRef], [0, on ? 0.4 : 0.5, on ? 0.5 : 0.4])

  return (
    <>
      <div className='wrap'>
        <Card style={{ width: width, height: height }} onClick={() => toggle(!on)} className='box'>
          <h1>TESTING</h1>
          <div>
            {transition((animation, i) => (
              <animated.p style={animation}>{i.data}</animated.p>
            ))}
          </div>
        </Card>
      </div>
      <style jsx>
        {`
          .wrap {
            max-width: 300px;
            position: relative;
            height: min-content;
          }
          .box {
            position: absolute;

            background-color: var(--clr-bg-l);
            border-radius: 24px;
          }
          h1 {
            text-align: center;
            padding-left: 1rem;
            display: inline-block;
            max-width: 300px;
          }
        `}
      </style>
    </>
  )
}
