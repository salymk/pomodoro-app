import {
  Box,
  Heading,
  VStack,
  Button,
  Flex,
  CircularProgress,
} from "@chakra-ui/react";
import { useSelector } from "react-redux";

const Timer = ({ time, state }) => {
  const font = useSelector((state) => state.fontSelector.font);
  const color = useSelector((state) => state.colorSelector.color);
  return (
    <Flex
      position="relative"
      h={["300px", "410px"]}
      w={["300px", "410px"]}
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      border={["16px solid transparent", "22px solid transparent"]}
      sx={{
        // Creates a circular linear gradient border color
        // https://codyhouse.co/nuggets/css-gradient-borders
        background:
          "linear-gradient(hsla(235, 39%, 14%, 1), hsla(235, 39%, 14%, 1)) padding-box, linear-gradient(315deg, #2e325a 0%, #0e112a 100%) border-box",
        borderRadius: "50%",
        boxShadow: "-50px -50px 100px #272C5A, 50px 50px 100px #121530",
      }}
    >
      <Box sx={{ position: "relative" }}>
        <CircularProgress
          value={100}
          size={["284.05px", "390px"]}
          thickness="3"
          color={color}
          capIsRound
          trackColor="none"
        />

        <VStack
          shouldWrapChildren
          color="brand.300"
          top={["calc(50% - 132px/2 - 0px)", "calc(50% - 132px/2 - 12px)"]}
          sx={{
            position: "absolute",
            left: "21.95%",
            right: " 21.95%",
          }}
        >
          <Heading
            as="h1"
            fontSize={["5rem", "6.25rem"]}
            lineHeight={["99px", "124px"]}
            letterSpacing={font === "Space Mono" ? "-10px" : "-5px"}
            fontWeight={font === "Space Mono" ? 400 : 700}
          >
            {time}
          </Heading>

          <Button
            bg="none"
            _hover={{ color: color }}
            _active={{ color: color }}
            fontSize={[".875rem", "1rem"]}
            fontWeight="700"
            lineHeight={["17px", "20px"]}
            letterSpacing={["13.125px", "15px"]}
            // letterSpacing is creating extra unwanted space on the right side of the text
            // so I'm evening it out with the same amount of margin left spacing.
            ml={["13.125px", "15px"]}
            mt={["12px", "20px"]}
            p="0"
            sx={{ textTransform: "uppercase" }}
            spacing="0px"
          >
            {state}
          </Button>
        </VStack>
      </Box>
    </Flex>
  );
};

export default Timer;
