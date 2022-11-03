import React, { useEffect } from "react";
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
  Tr,
  Th,
  Td,
  TableContainer,
  useDisclosure,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Textarea,
} from "@chakra-ui/react";
import { AppDispatch } from "../redux/rootStore";
import { updateCart } from "../redux/actions/cartActions";
import { useRecoveryData } from "../hooks/useRecoveryData";

export default function Cart() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { isOpen, onOpen, onClose } = useDisclosure();

  const { cartItems } = useRecoveryData("cart");

  const [checkOut, setCheckOut] = React.useState(false);

  const [name , setName] = React.useState("");
  const [shippingOption , setShippingOption] = React.useState("");
  const [address , setAddress] = React.useState("");
  const [city , setCity] = React.useState("");
  const [postalCode , setPostalCode] = React.useState("");
  const [paymentMethod , setPaymentMethod] = React.useState("");
  const [comment , setComment] = React.useState("");

  return (
    <Box onClick={onOpen}>
      <Button colorScheme="teal" variant="ghost" size="md">
        <FiShoppingCart />
      </Button>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="xl">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />

          <DrawerHeader>Cart</DrawerHeader>
          {!checkOut ? (
            <>
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
                  colorScheme="teal"
                  isDisabled={cartItems?.length === 0}
                  onClick={() => {
                    setCheckOut(true);
                  }}
                >
                  Check Out
                </Button>
              </DrawerFooter>
            </>
          ) : (
            <>
              <DrawerBody>
                <Box
                  p="4"
                  display="flex"
                  flexDirection="column"
                  justifyContent="space-between"
                  height="100%"
                >
                  <Box>
                    <Button
                      display={"flex"}
                      justifyContent={"flex-end"}
                      colorScheme="teal"
                      variant="ghost"
                      size="md"
                      onClick={onClose}
                    />
                    <Heading as={"h3"} fontSize="2xl" fontWeight="bold">
                      Complete your Order ({cartItems.length})
                    </Heading>
                    <FormControl id="Name">
                      <FormLabel>Please enter your Full Name</FormLabel>
                      <Input type="text" onChange={(e)=> setName(e.target.value)} value={name} />
                    </FormControl>
                    <RadioGroup defaultValue="none" onChange={setShippingOption} value={shippingOption}>
                      <Stack direction="column">
                        <Radio value="1">Ship to your address</Radio>
                        <Radio value="2">Pick up from the store</Radio>
                      </Stack>
                    </RadioGroup>
                    <FormControl id="Address">
                      <FormLabel>Please enter your Address</FormLabel>
                      <Input type="text" onChange={(e)=> setAddress(e.target.value)} value={address} />
                    </FormControl>
                    <FormControl id="City">
                      <FormLabel>Please enter your City</FormLabel>
                      <Input type="text" onChange={(e)=> setCity(e.target.value)} value={city} />
                    </FormControl>
                    <FormControl id="PostalCode">
                      <FormLabel>Please enter your Postal Code</FormLabel>
                      <Input type="number" onChange={(e)=> setPostalCode(e.target.value)} value={postalCode} />
                    </FormControl>
                    <RadioGroup defaultValue="none" onChange={setPaymentMethod} value={paymentMethod} >
                      <Stack direction="column">
                        <Radio value="1">MercadoPago</Radio>
                        <Radio value="2">Cash</Radio>
                      </Stack>
                    </RadioGroup>
                    <FormLabel>Any details for delivery?</FormLabel>
                    <Textarea onChange={(e)=> setComment(e.target.value)} value={comment}/>
                  </Box>
                  <DrawerFooter>
                    <Heading as={"h3"} fontSize="2xl" fontWeight="bold">
                      Your total is:{" "}
                      {cartItems?.reduce(
                        (a: any, c: any) => a + c.quantity * c.product.price,
                        0
                      )}
                    </Heading>
                    <Button colorScheme="teal" variant="ghost" size="md">
                      Finish my Order
                    </Button>
                  </DrawerFooter>
                </Box>
              </DrawerBody>
            </>
          )}
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
