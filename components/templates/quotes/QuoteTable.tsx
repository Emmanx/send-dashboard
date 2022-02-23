import { Box } from '@chakra-ui/react'
import { generateTestData } from '@utils/helpers'
import React, { useState } from 'react'
import { Quote, QuoteStatus } from 'types/quote'
import { Pagination } from './Pagination'
import { QuoteCard } from './QuoteCard'
import { QuotesFilter } from './QuotesFilter'

export const QuoteTable = () => {
  const data = generateTestData()
  const [tableState, setTableState] = useState<{
    allData: Quote[]
    activeData: Quote[]
    pageData: Quote[]
    filter: QuoteStatus | null
    currentPage: number
    itemsPerPage: number
  }>({
    allData: data,
    activeData: data,
    pageData: data.slice(0, 6),
    filter: null,
    currentPage: 1,
    itemsPerPage: 6
  })

  const updateFilter = (filter: QuoteStatus | null) => {
    const activeData = filter === null ? data : data.filter((item) => item.status === filter)

    setTableState((oldState) => ({
      ...oldState,
      activeData,
      pageData: activeData.slice(
        (oldState.currentPage - 1) * oldState.itemsPerPage,
        oldState.itemsPerPage
      ),
      filter
    }))
  }

  const updateItemPerPage = (itemsPerPage: number) => {
    setTableState((oldState) => ({
      ...oldState,
      itemsPerPage,
      currentPage: 1,
      pageData: oldState.activeData.slice(0, itemsPerPage)
    }))
  }

  const updateCurrentPage = (page: number) => {
    const sliceStart = (page - 1) * tableState.itemsPerPage
    setTableState((oldState) => ({
      ...oldState,
      currentPage: page,
      pageData: oldState.activeData.slice(sliceStart, oldState.itemsPerPage + sliceStart)
    }))
  }

  return (
    <Box w="full">
      <QuotesFilter
        quotes={tableState.allData}
        filter={tableState.filter}
        updateFilter={updateFilter}
      />
      {tableState.pageData.map((item) => (
        <QuoteCard key={item.id} quote={item} />
      ))}
      <Pagination
        totalItems={tableState.activeData.length}
        currentPage={tableState.currentPage}
        itemsPerPage={tableState.itemsPerPage}
        updateItemPerPage={updateItemPerPage}
        updateCurrentPage={updateCurrentPage}
      />
    </Box>
  )
}
