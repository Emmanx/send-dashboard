import React, { ReactChild } from 'react'
import { Box } from '@chakra-ui/react'
import Head from 'next/head'
import { DashboardLayout } from '@components/layout'
import { Header, QuoteTable } from '@templates/quotes'

const Home = (): ReactChild => {
  return (
    <Box>
      <Head>
        <title>Home</title>
      </Head>

      <DashboardLayout>
        <Header />
        <QuoteTable />
      </DashboardLayout>
    </Box>
  )
}

export default Home
