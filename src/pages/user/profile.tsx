import React, { ReactNode } from "react";
import {
  Box,
  Center,
  Wrap,
  WrapItem,
  Flex,
  Icon,
  Container,
  useColorModeValue,
  Text,
  Avatar,
  BoxProps,
  FlexProps,
  Heading,
  Button,
  useDisclosure,
  VStack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  Divider,
  FormErrorMessage,
  FormHelperText,
  useToast,
} from "@chakra-ui/react";
import {
  FiCompass,
  FiCreditCard,
  FiHeart,
  FiShoppingCart,
  FiMail,
  FiHelpCircle,
  FiLogOut,
  FiStar,
  FiSettings,
  FiPhone,
  FiUsers,
  FiUser,
  FiShoppingBag,
  FiChevronDown,
  FiChevronUp,
  FiChevronRight,
  FiChevronLeft,
  FiMenu,
  FiX,
  FiSearch,
  FiEdit,
} from "react-icons/fi";
import { FaAngleDoubleRight } from "react-icons/fa";

import {
  RiVipDiamondFill,
  RiShieldKeyholeFill,
  RiBankCardFill,
  RiUserLocationFill,
  RiExchangeDollarLine,
} from "react-icons/ri";

import { IconType } from "react-icons";
import { useState } from "react";
import { Link } from "react-router-dom";
import { EditProfile } from "./editProfile";
import { useRecoveryData } from "../../hooks/useRecoveryData";
import { ProductsDashboard } from "../../components/ProductsDashboard";
import { OrdersDashboard } from "../../components/OrdersDashboard";

import useEffect from "react";

import { logout } from "../../redux/actions/authActions";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/rootStore";
import { CreateProduct } from "../../components/CreateProduct";
export function Profile() {
  const { user } = useRecoveryData("userDetails");

  const [show, setShow] = useState(1);

  const dispatch = useDispatch<AppDispatch>();
  const send = useToast();

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

            <Text
              fontSize="sm"
              color={useColorModeValue("gray.600", "gray.400")}>
              {user?.phone}
            </Text>

            <Text
              fontSize="sm"
              color={useColorModeValue("gray.600", "gray.400")}>
              {user?.address}
            </Text>

            <Text
              fontSize="sm"
              color={useColorModeValue("gray.600", "gray.400")}>
              {user?.city}
            </Text>

            <Text
              fontSize="sm"
              color={useColorModeValue("gray.600", "gray.400")}>
              {user?.state}
            </Text>

            <Text
              fontSize="sm"
              color={useColorModeValue("gray.600", "gray.400")}>
              {user?.country}
            </Text>

            <Text
              fontSize="sm"
              color={useColorModeValue("gray.600", "gray.400")}>
              {user?.zip}
            </Text>

            <Text
              fontSize="sm"
              color={useColorModeValue("gray.600", "gray.400")}>
              {new Date(user?.createdAt).toLocaleString()}
            </Text>

            <Text
              fontSize="sm"
              color={useColorModeValue("gray.600", "gray.400")}>
              {user?.role}
            </Text>

            <Text
              fontSize="sm"
              color={useColorModeValue("gray.600", "gray.400")}>
              {user?.status}
            </Text>

            <Text
              fontSize="sm"
              color={useColorModeValue("gray.600", "gray.400")}>
              {user?._id}
            </Text>

            <Text
              fontSize="sm"
              color={useColorModeValue("gray.600", "gray.400")}>
              {user?.username}
            </Text>

            <Text
              fontSize="sm"
              color={useColorModeValue("gray.600", "gray.400")}>
              {user?.password}
            </Text>

            <Text
              fontSize="sm"
              color={useColorModeValue("gray.600", "gray.400")}>
              {user?.emailVerified}
            </Text>
          </Flex>

          <Box py={4} px={6}>
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
              onClick={() => {
                setShow(1);
              }}>
              <Flex align="center">
                <Icon as={FiUser} w={5} h={5} />
                <Text ml={4} fontSize="sm">
                  Profile
                </Text>
              </Flex>
              <Icon as={FaAngleDoubleRight} w={5} h={5} />
            </Flex>

            <Flex
              mt={2}
              justify="space-between"
              align="center"
              color={useColorModeValue("gray.600", "gray.400")}>
              <Flex align="center">
                <Icon as={FiSettings} w={5} h={5} />
                <Text ml={4} fontSize="sm">
                  Settings
                </Text>
              </Flex>
              <Icon as={FaAngleDoubleRight} w={5} h={5} />
            </Flex>

            <Flex
              mt={2}
              justify="space-between"
              align="center"
              color={useColorModeValue("gray.600", "gray.400")}
              onClick={() => {
                setShow(3);
              }}>
              <Flex align="center">
                <Icon as={FiShoppingBag} w={5} h={5} />
                <Text ml={4} fontSize="sm">
                  Orders
                </Text>
              </Flex>
              <Icon as={FaAngleDoubleRight} w={5} h={5} />
            </Flex>

            <Flex
              mt={2}
              justify="space-between"
              align="center"
              color={useColorModeValue("gray.600", "gray.400")}
              onClick={() => {
                setShow(4);
              }}>
              <Flex align="center">
                <Icon as={FiCreditCard} w={5} h={5} />
                <Text ml={4} fontSize="sm">
                  Payment
                </Text>
              </Flex>
              <Icon as={FaAngleDoubleRight} w={5} h={5} />
            </Flex>
            <Flex
              mt={2}
              justify="space-between"
              align="center"
              color={useColorModeValue("gray.600", "gray.400")}
              onClick={() => {
                logoutHandler();
              }}>
              <Flex align="center">
                <Icon as={FiLogOut} w={5} h={5} />
                <Text ml={4} fontSize="sm">
                  Logout
                </Text>
              </Flex>
              <Icon as={FaAngleDoubleRight} w={5} h={5} />
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
                  onClick={() => {
                    setShow(5);
                  }}>
                  <Flex align="center">
                    <Icon as={FiUsers} w={5} h={5} />
                    <Text ml={4} fontSize="sm">
                      Users
                    </Text>
                  </Flex>
                  <Icon as={FaAngleDoubleRight} w={5} h={5} />
                </Flex>
                <Flex
                  mt={2}
                  justify="space-between"
                  align="center"
                  color={useColorModeValue("gray.600", "gray.400")}
                  onClick={() => {
                    setShow(6);
                  }}>
                  <Flex align="center">
                    <Icon as={FiShoppingCart} w={5} h={5} />
                    <Text ml={4} fontSize="sm">
                      Products
                    </Text>
                  </Flex>
                  <Icon as={FaAngleDoubleRight} w={5} h={5} />
                </Flex>
                <Flex
                  mt={2}
                  justify="space-between"
                  align="center"
                  color={useColorModeValue("gray.600", "gray.400")}
                  onClick={() => {
                    setShow(7);
                  }}>
                  <Flex align="center">
                    <Icon as={FiShoppingCart} w={5} h={5} />
                    <Text ml={4} fontSize="sm">
                      Create Product
                    </Text>
                  </Flex>
                  <Icon as={FaAngleDoubleRight} w={5} h={5} />
                </Flex>

                <Flex
                  mt={2}
                  justify="space-between"
                  align="center"
                  color={useColorModeValue("gray.600", "gray.400")}
                  onClick={() => {
                    setShow(8);
                  }}>
                  <Flex align="center">
                    <Icon as={FiShoppingCart} w={5} h={5} />
                    <Text ml={4} fontSize="sm">
                      Orders
                    </Text>
                  </Flex>
                  <Icon as={FaAngleDoubleRight} w={5} h={5} />
                </Flex>
              </>
            )}

            <Text
              fontSize="sm"
              fontWeight="semibold"
              color={useColorModeValue("gray.600", "gray.400")}
              mt={6}
              onClick={() => {
                setShow(9);
              }}>
              Support
            </Text>
            <Flex
              mt={2}
              justify="space-between"
              align="center"
              color={useColorModeValue("gray.600", "gray.400")}
              onClick={() => {
                setShow(10);
              }}>
              <Flex align="center">
                <Icon as={FiHelpCircle} w={5} h={5} />
                <Text ml={4} fontSize="sm">
                  Help Center
                </Text>
              </Flex>
              <Icon as={FaAngleDoubleRight} w={5} h={5} />
            </Flex>
            <Flex
              mt={2}
              justify="space-between"
              align="center"
              color={useColorModeValue("gray.600", "gray.400")}
              onClick={() => {
                setShow(11);
              }}>
              <Flex align="center">
                <Icon as={FiMail} w={5} h={5} />
                <Text ml={4} fontSize="sm">
                  Contact Us
                </Text>
              </Flex>
              <Icon as={FaAngleDoubleRight} w={5} h={5} />
            </Flex>
            <Flex
              mt={2}
              justify="space-between"
              align="center"
              color={useColorModeValue("gray.600", "gray.400")}
              onClick={() => {
                setShow(12);
              }}>
              <Flex align="center">
                <Icon as={FiPhone} w={5} h={5} />
                <Text ml={4} fontSize="sm">
                  +1 234 567 890
                </Text>
              </Flex>
              <Icon as={FaAngleDoubleRight} w={5} h={5} />
            </Flex>
          </Box>
        </Box>

        {show === 1 && <EditProfile />}
        {show === 6 && <ProductsDashboard />}
        {show === 7 && <CreateProduct />}
        {show === 8 && <OrdersDashboard />}
      </Flex>
    </Container>
  );
}
