import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  Divider,
  Heading,
  Stack,
  Flex,
  IconButton,
  FormControl,
  FormLabel,
  FormErrorMessage,
} from "@chakra-ui/react";
import { useSelector, useDispatch } from "react-redux";
import { useForm, Controller } from "react-hook-form";

import TimerInput from "./TimerInput";
import ColorGroup from "./ColorGroup";
import FontGroup from "./FontGroup";
import { CloseIcon } from "../Icons/Icons";

const SettingsModal = ({ isOpen, onClose }) => {
  const font = useSelector((state) => state.fontSelector.font);
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    debugger;
    console.log(data);
  };

  return (
    <>
      <Modal
        isCentered
        isOpen={isOpen}
        onClose={onClose}
        p={["24px", "40px"]}
        borderRadius="15px"
      >
        <ModalOverlay />
        <ModalContent
          borderRadius="15px"
          maxWidth={["327px", "540px"]}
          w="100%"
          fontFamily={font}
        >
          <Flex
            pt={["24px", "34px"]}
            pb={["22px", "24px"]}
            px={["24px", "40px"]}
            justifyContent="space-between"
            alignItems="baseline"
          >
            <ModalHeader
              color="brand.800"
              fontWeight="700"
              fontSize={["1.25rem", "1.75rem"]}
              lineHeight={["25px", "35px"]}
              p="0"
            >
              Settings
            </ModalHeader>
            <IconButton
              onClick={onClose}
              role="group"
              bg="none"
              _hover={{
                background: "none",
                color: "hsla(235, 35%, 18%, 1)",
              }}
              _active={{ color: "hsla(235, 35%, 18%, 1)" }}
              color="hsla(235, 35%, 18%, .5)"
              w="32px"
              h="32px"
              mr="10px"
              aria-label="Close settings"
              icon={<CloseIcon />}
            />
          </Flex>
          <Divider borderBottomWidth="2px" color="hsla(0, 2%, 89%, 1)" />
          <ModalBody py="0px" px={["24px", "40px"]}>
            <form id="pomodoro-settings" onSubmit={handleSubmit(onSubmit)}>
              <Heading
                as="h1"
                fontWeight="700"
                fontSize={["0.6875rem", "0.8125rem"]}
                lineHeight="14px"
                letterSpacing="4.23px"
                color="brand.800"
                pt="24px"
                pb="18px"
                textAlign={["center", "left"]}
              >
                TIME (MINUTES)
              </Heading>
              <Stack
                spacing="8px"
                marginBottom="24px"
                display="flex"
                flexDirection={["column", "row"]}
                alignItems="baseline"
              >
                <TimerInput defaultValue={25} label="pomodoro" />
                <TimerInput defaultValue={5} label="short break" />
                <TimerInput defaultValue={15} label="long break" />
              </Stack>
              <Divider borderBottomWidth="2px" color="hsla(0, 2%, 89%, 1)" />
              <Stack py="24px">
                <FontGroup control={control} name="font" />
              </Stack>
              <Divider borderBottomWidth="2px" color="hsla(0, 2%, 89%, 1)" />
              <Stack py="24px">
                <ColorGroup control={control} name="color" />
              </Stack>
            </form>
          </ModalBody>

          <ModalFooter position="relative">
            <Button
              position="absolute"
              left={["28.75%", "37.22%"]}
              right={["28.44%", "36.85%"]}
              top={["50%", "8%"]}
              bottom="0%"
              p="17px 47px"
              bg="brand.400"
              _hover={{
                bg: "hsla(0, 91%, 78%, 1)",
              }}
              borderRadius="26.5px"
              h="53px"
              w="140px"
              fontFamily="700"
              fontSize="1rem"
              lineHeight="20px"
              color="white"
              type="submit"
              form="pomodoro-settings"
              onClick={onClose}
            >
              Apply
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};

export default SettingsModal;
