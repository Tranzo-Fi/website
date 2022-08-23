import React from "react";
import { Box, Flex, Image, Text } from "rebass/styled-components";
import { LogoFlash } from "../../../app/assets";

type Props = {};

const Footer = (props: Props) => {
  return (
    <Box
      display={"grid"}
      alignContent={"center"}
      bg={"#1f1f1f"}
      height={[200, 100, 100]}
      mt={100}
      sx={{
        border: "1px solid #313135",
      }}
    >
      <Flex justifyContent={"space-between"} flexDirection={["column", "row", "row"]} mx={20}>
        <Flex>
          <Image
            sx={{
              "&:hover": {
                cursor: "pointer",
              },
            }}
            height={60}
            width={60}
            src={LogoFlash}
          />
          <Text
            fontSize={25}
            fontWeight={"bold"}
            ml={2}
            display={"grid"}
            alignContent={"center"}
            fontFamily={"Roboto Mono"}
            color={"flash"}
          >
            Tranzo.
          </Text>
        </Flex>
        <Flex display={"grid"} alignContent={"center"}>
          <Text color={"#636364"} mr={2}>
            github.
          </Text>
          <Text color={"#636364"} mr={2}>
            twitter.
          </Text>
          <Text color={"#636364"} mr={2}>
            medium.
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
