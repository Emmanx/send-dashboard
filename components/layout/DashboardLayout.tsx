import { Box, Flex } from '@chakra-ui/react'

import React from 'react'
import { Sidebar } from './Sidebar'

type Props = {
  children: React.ReactNode
}
export const DashboardLayout = ({ children }: Props): JSX.Element => {
  return (
    <Flex h="100vh" w="100%" pos="relative">
      <Sidebar />
      <Box h="100%" w="100%" pl="22.5rem">
        {children}
      </Box>
    </Flex>
  )
}
