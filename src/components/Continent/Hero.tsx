import {
  Center,
  Box,
  Heading,
  Grid,
  useBreakpointValue,
} from '@chakra-ui/react'
import Image from 'next/image'

type Props = {
  title: string
  banner: string
}

function Hero({ title, banner }: Props) {
  const isWideScreen = useBreakpointValue({
    base: false,
    md: true,
    lg: true,
  })

  return (
    <Center position='relative' w='100%' h={['150px', null, '500px']}>
      <Image
        src={banner}
        layout='fill'
        objectFit='cover'
        objectPosition='center'
        priority
        quality={isWideScreen ? 100 : 70}
      />
      {isWideScreen ? (
        <Grid
          gridTemplateColumns='1fr 1fr'
          gridTemplateRows='1fr 1fr'
          w='100%'
          h='100%'
          position='absolute'
        >
          <Heading
            gridArea='2 / 1'
            alignSelf='end'
            mb='59px'
            ml={[null, '32px', null, '142px']}
            fontWeight='600'
            fontSize={['28px', null, '48px']}
            bottom='65px'
            left='50px'
          >
            {title}
          </Heading>
        </Grid>
      ) : (
        <Box position='absolute'>
          <Heading fontWeight='600' fontSize={['28px', null, '48px']}>
            {title}
          </Heading>
        </Box>
      )}
    </Center>
  )
}

export { Hero }
