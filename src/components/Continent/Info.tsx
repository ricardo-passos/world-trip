import { Box, Text, Flex, HStack, Divider } from '@chakra-ui/react'

type Props = {
  description: string
  countries: number
  languages: number
}

function Info({ description, countries, languages }: Props) {
  return (
    <Flex
      direction={['column', null, null, 'row']}
      align={['start', null, null, 'center']}
      justify='space-between'
      gridColumnGap={['40px']}
      px={['16px', '32px', null, '140px']}
    >
      <Box maxW={['100%', null, null, '500px']} textAlign='justify'>
        <Text
          color='dark.400'
          fontWeight='400'
          fontSize={['14px', null, '24px']}
          pt='24px'
          textAlign='justify'
        >
          {description}
        </Text>
      </Box>
      <HStack pt='16px' spacing={['22px', null, '42px']} h='73px'>
        <Flex direction='column'>
          <Text
            as='span'
            color='highlight.450'
            fontWeight='600'
            fontSize='24px'
          >
            {countries}
          </Text>
          <Text
            as='span'
            d='block'
            fontWeight='600'
            fontSize='24px'
            color='dark.400'
          >
            Países
          </Text>
        </Flex>
        <Divider orientation='vertical' bg='dark.400' h='50%' />
        <Flex direction='column'>
          <Text
            as='span'
            color='highlight.450'
            fontWeight='600'
            fontSize='24px'
          >
            {languages}
          </Text>
          <Text
            as='span'
            d='block'
            fontWeight='600'
            fontSize='24px'
            color='dark.400'
          >
            Línguas
          </Text>
        </Flex>
      </HStack>
    </Flex>
  )
}

export { Info }
