import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import React from "react";

const ExpenseView = ({ type, data }) => {
  return (
    <Box
      w="full"
      mt={"10"}
      mr={"4"}
      mb={4}
      p={4}
      bg={"white"}
      border={"1px solid"}
      borderColor={"gray.100"}
      borderRadius={"12"}
    >
      <Flex justifyContent={"space-between"} alignItems={"center"}>
        <Heading size={"md"} color={"red.700"}>
          {type === "income" ? "income" : "expense"}
        </Heading>
      </Flex>
      {data.map((item) => (
        <>
          <Flex
            justifyContent={"space-between"}
            alignItems={"center"}
            mt={"4"}
            border={"1px solid"}
            borderColor={type === "income" ? "blue.100" : "red.100"}
            p={"4"}
            bg={type === "income" ? "blue.50" : "red.50"}
            borderRadius={"5"}
          >
            <Flex justifyContent={"center"} alignItems={"center"}>
              <Text ml={"3"} fontWeight={"bold"}>
                {item.description}
              </Text>
            </Flex>
            <Text fontWeight={"semibold"}>${item.amount}</Text>
          </Flex>
        </>
      ))}
    </Box>
  );
};

export default ExpenseView;
