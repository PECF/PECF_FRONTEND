import React, { Fragment, useState } from "react";
import useEffect from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProduct } from "../../stores/actions/productAction";
import { clearErrors } from "../../stores/actions/orderActions";

export default function Home() {
  const dispatch = useDispatch();

  // const [currentPage, setCurrentPage] = useState(1);
  // const [productsPerPage, setProductsPerPage] = useState(8);
  // const [isLoading, setLoading] = useState(true);

  return (
    <Fragment>
      <h1>E-Commerce Name</h1>
    </Fragment>
    
  );
}
