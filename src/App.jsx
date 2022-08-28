import {
  Heading,
  Box,
  Center,
  VStack,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import TimerTabs from "./components/TimerTabs";
import SettingsModal from "./components/SettingsModal";
import { GearIcon } from "./Icons/Icons";

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Center pt="45px" bg="brand.700" minH="100vh" p="24px">
      <Box w="410px">
        <VStack>
          <Heading
            pb={["45px", "55px"]}
            color="brand.300"
            fontSize={["24px", "32px"]}
            fontWeight="700"
          >
            pomodoro
          </Heading>
          <TimerTabs />
          {/* <Container>
            start pause restart Settings Time (minutes) pomodoro short break
            long break Font Color Apply
          </Container> */}
          <Box pt={["79px", "144px", "63px"]}>
            <IconButton
              onClick={onOpen}
              role="group"
              bg="none"
              _hover={{
                background: "none",
                color: "brand.300",
              }}
              _active={{ bg: "none" }}
              color="hsla(226, 100%, 92%, .5)"
              aria-label="Open settings"
              icon={<GearIcon />}
            />
          </Box>
          <SettingsModal isOpen={isOpen} onClose={onClose} />
        </VStack>
      </Box>
    </Center>
  );
}

export default App;
