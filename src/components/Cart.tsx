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
  useToast,
} from "@chakra-ui/react";
import { useRecoveryData } from "../hooks/useRecoveryData";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/rootStore";
import { BsCaretDown, BsCaretUp } from "react-icons/bs";
import { IconButton } from "@chakra-ui/react";
import { addToCart } from "../redux/actions/cartActions";

export default function Cart() {
  const dispatch = useDispatch<AppDispatch>();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { loading, error, success, cartItems } = useRecoveryData("cart");
  const { user } = useRecoveryData("userDetails");
  const [checkOut, setCheckOut] = useState(false);
  const [name, setName] = useState(user?.name);
  const [shippingOption, setShippingOption] = useState("1");
  const [address, setAddress] = useState(user?.address?.address);
  const [city, setCity] = useState(user?.address?.city);
  const [postalCode, setPostalCode] = useState(user?.address?.postalCode);
  const [paymentMethod, setPaymentMethod] = useState("1");
  const [comment, setComment] = useState("");
  const [state, setState] = useState("");
  const toast = useToast();
  const [totalitems, setTotalItems] = useState(0);
  useEffect(() => {
    if (cartItems) {
      const _items = cartItems.reduce(
        (acc: any, item: { quantity: any }) => acc + item.quantity,
        0
      );
      setTotalItems(_items);
    }
  }, [cartItems]);

  async function payCartProducts(paymentMethod: string) {
    if (paymentMethod === "1") {
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
    if (paymentMethod === "2") {
      const number = "5493876282925 ";
      let url = `https://web.whatsapp.com/send?phone=${number}`;
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
      const message = carryProductsToMap.map((element: any) => {
        return `${element.title} x${element.quantity} $${element.price}
        Total: $${element.price * element.quantity}
        `;
      });

      url += `&text=${encodeURI(message)}&app_absent=0`;

      window.open(url, "_blank");
    }
  }

  useEffect(() => {
    if (success) {
      toast({
        title: "Product added to cart",
        description: "We've added the product to your cart",
        status: "success",
        duration: 1000,
        isClosable: true,
      });
    }
    if (error) {
      toast({
        title: "Error",
        description: "Something went wrong",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  }, [success, error, toast]);

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
            {!checkOut ? `Your order (${totalitems})` : `Complete your order`}
          </DrawerHeader>
          {!checkOut ? (
            <>
              <DrawerBody>
                {cartItems.length === 0 ? (
                  <Text>Your cart is empty</Text>
                ) : (
                  <Grid templateColumns="repeat(1, 1fr)">
                    {cartItems.map((item: any) => {
                      if (item.quantity > 0) {
                        return (
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
                                isLoading={loading}
                                borderRadius={"999px"}
                                onClick={() =>
                                  dispatch(addToCart(item.product._id, -1))
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
                                isLoading={loading}
                                borderRadius={"999px"}
                                onClick={() =>
                                  dispatch(addToCart(item.product._id, 1))
                                }
                                aria-label={""}>
                                <BsCaretUp />
                              </IconButton>
                            </Grid>
                          </Box>
                        );
                      }
                    })}
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
                    <FormLabel fontSize="xl" fontWeight="bold" textAlign="left">
                      Full Name
                    </FormLabel>
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
                  {shippingOption === "2" && (
                    <>
                      <FormControl id="Address">
                        <FormLabel
                          mt={5}
                          fontSize="xl"
                          fontWeight="bold"
                          textAlign="left">
                          Address
                        </FormLabel>
                        <Input
                          type="text"
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                        />
                      </FormControl>
                      <FormControl id="City">
                        <FormLabel
                          mt={5}
                          fontSize="xl"
                          fontWeight="bold"
                          textAlign="left">
                          City
                        </FormLabel>
                        <Input
                          type="text"
                          onChange={(e) => setCity(e.target.value)}
                          value={city}
                        />
                      </FormControl>
                      <FormControl id="State">
                        <FormLabel
                          mt={5}
                          fontSize="xl"
                          fontWeight="bold"
                          textAlign="left">
                          State
                        </FormLabel>
                        <Input
                          type="text"
                          onChange={(e) => setState(e.target.value)}
                          value={state}
                        />
                      </FormControl>
                      <FormControl id="PostalCode">
                        <FormLabel
                          mt={5}
                          fontSize="xl"
                          fontWeight="bold"
                          textAlign="left">
                          Postal Code
                        </FormLabel>
                        <Input
                          type="number"
                          onChange={(e) => setPostalCode(e.target.value)}
                          value={postalCode}
                        />
                      </FormControl>
                    </>
                  )}

                  <RadioGroup
                    defaultValue="none"
                    onChange={setPaymentMethod}
                    value={paymentMethod}>
                    <Stack mt={5} direction="column">
                      <Radio value="1">MercadoPago</Radio>
                      {/* <Radio value="2">Cash</Radio>
                      <Radio value="3">Stripe</Radio>
                      <Radio value="4">PayPal</Radio>
                      <Radio value="5">CryptoCurrency</Radio> */}
                      <Radio value="2">Coordinate with the store to pay</Radio>
                    </Stack>
                  </RadioGroup>

                  <FormLabel
                    mt={5}
                    fontSize="xl"
                    fontWeight="bold"
                    textAlign="left">
                    Any details for Delivery or Product?
                  </FormLabel>
                  <Textarea
                    onChange={(e) => setComment(e.target.value)}
                    value={comment}
                  />
                </Box>
                <DrawerFooter>
                  <Heading as={"h3"} fontSize="2xl" fontWeight="bold">
                    Your total is: $
                    {cartItems?.reduce(
                      (a: any, c: any) => a + c.quantity * c.product.price,
                      0
                    )}
                  </Heading>
                  <Button
                    ml={5}
                    colorScheme="teal"
                    size="md"
                    onClick={() => payCartProducts(paymentMethod)}>
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
