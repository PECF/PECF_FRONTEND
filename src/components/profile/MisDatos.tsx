import React, { ReactNode } from "react";

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

import { RiShieldKeyholeFill } from "react-icons/ri";
import {
  AiFillSetting,
  AiOutlineMail,
  AiFillPhone,
  AiFillEdit,
} from "react-icons/ai";

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

export default function MisDatos({ children }: { children: ReactNode }) {
  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContent display={{ base: "none", md: "block" }} />

      <Box ml="360px" mb="10px">
        <h1>Account data</h1>
      </Box>

      <Link to="/UpdateUser" style={{ textDecoration: "none" }}>
        <Center
          bg="#e3e2e2"
          h="100px"
          borderRadius="15px"
          mr="410px"
          mt="20px"
          ml="350px"
          color="black"
          cursor="pointer"
          _hover={{
            bg: "teal",
            color: "white",
          }}
        >
          <Wrap>
            <WrapItem w="30px" h="40px" p="10px" cursor="pointer">
              <FiUser mr="1" fontSize="30" />
            </WrapItem>
          </Wrap>

          <Box mr="400px" ml="19px" mb="15px" p="20px" w="8%" cursor="pointer">
            <Box fontSize="20" mb="-10px" ml="-28px">
              <h4>User</h4>
            </Box>
            <Box ml="-25px">
              <p>joelss11</p>
            </Box>
          </Box>
          <Wrap ml="45px">
            <WrapItem ml="130px">
              <AiFillSetting ml="16px" fontSize="22" cursor="pointer" />
            </WrapItem>
          </Wrap>
        </Center>
      </Link>

      <Link to="/UpdateEmail" style={{ textDecoration: "none" }}>
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
            <WrapItem w="30px" h="40px" mr="140px" p="16px" cursor="pointer">
              <AiOutlineMail mr="6" fontSize="30" />
            </WrapItem>
          </Wrap>

          <Box
            mr="400px"
            mb="15px"
            p="-40px"
            w="25%"
            ml="-30px"
            cursor="pointer"
          >
            <Box fontSize="20" mb="-10px" ml="35px">
              <h4>E-mail</h4>
            </Box>
            <Box ml="35px">
              <p>joelss084@gmail.com</p>
            </Box>
          </Box>
          <Wrap>
            <WrapItem ml="120px">
              <AiFillSetting ml="16px" fontSize="22" cursor="pointer" />
            </WrapItem>
          </Wrap>
        </Center>
      </Link>
      <Box ml="360px" mb="10px">
        <h1>Account data</h1>
      </Box>

      <Link to="/UpdateName" style={{ textDecoration: "none" }}>
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
            <WrapItem w="30px" h="40px" mr="140px" p="16px" cursor="pointer">
              <AiFillEdit mr="6" fontSize="30" />
            </WrapItem>
          </Wrap>

          <Box
            mr="400px"
            mb="15px"
            p="-40px"
            w="25%"
            ml="-30px"
            cursor="pointer"
          >
            <Box fontSize="20" mb="-10px" ml="35px">
              <h4>Name and surname</h4>
            </Box>
            <Box ml="35px">
              <p>Joel solera</p>
            </Box>
          </Box>
          <Wrap>
            <WrapItem ml="120px">
              <AiFillSetting ml="16px" fontSize="22" cursor="pointer" />
            </WrapItem>
          </Wrap>
        </Center>
      </Link>

      <Link to="/UpdateIdentification" style={{ textDecoration: "none" }}>
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
            <WrapItem w="30px" h="40px" mr="140px" p="16px" cursor="pointer">
              <RiShieldKeyholeFill mr="6" fontSize="30" />
            </WrapItem>
          </Wrap>

          <Box
            mr="400px"
            mb="15px"
            p="-40px"
            w="25%"
            ml="-30px"
            cursor="pointer"
          >
            <Box fontSize="20" mb="-10px" ml="35px">
              <h4>Identification</h4>
            </Box>
            <Box ml="35px">
              <p>1023183491</p>
            </Box>
          </Box>
          <Wrap>
            <WrapItem ml="120px">
              <AiFillSetting ml="16px" fontSize="22" cursor="pointer" />
            </WrapItem>
          </Wrap>
        </Center>
      </Link>

      <Link to="/UpdateCellPhone" style={{ textDecoration: "none" }}>
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
            <WrapItem w="30px" h="40px" mr="140px" p="16px" cursor="pointer">
              <AiFillPhone mr="6" fontSize="30" />
            </WrapItem>
          </Wrap>

          <Box
            mr="400px"
            mb="15px"
            p="-40px"
            w="25%"
            ml="-30px"
            cursor="pointer"
          >
            <Box fontSize="20" mb="-10px" ml="35px">
              <h4>Cell phone</h4>
            </Box>
            <Box ml="35px">
              <p>3217894532</p>
            </Box>
          </Box>
          <Wrap>
            <WrapItem ml="120px">
              <AiFillSetting ml="16px" fontSize="22" cursor="pointer" />
            </WrapItem>
          </Wrap>
        </Center>
      </Link>
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
      to="/"
      style={{ textDecoration: "none" }}
      _focus={{ boxShadow: "none" }}
    >
      <Flex
        align="center"
        bg="#e3e2e2"
        mb="20px"
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
