import { Box, Button, Flex, Heading, Image, Text } from '@chakra-ui/react'
import { addCommas } from '@utils/helpers'
import React from 'react'
import { Quote, QuoteStatus } from 'types/quote'

interface Prop {
  quote: Quote
}

export const QuoteCard = ({ quote }: Prop) => {
  return (
    <Flex
      px={{ base: '1.5rem', md: '4rem' }}
      justify="space-between"
      align="center"
      pt="3rem"
      pb="1.5rem"
      overflowX="scroll"
      whiteSpace="nowrap">
      <Box minW="32rem">
        <Flex align="center">
          <Image w="2.3rem" mr="2.1rem" src="/icons/quote.svg" />
          <Heading color="brand.blue" fontWeight="600" fontSize={{ base: '1.3rem', md: '1.6rem' }}>
            {quote.id}
          </Heading>
          <Box w="4px" h="4px" rounded="50%" bg="brand.black" mx="1.1rem" />
          <Text fontSize={{ base: '1.2rem', md: '1.4rem' }}>Plain Shirts</Text>
        </Flex>
        <Button
          bg="transparent"
          borderWidth="1px"
          borderColor="#81868C"
          rounded="1.2rem"
          fontWeight="500"
          fontSize="1rem"
          px="1.3rem"
          py="0.4rem"
          mt="1.5rem">
          IMPORT
        </Button>
      </Box>

      <Flex minW="55rem">
        <Box>
          <Text color="brand.black" fontWeight="600" fontSize={{ base: '1.3rem', md: '1.6rem' }}>
            {quote.pickup.city}, {quote.pickup.country}
          </Text>
          <Text color="#81868C" mt="7px" fontSize={{ base: '1.2rem', md: '1.4rem' }}>
            Ready: {new Date(quote.pickup.date).toDateString()}
          </Text>
        </Box>
        <Image mx="6.5rem" w="1.5rem" src="/icons/arrow.svg" />
        <Box>
          <Text color="brand.black" fontWeight="600" fontSize={{ base: '1.3rem', md: '1.6rem' }}>
            {quote.dropoff.city}, {quote.dropoff.country}
          </Text>
          <Text color="#81868C" mt="7px" fontSize={{ base: '1.2rem', md: '1.4rem' }}>
            Ready: {new Date(quote.dropoff.date).toDateString()}
          </Text>
        </Box>
      </Flex>

      <Box minW="15rem">
        <Text color="brand.black" fontWeight="600" fontSize={{ base: '1.3rem', md: '1.6rem' }}>
          ₦ {addCommas(quote.price)}
        </Text>
      </Box>

      <Box w="10rem">
        <Text
          fontWeight="700"
          fontSize={{ base: '1.25rem', md: '1.4rem' }}
          color={
            quote.status === QuoteStatus.BOOKED
              ? 'brand.grey'
              : quote.status === QuoteStatus.PENDING
              ? '#F7C244'
              : '#5CC685'
          }>
          {quote.status}
        </Text>
      </Box>
    </Flex>
  )
}
