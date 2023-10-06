import '@/styles/globals.css'

export default function App({ Component, pageProps }) {
  const getLayout = getLayout.Component || ((page) => page)
  return <Component {...pageProps} />
}
