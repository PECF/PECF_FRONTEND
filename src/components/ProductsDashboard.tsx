import React from "react";
import { SearchIcon } from "@chakra-ui/icons";
import {
  Box,
  Table,
  Thead,
  Input,
  Tag,
  InputRightElement,
  InputGroup,
  Flex,
  Tbody,
  Tfoot,
  Tr,
  Heading,
  Th,
  Td,
  Switch,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";

import { useRecoveryData } from "../hooks/useRecoveryData";
export function ProductsDashboard() {
  const { products } = useRecoveryData("productList");
  console.log(products);

  return (
    <Box>
      <Flex alignItems="center">
        <Heading size="lg" padding="10">
          Products Dashboard
        </Heading>

        <InputGroup>
          <InputRightElement
            // eslint-disable-next-line react/no-children-prop
            children={<SearchIcon color="gray.300" cursor="pointer" />}
          />
          <Input
            placeholder="Search in the products dashboard..."
            width="xs"
            flex={100}
            variant="filled"
          />
        </InputGroup>
      </Flex>

      <TableContainer>
        <Table variant="striped" colorScheme="teal">
          <TableCaption>All details of products Dashboard</TableCaption>
          <Thead>
            <Tr>
              <Th>Name</Th>
              <Th>Category</Th>
              <Th>Price</Th>
              <Th>Stock</Th>
              <Th>Visible</Th>
            </Tr>
          </Thead>
          <Tbody>
            {products.map((el, index) => {
              return (
                <Tr key={index}>
                  <Td>{el.name}</Td>
                  <Td>
                    <Tag colorScheme="blackAlpha" variant="solid">
                      {el.category}
                    </Tag>
                  </Td>
                  <Td>{el.price}</Td>
                  <Td>{el.stock}</Td>
                  <Td>
                    <Switch  id="isChecked" defaultChecked />
                  </Td>
                </Tr>
              );
            })}
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>Name</Th>
              <Th>Category</Th>
              <Th>Price</Th>
              <Th>Stock</Th>
              <Th>Visible</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </Box>
  );
}
