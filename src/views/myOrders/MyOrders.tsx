import React from "react";
import {
  Center,
  Container,
  Box,
  Input,
  InputGroup,
  InputRightElement,
  Select,
  HStack,
  Text,
  Divider,
  Image,
  Button,
} from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";
import { orders } from "./orders";

export default function MyOrders() {
  return (
    <Container>
      <Box color="teal" fontSize="3xl" mt="25px" fontWeight="bold">
        My Orders
      </Box>
      <HStack mt="50px" display="flex" alignItems="baseline">
        <InputGroup>
          <InputRightElement
            // eslint-disable-next-line react/no-children-prop
            children={<SearchIcon color="gray.300" cursor="pointer" />}
          />
          <Input
            placeholder="Search..."
            width="sm"
            flex={100}
            variant="filled"
          />
        </InputGroup>
        <Box w="60%">
          <Select placeholder="All" cursor="pointer">
            <option value="option1">This week</option>
            <option value="option2">This month</option>
            <option value="option3">2021</option>
          </Select>
        </Box>
        <Divider orientation="vertical" />
      </HStack>
      {orders?.map((o) => {
        return (
          <Center mt="25px" bg="gray.100" key={o.id} w="100%">
            <Image
              py="15px"
              px="15px"
              boxSize="150px"
              src={o.image}
              alt="img"
            />
            <Box>
              <Text fontSize="bold">
                <strong>Product:</strong> {o.name}
              </Text>
              <Divider orientation="vertical" />
              <Text>
                <strong>description:</strong> {o.description}
              </Text>
              <Text>
                <strong>state:</strong> {o.state}
              </Text>
              <Link to="/productdetail">
                <Button colorScheme="teal" size="xs">
                  re-buy
                </Button>
              </Link>
              <Link to="/order">
                <Button ml="4px" colorScheme="teal" size="xs">
                  see buy
                </Button>
              </Link>
            </Box>
          </Center>
        );
      })}
    </Container>
  );
}
