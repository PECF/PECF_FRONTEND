import React, { useEffect } from "react";
import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Table,
  Thead,
  Input,
  InputRightElement,
  InputGroup,
  Flex,
  Tbody,
  Tfoot,
  useColorModeValue,
  VStack,
  Tr,
  Heading,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { AppDispatch } from "../redux/rootStore";
import { useDispatch } from "react-redux";
import { useRecoveryData } from "../hooks/useRecoveryData";
import { listUsers } from "../redux/actions/authActions";
export function UsersDashboard() {
  const { users } = useRecoveryData("userList");
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    dispatch(listUsers());
  }, [dispatch]);

  return (
    <Box
      as="form"
      w="full"
      mt={8}
      maxW="full"
      mx="auto"
      bg={useColorModeValue("white", "gray.700")}
      overflow="hidden">
      <VStack align="stretch" spacing={0}>
        <Flex
          justify="space-between"
          align="center"
          px={6}
          py={4}
          bg={useColorModeValue("gray.50", "gray.800")}
          borderBottomWidth="1px">
          <Heading
            size="lg"
            fontWeight="bold"
            color={useColorModeValue("gray.900", "white")}>
            Users
          </Heading>
        </Flex>
        <Flex
          justify="space-between"
          align="center"
          px={6}
          py={4}
          bg={useColorModeValue("gray.50", "gray.700")}
          borderBottomWidth="1px">
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              type="text"
              placeholder="Search"
              aria-label="Search"
              bg={useColorModeValue("gray.100", "gray.800")}
            />
            <InputRightElement width="4.5rem">
              <SearchIcon color="gray.300" />
            </InputRightElement>
          </InputGroup>
        </Flex>
      </VStack>
      <TableContainer>
        <Table variant="striped" colorScheme="teal">
          <TableCaption>Users</TableCaption>
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Full Name</Th>
              <Th>Email</Th>
              <Th>Role</Th>
              <Th>Phone</Th>
              <Th>Created At</Th>
            </Tr>
          </Thead>
          <Tbody>
            {users.map((user: any) => (
              <Tr key={user._id}>
                <Td>{user._id}</Td>
                <Td>{user.name}</Td>
                <Td>{user.email}</Td>
                <Td>{user.role}</Td>
                <Td>{user.phone}</Td>
                <Td>{new Date(user.createdAt).toLocaleString()}</Td>
              </Tr>
            ))}
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>ID</Th>
              <Th>Full Name</Th>
              <Th>Email</Th>
              <Th>Role</Th>
              <Th>Phone</Th>
              <Th>Created At</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </Box>
  );
}
