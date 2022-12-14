import React from "react";
import { Box, Flex, Text, Image } from "rebass/styled-components";
import { Logo } from "../../../app/assets";

type Props = {};

const Banner = (props: Props) => {
  return (
    <Flex p={30} bg={"flash"} height={["40vh", "50vh", "70vh"]} flexDirection={"column"} justifyContent={"flex-end"}>
      <Box height={[200, 300, 400]} mt={20} mb={25}>
        <Image width={[80, 160, 200]} height={[80, 160, 200]} src={Logo} />
        <Text fontSize={[20, 30, 30]} letterSpacing={3} fontWeight={"bold"} color={"dark"}>
          Tranzo Protocol
        </Text>
        <Text letterSpacing={1} fontSize={[14, 18, 20]} color={"dark"} width={["100%", "40%", "40%"]}>
          Transfer your Aave positions from one address to another seamlessly.{" "}
        </Text>
      </Box>
    </Flex>
  );
};

export default Banner;
