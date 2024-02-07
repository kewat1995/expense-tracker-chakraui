import { Button, Flex, Heading, useDisclosure } from "@chakra-ui/react";
import React, { useContext, useEffect } from "react";
import SummeryView from "./SummeryView";
import ExpenseView from "./ExpenseView";
import { globalContext } from "../context";

const MainTracker = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const {
    totalExpense,
    setTotalExpense,
    totalIncome,
    setTotalIncome,
    allTransation,
  } = useContext(globalContext);

  useEffect(() => {
    let income = 0;
    let expense = 0;

    allTransation.forEach((item) => {
      item.type === "income"
        ? (income = income + parseFloat(item.amount))
        : (expense = expense + parseFloat(item.amount));
    });

    setTotalExpense(expense);
    setTotalIncome(income);
  }, [allTransation]);

  return (
    <Flex textAlign={"center"} flexDirection={"column"} mt={"5"} pl={"5"}>
      <Flex justifyContent={"center"} flexDirection={"column"} mt={"8"}>
        <Heading
          color={"blue.400"}
          display={["bloxk", "block", "block", "block", "block"]}
          tex={{
            base: "xl",
            sm: "1xl",
            md: "xl",
            lg: "2xl",
            xl: "3xl",
          }}
        >
          ExpenseTracker
        </Heading>
        <Flex
          justifyContent={{
            base: "center",

            md: "flex-end",
          }}
          mt={"10"}
        >
          <Button colorScheme="blue" mr={"4"} onClick={onOpen}>
            Add New Trancsaction
          </Button>
        </Flex>
      </Flex>
      <SummeryView
        isOpen={isOpen}
        onClose={onClose}
        totalIncome={totalIncome}
        totalExpense={totalExpense}
      />
      <Flex
        w={"full"}
        flexDirection={["column", "column", "row", "row"]}
        justifyContent={"space-evenly"}
        alignItems={"flex-start"}
      >
        <ExpenseView
          data={allTransation.filter((item) => item.type === "income")}
          type="income"
        />
        <ExpenseView
          data={allTransation.filter((item) => item.type === "expense")}
          type="expense"
        />
      </Flex>
    </Flex>
  );
};

export default MainTracker;
