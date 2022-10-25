import {
  Box,
  Heading,
  Flex,
  Divider,
  Thead,
  Td,
  Tbody,
  Th,
  Tr,
  Table,
  TableContainer,
  InputGroup,
  Input,
  Button,
} from "@chakra-ui/react";
import React from "react";

export const OrdersDashboard = () => {
  return (
    <Flex>
      <Box
        mt={"50"}
        ml={"120"}
        bg={"white"}
        borderWidth="2px"
        borderRadius="lg"
        overflow="hidden"
        p={50}
        boxShadow="lg">
        <Flex
          minWidth="max-content"
          alignItems="center"
          gap="10"
          justify="space-between">
          <Box p="2">
            <Heading size="md">Manage Orders</Heading>
          </Box>
          <InputGroup gap="2">
            <Input
              placeholder="Search..."
              width="sm"
              flex={100}
              variant="filled"
            />
          </InputGroup>
        </Flex>
        <Divider mt={"1"} />
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Order name</Th>
                <Th>Price</Th>
                <Th>Quantity</Th>
                <Th>Address</Th>
                <Th>Status</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>Mens jeans</Td>
                <Td>$100</Td>
                <Td>2</Td>
                <Td>1219 Cabrillo St</Td>
                <Td>Preparing</Td>
                <Td>
                  <Button
                    w={"full"}
                    variant={"outline"}
                    bg={"green.300"}
                    _hover={{ bg: "gray.50" }}>
                    Cancel order
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td>Headphones Razer BlackShark V2</Td>
                <Td>$250</Td>
                <Td>2</Td>
                <Td>Main Street no.14</Td>
                <Td>Delivering</Td>
                <Td>
                  <Button
                    w={"full"}
                    variant={"outline"}
                    bg={"green.300"}
                    _hover={{ bg: "gray.50" }}>
                    Cancel order
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td>SteelSeries Apex 3 Keyboard</Td>
                <Td>$45</Td>
                <Td>1</Td>
                <Td>Main Street no.13</Td>
                <Td>Completed</Td>
                <Td>
                  <Button
                    w={"full"}
                    variant={"outline"}
                    bg={"green.300"}
                    _hover={{ bg: "gray.50" }}>
                    Cancel order
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td>Iphone 13</Td>
                <Td>$1000</Td>
                <Td>1</Td>
                <Td>Main Street no.10</Td>
                <Td>Delivering</Td>
                <Td>
                  <Button
                    w={"full"}
                    variant={"outline"}
                    bg={"green.300"}
                    _hover={{ bg: "gray.50" }}>
                    Cancel order
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Flex>
  );
};
