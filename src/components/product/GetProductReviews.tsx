import React from "react";
import { listProductDetails } from "../../redux/actions/productsActions";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useState } from "react";
import Rating from "./Rating";
import { Container, Heading, Text, Box } from "@chakra-ui/react";

export const GetProductReviews = ({ productId }) => {
  const dispatch = useDispatch();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const productDetails = useSelector((state) => state.productDetails);
  const { product } = productDetails;

  const totalRating = () => {
    let rating = 0;
    let total = 0;
    product.reviews.forEach((review) => {
      rating += review.rating;
      total += 1;
    });
    return rating / total;
  };

  useEffect(() => {
    dispatch(listProductDetails(productId));
  }, [dispatch, productId]);

  useEffect(() => {
    if (product) {
      setReviews(product.reviews);
      setLoading(false);
    }
  }, [product]);

  return (
    <Container>
      {loading ? (
        <Heading>Loading...</Heading>
      ) : error ? (
        <Heading>Error</Heading>
      ) : (
        <Box>
          <Heading as={h1}>Reviews</Heading>
          <Rating defaultValue={totalRating()} />
          <Heading>{reviews.length} reviews</Heading>
          {reviews.map((review) => (
            <Box key={review._id}>
              <Heading>{review.name}</Heading>
              <Rating defaultValue={review.rating} />
              <Text>{review.createdAt.substring(0, 10)}</Text>
              <Text>{review.comment}</Text>
            </Box>
          ))}
        </Box>
      )}
    </Container>
  );
};
