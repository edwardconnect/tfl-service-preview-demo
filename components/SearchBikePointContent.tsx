import { Badge, Box, Input, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react'
import { useQueryClient } from 'react-query';
import { useFetchBikePoints } from '../hooks/service';
import ContentLayout from './ContentLayout';

const SearchBikePointContent: React.FC = () => {
  const queryClient = useQueryClient()
  const [searchText, setSearchText] = useState('')
  const { refetch: fetchBikePoint, data, isFetching } = useFetchBikePoints(searchText)
  
  useEffect(() => {
    if (searchText !== '' && !queryClient.getQueryData(['tflBikePoints', searchText])) {
      fetchBikePoint()
    }
  }, [searchText, queryClient])

  const submitSearchFormHandler = (event: any) => {
    event.preventDefault()
    setSearchText(event.target.searchText.value)
  }

  return (
    <ContentLayout>
      <Box onSubmit={submitSearchFormHandler} as="form" w="full" pl="10" pr="10">
        <Input id="searchText" placeholder="Search and press Enter" w="full" />
      </Box>
      <Box mt={8}>
        {
          searchText !== '' && data && data.length < 1 && <Text>{`No bike points found for ${searchText}`}</Text>
        }
        {
          searchText !== '' && data && data.length > 0 && (
            <Box ml="10">
              {
                data.map(it => (
                  <Badge mb="2" fontSize="md" key={it.id}>{`${it.id.split('_')[1]} ${it.commonName} (${it.lat}, ${it.lon})`}</Badge>
                ))
              }
            </Box>
          )
        }
      </Box>
    </ContentLayout>
  )
}

export default SearchBikePointContent
