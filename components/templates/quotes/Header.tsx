import { Button, Flex, Heading } from '@chakra-ui/react'
import React from 'react'

export const Header = () => {
  return (
    <Flex
      as="header"
      justify="space-between"
      align="center"
      px={{ base: '1.5rem', md: '4rem' }}
      py="2.4rem">
      <Heading>Quotes</Heading>
      <Button color="#fff" bg="brand.blue" size="md" h="4.6rem">
        Create New
      </Button>
    </Flex>
  )
}
