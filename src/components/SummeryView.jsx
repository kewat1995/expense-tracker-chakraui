import { Box, Flex, Heading, Text } from "@chakra-ui/react";

import AddTransationModal from "./AddTransationModal";
import ChartExpenseTracker from "./ChartExpenseTracker";

const SummeryView = ({ isOpen, onClose, totalIncome, totalExpense }) => {
  return (
    <Box
      p={"6"}
      display={"flex"}
      bg={"gray.100"}
      overflow={"hidden"}
      border={"ipx solid"}
      borderRadius={"10px"}
      mt={"10"}
    >
      <Flex
        justifyContent={"center"}
        w={"full"}
        alignItems={"center"}
        flexDir={{
          base: "column",
          sm: "column",
          ms: "column",
          lg: "row",
          xl: "row",
        }}
      >
        <Flex
          w={"full"}
          flex={"1"}
          justifyContent={"space-evenly"}
          alignItems={"center"}
          flexDirection={"column"}
          ml={"-20px"}
          mr={"2"}
        >
          <Heading size={"md"} mb={"4"}>
            Balance : {totalIncome - totalExpense}
          </Heading>
          <Flex
            w="full"
            h="100px"
            alignItems={"center"}
            justifyContent={"space-evenly"}
            bg={"gray.50"}
            borderRadius={"10px"}
            borderColor={"gray.100"}
          >
            <Flex flexDirection={"column"}>
              <Heading>${totalIncome}</Heading>
              <Text>Total Income</Text>
            </Flex>
          </Flex>
          <Flex
            w="full"
            h="100px"
            alignItems={"center"}
            justifyContent={"space-evenly"}
            bg={"gray.50"}
            borderRadius={"10px"}
            borderColor={"gray.100"}
          >
            <Flex flexDirection={"column"}>
              <Heading>${totalExpense}</Heading>
              <Text>Total Expense</Text>
            </Flex>
          </Flex>
        </Flex>
        <Box
          display={"flex"}
          flex={"1"}
          alignItems={"center"}
          justifyContent={"center"}
          w={"300px"}
          h={"300px"}
        >
          <Heading>
            <ChartExpenseTracker expense={totalExpense} income={totalIncome} />
          </Heading>
        </Box>
      </Flex>
      <AddTransationModal isOpen={isOpen} onClose={onClose} />
    </Box>
  );
};

export default SummeryView;
