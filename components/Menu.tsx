import { Box, Center, Flex, Grid, Text } from '@chakra-ui/react'
import React from 'react'
import { useRouter } from 'next/router'

import MenuItem from './MenuItem'
import { useTlfServiceStatusesData } from '../hooks/data'
import { MoonIcon, WarningTwoIcon } from '@chakra-ui/icons'
import { searchBikePointServiceId } from '../shared/url.constant'

const Menu: React.FC = () => {
  const router = useRouter()
  const menuData = useTlfServiceStatusesData()

  const clickMenuItemHanlder = (serviceId: string) => () => {
    router.push(`${router.pathname}?serviceId=${serviceId}`)
  }

  return (
    <Box minW="300px">
      {
        menuData && menuData.ids.map((id) => (
          <Box key={id} mb="2">
            <Text fontWeight="bold" fontSize="xl" color="gray" style={{ textTransform: 'capitalize' }}>
              {id}
            </Text>
            {
              menuData.entities[id].map((it) => (
                <MenuItem key={it.name} isActive={router.query.serviceId === it.id} onClick={clickMenuItemHanlder(it.id)}>
                  <Flex>
                    <Center>
                      {it.name}
                    </Center>
                    {
                      it.isOperateNight && <Center ml="2"><MoonIcon /></Center>
                    }
                    {
                      it.hasDisruption && <Center ml="2"><WarningTwoIcon color="red.500" /></Center>
                    }
                  </Flex>
                </MenuItem>
              ))
            }
          </Box>
        ))
      }
      {
        menuData && (
          <Box mt="5">
            <MenuItem isActive={router.query.serviceId === searchBikePointServiceId} onClick={clickMenuItemHanlder(searchBikePointServiceId)}>
              Search Bike Point
            </MenuItem>
          </Box>
        )
      }
    </Box>
  )
}

export default Menu
