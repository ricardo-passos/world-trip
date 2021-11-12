import {
  Box,
  Flex,
  Heading,
  Text,
  Wrap,
  useBreakpointValue,
} from '@chakra-ui/react'
import Image from 'next/image'

// db
import database from '../../../server/db.json'

type CityCardProps = {
  country: string
  city: string
  banner: string
  icon: string
}

function CityCard({ country, city, banner, icon }: CityCardProps) {
  const isWideScreen = useBreakpointValue({
    base: false,
    md: true,
    lg: true,
  })

  return (
    <Box
      border='1px'
      borderColor='highlight.150'
      borderRadius='md'
      overflow='hidden'
      width='256px'
      mx='auto'
      transition='all 200ms'
      cursor={[null, null, 'pointer']}
      _hover={{ boxShadow: 'md', transform: 'translateY(-10px)' }}
    >
      <Box>
        <Image
          src={`/${banner}`}
          alt={city}
          height='173px'
          width='256px'
          quality='10'
        />
      </Box>
      <Flex justify='space-between' align='center' px='24px' py='16px'>
        <Flex direction='column'>
          <Heading
            as='strong'
            fontWeight='600'
            fontSize='20px'
            color='dark.400'
          >
            {city}
          </Heading>
          <Text as='span' fontWeight='500' fontSize='16px' color='dark.700'>
            {country}
          </Text>
        </Flex>
        <Box>
          <Image
            src={`/${icon}`}
            alt={city}
            width='30px'
            height='30px'
            quality={isWideScreen ? 100 : 50}
          />
        </Box>
      </Flex>
    </Box>
  )
}

function Cities() {
  return (
    <Box px={['16px', '32px', null, '140px']} pt='32px' pb='16px'>
      <Heading color='dark.400' fontWeight='500' fontSize='24px' mb='20px'>
        Cidades
      </Heading>
      <Wrap columns={[1, 2, 4]} spacing='20px' justify='center'>
        {database.continents[0].most_visited_cities.map(
          ({ country, city, icon, banner }) => (
            <CityCard
              key={city}
              country={country}
              city={city}
              banner={banner}
              icon={icon}
            />
          )
        )}
      </Wrap>
    </Box>
  )
}

export { Cities }
