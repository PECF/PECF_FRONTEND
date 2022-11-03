import React, { useEffect, useState } from "react";
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
  useColorModeValue,
  useDisclosure,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Radio,
  RadioGroup,
  Stack,
  Textarea,
  Text,
  Grid,
} from "@chakra-ui/react";
import { updateCart } from "../redux/actions/cartActions";
import { useRecoveryData } from "../hooks/useRecoveryData";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/rootStore";
import { useStripe } from "@stripe/react-stripe-js";
import { useElements } from "@stripe/react-stripe-js";
import { CardElement } from "@stripe/react-stripe-js";
import { BsCaretDown, BsCaretUp } from "react-icons/bs";
import { IconButton } from "@chakra-ui/react";

export default function Cart() {
  const dispatch = useDispatch<AppDispatch>();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { cartItems } = useRecoveryData("cart");
  const { user } = useRecoveryData("userDetails");
  const [checkOut, setCheckOut] = useState(false);
  const [name, setName] = useState(user.name);
  const [shippingOption, setShippingOption] = useState("");
  const [address, setAddress] = useState(user.address.address);
  const [city, setCity] = useState(user.address.city);
  const [postalCode, setPostalCode] = useState(user.address.postalCode);
  const [paymentMethod, setPaymentMethod] = useState("");
  const [comment, setComment] = useState("");

  return (
    <>
      <Box onClick={onOpen}>
        <Button colorScheme="teal" variant="ghost" size="md">
          <FiShoppingCart />
        </Button>
      </Box>

      <Drawer isOpen={isOpen} onClose={onClose} size="lg">
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            {!checkOut
              ? `Your order (${cartItems.length})`
              : `Complete your order`}
          </DrawerHeader>
          {!checkOut ? (
            <>
              <DrawerBody>
                {cartItems.length === 0 ? (
                  <Text>Your cart is empty</Text>
                ) : (
                  <Grid templateColumns="repeat(1, 1fr)">
                    {cartItems.map((item) => (
                      <Box
                        key={item.product._id}
                        p={5}
                        shadow="md"
                        bg={useColorModeValue("white", "gray.800")}>
                        <Grid templateColumns="repeat(2, 1fr)">
                          <Text fontSize="xl" fontWeight="bold">
                            {item.product.name}
                          </Text>
                          <Text
                            fontSize="xl"
                            fontWeight="bold"
                            textAlign="right"
                            color="teal.500">
                            ${item.product.price * item.quantity},00
                          </Text>
                        </Grid>
                        <Grid
                          templateColumns="repeat(3, 1fr)"
                          w={"20%"}
                          mt={2}
                          gap={2}>
                          <IconButton
                            colorScheme="teal"
                            variant={"ghost"}
                            size="2xl"
                            borderRadius={"999px"}
                            onClick={() =>
                              dispatch(updateCart(item.product._id, "remove"))
                            }
                            aria-label={""}>
                            <BsCaretDown />
                          </IconButton>
                          <Text fontSize="xl" textAlign="center">
                            {item.quantity}
                          </Text>
                          <IconButton
                            colorScheme="teal"
                            variant={"ghost"}
                            size="2xl"
                            borderRadius={"999px"}
                            onClick={() =>
                              dispatch(updateCart(item.product._id, "add"))
                            }
                            aria-label={""}>
                            <BsCaretUp />
                          </IconButton>
                        </Grid>
                      </Box>
                    ))}
                  </Grid>
                )}
              </DrawerBody>

              <DrawerFooter>
                <Button
                  w={"100%"}
                  colorScheme={"teal"}
                  mr={3}
                  disabled={cartItems.length === 0}
                  onClick={() => setCheckOut(true)}>
                  Checkout
                </Button>
              </DrawerFooter>
            </>
          ) : (
            <DrawerBody>
              <Box
                p={5}
                shadow="md"
                bg={useColorModeValue("white", "gray.800")}>
                <Box
                  p={5}
                  shadow="md"
                  bg={useColorModeValue("white", "gray.800")}>
                  <FormControl id="Name">
                    <FormLabel>Full Name</FormLabel>
                    <Input
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      
                    />
                  </FormControl>
                  <RadioGroup
                    mt={5}
                    defaultValue="none"
                    onChange={setShippingOption}
                    value={shippingOption}
                    colorScheme="teal">
                    <Stack direction="column">
                      <Radio value="1" colorScheme="teal">
                        Ship to your address
                      </Radio>
                      <Radio value="2" colorScheme="teal">
                        Pick up from the store
                      </Radio>
                    </Stack>
                  </RadioGroup>
                  <FormControl id="Address">
                    <FormLabel mt={5}>Please enter your Address</FormLabel>
                    <Input
                      type="text"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                    />
                  </FormControl>
                  <FormControl id="City">
                    <FormLabel mt={5}>Please enter your City</FormLabel>
                    <Input
                      type="text"
                      onChange={(e) => setCity(e.target.value)}
                      value={city}
                    />
                  </FormControl>
                  <FormControl id="PostalCode">
                    <FormLabel mt={5}>Please enter your Postal Code</FormLabel>
                    <Input
                      type="number"
                      onChange={(e) => setPostalCode(e.target.value)}
                      value={postalCode}
                    />
                  </FormControl>
                  <RadioGroup
                    defaultValue="none"
                    onChange={setPaymentMethod}
                    value={paymentMethod}>
                    <Stack mt={5} direction="column">
                      <Radio value="1">MercadoPago</Radio>
                      <Radio value="2">Cash</Radio>
                      <Radio value="3">Stripe</Radio>
                      <Radio value="4">PayPal</Radio>
                      <Radio value="5">Bitcoin</Radio>
                    </Stack>
                  </RadioGroup>
                  <FormLabel mt={5}>Any details for delivery?</FormLabel>
                  <Textarea
                    onChange={(e) => setComment(e.target.value)}
                    value={comment}
                  />
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
          )}
        </DrawerContent>
      </Drawer>
    </>
  );
}
// export default Cart;

// export default function Cart() {
//   useEffect(() => {
//     window.scrollTo(0, 0);
//   }, []);
//   const { isOpen, onOpen, onClose } = useDisclosure();
//   const { cartItems } = useRecoveryData("cart");
//   const [checkOut, setCheckOut] = useState(false);
//   const [name, setName] = useState("");
//   const [shippingOption, setShippingOption] = useState("");
//   const [address, setAddress] = useState("");
//   const [city, setCity] = useState("");
//   const [postalCode, setPostalCode] = useState("");
//   const [paymentMethod, setPaymentMethod] = useState("");
//   const [comment, setComment] = useState("");

//   const dispatch: AppDispatch = useDispatch();

//   return (
//     <Box onClick={onOpen}>
//       <Button colorScheme="teal" variant="ghost" size="md">
//         <FiShoppingCart />
//       </Button>

//       <Drawer isOpen={isOpen} placement="right" onClose={onClose} size="xl">
//         <DrawerOverlay />
//         <DrawerContent>
//           <DrawerCloseButton />

//           <DrawerHeader>Cart</DrawerHeader>
//           {!checkOut ? (
//             <>
//               <DrawerBody>

//               </DrawerBody>

//               <DrawerFooter>
//                 <Button variant="outline" mr={3} onClick={onClose}>
//                   Cancel
//                 </Button>

//                 <Button
//                   colorScheme="teal"
//                   isDisabled={cartItems?.length === 0}
//                   onClick={() => {
//                     setCheckOut(true);
//                   }}>
//                   Check Out
//                 </Button>
//               </DrawerFooter>
//             </>
//           ) : (
//             <>
//               <DrawerBody>
//                 <Box
//                   p="4"
//                   display="flex"
//                   flexDirection="column"
//                   justifyContent="space-between"
//                   height="100%">
//                   <Box>
//                     <Button
//                       display={"flex"}
//                       justifyContent={"flex-end"}
//                       colorScheme="teal"
//                       variant="ghost"
//                       size="md"
//                       onClick={onClose}
//                     />
//                     <Heading as={"h3"} fontSize="2xl" fontWeight="bold" mb={10}>
//                       Complete your Order ({cartItems.length})
//                     </Heading>
//                     <FormControl id="Name">
//                       <FormLabel>Please enter your Full Name</FormLabel>
//                       <Input
//                         type="text"
//                         onChange={(e) => setName(e.target.value)}
//                         value={name}
//                       />
//                     </FormControl>
//                     <RadioGroup
//                       mt={5}
//                       defaultValue="none"
//                       onChange={setShippingOption}
//                       value={shippingOption}>
//                       <Stack direction="column">
//                         <Radio value="1">Ship to your address</Radio>
//                         <Radio value="2">Pick up from the store</Radio>
//                       </Stack>
//                     </RadioGroup>
//                     <FormControl id="Address">
//                       <FormLabel mt={5}>Please enter your Address</FormLabel>
//                       <Input
//                         type="text"
//                         onChange={(e) => setAddress(e.target.value)}
//                         value={address}
//                       />
//                     </FormControl>
//                     <FormControl id="City">
//                       <FormLabel mt={5}>Please enter your City</FormLabel>
//                       <Input
//                         type="text"
//                         onChange={(e) => setCity(e.target.value)}
//                         value={city}
//                       />
//                     </FormControl>
//                     <FormControl id="PostalCode">
//                       <FormLabel mt={5}>
//                         Please enter your Postal Code
//                       </FormLabel>
//                       <Input
//                         type="number"
//                         onChange={(e) => setPostalCode(e.target.value)}
//                         value={postalCode}
//                       />
//                     </FormControl>
//                     <RadioGroup
//                       defaultValue="none"
//                       onChange={setPaymentMethod}
//                       value={paymentMethod}>
//                       <Stack mt={5} direction="column">
//                         <Radio value="1">MercadoPago</Radio>
//                         <Radio value="2">Cash</Radio>
//                       </Stack>
//                     </RadioGroup>
//                     <FormLabel mt={5}>Any details for delivery?</FormLabel>
//                     <Textarea
//                       onChange={(e) => setComment(e.target.value)}
//                       value={comment}
//                     />
//                   </Box>
//                   <DrawerFooter>
//                     <Heading as={"h3"} fontSize="2xl" fontWeight="bold">
//                       Your total is:{" "}
//                       {cartItems?.reduce(
//                         (a: any, c: any) => a + c.quantity * c.product.price,
//                         0
//                       )}
//                     </Heading>
//                     <Button colorScheme="teal" variant="ghost" size="md">
//                       Finish my Order
//                     </Button>
//                   </DrawerFooter>
//                 </Box>
//               </DrawerBody>
//             </>
//           )}
//         </DrawerContent>
//       </Drawer>
//     </Box>
//   );
// }
// {
//   /* <TableContainer>
//                   <Table variant="striped" colorScheme="teal">
//                     <Thead>
//                       <Tr>
//                         <Th>Product</Th>
//                         <Th isNumeric>Price</Th>
//                         <Th isNumeric>Items</Th>
//                         <Th isNumeric>Total</Th>
//                       </Tr>
//                     </Thead>
//                     <Tbody>
//                       {cartItems?.length > 0 ? (
//                         cartItems?.map((element: any) => (
//                           <Tr key={element.product._id}>
//                             <Td>{element.product.name}</Td>
//                             <Td isNumeric>${element.product.price}</Td>
//                             <Td isNumeric>{element.quantity}</Td>
//                             <Td isNumeric>
//                               ${element.product.price * element.quantity}
//                             </Td>
//                           </Tr>
//                         ))
//                       ) : (
//                         <Tr>
//                           <Td>No products in cart</Td>
//                         </Tr>
//                       )}
//                     </Tbody>
//                     <Tfoot>
//                       <Tr>
//                         <Th></Th>
//                         <Th></Th>
//                         <Th isNumeric>Total</Th>
//                         <Th isNumeric>
//                           {cartItems?.reduce(
//                             (acc: any, element: any) =>
//                               acc + element.product.price * element.quantity,
//                             0
//                           )}
//                         </Th>
//                       </Tr>
//                     </Tfoot>
//                   </Table>
//                 </TableContainer> */
