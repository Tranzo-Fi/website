import React from "react";
import { Box, Image, Flex, Text } from "rebass/styled-components";
import { Aave } from "../../../app/assets";

type Props = {};

const Grant = (props: Props) => {
  return (
    <Box width={["95%", "80%", "80%"]} margin={"auto"} mt={60}>
      <Flex
        justifyContent={"center"}
        alignItems={["normal", "center", "center"]}
        p={2}
        py={3}
        flexDirection={["column", "row", "row"]}
        height={["auto", 300, 300]}
        sx={{
          border: "1px solid #313135",
          borderRadius: 8,
        }}
      >
        <Box ml={20} mb={10}>
          <Image width={[55, 100, 100]} height={[80, 150, 150]} src={Aave} />
        </Box>
        <Box width={["100%", "50%", "50%"]} ml={22}>
          <Text fontWeight={"bold"} fontSize={20}>
            Aave Grant
          </Text>
          <Text color={"#838383"}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea tempora consequatur deserunt hic{" "}
          </Text>
          <Text mt={10} fontSize={12}>
            Read More.
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};

export default Grant;
