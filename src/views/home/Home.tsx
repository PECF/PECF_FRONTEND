import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { Box } from "@chakra-ui/react";

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(8);
  const [isLoading, setLoading] = useState(true);
  return (
    <>
      <Box>
          <Box>
            <h1>E-Commerce Name</h1>
          </Box>
          <Box>
            
          </Box>
      </Box>
    </>
  );
}
