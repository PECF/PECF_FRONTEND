import React from "react";
import { DragHandleIcon } from "@chakra-ui/icons";
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Button,
  UnorderedList,
  ListItem,
  DrawerCloseButton,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";

export default function Cart() {
  const btnRef = React.useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const CARRYPRODUCTS = [
    { name: "remera 1", price: 1000 },
    { name: "remera 2", price: 550 },
    { name: "remera 3", price: 4800 },
  ];
  return (
    <Box>
      <Button
        ref={btnRef}
        onClick={onOpen}
        leftIcon={<DragHandleIcon />}
        colorScheme="teal"
        p="5"
        variant="solid">
        Cart
      </Button>
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
            <Button colorScheme="teal">Buy</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
