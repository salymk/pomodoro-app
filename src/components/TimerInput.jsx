import React from "react";
import {
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { ArrowUpIcon, ArrowDownIcon } from "../Icons/Icons";

const TimerInput = ({ defaultValue, label, field }) => {
  return (
    <FormControl
      display="flex"
      flexDirection={["row", "column"]}
      alignItems={["center", "baseline"]}
      justifyContent={["space-between", null]}
    >
      <FormLabel
        fontWeight="700"
        fontSize=".75rem"
        lineHeight="15px"
        color="hsla(235, 35%, 18%, .5)"
      >
        {label}
      </FormLabel>
      <NumberInput
        {...field}
        defaultValue={defaultValue}
        min={1}
        w="140px"
        bg="brand.200"
        border="0px solid transparent"
        borderRadius="10px"
      >
        <NumberInputField
          h={["40px", "48px"]}
          color="brand.700"
          fontWeight="700"
          fontSize=".875rem"
          lineHeight="17px"
          sx={{ borderRadius: "10px" }}
        />
        <NumberInputStepper border="0px solid transparent" marginRight="12px">
          <NumberIncrementStepper
            color="hsla(235, 35%, 18%, 0.50)"
            _hover={{
              color: "hsla(235, 35%, 18%, 1)",
            }}
            children={<ArrowUpIcon />}
            border="0px solid transparent"
          />
          <NumberDecrementStepper
            color="hsla(235, 35%, 18%, 0.50)"
            _hover={{
              color: "hsla(235, 35%, 18%, 1)",
            }}
            children={<ArrowDownIcon />}
            border="0px solid transparent"
          />
        </NumberInputStepper>
      </NumberInput>
    </FormControl>
  );
};

export default TimerInput;
