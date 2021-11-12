import { Box, Divider } from '@chakra-ui/react'

// components
import { Hero } from '../components/Home/Hero'
import { Places } from '../components/Home/Places'
import { Slider } from '../components/Home/Slider'

function Home() {
  return (
    <Box>
      <Hero />
      <Places />
      <Divider
        bg='dark.400'
        h='1px'
        w='60px'
        mx='auto'
        mt={['36px', null, '80px']}
      />
      <Slider />
    </Box>
  )
}

export default Home
