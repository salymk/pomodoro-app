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

function RadioFont(props) {
  /*
  useRadio is a custom hook used to provide radio functionality, 
  as well as state and focus management to custom radio components when using it.
  */
  const { getInputProps, getCheckboxProps } = useRadio(props);

  // A function to get the input props of the input field
  const input = getInputProps();
  // A function to get the props of the radio
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

const FontGroup = ({ control, name }) => {
  // useController makes it easier to work with uncontrolled components
  const { field } = useController({
    name: name,
    // control contains methods for registering components into RHF
    control,
    defaultValue: "Kumbh Sans",
  });

  // useRadioGroup provides all of the state management logic for a group of radios
  const { getRootProps, getRadioProps } = useRadioGroup({
    ...field,
  });

  // Values for the radio buttons
  const fonts = [
    { font: "Kumbh Sans", weight: 700 },
    { font: "Roboto Slab", weight: 400 },
    { font: "Space Mono", weight: 700 },
  ];

  return (
    <>
      <FormControl id="font">
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
            Font
          </FormLabel>
          {/* getRootProps is a function that takes radio root props and handles changes for the radio group */}
          <Stack direction="row" spacing="16px" {...getRootProps()}>
            {fonts.map((font) => {
              return (
                <RadioFont
                  fontWeight={font.weight}
                  fontFamily={font.font}
                  key={font.font}
                  /* getRadioProps is a function that takes root props and handles changes for the radio group */
                  {...getRadioProps({ value: font.font })}
                >
                  Aa
                </RadioFont>
              );
            })}
          </Stack>
        </Flex>
      </FormControl>
    </>
  );
};

export default FontGroup;
