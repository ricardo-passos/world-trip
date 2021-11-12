import { Box, SimpleGrid, Link as ChakraLink } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import Link from 'next/link'

// components
import { LogoIcon, GoBackIcon } from '../icons'

function Header() {
  const { asPath } = useRouter()

  const farFromHome = asPath.length > 1

  return (
    <SimpleGrid
      as='header'
      h='50px'
      alignItems='center'
      columns={farFromHome ? 3 : 1}
    >
      {farFromHome && (
        <Link href='/' passHref>
          <ChakraLink w='min-content' ml='10px'>
            <GoBackIcon />
          </ChakraLink>
        </Link>
      )}
      <Box justifySelf='center'>
        <LogoIcon />
      </Box>
    </SimpleGrid>
  )
}

export { Header }
