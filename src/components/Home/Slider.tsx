import {
  Box,
  Heading,
  Text,
  Center,
  Link as ChakraLink,
  useBreakpointValue,
} from '@chakra-ui/react'
import { Navigation, Pagination, A11y } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'
import Link from 'next/link'
import Image from 'next/image'

function Carousel() {
  const isWideScreen = useBreakpointValue({
    base: false,
    md: true,
    lg: true,
  })

  return (
    <Box pt='20px' pb='24px'>
      <Swiper
        cssMode
        loop
        modules={[Navigation, Pagination, A11y]}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true }}
      >
        <SwiperSlide>
          <Center
            h={['250px', null, '450px']}
            d='flex'
            textAlign='center'
            flexDirection='column'
            position='relative'
          >
            <Image
              src='/europe-background.jpg'
              alt='Estátua da liberdade'
              layout='fill'
              objectFit='cover'
              quality={isWideScreen ? 100 : 50}
            />
            <Box position='absolute'>
              <Link href='/europe' passHref>
                <ChakraLink>
                  <Text
                    as='strong'
                    color='light.100'
                    fontWeight='700'
                    fontSize={['24px', null, '48px']}
                  >
                    Europa
                  </Text>
                  <Text
                    as='span'
                    fontWeight='700'
                    fontSize={['14px', null, '24px']}
                    color='light.300'
                    d='block'
                  >
                    O continente mais antigo.
                  </Text>
                </ChakraLink>
              </Link>
            </Box>
          </Center>
        </SwiperSlide>
        <SwiperSlide>
          <Center
            h={['250px', null, '450px']}
            d='flex'
            textAlign='center'
            flexDirection='column'
            position='relative'
          >
            <Box filter='brightness(0.65)' boxSize='100%'>
              <Image
                src='/north-america-background.jpg'
                alt='Estátua da liberdade'
                layout='fill'
                objectFit='cover'
                quality={isWideScreen ? 100 : 50}
              />
            </Box>
            <Box position='absolute'>
              <Link href='/north-america' passHref>
                <ChakraLink>
                  <Text
                    as='strong'
                    color='light.100'
                    fontWeight='700'
                    fontSize={['24px', null, '48px']}
                  >
                    América do Norte
                  </Text>
                  <Text
                    as='span'
                    fontWeight='700'
                    fontSize={['14px', null, '24px']}
                    color='light.300'
                    d='block'
                  >
                    O novo mundo.
                  </Text>
                </ChakraLink>
              </Link>
            </Box>
          </Center>
        </SwiperSlide>
      </Swiper>
    </Box>
  )
}

function Slider() {
  return (
    <Box px={[null, null, '100px']}>
      <Heading
        px='30px'
        pt={['24px', null, '52px']}
        color='dark.400'
        fontWeight='500'
        fontSize={['20px', null, '36px']}
        textAlign='center'
      >
        Vamos nessa? <br /> Então escolha seu continente
      </Heading>
      <Carousel />
    </Box>
  )
}

export { Slider }
