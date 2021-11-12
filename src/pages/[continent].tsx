import { Box } from '@chakra-ui/react'

// components
import { Hero } from '../components/Continent/Hero'
import { Info } from '../components/Continent/Info'
import { Cities } from '../components/Continent/Cities'

// types
import { GetStaticProps, GetStaticPaths } from 'next'

const getStaticProps: GetStaticProps = async ({ params }) => {
  const continent = params?.continent

  const response = (
    await (await fetch(`http://localhost:3004/continents/${continent}`)).json()
  )[0]

  const continentInfo = {
    continent: response.continent,
    description: response.description,
    banner: response.banner,
    countries: response.countries,
    languages: response.languages,
    mostVisitedCities: response.most_visited_cities,
  }

  return {
    props: {
      continentInfo,
    },
  }
}

const getStaticPaths: GetStaticPaths = () => {
  return {
    paths: [
      { params: { continent: 'europe' } },
      { params: { continent: 'north-america' } },
    ],
    fallback: true,
  }
}

type Props = {
  continentInfo: {
    continent: string
    description: string
    countries: number
    languages: number
    banner: string
    mostVisitedCities: {
      country: string
      city: string
      icon: string
      banner: string
    }[]
  }
}

function Continent({ continentInfo }: Props) {
  return (
    <Box>
      <Hero title={continentInfo.continent} banner={continentInfo.banner} />
      <Info
        description={continentInfo.description}
        countries={continentInfo.countries}
        languages={continentInfo.languages}
      />
      <Cities mostVisitedCities={continentInfo.mostVisitedCities} />
    </Box>
  )
}

export { getStaticProps, getStaticPaths }

export default Continent
