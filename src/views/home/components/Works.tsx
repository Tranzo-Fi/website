import React from "react";
import { Box, Text, Flex, Image } from "rebass/styled-components";
import { LogoFlash } from "../../../app/assets";

type Props = {};

const howitworksHeader = [
  'Approve aTokens',
  'Approve Delegation',
  'Review Positions',
  'Tranzo'
]

const howitworksText = [
  'Approve aTokens representing your collateral from the address you want to transfer positions from.', 
  'Connect your new address you want to transfer your positions to and Approve Delegation on all your Debt Tokens.', 
  'Review your position on your new address, including your suppies, borrows and Flash Loan Fees.', 
  'Hit Transfer Positions from the address you want to transfer your positions from and Tranzo contract will take a Flash Loan to migrate all your positions.'
];

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
              {howitworksHeader[i]}
            </Text>
            <Text fontSize={14} color={"#838383"} mt={2}>
              {howitworksText[i]}
            </Text>
          </Box>
        ))}
      </Flex>
    </Box>
  );
};

export default Works;
