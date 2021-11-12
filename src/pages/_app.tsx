import { ChakraProvider } from '@chakra-ui/react'

// components
import { Header } from '../components/Layout/Header'

// styles
import { theme } from '../styles/theme'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

// types
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Header />
      <Component {...pageProps} />
    </ChakraProvider>
  )
}

export default MyApp
