import React from "react";
import {
  Stack,
  Flex,
  useRadio,
  useRadioGroup,
  Box,
  FormControl,
  FormLabel,
} from "@chakra-ui/react";
import { useController } from "react-hook-form";
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

const ColorGroup = ({ control, name }) => {
  const { field } = useController({
    name: name,
    control,
    defaultValue: "brand.400",
  });

  const { getRootProps, getRadioProps } = useRadioGroup({
    ...field,
  });

  const colors = ["brand.400", "brand.500", "brand.600"];

  return (
    <>
      <FormControl id="color">
        <Flex
          flexDirection={["column", "row"]}
          justifyContent={[null, "space-between"]}
          alignItems={["center", "baseline"]}
        >
          <FormLabel
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
          </FormLabel>

          <Stack direction="row" spacing="16px" {...getRootProps()}>
            {colors.map((value) => {
              const radio = getRadioProps({ value });
              return (
                <RadioColor bg={value} key={value} {...radio}></RadioColor>
              );
            })}
          </Stack>
        </Flex>
      </FormControl>
    </>
  );
};

export default ColorGroup;
