import { Container } from '@chakra-ui/react'
import React from 'react'

const ContentLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <Container maxW="full" centerContent pt="16">
    {children}
  </Container>
)

export default ContentLayout
