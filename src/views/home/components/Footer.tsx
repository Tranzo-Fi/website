import React from "react";
import { Box, Flex, Image, Text, Link } from "rebass/styled-components";
import { LogoFlash } from "../../../app/assets";

type Props = {};

const Footer = (props: Props) => {

  const openGithub = () => {
    window.open("https://github.com/Tranzo-Fi");
  };

  const openTwitter = () => {
    window.open("https://twitter.com/TranzoFi");
  };

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
          <Text color={"#636364"} mr={2} onClick={openGithub} style={{cursor: "pointer"}}>
            github.
          </Text>
          <Text color={"#636364"} mr={2} onClick={openTwitter} style={{cursor: "pointer"}}>
            twitter.
          </Text>
          {/* <Text color={"#636364"} mr={2}>
            medium.
          </Text> */}
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
