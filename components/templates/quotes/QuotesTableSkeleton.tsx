import { Box, HStack, Skeleton, VStack } from '@chakra-ui/react'
import React from 'react'

export const QuotesTableSkeleton = () => {
  return (
    <Box w="full" px={{ base: '1.5rem', md: '4rem' }}>
      <HStack spacing="2rem">
        <Skeleton h="3rem" w="6rem" />
        <Skeleton h="3rem" w="6rem" />
        <Skeleton h="3rem" w="6rem" />
        <Skeleton h="3rem" w="6rem" />
      </HStack>
      <VStack spacing="2rem" mt={{ base: '1.5rem', md: '4rem' }}>
        <Skeleton w="full" h="10rem" />
        <Skeleton w="full" h="10rem" />
        <Skeleton w="full" h="10rem" />
        <Skeleton w="full" h="10rem" />
        <Skeleton w="full" h="10rem" />
        <Skeleton w="full" h="10rem" />
      </VStack>
    </Box>
  )
}
