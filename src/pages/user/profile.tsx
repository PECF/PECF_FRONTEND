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
  FiUser,
  FiShoppingBag,
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
import { ReactText } from "react";
import { Link } from "react-router-dom";

import { useRecoveryData } from "../../hooks/useRecoveryData";
export function Profile() {
  const { user } = useRecoveryData("userDetails");

  return (
    <Container
      maxW="container.xxl"
      bg={useColorModeValue("gray.100", "gray.900")}
      minH="100vh">
      <Flex
        direction={{ base: "column", md: "row" }}
        
        py={10}>
        <Box
          w={{ base: "full", md: "1/3" }}
          bg={useColorModeValue("white", "gray.800")}
          rounded={{ md: "lg" }}
          shadow={{ md: "xl" }}
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
              color={useColorModeValue("gray.600", "gray.400")}>
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
              color={useColorModeValue("gray.600", "gray.400")}>
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
              color={useColorModeValue("gray.600", "gray.400")}>
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
              color={useColorModeValue("gray.600", "gray.400")}>
              <Flex align="center">
                <Icon as={FiLogOut} w={5} h={5} />
                <Text ml={4} fontSize="sm">
                  Logout
                </Text>
              </Flex>
              <Icon as={FaAngleDoubleRight} w={5} h={5} />
            </Flex>

            <Text
              fontSize="sm"
              fontWeight="semibold"
              color={useColorModeValue("gray.600", "gray.400")}
              mt={6}>
              Support
            </Text>
            <Flex
              mt={2}
              justify="space-between"
              align="center"
              color={useColorModeValue("gray.600", "gray.400")}>
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
              color={useColorModeValue("gray.600", "gray.400")}>
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
              color={useColorModeValue("gray.600", "gray.400")}>
              <Flex align="center">
                {/* Only English, add a container with phone number */}
                <Icon as={FiPhone} w={5} h={5} />
                <Text ml={4} fontSize="sm">
                  +1 234 567 890
                </Text>
              </Flex>
              <Icon as={FaAngleDoubleRight} w={5} h={5} />
            </Flex>
          </Box>
        </Box>
      </Flex>
      {/* <SidebarContent
        display={{ base: "none", md: "block" }}
        onClose={function (): void {
          throw new Error("Function not implemented.");
        }}
      /> */}

      {/* <Center
        bg="#48d1cc"
        h="100px"
        borderRadius="15px"
        mr="410px"
        ml="350px"
        color="black">
        <Wrap>
          <WrapItem>
            <Avatar
              name="Dan Abrahmov"
              borderRadius="422px"
              mr="40px"
              ml="20px"
              p="-50px"
              h="90px"
              src="https://bit.ly/dan-abramov"
            />
          </WrapItem>
        </Wrap>
        <Box mr="400px" mb="15px" p="-40px">
          <Box fontSize="20">
            <h4>Dan Abrahmov</h4>
          </Box>
          <Box>
            <p>Level Diamond {<RiVipDiamondFill />} </p>
          </Box>
        </Box>
      </Center>

      <Link to="/misdatos" style={{ textDecoration: "none" }}>
        <Center
          bg="#e3e2e2"
          h="100px"
          borderRadius="15px"
          mr="410px"
          mt="40px"
          ml="350px"
          color="black"
          cursor="pointer"
          _hover={{
            bg: "teal",
            color: "white",
          }}>
          <Wrap>
            <WrapItem w="30px" h="40px" p="-20px" cursor="pointer">
              <FiUser mr="6" fontSize="30" />
            </WrapItem>
          </Wrap>

          <Box mr="400px" mb="15px" p="40px" w="24%" cursor="pointer">
            <Box fontSize="20" mb="-10px" ml="-2px">
              <h4>My data</h4>
            </Box>
            <Box ml="">
              <p>Manage your personal data</p>
            </Box>
          </Box>
          <Wrap>
            <WrapItem ml="120px">
              <FaAngleDoubleRight mr="6" fontSize="18" cursor="pointer" />
            </WrapItem>
          </Wrap>
        </Center>
      </Link>

      <Center
        bg="#e3e2e2"
        h="100px"
        borderRadius="15px"
        mr="410px"
        mt="7px"
        ml="350px"
        color="black"
        cursor="pointer"
        _hover={{
          bg: "teal",
          color: "white",
        }}>
        <Wrap>
          <WrapItem w="30px" h="40px" mr="110px" p="-20px" cursor="pointer">
            <RiShieldKeyholeFill mr="6" fontSize="30" p="10px" />
          </WrapItem>
        </Wrap>

        <Box mr="400px" mb="15px" w="20%" p="40px" cursor="pointer">
          <Box fontSize="20" mb="-10px" ml="-2px">
            <h4>Security</h4>
          </Box>
          <Box ml="4px">
            <p>Configure your account security</p>
          </Box>
        </Box>
        <Wrap ml="30px">
          <WrapItem ml="-10px">
            <FaAngleDoubleRight
              mr="13"
              ml="-15px"
              p="0px"
              fontSize="18"
              cursor="pointer"
            />
          </WrapItem>
        </Wrap>
      </Center>

      <Center
        bg="#e3e2e2"
        h="100px"
        borderRadius="15px"
        mr="410px"
        mt="7px"
        ml="350px"
        color="black"
        cursor="pointer"
        _hover={{
          bg: "teal",
          color: "white",
        }}>
        <Wrap>
          <WrapItem w="30px" h="40px" mr="110px" p="-20px" cursor="pointer">
            <RiBankCardFill mr="6" fontSize="30" p="10px" />
          </WrapItem>
        </Wrap>

        <Box mr="400px" mb="15px" w="24%" p="40px" cursor="pointer">
          <Box fontSize="20" mb="-10px" ml="-2px">
            <h4>My cards</h4>
          </Box>
          <Box ml="4px">
            <p>Manage your payment methods</p>
          </Box>
        </Box>
        <Wrap>
          <WrapItem ml="120px" p="-5px">
            <FaAngleDoubleRight mr="6" fontSize="18" cursor="pointer" />
          </WrapItem>
        </Wrap>
      </Center>

      <Center
        bg="#e3e2e2"
        h="100px"
        borderRadius="15px"
        mr="410px"
        mt="7px"
        ml="350px"
        color="black"
        cursor="pointer"
        _hover={{
          bg: "teal",
          color: "white",
        }}>
        <Wrap>
          <WrapItem w="30px" h="40px" mr="110px" p="-20px" cursor="pointer">
            <RiUserLocationFill mr="6" fontSize="30" />
          </WrapItem>
        </Wrap>

        <Box mr="400px" mb="15px" w="25%" ml="-8px" p="40px" cursor="pointer">
          <Box fontSize="20" mb="-10px" ml="7px">
            <h4>Addresses</h4>
          </Box>
          <Box ml="10px">
            <p>Modify your addresses or create a new one</p>
          </Box>
        </Box>
        <Wrap>
          <WrapItem ml="120px" p="-5px">
            <FaAngleDoubleRight mr="6" fontSize="18" cursor="pointer" />
          </WrapItem>
        </Wrap>
      </Center>

      <Center
        bg="#e3e2e2"
        h="100px"
        borderRadius="15px"
        mr="410px"
        mt="7px"
        ml="350px"
        color="black"
        cursor="pointer"
        _hover={{
          bg: "teal",
          color: "white",
        }}>
        <Wrap>
          <WrapItem w="30px" h="40px" mr="110px" p="-20px" cursor="pointer">
            <RiExchangeDollarLine mr="6" fontSize="30" />
          </WrapItem>
        </Wrap>

        <Box mr="400px" mb="15px" w="25%" ml="-8px" p="40px" cursor="pointer">
          <Box fontSize="20" mb="-10px" ml="7px">
            <h4>My subscriptions</h4>
          </Box>
          <Box ml="12px">
            <p> Manage your subscriptions</p>
          </Box>
        </Box>
        <Wrap>
          <WrapItem ml="120px">
            <FaAngleDoubleRight mr="6" fontSize="18" cursor="pointer" />
          </WrapItem>
        </Wrap>
      </Center> */}
    </Container>
  );
}

// interface SidebarProps extends BoxProps {
//   onClose: () => void;
// }

// const SidebarContent = ({ ...rest }: SidebarProps) => {
//   return (
//     <Box
//       bg={useColorModeValue("white", "gray.900")}
//       borderRight="1px"
//       borderRightColor={useColorModeValue("gray.200", "gray.700")}
//       w={{ base: "full", md: 60 }}
//       pos="fixed"
//       h="full"
//       {...rest}>
//       <Flex h="50" alignItems="center" mx="9" justifyContent="space-between">
//         <Text fontSize="26" fontFamily="arial" fontWeight="bold">
//           My Data
//         </Text>
//       </Flex>
//       {LinkItems.map((link) => (
//         <NavItem key={link.name} icon={link.icon}>
//           {link.name}
//         </NavItem>
//       ))}
//     </Box>
//   );
// };

// interface NavItemProps extends FlexProps {
//   icon: IconType;
//   children: ReactText;
// }
// const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
//   return (
//     <Link
//       href="#"
//       style={{ textDecoration: "none" }}
//       _focus={{ boxShadow: "none" }}>
//       <Flex
//         bg="#e3e2e2"
//         mb="20px"
//         align="center"
//         p="20"
//         mx="1"
//         borderRadius="20px"
//         role="group"
//         cursor="pointer"
//         color="black"
//         _hover={{
//           bg: "teal",
//           color: "white",
//         }}
//         {...rest}>
//         {icon && (
//           <Icon
//             mr="6"
//             fontSize="22"
//             _groupHover={{
//               color: "white",
//             }}
//             as={icon}
//           />
//         )}
//         {children}
//       </Flex>
//     </Link>
//   );
// };
