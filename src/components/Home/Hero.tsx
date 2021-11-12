import { Flex, Box, Heading, Text, useBreakpointValue } from '@chakra-ui/react'
import Image from 'next/image'

// components
import { AirPlaneIcon } from '../icons'

function Hero() {
  const isWideScreen = useBreakpointValue({
    base: false,
    md: true,
    lg: true,
  })

  return (
    <Box w='100%' h={['163px', null, '335px']} position='relative'>
      <Image
        src='/background.png'
        layout='fill'
        alt='céu à noite. estrelado.'
        quality={isWideScreen ? 100 : 50}
        priority
      />
      <Flex
        position='absolute'
        h='100%'
        w='100%'
        align='center'
        justify='space-evenly'
        gridColumnGap='10px'
        p='20px'
      >
        <Box maxW='524px'>
          <Heading fontWeight='500' fontSize={['20px', null, '36px']}>
            5 Continentes, <br /> infinitas possibilidades.
          </Heading>
          <Text
            fontWeight='400'
            fontSize={['14px', null, '20px']}
            mt={['8px', null, '20px']}
          >
            Chegou a hora de tirar do papel a viagem que você sempre sonhou.{' '}
          </Text>
        </Box>
        {isWideScreen && (
          <Box position='relative' top='50px' w={[null, '417px']} h={[null, '270px']}>
            <AirPlaneIcon />
          </Box>
        )}
      </Flex>
    </Box>
  )
}

export { Hero }
