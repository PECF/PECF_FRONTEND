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
export default function Dashboard() {
  const PRODUCTS = [
    {
      name: "Yerba Cruz de Malta",
      Category: "Yerbas",
      Price: "$456",
      Stock: 10,
      hidden: "Visible",
    },
    {
      name: "Termo Stanley",
      Category: "Termos",
      Price: "$12,500",
      Stock: 8,
      hidden: "Visible",
    },
    {
      name: "Remera loquesea",
      Category: "Remeras",
      Price: "$500",
      Stock: 12,
      hidden: "Hidden",
    },
    {
      name: "Zapatillas Adidas",
      Category: "Zapatillas",
      Price: "$5000",
      Stock: 3,
      hidden: "Visible",
    },
  ];
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
            {PRODUCTS.map((el) => {
              return (
                <Tr key={product.name}>
                  <Td>{el.name}</Td>
                  <Td>
                    <Tag colorScheme="blackAlpha" variant="solid">
                      {el.Category}
                    </Tag>
                  </Td>
                  <Td>{el.Price}</Td>
                  <Td>{el.Stock}</Td>
                  <Td>
                    <Switch id="isChecked" defaultChecked />
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
