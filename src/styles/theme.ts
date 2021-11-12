import { extendTheme } from '@chakra-ui/react'

const theme = extendTheme({
  colors: {
    highlight: {
      150: 'rgba(255, 186, 8, 0.5)',
      450: '#FFBA08',
    },
    dark: {
      0: '#000000',
      400: '#47585B',
      700: '#999999',
      800: 'rgba(153, 153, 153, 0.5)',
    },
    light: {
      0: '#FFFFFF',
      100: '#F5F8FA',
      300: '#DADADA',
    },
  },
  fonts: {
    heading: 'Poppins',
    body: 'Poppins',
  },
  styles: {
    global: {
      '.swiper-button-prev': {
        color: 'highlight.450',
      },
      '.swiper-button-next': {
        color: 'highlight.450',
      },
      '.swiper-pagination-bullet': {
        width: '8px',
        height: '8px',
        background: '#999999',
        opacity: '1',
      },
      '.swiper-pagination-bullet-active': {
        background: 'highlight.450',
      },
      body: {
        bg: 'light.100',
      },
    },
  },
})

export { theme }
