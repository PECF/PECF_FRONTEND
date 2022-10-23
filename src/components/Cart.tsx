import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Button,
  DrawerCloseButton,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Text,
  Tr,
  Th,
  Td,
  TableContainer,
  useDisclosure,
} from "@chakra-ui/react";

export default function Cart() {
  // const btnRef = React.useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();

  async function payCartProducts() {
    const carryProductsToMap = CARRYPRODUCTS.map((product) => {
      const nuevoElemento = {
        title: product.name,
        unit_price: product.price,
        quantity: product.quantity,
        id: product.id,
      };
      return nuevoElemento;
    });
    const response = await fetch(
      "https://api.mercadopago.com/checkout/preferences",
      {
        method: "POST",
        headers: {
          Authorization:
            "Bearer TEST-7728407952482902-102219-53baf2e2e232a5a9c628a9fc94f0d935-389442168", //Aca va el token individual luego del bearer: token individual
        },
        body: JSON.stringify({
          items: carryProductsToMap,
        }),
      }
    );
    const data = await response.json();
    console.log(data);
    window.open(data.init_point, "_blank");
  }

  const CARRYPRODUCTS = [
    { id: 1, name: "remera 1", price: 1000, quantity: 1 },
    { id: 2, name: "remera 2", price: 550, quantity: 1 },
    { id: 3, name: "remera 3", price: 4800, quantity: 1 },
    { id: 4, name: "remera 2", price: 550, quantity: 1 },
    { id: 5, name: "remera 2", price: 550, quantity: 1 },
  ];

  return (
    <Box>
      <Button onClick={onOpen} colorScheme="teal" variant="solid">
        <FiShoppingCart />
        <Text ml="2"> Cart </Text>
      </Button>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="lg">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Cart</DrawerHeader>

          <DrawerBody>
            <TableContainer>
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th>Product</Th>
                    <Th isNumeric>Price</Th>
                    <Th isNumeric>Items</Th>
                    <Th isNumeric>Total</Th>
                  </Tr>
                </Thead>
                <Tbody>
                  {CARRYPRODUCTS.map((product) => {
                    return (
                      <Tr key={product.id}>
                        <Td>{product.name}</Td>
                        <Td isNumeric>{product.price}</Td>
                        <Td isNumeric>{product.quantity}</Td>
                        <Td isNumeric>{product.price * product.quantity}</Td>
                      </Tr>
                    );
                  })}
                </Tbody>
                <Tfoot>
                  <Tr>
                    <Th></Th>
                    <Th></Th>
                    <Th isNumeric>Total</Th>
                    <Th isNumeric>
                      {CARRYPRODUCTS.reduce(
                        (acc, product) =>
                          acc + product.price * product.quantity,
                        0
                      )}
                    </Th>
                  </Tr>
                </Tfoot>
              </Table>
            </TableContainer>
          </DrawerBody>
          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue" onClick={payCartProducts}>
              Pay
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

      {/* 
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <TableContainer>
              <Table variant="simple">
                <Thead>
                  <Tr>
                    <Th>Product</Th>
                    <Th isNumeric>Price</Th>
                  </Tr>
                </Thead>
              </Table>
            </TableContainer>
          </DrawerHeader>
          <DrawerBody>
            <UnorderedList spacing={3} stylePosition="" styleType="none">
              {CARRYPRODUCTS.map((product) => {
                return (
                  <ListItem styleType="none" key={product.name}>
                    <TableContainer>
                      <Table variant="simple">
                        <Tbody>
                          <Tr>
                            <Td>{product.name}</Td>
                            <Td isNumeric>{product.price}</Td>
                          </Tr>
                        </Tbody>
                      </Table>
                    </TableContainer>
                  </ListItem>
                );
              })}
              <TableContainer>
                <Table variant="simple">
                  <Tfoot>
                    <Tr>
                      <Th>Total</Th>
                      <Th isNumeric>
                        {CARRYPRODUCTS.reduce((acc, product) => {
                          return acc + product.price;
                        }, 0)}
                      </Th>
                    </Tr>
                  </Tfoot>
                </Table>
              </TableContainer>
            </UnorderedList>
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="teal" onClick={payCartProducts}>
              Buy
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer> */}
    </Box>
  );
}
