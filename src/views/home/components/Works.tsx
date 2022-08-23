import React from "react";
import { Box, Text, Flex, Image } from "rebass/styled-components";
import { LogoFlash } from "../../../app/assets";

type Props = {};

const Works = (props: Props) => {
  return (
    <Box width={"80%"} margin={"auto"} mt={20}>
      <Image
        src={LogoFlash}
        width={80}
        display={["none", "block", "block"]}
        sx={{
          position: "absolute",
        }}
      />
      <Image
        src={LogoFlash}
        width={100}
        display={["none", "block", "block"]}
        sx={{
          position: "absolute",
          right: 0,
          marginTop: 200,
        }}
      />
      <Image
        src={LogoFlash}
        width={120}
        display={["none", "block", "block"]}
        sx={{
          position: "absolute",
          marginTop: 400,
          marginLeft: 50,
        }}
      />

      <Image
        src={LogoFlash}
        width={400}
        display={["none", "block", "block"]}
        sx={{
          position: "absolute",
        }}
      />
      <Image
        src={LogoFlash}
        width={400}
        display={["none", "block", "block"]}
        sx={{
          position: "absolute",
          right: 0,
          transform: "scaleY(-1)",
          marginRight: "130px",
        }}
      />
      <Image
        src={LogoFlash}
        width={400}
        display={["none", "block", "block"]}
        mt={600}
        sx={{
          transform: "scaleY(-1)",
          position: "absolute",
        }}
      />

      <Image
        src={LogoFlash}
        width={400}
        display={["none", "block", "block"]}
        mt={600}
        sx={{
          transform: "scaleY(1)",
          position: "absolute",
          right: 0,
          marginRight: "130px",
        }}
      />
      <Text fontSize={25} fontWeight={"bold"} textAlign={"center"}>
        {" "}
        How it Works?
      </Text>

      <Flex
        flexWrap={"wrap"}
        mt={30}
        flexDirection={["column", "row", "row"]}
        justifyContent={"center"}
        sx={{
          zIndex: 5,
        }}
      >
        {[1, 2, 3, 4].map((e, i) => (
          <Box
            m={[0, 10, 10]}
            mb={[20, 10, 10]}
            bg={"#222224"}
            height={[300, 400, 400]}
            width={["100%", 400, 400]}
            p={4}
            sx={{
              border: "1px solid #313135",
              borderRadius: 8,
              zIndex: 5,
            }}
          >
            <Flex>
              <Text fontSize={[80, 100, 100]} fontWeight={"bold"} letterSpacing={-2} color={"flash"}>
                {i + 1}
              </Text>
              <Text ml={[-10, -20, -20]} fontSize={[80, 100, 100]} fontWeight={"bold"} letterSpacing={-2} color={"flash"}>
                .
              </Text>
            </Flex>
            <Text fontSize={20} fontWeight={"bold"}>
              Action
            </Text>
            <Text fontSize={14} color={"#838383"} mt={2}>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Totam, quas atque eius officiis inventore nesciunt culpa,
              a eos aliquid
            </Text>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default Works;
