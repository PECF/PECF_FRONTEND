import React from "react";
import { Box } from "@chakra-ui/react";
import { Text } from "@chakra-ui/react";

const ReviewCard = ({ review }) => {
  return (
    <Box>
      <Text fontSize="md">{review.name}</Text>
      <span>{review.comment}</span>
    </Box>
  );
};

export default ReviewCard;
