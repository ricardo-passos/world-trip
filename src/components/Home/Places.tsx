import { Box, Text, Wrap, WrapItem, useBreakpointValue } from '@chakra-ui/react'

// components
import {
  ListDotIcon,
  CockTailIcon,
  SurfIcon,
  BuildingIcon,
  MuseumIcon,
  EarthIcon,
} from '../icons'

// types
import type { FunctionComponent } from 'react'

type ItemPros = {
  children: string
  icon: FunctionComponent
}

function Item({ children, icon: Icon }: ItemPros) {
  const isWideScreen = useBreakpointValue({
    base: false,
    md: true,
    lg: true,
  })

  return (
    <WrapItem
      color='dark.400'
      fontWeight={['500', null, '600']}
      fontSize={['18px', null, '24px']}
      alignItems='center'
      flexDirection={['row', null, 'column']}
    >
      {isWideScreen ? (
        <Box w='85px' h='85px'>
          <Icon />
        </Box>
      ) : (
        <ListDotIcon />
      )}
      <Text as='span' d='inline-block' pt={[null, null, '24px']}>
        {children}
      </Text>
    </WrapItem>
  )
}

function Places() {
  return (
    <Wrap
      justify='center'
      spacing={['10px', '40px', '60px', '80px', '100px']}
      pt={['36px', null, '80px']}
      px={['50px', null, '100px']}
    >
      <Item icon={CockTailIcon}>vida noturna</Item>
      <Item icon={SurfIcon}>praia</Item>
      <Item icon={BuildingIcon}>moderno</Item>
      <Item icon={MuseumIcon}>clássico</Item>
      <Item icon={EarthIcon}>e mais...</Item>
    </Wrap>
  )
}

export { Places }
