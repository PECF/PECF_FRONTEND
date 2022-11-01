import React, { useState } from "react";
import { Container, Heading, Textarea, Button, Flex } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
import { createProductReview } from "../redux/actions/productsActions";
import { useDispatch } from "react-redux";

export default function ProductReview() {
  const [review, setReview] = useState("");
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(null);
  const dispatch = useDispatch<AppDispatch>();

  const handleReview = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setReview(e.target.value);
  };

  const handleSubmit = () => {
    console.log(review);
    console.log(rating);
    dispatch(createProductReview(review, rating));
  };

  return (
    <Container
      maxW="2xl"
      mt={20}
      backgroundColor="whiteAlpha.900"
      centerContent
    >
      <Heading as="h1" size="md">
        Type here your product review
      </Heading>

      <Flex mt="5">
        {[...Array(5)].map((star, i) => {
          const ratingValue = i + 1;
          return (
            <label key={i}>
              <input
                className="radio"
                type="radio"
                name="rating"
                value={ratingValue}
                onClick={() => {
                  setRating(ratingValue), console.log(ratingValue);
                }}
              />
              <StarIcon
                color={ratingValue <= hover || rating ? "#ffc107" : "#e4e5e9"}
                cursor="pointer"
                onMouseEnter={() => setHover(ratingValue)}
                onMouseLeave={() => setHover(null)}
                w={5}
                h={5}
              />
            </label>
          );
        })}
      </Flex>

      <Textarea
        variant="filled"
        mt="5"
        placeholder="Type your review..."
        value={review}
        onChange={handleReview}
      />

      <Button colorScheme="teal" mb="5" mt="5" onClick={handleSubmit}>
        Send review
      </Button>
    </Container>
  );
}
