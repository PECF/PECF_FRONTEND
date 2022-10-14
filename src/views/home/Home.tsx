import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { Box } from "@chakra-ui/react";
import useEffect from "react";
import { useSelector, useDispatch } from "react-redux";
import { useAlert } from "react-alert";
import { getProduct } from "../../stores/actions/productAction";
import {clearErrors} from '../../stores/actions/orderActions'

export default function Home() {
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage, setProductsPerPage] = useState(8);
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    if (error) {
      alert.error(error);
      dispatch(clearErrors());
    }
    dispatch(getProduct());
  }, [dispatch, error, alert]);

  return (
    <>
      <Box>
        <Box>
          <h1>E-Commerce Name</h1>
        </Box>
        <Box></Box>
      </Box>
    </>
  );
}
