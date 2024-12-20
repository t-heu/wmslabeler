import { Roboto } from 'next/font/google'
import localFont from 'next/font/local'
 
// define your variable fonts
const roboto = Roboto({
  weight: ['400', '700'],
  style: ['normal', 'italic'],
  subsets: ['latin'],
  display: 'swap',
})
// define a custom local font where ConnectCode39.ttf is stored in the styles folder
const greatVibes = localFont({ src: './fonts/ConnectCode39.ttf' })
 const code128 = localFont({ src: './fonts/CODE128.woff' })
 
export { roboto, greatVibes, code128 }