import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Radio,
  RadioGroup,
} from "@chakra-ui/react";
import React, { useContext } from "react";
import { globalContext } from "../context";

const AddTransationModal = ({ isOpen, onClose }) => {
  const { formData, setFormData, value, setValue, handelFormData } =
    useContext(globalContext);

  const handelChangeForm = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handelSubmit = (e) => {
    e.preventDefault();
    handelFormData(formData);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <form onSubmit={handelSubmit}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add New Transations</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl>
              <FormLabel>Enter Descriptions</FormLabel>
              <Input
                placeholder="Enter Transations Descriptions"
                type="text"
                name="description"
                onChange={handelChangeForm}
              />
            </FormControl>
            <FormControl mt={"2"}>
              <FormLabel>Enter Amount</FormLabel>
              <Input
                placeholder="Enter Transations Amount"
                type="number"
                name="amount"
                onChange={handelChangeForm}
              />
            </FormControl>
          </ModalBody>
          <RadioGroup ml={5} mt={"5"} value={value} onChange={setValue}>
            <Radio
              checked={formData.type === "income"}
              value="income"
              name="type"
              colorScheme="blue"
              onChange={handelChangeForm}
            >
              Income
            </Radio>
            <Radio
              checked={formData.type === "expense"}
              value="expense"
              name="type"
              colorScheme="red"
              ml={2}
              onChange={handelChangeForm}
            >
              Expense
            </Radio>
          </RadioGroup>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button onClick={onClose} type="submit" variant="ghost">
              Add
            </Button>
          </ModalFooter>
        </ModalContent>
      </form>
    </Modal>
  );
};

export default AddTransationModal;
