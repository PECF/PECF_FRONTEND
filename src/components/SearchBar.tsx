import { Input, InputGroup, InputRightElement } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import React from "react";

export const SearchBar = () => {
  return (
    <InputGroup gap="2">
      <InputRightElement pointerEvents="none">
        <SearchIcon color="gray.300" cursor="pointer" />
      </InputRightElement>
      <Input placeholder="Search..." width="3xl" flex={100} variant="filled" />
    </InputGroup>
  );
};
