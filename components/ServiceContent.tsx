import React from 'react'
import { CheckCircleIcon } from '@chakra-ui/icons'
import { Box, Center, Flex, ListItem, Text, UnorderedList } from '@chakra-ui/react'
import { useRouter } from 'next/router'
import { useTlfServiceStatusesData } from '../hooks/data'
import ContentLayout from './ContentLayout'

const ServiceContent: React.FC = () => {
  const router = useRouter()
  const serviceStatusData = useTlfServiceStatusesData()
  const serviceId = router.query && (router.query.serviceId as string)

  return (
    <ContentLayout >
      {
        serviceStatusData && router.query.serviceId
          ? (
            <Box>
              <Box>
                {
                  serviceStatusData.serviceEntities[serviceId].hasDisruption
                    ? (
                      <UnorderedList>
                        {
                          serviceStatusData.serviceEntities[serviceId].lineStatuses
                            .filter((it) => it.statusSeverity !== 10)
                            .map((it, idx) => (
                              <ListItem fontSize="xl" key={idx}>
                                {it.statusSeverityDescription}
                              </ListItem>
                            ))
                        }
                      </UnorderedList>
                    )
                    : (
                      <Flex>
                        <Center mr="2">
                          <CheckCircleIcon color="green" fontSize="xl" />
                        </Center>
                        <Center>
                          <Text fontSize="xl">No Service Disruptions</Text>
                        </Center>
                      </Flex>
                    )
                }
              </Box>
            </Box>
          )
          : (
            <Text fontSize="2xl" color="gray.500">Please Select Service</Text>
          )
      }
      {/* {
        serviceStatusData && router.query.serviceId
          ? (
            <Box>
              {
                isSearchBikePoint
                  ? (
                    <Box>
                      <form onSubmit="">
                        <Input placeholder="Search and press enter" />
                      </form>
                    </Box>
                  )
                  : (
                    <Box>
                      {
                        serviceStatusData.serviceEntities[serviceId].hasDisruption
                          ? (
                            <UnorderedList>
                              {
                                serviceStatusData.serviceEntities[serviceId].lineStatuses
                                  .filter((it) => it.statusSeverity !== 10)
                                  .map((it, idx) => (
                                    <ListItem fontSize="xl" key={idx}>
                                      {it.statusSeverityDescription}
                                    </ListItem>
                                  ))
                              }
                            </UnorderedList>
                          )
                          : (
                            <Flex>
                              <Center mr="2">
                                <CheckCircleIcon color="green" fontSize="xl" />
                              </Center>
                              <Center>
                                <Text fontSize="xl">No Service Disruptions</Text>
                              </Center>
                            </Flex>
                          )
                      }
                    </Box>
                  )
              }
            </Box>
          )
          : (
            <Text fontSize="2xl" color="gray.500">Please Select Service</Text>
          )
      } */}
    </ContentLayout>
  )
}

export default ServiceContent
