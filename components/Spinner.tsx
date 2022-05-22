import { Box, Center, Spinner } from "@chakra-ui/react";
import React from "react";

function FullPageSpinner() {
  return (
    <Center height="100vh" mt="50%">
      <Spinner colorScheme="green" />
    </Center>
  );
}

export default FullPageSpinner;
