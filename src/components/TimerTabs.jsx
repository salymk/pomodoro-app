import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import { useSelector } from "react-redux";
import Timer from "../components/Timer";

const CustomTab = ({ children }) => {
  const color = useSelector((state) => state.colorSelector.color);

  return (
    <Tab
      color="hsla(226, 100%, 92%, .4)"
      fontSize={[".75rem", ".875rem"]}
      fontWeight="700"
      lineHeight="17px"
      letterSpacing="-0.33px"
      borderRadius="26.5px"
      maxWidth="150px"
      p={["12px 16px", "12px 20px"]}
      _hover={{ color: "brand.300" }}
      _selected={{
        color: "brand.700",
        bg: color,
        borderRadius: "26.5px",
        fontWeight: "700",
        lineHeight: "17px",
      }}
    >
      {children}
    </Tab>
  );
};

const TimerTabs = () => {
  const pomodoro = useSelector((state) => state.timeSetter.pomodoro);
  const shortBreak = useSelector((state) => state.timeSetter.shortBreak);
  const longBreak = useSelector((state) => state.timeSetter.longBreak);
  return (
    <Tabs
      variant="unstyled"
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <TabList
        // z-index prevents the boxShadow from the Timer from bleeding into the TabList
        zIndex="1"
        bg="brand.800"
        borderRadius="31.5px"
        p="7px 7px"
        maxW={["327px", "373px"]}
      >
        <CustomTab>pomodoro</CustomTab>
        <CustomTab>short break</CustomTab>
        <CustomTab>long break</CustomTab>
      </TabList>
      <TabPanels mt={["48px", "109px", "45px"]}>
        <TabPanel px="0">
          <Timer time={pomodoro} state="pause" />
        </TabPanel>
        <TabPanel px="0">
          <Timer time={shortBreak} state="start" />
        </TabPanel>
        <TabPanel px="0">
          <Timer time={longBreak} state="start" />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default TimerTabs;
