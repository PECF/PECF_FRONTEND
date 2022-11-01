import React, { useState, SetStateAction } from "react";
import { Select } from "chakra-react-select";
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
  Text,
  Heading,
  Th,
  Td,
  Switch,
  TableCaption,
  TableContainer,
  Grid,
} from "@chakra-ui/react";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/rootStore";
import { useRecoveryData } from "../../hooks/useRecoveryData";
import { Link } from "react-router-dom";
import { updateProductVisibility } from "../../redux/actions/productsActions";
export function ProductsDashboard() {
  const { products } = useRecoveryData("productList");

  const [searchTerm, setSearchTerm] = useState("");
  const [contextSearch, setContextSearch] = useState(0);
  const dispatch = useDispatch<AppDispatch>();

  const handleChange = (event: {
    target: { value: SetStateAction<string> };
  }) => {
    setSearchTerm(event.target.value);
  };

  const results = !searchTerm
    ? products
    : products.filter(
        (product: {
          name: string;
          description: string;
          price: number;
          category: string;
          stock: number;
          _id: number;
          createdAt: string;
        }) => {
          const _filter = searchTerm
            .toLowerCase()
            .normalize("NFD")
            .replace(/[\u0300-\u036f]/g, "");
          return contextSearch === 0
            ? product.name
                .toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .includes(_filter) ||
                product.description
                  .toLowerCase()
                  .normalize("NFD")
                  .replace(/[\u0300-\u036f]/g, "")
                  .includes(_filter) ||
                product.price
                  .toString()
                  .normalize("NFD")
                  .replace(/[\u0300-\u036f]/g, "")
                  .toLowerCase()
                  .includes(_filter) ||
                product.category
                  .toString()
                  .toLowerCase()
                  .normalize("NFD")
                  .replace(/[\u0300-\u036f]/g, "")
                  .includes(_filter) ||
                product.stock
                  .toString()
                  .toLowerCase()
                  .normalize("NFD")
                  .replace(/[\u0300-\u036f]/g, "")
                  .includes(_filter) ||
                product._id
                  .toString()
                  .toLowerCase()
                  .normalize("NFD")
                  .replace(/[\u0300-\u036f]/g, "")
                  .includes(_filter)
            : contextSearch === 1
            ? product.name
                .toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .includes(_filter)
            : contextSearch === 2
            ? product._id
                .toString()
                .toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .includes(_filter)
            : contextSearch === 3
            ? product.category
                .toString()
                .toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .includes(_filter)
            : contextSearch === 4
            ? product.price
                .toString()
                .toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .includes(_filter)
            : contextSearch === 5
            ? product.stock
                .toString()
                .toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .includes(_filter)
            : contextSearch === 6
            ? product.description
                .toLowerCase()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .includes(_filter)
            : contextSearch === 7
            ? new Date(product.createdAt)
                .toLocaleString()
                .normalize("NFD")
                .replace(/[\u0300-\u036f]/g, "")
                .includes(_filter)
            : null;
        }
      );

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
        <Grid
          templateColumns="2fr 1fr"
          gap={6}
          px={6}
          py={4}
          bg={useColorModeValue("white", "gray.800")}
          borderBottomWidth="1px">
          <InputGroup size="md">
            <Input
              pr="4.5rem"
              type="text"
              placeholder="Search"
              value={searchTerm}
              onChange={handleChange}
              bg={useColorModeValue("gray.50", "gray.700")}
            />
            <InputRightElement width="4.5rem">
              <SearchIcon color="gray.300" />
            </InputRightElement>
          </InputGroup>
          <Select
            placeholder="Select Filter"
            defaultValue={{ value: 0, label: "All" }}
            options={[
              { value: 0, label: "All" },
              { value: 1, label: "Name" },
              { value: 2, label: "ID" },
              { value: 3, label: "Category" },
              { value: 4, label: "Price" },
              { value: 5, label: "Stock" },
              { value: 6, label: "Description" },
              { value: 7, label: "Date" },
            ]}
            onChange={(e) => (e ? setContextSearch(e.value) : 0)}
          />
        </Grid>
        <TableContainer
          as={Box}
          maxW="full"
          overflowX="auto"
          bg={useColorModeValue("white", "gray.800")}>
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
              {results.map((product: any) => (
                <Tr key={product._id}>
                  <Td>
                    <Text
                      as={Link}
                      to={`/profile/admin/updateProduct/${product._id}`}
                      overflow="hidden">
                      {product.name.substring(0, 20) + "..."}
                    </Text>
                  </Td>
                  <Td>{product.price}</Td>
                  <Td>{product.stock}</Td>
                  <Td>{product.rating}</Td>
                  <Td>{product._id}</Td>
                  <Td>{new Date(product?.createdAt).toLocaleString()}</Td>
                  <Td>
                    <Switch
                      colorScheme="teal"
                      defaultChecked={product.visibility}
                      onChange={() => {
                        dispatch(
                          updateProductVisibility(
                            product._id,
                            !product.visibility
                          )
                        );
                      }}
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
}
