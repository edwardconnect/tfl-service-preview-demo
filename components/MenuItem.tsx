import React, { PropsWithChildren } from 'react'
import { Box } from '@chakra-ui/react';

interface MenuItemProps {
  isActive: boolean;
  onClick?: () => void;
}

const MenuItem: React.FC<PropsWithChildren<MenuItemProps>> = ({
  isActive,
  onClick,
  children,
}) => (
  <Box
    borderRadius="100px"
    bg={isActive ? 'gray.500' : 'white'}
    color={isActive ? 'white' : 'black'}
    onClick={onClick}
    pl="6"
    pr="6"
    pt="1.5"
    pb="1.5"
    _hover={{
      background: isActive ? 'gray.500' : 'gray.100'
    }}
    sx={{
      '&:not(:last-child)': {
        marginBottom: '1'
      },
      'cursor': 'pointer'
    }}
  >
    {children}
  </Box>
)

export default MenuItem
