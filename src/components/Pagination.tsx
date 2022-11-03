import {
  Box,
  Flex,
  IconButton,
  useBreakpointValue,
  Text,
} from "@chakra-ui/react";
import React, { Fragment } from "react";
import { RiArrowLeftSLine, RiArrowRightSLine } from "react-icons/ri";

interface PaginationProps {
  totalProducts: number;
  productsPerPage?: number;
  currentPage?: number;
  onPageChange: (page: number) => void;
}

const siblingsCount = 1;

function generatePagesArray(from: number, to: number) {
  return [...new Array(to - from)]
    .map((_, index) => {
      return from + index + 1;
    })
    .filter((page) => page > 0);
}

export function Pagination({
  totalProducts,
  productsPerPage = 8,
  currentPage = 1,
  onPageChange,
}: PaginationProps) {
  const lastPage = Math.floor(totalProducts / productsPerPage);

  const previousPages =
    currentPage > 1
      ? generatePagesArray(currentPage - 1 - siblingsCount, currentPage - 1)
      : [];

  const nextPages =
    currentPage < lastPage
      ? generatePagesArray(
          currentPage,
          Math.min(currentPage + siblingsCount, lastPage)
        )
      : [];

  return (
    <Flex w="100%" mt="8" justify="center" align="center" gap={6}>
      <IconButton
        size="md"
        fontSize="xl"
        w="4"
        rounded="full"
        colorScheme="teal"
        disabled={currentPage === 1}
        onClick={() => onPageChange(currentPage - 1)}
        icon={<RiArrowLeftSLine />}
        aria-label={""}
      />

      {previousPages.length > 0 &&
        previousPages.map((page) => {
          return (
            <IconButton
              key={page}
              size="md"
              fontSize="xl"
              rounded="full"
              w="4"
              colorScheme="teal"
              onClick={() => onPageChange(page)}
              aria-label={""}>
              <Text>{page}</Text>
            </IconButton>
          );
        })}

      <IconButton
        size="md"
        fontSize="xl"
        rounded="full"
        w="4"
        colorScheme="teal"
        disabled
        _disabled={{
          bg: "teal.500",
          cursor: "default",
        }}
        aria-label={""}>
        <Text>{currentPage}</Text>
      </IconButton>

      {nextPages.length > 0 &&
        nextPages.map((page) => {
          return (
            <IconButton
              key={page}
              size="md"
              rounded="full"
              fontSize="xl"
              w="4"
              colorScheme="teal"
              onClick={() => onPageChange(page)}
              aria-label={""}>
              <Text>{page}</Text>
            </IconButton>
          );
        })}

      <IconButton
        size="md"
        fontSize="xl"
        w="4"
        rounded="full"
        colorScheme="teal"
        disabled={currentPage === lastPage}
        onClick={() => onPageChange(currentPage + 1)}
        icon={<RiArrowRightSLine />}
        aria-label={""}
      />
    </Flex>
  );
}
