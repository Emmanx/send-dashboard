import { Badge, Box, HStack, Image, Text } from '@chakra-ui/react'
import React from 'react'
import { Quote, QuoteStatus } from 'types/quote'

interface Props {
  quotes: Quote[]
  filter: QuoteStatus | null
  updateFilter: (status: QuoteStatus | null) => void
}

export const QuotesFilter = ({ quotes, filter, updateFilter }: Props) => {
  const filterByStatus = (status: QuoteStatus | null) => {
    return quotes.filter((quote) => quote.status === status)
  }

  const handleClick = (status: QuoteStatus | null) => () => updateFilter(status)

  return (
    <HStack
      spacing="3.2rem"
      px="4rem"
      borderBottom="1px solid #E4E6EA"
      align="flex-start"
      mt="2rem">
      <Tab active={filter === null} label="All" count={quotes.length} onClick={handleClick(null)} />
      <Tab
        label={QuoteStatus.PENDING}
        active={filter === QuoteStatus.PENDING}
        onClick={handleClick(QuoteStatus.PENDING)}
        count={filterByStatus(QuoteStatus.PENDING).length}
      />
      <Tab
        label={QuoteStatus.READY}
        active={filter === QuoteStatus.READY}
        onClick={handleClick(QuoteStatus.READY)}
        count={filterByStatus(QuoteStatus.READY).length}
      />
      <Tab
        label={QuoteStatus.BOOKED}
        active={filter === QuoteStatus.BOOKED}
        onClick={handleClick(QuoteStatus.BOOKED)}
        count={filterByStatus(QuoteStatus.BOOKED).length}
      />
    </HStack>
  )
}

const Tab = ({
  label,
  count,
  active,
  onClick
}: {
  label: string
  count: number
  active: boolean
  onClick: () => void
}) => {
  return (
    <Box cursor="pointer" onClick={onClick}>
      <HStack justify="center" spacing="8px">
        <Text color={active ? 'brand.blue' : '#81868C'}>{label}</Text>
        <Badge fontSize="1rem" color="#737A91" fontWeight="700" bg="#E9ECF199" rounded="8px">
          {count}
        </Badge>
      </HStack>

      {active && <Image mt="1.5rem" src="/icons/tab-border.svg" />}
    </Box>
  )
}
