import React, { ReactNode } from "react";
import { Avatar } from "@chakra-ui/react";
import {
  Box,
  Center,
  Wrap,
  WrapItem,
  Flex,
  Icon,
  useColorModeValue,
  Text,
  BoxProps,
  FlexProps,
} from "@chakra-ui/react";
import {
  FiCompass,
  FiStar,
  FiSettings,
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

interface LinkItemProps {
  name: string;
  icon: IconType;
}
const LinkItems: Array<LinkItemProps> = [
  { name: "My Profile", icon: FiUser },
  { name: "Shopping", icon: FiShoppingBag },
  { name: "Explore", icon: FiCompass },
  { name: "Favourites", icon: FiStar },
  { name: "Settings", icon: FiSettings },
];

export default function Profile({ children }: { children: ReactNode }) {
  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContent display={{ base: "none", md: "block" }} />

      <Center
        bg="#48d1cc"
        h="100px"
        borderRadius="15px"
        mr="410px"
        ml="350px"
        color="black"
      >
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
          }}
        >
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
        }}
      >
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
        }}
      >
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
        }}
      >
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
        }}
      >
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
      </Center>
    </Box>
  );
}

interface SidebarProps extends BoxProps {
  onClose: () => void;
}

const SidebarContent = ({ ...rest }: SidebarProps) => {
  return (
    <Box
      bg={useColorModeValue("white", "gray.900")}
      borderRight="1px"
      borderRightColor={useColorModeValue("gray.200", "gray.700")}
      w={{ base: "full", md: 60 }}
      pos="fixed"
      h="full"
      {...rest}
    >
      <Flex h="50" alignItems="center" mx="9" justifyContent="space-between">
        <Text fontSize="26" fontFamily="arial" fontWeight="bold">
          My Data
        </Text>
      </Flex>
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

interface NavItemProps extends FlexProps {
  icon: IconType;
  children: ReactText;
}
const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
  return (
    <Link
      href="#"
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        bg="#e3e2e2"
        mb="20px"
        align="center"
        p="20"
        mx="1"
        borderRadius="20px"
        role="group"
        cursor="pointer"
        color="black"
        _hover={{
          bg: "teal",
          color: "white",
        }}
        {...rest}
      >
        {icon && (
          <Icon
            mr="6"
            fontSize="22"
            _groupHover={{
              color: "white",
            }}
            as={icon}
          />
        )}
        {children}
      </Flex>
    </Link>
  );
};
