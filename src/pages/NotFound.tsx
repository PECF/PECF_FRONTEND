import React from "react";

import { Button, Box, Center } from "@chakra-ui/react";

export function NotFound() {
  return (
    //https://media.tenor.com/PPOe9MawAvsAAAAM/404-not-found.gif
    <Center>
      <Box>
        <img
          width="900px"
          height="500px"
          src="https://miro.medium.com/max/1400/1*zBFBJktPD3_z0S_35kO5Hg.gif"
          alt="NotFound"
        />
        <Button
          bg="teal"
          color="white"
          ml="635PX"
          mt="-155px"
          w="232px"
          _hover={{
            background: "white",
            color: "teal.500",
          }}
        >
          Back to go home
        </Button>
      </Box>
    </Center>
  );
}
