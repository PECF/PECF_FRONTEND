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
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/rootStore";
import { updateCart } from "../redux/actions/cartActions";
import { useRecoveryData } from "../hooks/useRecoveryData";
import { productCreateReducer } from "../redux/reducers/productsReducer";
export default function Cart() {
  // const btnRef = React.useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { cartItems } = useRecoveryData("cart");

  async function payCartProducts() {
    const carryProductsToMap = cartItems.map((element: any) => {
      const newProduct = {
        title: element.product.name,
        unit_price: element.product.price,
        price: element.product.price,
        quantity: element.quantity,
        id: element.product._id,
      };
      return newProduct;
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

    window.open(data.init_point, "_blank");
  }

  return (
    <Box>
      <Button onClick={onOpen} colorScheme="teal" variant="solid" size="md">
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
                  {cartItems?.length > 0 ? (
                    cartItems?.map((element: any) => (
                      <Tr key={element.product._id}>
                        <Td>{element.product.name}</Td>
                        <Td isNumeric>{element.product.price}</Td>
                        <Td isNumeric>{element.quantity}</Td>
                        <Td isNumeric>
                          {element.product.price * element.quantity}
                        </Td>
                      </Tr>
                    ))
                  ) : (
                    <Tr>
                      <Td>No products in cart</Td>
                    </Tr>
                  )}
                </Tbody>
                <Tfoot>
                  <Tr>
                    <Th></Th>
                    <Th></Th>
                    <Th isNumeric>Total</Th>
                    <Th isNumeric>
                      {cartItems?.reduce(
                        (acc: any, element: any) =>
                          acc + element.product.price * element.quantity,
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
            <Button
              colorScheme="blue"
              onClick={
                cartItems?.length > 0
                  ? () => {
                      payCartProducts();
                      onClose();
                    }
                  : onClose
              }>
              Pay
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
