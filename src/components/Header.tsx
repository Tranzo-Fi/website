import React from "react";
import { Box, Flex, Text, Image, Button } from "rebass/styled-components";
import { Logo } from "../app/assets";
import AppButton from "./primitives/AppButton";

type Props = {};

const Header = (props: Props) => {
  function handleClick() {
    window.open("https://app.tranzo.fi", "_self");
  }
  return (
    <Flex p={10} pt={15} justifyContent={"space-between"} bg={"flash"} width={"100%"} height={80}>
      <Flex>
        {/* <Image
          sx={{
            "&:hover": {
              cursor: "pointer",
            },
          }}
          height={60}
          width={60}
          src={Logo}
        /> */}
        <Text
          fontSize={25}
          fontWeight={"bold"}
          ml={2}
          display={"grid"}
          alignContent={"center"}
          fontFamily={"Roboto Mono"}
          color={"dark"}
        >
          Tranzo.
        </Text>
      </Flex>
      {/* <AppButton
        style={{
          backgroundColor: "dark",
        }}
        label="Open App"
        onPress={() => {}}
      /> */}
      <Box mr={10}>
        <Text
          onClick={handleClick}
          bg={"#1d1d1f"}
          color={"flash"}
          mt={"10px"}
          fontSize={14}
          sx={{
            border: `1px solid #1d1d1f`,
            borderRadius: 10,
            transition: "0.3s",
            "&:hover": {
              cursor: "pointer",
              opacity: 0.9,
            },
          }}
          display={"grid"}
          p={2}
          fontWeight={500}
        >
          <span>
            launch app <i className="fas fa-arrow-right white"></i>
          </span>
        </Text>
      </Box>
    </Flex>
  );
};

export default Header;
