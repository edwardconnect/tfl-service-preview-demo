import { Container, HStack } from '@chakra-ui/react'
import type { NextPage } from 'next'
import Head from 'next/head'
import ServiceContent from '../components/ServiceContent'
import Menu from '../components/Menu'
import { useRouter } from 'next/router'
import SearchBikePointContent from '../components/SearchBikePointContent'
import { searchBikePointServiceId } from '../shared/url.constant'

const Home: NextPage = () => {
  const router = useRouter()
  const isSearchBikePoint = router.query.serviceId === searchBikePointServiceId

  return (
    <Container maxW="full">
      <Head>
        <title>Tfl Service</title>
      </Head>
      <HStack w="full" align="flex-start">
        <Menu />
        {
          isSearchBikePoint
            ? <SearchBikePointContent />
            : <ServiceContent />
        }
      </HStack>
    </Container>
  )
}

export default Home
