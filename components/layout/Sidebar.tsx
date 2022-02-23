import { Box, Flex, Heading, HStack, Image, Text, VStack } from '@chakra-ui/react'
import ReactHtmlParser from 'react-html-parser'
import NextLink from 'next/link'
import { ROUTES } from 'constants/routes'
import React from 'react'
import { useRouter } from 'next/dist/client/router'

const Sidebar = (): JSX.Element => {
  return (
    <Flex flexDir="column" w="22.5rem" bg="#F9FAFC" color="#78797A" h="100%" pos="fixed">
      <Image mt="2.4rem" ml="1.6rem" src="/images/logo.svg" w="12rem" />

      <Box flex="1" h="100%" maxH="100%" overflowY="scroll" py="2rem" mt="0.5rem">
        <VStack align="flex-start">
          {ROUTES.slice(0, 5).map((link) => (
            <MenuLink path={link.path} icon={link.icon} label={link.name} key={link.name} />
          ))}
        </VStack>
        <Box h="1px" my="2.75rem" bg="#81868C" opacity="0.1" w="full" />
        <VStack align="flex-start">
          {ROUTES.slice(5, 10).map((link) => (
            <MenuLink path={link.path} icon={link.icon} label={link.name} key={link.name} />
          ))}
        </VStack>
        <VStack align="flex-start" mt="9rem">
          {ROUTES.slice(10).map((link) => (
            <MenuLink path={link.path} icon={link.icon} label={link.name} key={link.name} />
          ))}
        </VStack>
      </Box>

      <HStack spacing="8px" bg="#F2F4F7" p="1.8rem">
        <Image src="/images/avatar.svg" />
        <Box>
          <Heading color="brand.black" fontSize="1.2rem" fontWeight="500">
            Mati Industries
          </Heading>
          <Text color="#81868C" fontSize="1rem" mt="4px">
            Lanremati@gmail.com
          </Text>
        </Box>
      </HStack>
    </Flex>
  )
}

export { Sidebar }

type ItemProps = {
  path: string
  icon: string
  label: string
}

export const MenuLink = ({ label, icon, path, ...rest }: ItemProps): JSX.Element => {
  const router = useRouter()

  return (
    <NextLink href={path} passHref>
      <HStack
        as="a"
        spacing="1.2rem"
        align="center"
        w="100%"
        px="1.6rem"
        py="1.1rem"
        bg={
          path === '/' && router.pathname === '/'
            ? '#E9ECF1'
            : router.pathname.startsWith(path === '/' ? 'null' : path)
            ? '#E9ECF1'
            : 'transparent'
        }
        color={
          path === '/' && router.pathname === '/'
            ? 'brand.blue'
            : router.pathname.startsWith(path === '/' ? 'null' : path)
            ? 'brand.blue'
            : '#78797A'
        }
        _hover={{
          color: 'brand.blue',
          bg: '#E9ECF1'
        }}
        {...rest}>
        {icon && ReactHtmlParser(icon)}
        <Text whiteSpace="nowrap">{label}</Text>
      </HStack>
    </NextLink>
  )
}
