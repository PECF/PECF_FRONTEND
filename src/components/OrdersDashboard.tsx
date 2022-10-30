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
import React, { useEffect } from "react";
import { AppDispatch } from "../redux/rootStore";
import { useDispatch } from "react-redux";
import { useRecoveryData } from "../hooks/useRecoveryData";
import { getOrderDetails } from "../redux/actions/ordersActions";
export function OrdersDashboard() {
  const { orders } = useRecoveryData("orderList");
  const dispatch: AppDispatch = useDispatch();
  useEffect(() => {
    dispatch(getOrderDetails());
  }, [dispatch]);

  return (
    <Box
      as="form"
      w="full"
      mt={8}
      maxW="full"
      mx="auto"
      bg="white"
      overflow="hidden"
    >
      <Flex
        justify="space-between"
        align="center"
        px={6}
        py={4}
        bg="gray.50"
        borderBottomWidth="1px"
      >
        <Heading size="lg" fontWeight="bold" color="gray.900">
          Manage Orders
        </Heading>
      </Flex>
      <Flex
        justify="space-between"
        align="center"
        px={6}
        py={4}
        bg="gray.50"
        borderBottomWidth="1px"
      >
        <InputGroup>
          <Input
            type="text"
            placeholder="Search"
            variant="filled"
            _placeholder={{ color: "gray.500" }}
          />
        </InputGroup>
        <Button colorScheme="blue" variant="outline">
          Search
        </Button>
      </Flex>
      <Divider />
      <TableContainer>
        <Table>
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>User</Th>
              <Th>Date</Th>
              <Th>Quantity</Th>
              <Th>Total</Th>
              <Th>Adress</Th>
              <Th>Paid</Th>
              <Th>Delivered</Th>
            </Tr>
          </Thead>
          <Tbody>
            {orders.map((order) => (
              <Tr key={order._id}>
                <Td>{order._id}</Td>
                <Td>{order.user && order.user.name}</Td>
                <Td>{order.createdAt.substring(0, 10)}</Td>
                <Td>{order.orderItems.reduce((acc, item) => acc + item.qty, 0)}</Td>
                <Td>{order.totalPrice}</Td>
                <Td>{order.shippingAddress.address}</Td>
                <Td>{order.isPaid ? order.paidAt.substring(0, 10) : "No"}</Td>
                <Td>
                  {order.isDelivered
                    ? order.deliveredAt.substring(0, 10)
                    : "No"}
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}

/*export const OrdersDashboard = () => {
  return (
    <Flex>
      <Box mt={"50"} ml={"5"} mb={"500"} overflow="hidden" p={50}>
        <Box mb={"5"}>
          <Heading size="md">Manage Orders</Heading>
        </Box>
        <Flex
          minWidth="max-content"
          alignItems="center"
          mb={"5"}
          justify="space-between"
        >
          <InputGroup gap="2">
            <Input
              bg={"white"}
              placeholder="Search..."
              width="sm"
              flex={100}
              variant="filled"
            />
          </InputGroup>
        </Flex>
        <Divider mt={"1"} />
        <TableContainer>
          <Table variant="striped" colorScheme="teal">
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
                    _hover={{ bg: "gray.50" }}
                  >
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
                    _hover={{ bg: "gray.50" }}
                  >
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
                    _hover={{ bg: "gray.50" }}
                  >
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
                    _hover={{ bg: "gray.50" }}
                  >
                    Cancel order
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td>Gaming Chair</Td>
                <Td>$200</Td>
                <Td>1</Td>
                <Td>Main Street no.16</Td>
                <Td>Preparing</Td>
                <Td>
                  <Button
                    w={"full"}
                    variant={"outline"}
                    bg={"green.300"}
                    _hover={{ bg: "gray.50" }}
                  >
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
};*/
