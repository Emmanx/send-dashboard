import { Flex, HStack, Select, Text } from '@chakra-ui/react'
import React from 'react'

interface Props {
  currentPage: number
  itemsPerPage: number
  totalItems: number
  updateItemPerPage: (num: number) => void
  updateCurrentPage: (num: number) => void
}

export const Pagination = ({
  currentPage,
  itemsPerPage,
  totalItems,
  updateItemPerPage,
  updateCurrentPage
}: Props) => {
  const prevPage = currentPage - 1
  const nextPage = currentPage + 1
  const lastPage = Math.floor(totalItems / itemsPerPage)
  const currentCount = currentPage * itemsPerPage

  const goToPrevPage = () => updateCurrentPage(prevPage)

  const goToNextPage = () => updateCurrentPage(nextPage)

  const handleChange: React.ChangeEventHandler<HTMLSelectElement> = (e) => {
    updateItemPerPage(Number(e.target.value))
  }

  return (
    <Flex align="center" justify="flex-end" px="4rem" color="#81868C" my="3rem">
      <Text>
        Showing {currentCount} - {currentCount + itemsPerPage} of {totalItems} results
      </Text>
      <HStack mx="2.4rem" align="center" spacing="2.4rem" cursor="pointer">
        {prevPage > 0 && <Text onClick={goToPrevPage}>{prevPage}</Text>}
        <Text color="brand.black">{currentPage}</Text>
        {nextPage < lastPage && <Text onClick={goToNextPage}>{nextPage}</Text>}
        <Text>...</Text>
        <Text>{lastPage}</Text>
      </HStack>
      <Select
        value={itemsPerPage}
        onChange={handleChange}
        type="number"
        border="1px solid #EAEDF3"
        rounded="8px"
        py="5px"
        px="1.4rem"
        h="3.2rem"
        w="8rem"
        min="1"
        max="100"
        fontSize="1.4rem"
        _focus={{
          borderColor: 'brand.blue'
        }}>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </Select>
    </Flex>
  )
}
