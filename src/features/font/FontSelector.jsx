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
import { useSelector, useDispatch } from "react-redux";
import { selectFont } from "./fontSlice";

function RadioFont(props) {
  const { getInputProps, getCheckboxProps } = useRadio(props);

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
        bg="hsla(227, 52%, 96%, 1)"
        fontFamily={props.fontFamily}
        fontWeight={props.fontWeight}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
        _checked={{
          bg: "brand.800",
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
        {props.children}
      </Box>
    </Box>
  );
}

const FontSelector = () => {
  const font = useSelector((state) => state.fontSelector.font);
  const dispatch = useDispatch();

  const fonts = [
    { font: "Kumbh Sans", weight: 700 },
    { font: "Roboto Slab", weight: 400 },
    { font: "Space Mono", weight: 700 },
  ];

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "font",
    defaultValue: font,
    onChange: (value) => dispatch(selectFont(value)),
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
          Font {font}
        </Heading>
        <Stack direction="row" spacing="16px" {...group}>
          {fonts.map((font) => {
            return (
              <RadioFont
                fontWeight={font.weight}
                fontFamily={font.font}
                key={font.font}
                {...getRadioProps({ value: font.font })}
              >
                Aa
              </RadioFont>
            );
          })}
        </Stack>
      </Flex>
    </>
  );
};

export default FontSelector;
