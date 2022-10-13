import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Home() {
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(8);
  const [isLoading, setLoading] = useState(true);
  return (
    <>
      <div>home</div>
    </>
  );
}
