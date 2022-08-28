import React from "react";
import {
  Radio,
  RadioGroup,
  Stack,
  Heading,
  Flex,
  useRadio,
  useRadioGroup,
  chakra,
  Box,
  Image,
} from "@chakra-ui/react";
import { CheckIcon } from "../Icons/Icons";

function RadioColor(props) {
  const { state, getInputProps, getCheckboxProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getCheckboxProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        fontSize="0.9375rem"
        lineHeight="19px"
        cursor="pointer"
        borderRadius="100%"
        textAlign="center"
        h="40px"
        w="40px"
        bg={props.bg}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
        _checked={{
          color: "white",
          borderColor: "teal.600",
        }}
        _focus={{
          boxShadow: "outline",
        }}
        _hover={{
          outline: "2px solid hsla(229, 52%, 96%, 1)",
          outlineOffset: "5px",
        }}
      >
        {state.isChecked ? (
          <CheckIcon color="#161932" />
        ) : (
          <CheckIcon color="hsla(235, 35%, 18%, 0)" />
        )}
      </Box>
    </Box>
  );
}

const ColorGroup = () => {
  const colors = ["brand.400", "brand.500", "brand.600"];

  const { getRootProps, getRadioProps, value } = useRadioGroup({
    name: "font",
    defaultValue: "brand.400",
    onChange: console.log(),
  });

  const group = getRootProps();

  return (
    <>
      <Flex
        flexDirection={["column", "row"]}
        justifyContent={[null, "space-between"]}
        alignItems={["center", "baseline"]}
      >
        <Heading
          as="h2"
          color="brand.800"
          fontWeight="700"
          fontSize={["0.6875rem", "0.8125rem"]}
          lineHeight="14px"
          letterSpacing="4.2px"
          textAlign="center"
          marginBottom="18px"
          textTransform="uppercase"
        >
          Color
        </Heading>
        <Stack direction="row" spacing="16px" {...group}>
          {colors.map((value) => {
            const radio = getRadioProps({ value });
            return <RadioColor bg={value} key={value} {...radio}></RadioColor>;
          })}
        </Stack>
      </Flex>
    </>
  );
};

export default ColorGroup;
