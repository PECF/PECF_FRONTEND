import React from "react";
import { useLocation, Link } from "react-router-dom";

import {
  Box,
  Flex,
  Icon,
  Container,
  useColorModeValue,
  Text,
  IconButton,
  Avatar,
  useDisclosure,
  useToast,
  Stack,
} from "@chakra-ui/react";
import {
  FiCreditCard,
  FiShoppingCart,
  FiMail,
  FiHelpCircle,
  FiLogOut,
  FiSettings,
  FiPhone,
  FiUsers,
  FiUser,
  FiShoppingBag,
} from "react-icons/fi";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { useState } from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { EditProfile } from "./editProfile";
import { useRecoveryData } from "../../hooks/useRecoveryData";
import { ProductsDashboard } from "../../components/product/ProductsDashboard";
import { OrdersDashboard } from "../../components/OrdersDashboard";

import { logout } from "../../redux/actions/authActions";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/rootStore";
import { CreateProduct } from "../../components/product/CreateProduct";
import { UpdateProduct } from "../../components/product/UpdateProduct";
import { UsersDashboard } from "../../components/UsersDashboard";

export default function Profile({ index }: { index?: number }) {
  const { user } = useRecoveryData("userDetails");
  const [show, setShow] = useState(index || 1);
  const { isOpen, onToggle } = useDisclosure();
  const dispatch = useDispatch<AppDispatch>();
  const send = useToast();
  const locate = useLocation();
  if (locate.pathname.includes("/profile/admin/orders/") && show !== 9) {
    setShow(9);
  }
  if (locate.pathname.includes("/profile/admin/updateProduct/") && show !== 8) {
    setShow(8);
  }
  if (locate.pathname.includes("/profile/admin/createProduct/") && show !== 7) {
    setShow(7);
  }
  if (locate.pathname.includes("/profile/admin/products/") && show !== 6) {
    setShow(6);
  }
  if (locate.pathname.includes("/profile/admin/users/") && show !== 5) {
    setShow(5);
  }
  if (locate.pathname.includes("/profile/admin/profile/") && show !== 1) {
    setShow(1);
  }

  const logoutHandler = () => {
    dispatch(logout());
    send({
      title: "Success",
      description: "You are logged out",
      status: "warning",
      duration: 3000,
      isClosable: true,
    });
  };

  return (
    <Container
      maxW="container.xxl"
      bg={useColorModeValue("gray.100", "gray.900")}
      minH="100vh"
      mt="5vh">
      <Flex
        direction={{ base: "column", md: "row" }}
        shadow={{ md: "xl" }}
        rounded={{ md: "lg" }}>
        <Box
          w={{ base: "100%", md: "20%" }}
          h={{ base: "100%", md: "100%" }}
          bg={useColorModeValue("white", "gray.800")}
          overflow="hidden">
          <Flex
            justify="center"
            align="center"
            direction="column"
            py={12}
            px={6}
            bg={useColorModeValue("gray.50", "gray.900")}>
            <Avatar
              size="2xl"
              src={user?.avatar?.url}
              mb={4}
              pos="relative"
              _after={{
                content: '""',
                w: 4,
                h: 4,
                bg: "green.300",
                border: "2px solid white",
                rounded: "full",
                pos: "absolute",
                bottom: 0,
                right: 3,
              }}
            />
            <Text fontSize="2xl" fontWeight="bold">
              {user?.name}
            </Text>
            <Text
              fontSize="sm"
              color={useColorModeValue("gray.600", "gray.400")}>
              {user?.email}
            </Text>
          </Flex>

          <Flex
            w={"auto"}
            direction="row"
            align="center"
            justify="center"
            display={{ base: "flex", md: "none" }}>
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? (
                  <CloseIcon w={3} h={3} />
                ) : (
                  <HamburgerIcon w={5} h={5} />
                )
              }
              variant={"ghost"}
              aria-label={"Toggle Navigation"}
            />
          </Flex>

          <Box
            display={{ base: "none", md: "block" }}
            py={4}
            px={6}
            bg={useColorModeValue("white", "gray.800")}
            borderBottomWidth={1}
            borderColor={useColorModeValue("gray.200", "gray.700")}>
            <Text
              fontSize="sm"
              fontWeight="semibold"
              color={useColorModeValue("gray.600", "gray.400")}>
              Account
            </Text>

            <Flex
              mt={2}
              justify="space-between"
              align="center"
              color={useColorModeValue("gray.600", "gray.400")}
              cursor="pointer"
              as={Link}
              to="/profile"
              borderRadius="md"
              _hover={{
                bg: useColorModeValue("gray.100", "gray.700"),
              }}
              onClick={() => {
                setShow(1);
              }}>
              <Flex align="center">
                <Icon as={FiUser} w={5} h={5} />
                <Text ml={4} fontSize="sm">
                  Profile
                </Text>
              </Flex>
              <Icon as={MdOutlineKeyboardArrowRight} w={5} h={5} />
            </Flex>

            <Flex
              mt={2}
              justify="space-between"
              align="center"
              color={useColorModeValue("gray.600", "gray.400")}
              cursor="pointer"
              borderRadius="md"
              as={Link}
              to="/profile/settings"
              _hover={{
                bg: useColorModeValue("gray.100", "gray.700"),
              }}
              onClick={() => {
                setShow(2);
              }}>
              <Flex align="center">
                <Icon as={FiSettings} w={5} h={5} />
                <Text ml={4} fontSize="sm">
                  Settings
                </Text>
              </Flex>
              <Icon as={MdOutlineKeyboardArrowRight} w={5} h={5} />
            </Flex>

            <Flex
              mt={2}
              justify="space-between"
              align="center"
              color={useColorModeValue("gray.600", "gray.400")}
              cursor="pointer"
              borderRadius="md"
              as={Link}
              to="/profile/orders"
              _hover={{
                bg: useColorModeValue("gray.100", "gray.700"),
              }}
              onClick={() => {
                setShow(3);
              }}>
              <Flex align="center">
                <Icon as={FiShoppingBag} w={5} h={5} />
                <Text ml={4} fontSize="sm">
                  Orders
                </Text>
              </Flex>
              <Icon as={MdOutlineKeyboardArrowRight} w={5} h={5} />
            </Flex>

            <Flex
              mt={2}
              justify="space-between"
              align="center"
              color={useColorModeValue("gray.600", "gray.400")}
              cursor="pointer"
              borderRadius="md"
              as={Link}
              to="/profile/payment"
              _hover={{
                bg: useColorModeValue("gray.100", "gray.700"),
              }}
              onClick={() => {
                setShow(4);
              }}>
              <Flex align="center">
                <Icon as={FiCreditCard} w={5} h={5} />
                <Text ml={4} fontSize="sm">
                  Payment
                </Text>
              </Flex>
              <Icon as={MdOutlineKeyboardArrowRight} w={5} h={5} />
            </Flex>

            {user?.role === "admin" && (
              <>
                <Text
                  fontSize="sm"
                  fontWeight="semibold"
                  color={useColorModeValue("gray.600", "gray.400")}
                  mt={6}>
                  Admin
                </Text>
                <Flex
                  mt={2}
                  justify="space-between"
                  align="center"
                  color={useColorModeValue("gray.600", "gray.400")}
                  cursor="pointer"
                  borderRadius="md"
                  as={Link}
                  to="/profile/admin/users"
                  _hover={{
                    bg: useColorModeValue("gray.100", "gray.700"),
                  }}
                  onClick={() => {
                    setShow(5);
                  }}>
                  <Flex align="center">
                    <Icon as={FiUsers} w={5} h={5} />
                    <Text ml={4} fontSize="sm">
                      Users
                    </Text>
                  </Flex>
                  <Icon as={MdOutlineKeyboardArrowRight} w={5} h={5} />
                </Flex>

                <Flex
                  mt={2}
                  justify="space-between"
                  align="center"
                  color={useColorModeValue("gray.600", "gray.400")}
                  cursor="pointer"
                  borderRadius="md"
                  as={Link}
                  to="/profile/admin/products"
                  _hover={{
                    bg: useColorModeValue("gray.100", "gray.700"),
                  }}
                  onClick={() => {
                    setShow(6);
                  }}>
                  <Flex align="center">
                    <Icon as={FiShoppingCart} w={5} h={5} />
                    <Text ml={4} fontSize="sm">
                      Products
                    </Text>
                  </Flex>
                  <Icon as={MdOutlineKeyboardArrowRight} w={5} h={5} />
                </Flex>

                <Flex
                  mt={2}
                  justify="space-between"
                  align="center"
                  color={useColorModeValue("gray.600", "gray.400")}
                  cursor="pointer"
                  as={Link}
                  to="/profile/admin/createProduct"
                  borderRadius="md"
                  _hover={{
                    bg: useColorModeValue("gray.100", "gray.700"),
                  }}
                  onClick={() => {
                    setShow(7);
                  }}>
                  <Flex align="center">
                    <Icon as={FiShoppingCart} w={5} h={5} />
                    <Text ml={4} fontSize="sm">
                      Create Product
                    </Text>
                  </Flex>
                  <Icon as={MdOutlineKeyboardArrowRight} w={5} h={5} />
                </Flex>

                <Flex
                  mt={2}
                  justify="space-between"
                  align="center"
                  color={useColorModeValue("gray.600", "gray.400")}
                  cursor="pointer"
                  borderRadius="md"
                  as={Link}
                  to="/profile/admin/updateProduct"
                  _hover={{
                    bg: useColorModeValue("gray.100", "gray.700"),
                  }}
                  onClick={() => {
                    setShow(8);
                  }}>
                  <Flex align="center">
                    <Icon as={FiShoppingCart} w={5} h={5} />
                    <Text ml={4} fontSize="sm">
                      Update Product
                    </Text>
                  </Flex>
                  <Icon as={MdOutlineKeyboardArrowRight} w={5} h={5} />
                </Flex>

                <Flex
                  mt={2}
                  justify="space-between"
                  align="center"
                  color={useColorModeValue("gray.600", "gray.400")}
                  cursor="pointer"
                  borderRadius="md"
                  as={Link}
                  to="/profile/admin/orders"
                  _hover={{
                    bg: useColorModeValue("gray.100", "gray.700"),
                  }}
                  onClick={() => {
                    setShow(9);
                  }}>
                  <Flex align="center">
                    <Icon as={FiShoppingCart} w={5} h={5} />
                    <Text ml={4} fontSize="sm">
                      Orders
                    </Text>
                  </Flex>
                  <Icon as={MdOutlineKeyboardArrowRight} w={5} h={5} />
                </Flex>
              </>
            )}
            <Text
              fontSize="sm"
              fontWeight="semibold"
              color={useColorModeValue("gray.600", "gray.400")}
              mt={6}
              onClick={() => {
                setShow(10);
              }}>
              Support
            </Text>

            <Flex
              mt={2}
              justify="space-between"
              align="center"
              color={useColorModeValue("gray.600", "gray.400")}
              cursor="pointer"
              borderRadius="md"
              _hover={{
                bg: useColorModeValue("gray.100", "gray.700"),
              }}
              onClick={() => {
                setShow(11);
              }}>
              <Flex align="center">
                <Icon as={FiHelpCircle} w={5} h={5} />
                <Text ml={4} fontSize="sm">
                  Help Center
                </Text>
              </Flex>
              <Icon as={MdOutlineKeyboardArrowRight} w={5} h={5} />
            </Flex>

            <Flex
              mt={2}
              justify="space-between"
              align="center"
              color={useColorModeValue("gray.600", "gray.400")}
              cursor="pointer"
              borderRadius="md"
              _hover={{
                bg: useColorModeValue("gray.100", "gray.700"),
              }}
              onClick={() => {
                setShow(12);
              }}>
              <Flex align="center">
                <Icon as={FiMail} w={5} h={5} />
                <Text ml={4} fontSize="sm">
                  Contact Us
                </Text>
              </Flex>
              <Icon as={MdOutlineKeyboardArrowRight} w={5} h={5} />
            </Flex>

            <Flex
              mt={2}
              justify="space-between"
              align="center"
              color={useColorModeValue("gray.600", "gray.400")}
              cursor="pointer"
              borderRadius="md"
              _hover={{
                bg: useColorModeValue("gray.100", "gray.700"),
              }}
              onClick={() => {
                setShow(13);
              }}>
              <Flex align="center">
                <Icon as={FiPhone} w={5} h={5} />
                <Text ml={4} fontSize="sm">
                  +1 234 567 890
                </Text>
              </Flex>
              <Icon as={MdOutlineKeyboardArrowRight} w={5} h={5} />
            </Flex>

            <Flex
              mt={2}
              justify="space-between"
              align="center"
              color={useColorModeValue("gray.600", "gray.400")}
              cursor="pointer"
              borderRadius="md"
              _hover={{
                bg: useColorModeValue("gray.100", "gray.700"),
              }}
              onClick={() => {
                logoutHandler();
              }}>
              <Flex align="center">
                <Icon as={FiLogOut} w={5} h={5} />
                <Text ml={4} fontSize="sm">
                  Logout
                </Text>
              </Flex>
              <Icon as={MdOutlineKeyboardArrowRight} w={5} h={5} />
            </Flex>
          </Box>

          <Stack
            spacing={1}
            align="center"
            justify="center"
            display={{ base: isOpen ? "flex" : "none", md: "none" }}>
            <Flex
              align="center"
              px={6}
              py={3}
              cursor="pointer"
              borderRadius="md"
              _hover={{
                bg: useColorModeValue("gray.100", "gray.700"),
              }}
              onClick={() => {
                setShow(1);
                onToggle();
              }}>
              <Icon as={FiUser} w={5} h={5} />
              <Text ml={4} fontWeight="medium">
                Profile
              </Text>
            </Flex>
            <Flex
              align="center"
              px={6}
              py={3}
              cursor="pointer"
              borderRadius="md"
              _hover={{
                bg: useColorModeValue("gray.100", "gray.700"),
              }}
              onClick={() => {
                setShow(2);
                onToggle();
              }}>
              <Icon as={FiSettings} w={5} h={5} />
              <Text ml={4} fontWeight="medium">
                Settings
              </Text>
            </Flex>

            <Flex
              align="center"
              px={6}
              py={3}
              cursor="pointer"
              borderRadius="md"
              _hover={{
                bg: useColorModeValue("gray.100", "gray.700"),
              }}
              onClick={() => {
                setShow(3);
                onToggle();
              }}>
              <Icon as={FiShoppingCart} w={5} h={5} />
              <Text ml={4} fontWeight="medium">
                Orders
              </Text>
            </Flex>

            <Flex
              align="center"
              px={6}
              py={3}
              cursor="pointer"
              borderRadius="md"
              _hover={{
                bg: useColorModeValue("gray.100", "gray.700"),
              }}
              onClick={() => {
                setShow(4);
                onToggle();
              }}>
              <Icon as={FiCreditCard} w={5} h={5} />
              <Text ml={4} fontWeight="medium">
                Payment
              </Text>
            </Flex>
            {user?.role === "admin" && (
              <>
                <Flex
                  align="center"
                  px={6}
                  py={3}
                  cursor="pointer"
                  borderRadius="md"
                  _hover={{
                    bg: useColorModeValue("gray.100", "gray.700"),
                  }}
                  onClick={() => {
                    // setShow(5);

                    onToggle();
                  }}>
                  <Icon as={FiUser} w={5} h={5} />
                  <Text ml={4} fontWeight="medium">
                    Users
                  </Text>
                </Flex>

                <Flex
                  align="center"
                  px={6}
                  py={3}
                  cursor="pointer"
                  borderRadius="md"
                  _hover={{
                    bg: useColorModeValue("gray.100", "gray.700"),
                  }}
                  onClick={() => {
                    setShow(6);
                    onToggle();
                  }}>
                  <Icon as={FiShoppingBag} w={5} h={5} />
                  <Text ml={4} fontWeight="medium">
                    Products
                  </Text>
                </Flex>

                <Flex
                  align="center"
                  px={6}
                  py={3}
                  cursor="pointer"
                  borderRadius="md"
                  _hover={{
                    bg: useColorModeValue("gray.100", "gray.700"),
                  }}
                  onClick={() => {
                    setShow(7);
                    onToggle();
                  }}>
                  <Icon as={FiShoppingBag} w={5} h={5} />
                  <Text ml={4} fontWeight="medium">
                    Create Product
                  </Text>
                </Flex>

                <Flex
                  align="center"
                  px={6}
                  py={3}
                  cursor="pointer"
                  borderRadius="md"
                  _hover={{
                    bg: useColorModeValue("gray.100", "gray.700"),
                  }}
                  onClick={() => {
                    setShow(8);
                    onToggle();
                  }}>
                  <Icon as={FiShoppingBag} w={5} h={5} />
                  <Text ml={4} fontWeight="medium">
                    Update Product
                  </Text>
                </Flex>

                <Flex
                  align="center"
                  px={6}
                  py={3}
                  cursor="pointer"
                  borderRadius="md"
                  _hover={{
                    bg: useColorModeValue("gray.100", "gray.700"),
                  }}
                  onClick={() => {
                    setShow(9);
                    onToggle();
                  }}>
                  <Icon as={FiShoppingCart} w={5} h={5} />
                  <Text ml={4} fontWeight="medium">
                    Orders
                  </Text>
                </Flex>
              </>
            )}
            <Flex
              align="center"
              px={6}
              py={3}
              cursor="pointer"
              borderRadius="md"
              _hover={{
                bg: useColorModeValue("gray.100", "gray.700"),
              }}
              onClick={logoutHandler}>
              <Icon as={FiLogOut} w={5} h={5} />
              <Text ml={4} fontWeight="medium">
                Logout
              </Text>
            </Flex>
          </Stack>
        </Box>
        {show === 1 && <EditProfile />}
        {show === 5 && <UsersDashboard />}
        {show === 6 && <ProductsDashboard />}
        {show === 7 && <CreateProduct />}
        {show === 8 && <UpdateProduct />}
        {show === 9 && <OrdersDashboard />}
      </Flex>
    </Container>
  );
}
