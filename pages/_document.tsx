import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body className='h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-track-indigo-800 scrollbar-thumb-gray-50 scrollbar-hide'>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
