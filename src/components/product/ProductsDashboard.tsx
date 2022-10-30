import React from "react";
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
  Switch,
  TableCaption,
  TableContainer,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
} from "@chakra-ui/react";

import { useRecoveryData } from "../../hooks/useRecoveryData";
export function ProductsDashboard() {
  const { products } = useRecoveryData("productList");
  const { isOpen, onOpen, onClose } = useDisclosure();

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
            Products
          </Heading>
        </Flex>
        <Flex
          justify="space-between"
          align="center"
          px={6}
          py={4}
          bg={useColorModeValue("gray.50", "gray.800")}
          borderBottomWidth="1px">
          <InputGroup>
            <Input
              placeholder="Search"
              variant="filled"
              _placeholder={{ color: "gray.500" }}
            />
            <InputRightElement pointerEvents="none">
              <SearchIcon color="gray.300" />
            </InputRightElement>
          </InputGroup>
        </Flex>
      </VStack>
    </Box>
  );
}

{
  /* <VStack align="stretch" spacing={0}>
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
            Products
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

        <TableContainer>
          <Table variant="striped" colorScheme="teal">
            <TableCaption>Products</TableCaption>
            <Thead>
              <Tr>
                <Th>Product</Th>
                <Th>Price</Th>
                <Th>Stock</Th>
                <Th>Rating</Th>
                <Th>ID</Th>
                <Th>Date Relased</Th>
                <Th>Active</Th>
              </Tr>
            </Thead>
            <Tbody>
              {products.map((product: any) => (
                <Tr key={product._id} onClick={onOpen}>
                  <Td>{product.name}</Td>
                  <Td>{product.price}</Td>
                  <Td>{product.stock}</Td>
                  <Td>{product.rating}</Td>
                  <Td>{product._id}</Td>
                  <Td>{new Date(product?.createdAt).toLocaleString()}</Td>
                  <Td>
                    <Switch
                      colorScheme="teal"
                      defaultChecked={product.visibility}
                    />
                  </Td>
                </Tr>
              ))}
            </Tbody>
            <Tfoot>
              <Tr>
                <Th>Product</Th>
                <Th>Price</Th>
                <Th>Stock</Th>
                <Th>Rating</Th>
                <Th>ID</Th>
                <Th>Date Relased</Th>
                <Th>Active</Th>
              </Tr>
            </Tfoot>
          </Table>
        </TableContainer>
      </VStack>
      
    </Box>
  );
} */
}
