import React, { ReactNode } from "react";

import {
  Stack,
  Button,
  Input,
  Box,
  Center,
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

import { BiArrowBack } from "react-icons/bi";
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

export default function ModiCellPhone({ children }: { children: ReactNode }) {
  return (
    <Box minH="100vh" bg={useColorModeValue("gray.100", "gray.900")}>
      <SidebarContent display={{ base: "none", md: "block" }} />

      <Link to="/MisDatos" style={{ textDecoration: "none" }}>
        <Box ml="330px" mb="10px">
          <BiArrowBack fontSize="30px" />
        </Box>
      </Link>
      <Box ml="360px" mb="10px">
        <h1>Modify your Cell Phone</h1>
      </Box>

      <Center
        bg="#e3e2e2"
        w="600px"
        h="330px"
        borderRadius="15px"
        mr="410px"
        mt="20px"
        ml="350px"
        color="black"
      >
        <Box mr="400px" ml="140px" mt="-140px" p="20px">
          <Box fontSize="20" mb="-10px" ml="38px">
            <Box fontSize="15px" ml="260px" mb="20px">
              <h2>Cell Phone</h2>
            </Box>
          </Box>
          <Box ml="385px">
            <Input
              borderRadius="10px"
              ml="-130px"
              w="200px"
              h="40px"
              placeholder="Number"
            />
          </Box>
        </Box>

        <Stack spacing={4} direction="row" align="center" mt="30px">
          <Button
            bg="black"
            w="120px"
            h="40px"
            color="white"
            mr="10px"
            ml="-580px"
            mb="-90px"
            fontSize="15px"
            bold="200px"
            borderRadius="10px"
            border="2px"
            borderColor="green.500"
            cursor="pointer"
            _hover={{
              bg: "teal",
              color: "white",
            }}
          >
            Modify
          </Button>
        </Stack>
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
          Mis Datos
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
