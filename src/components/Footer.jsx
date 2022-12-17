import { Box, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Box
      bgColor={"gray.800"}
      color={"whiteAlpha.700"}
      minHeight={"24"}
      px={"16"}
      py={'8'}
    >
      <Stack direction={["column", "row"]} h={"full"} alignItems={"center"}>
        <VStack w={"full"} alignItems={["center", "center"]}>
          <Text fontWeight={'extrabold'} fontSize={'20'}>CryptoHub</Text>
          <Text
            fontSize={"sm"}
            letterSpacing={"widest"}
            textAlign={["center", "left"]}
          >
            © 2022 All rights reserved.
          </Text>
        </VStack>
      </Stack>
    </Box>
  );
};

export default Footer;
