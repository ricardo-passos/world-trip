import { Box } from '@chakra-ui/react'

// components
import { Hero } from '../components/Continent/Hero'
import { Info } from '../components/Continent/Info'
import { Cities } from '../components/Continent/Cities'

function Continent() {
  return (
    <Box>
      <Hero />
      <Info />
      <Cities />
    </Box>
  )
}

export default Continent
