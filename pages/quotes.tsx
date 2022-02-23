import React, { ReactChild, useEffect, useState } from 'react'
import { Box } from '@chakra-ui/react'
import Head from 'next/head'
import { DashboardLayout } from '@components/layout'
import { Header, QuoteTable } from '@templates/quotes'
import { QuotesTableSkeleton } from '@components/templates/quotes'

const Quotes = (): ReactChild => {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 5000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <Box>
      <Head>
        <title>Home</title>
      </Head>

      <DashboardLayout>
        <Header />
        {loading ? <QuotesTableSkeleton /> : <QuoteTable />}
      </DashboardLayout>
    </Box>
  )
}

export default Quotes
