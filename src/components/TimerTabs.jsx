import { Tabs, TabList, TabPanels, Tab, TabPanel } from "@chakra-ui/react";
import Timer from "../components/Timer";

const CustomTab = ({ children }) => {
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
        bg: "brand.400",
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
          <Timer time="17:59" state="pause" />
        </TabPanel>
        <TabPanel px="0">
          <Timer time="5:00" state="start" />
        </TabPanel>
        <TabPanel px="0">
          <Timer time="15:00" state="start" />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

export default TimerTabs;
