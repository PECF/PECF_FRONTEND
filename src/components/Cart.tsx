import React from "react";
import { DragHandleIcon, MinusIcon } from "@chakra-ui/icons";
import {
  Box,
  ListIcon,
  Text,
  Flex,
  Spacer,
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  Button,
  UnorderedList,
  ListItem,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";

export default function Cart() {
  const btnRef = React.useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const CARRYPRODUCTS = [
    { name: "remera 1", price: 1000 },
    { name: "remera 1", price: 1000 },
    { name: "remera 1", price: 1000 },
  ];
  return (
    <Box>
      <Button
        ref={btnRef}
        onClick={onOpen}
        leftIcon={<DragHandleIcon />}
        colorScheme="teal"
        p="5"
        variant="solid">
        Cart
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Carry products</DrawerHeader>

          <DrawerBody>
            <UnorderedList spacing={3} stylePosition="" styleType="none">
              {CARRYPRODUCTS.map((product) => {
                return (
                  <ListItem styleType="none" key={product.name}>
                    <Flex alingItems="center">
                      <ListIcon as={MinusIcon} mt="2" />
                      <Text>{product.name}</Text>
                      <Spacer />
                      <Text>${product.price}</Text>
                    </Flex>
                  </ListItem>
                );
              })}
            </UnorderedList>
          </DrawerBody>

          <DrawerFooter>
            <Text>Total: $3000</Text>

            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="teal">Buy</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </Box>
  );
}
