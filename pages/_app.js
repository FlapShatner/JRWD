import { Analytics } from '@vercel/analytics'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
 return (
  <>
   <Component {...pageProps} />
   <Analytics />
  </>
 )
}

export default MyApp
