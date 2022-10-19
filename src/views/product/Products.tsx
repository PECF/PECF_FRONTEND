import React, { Fragment, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { clearErrors, getProduct } from "../../actions/productAction";
import ProductCard from "../home/ProductCard";
import { Slider } from "@chakra-ui/react";
import { Box } from "@chakra-ui/react";

const categories = [
  "Laptop",
  "Footwear",
  "Bottom",
  "Tops",
  "Attire",
  "Camera",
  "SmartPhones",
];

const Products = ({ match }) => {
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const [price, setPrice] = useState([0, 25000]);
  const [category, setCategory] = useState("");

  const [ratings, setRatings] = useState(0);
  const {
    products,
    loading,
    error,
    productsCount,
    resultPerPage,
    filteredProductsCount,
  } = useSelector((state: any) => state.products);

  const keyword = match.params.keyword;
  let count = filteredProductsCount;

  const setCurrentPageNo = (e: React.SetStateAction<number>) => {
    setCurrentPage(e);
  };
  const priceHandler = (newPrice: React.SetStateAction<number[]>) => {
    setPrice(newPrice);
  };


  useEffect(() => {
    if (error) {
      dispatch(clearErrors());
    }

    dispatch(getProduct(keyword, currentPage, price, category, ratings));
  }, [dispatch, keyword, currentPage, price, category, ratings, error]);

  return (
    <Fragment>
      <Box>
        <h2>Products</h2>
        {products &&
         products.map((product : any) => (
           <ProductCard key={product._id} product={product} />
          ))}
      </Box>
      <Box>
        <h2>Price</h2>
        <Slider value={price} onChange={priceHandler} min={0} max={25000} />

        <h2>Categories</h2>
        <ul>
          {categories.map((category) => {
            return (
            <li key={category} onClick={() => setCategory(category)}>
              {category}
            </li>
            );
          })}
        </ul>

        <fieldset>
          <legend>Ratings Above</legend>
          <Slider
            value={ratings}
            onChange={(newRating: React.SetStateAction<number>) => {
              setRatings(newRating);
            }}
            min={0}
            max={5}
          />
        </fieldset>
      </Box>
    </Fragment>
  );
};

export default Products;
