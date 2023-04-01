import { 
  Alert, 
  VStack, 
  HStack, 
  Heading, 
  IconButton, 
  Box, 
  CloseIcon, 
  Text, 
  Center,
  Stack,
  ScrollView,
  Divider,
  Button,
  Collapse
} from 'native-base';
import { useState } from 'react';

export function AlertExample(): JSX.Element {
  return <Alert shadow={2} maxW="400" w="100%" colorScheme="info">
    <VStack space={1} flexShrink={1} w="100%">
      <HStack flexShrink={1} space={2} alignItems="center" justifyContent="space-between">
        <HStack space={2} flexShrink={1} alignItems="center">
          <Alert.Icon />
          <Heading fontSize="md" fontWeight="medium" color="coolGray.800">
            We are going live in July!
          </Heading>
        </HStack>

        <IconButton 
          variant="unstyled" 
          icon={
            <CloseIcon size="3" color="coolGray.600" />
          } 
        />
      </HStack>

      <Box pl="6" _text={{ color: "coolGray.600" }}>
        We are happy to announce that we are going live on July 28th. 
        Get ready!
      </Box>
    </VStack>
  </Alert>;
}

export function BasicAlert(): JSX.Element {
  return <Center>
    <Alert maxW="400" status="info" colorScheme="info">
      <VStack space={2} flexShrink={1} w="100%">
        <HStack flexShrink={1} space={2} alignItems="center" justifyContent="space-between">
          <HStack flexShrink={1} space={2} alignItems="center">
            <Alert.Icon />
            <Text fontSize="md" fontWeight="medium" color="coolGray.800">
              We are going live in July!
            </Text>
          </HStack>

          <IconButton 
            variant="unstyled" _focus={{ borderWidth: 0 }} 
            icon={<CloseIcon size="3" />} 
            _icon={{ color: "coolGray.600" }} 
          />
        </HStack>

        <Box pl="6" _text={{ color: "coolGray.600" }}>
          We are happy to announce that we are going live on July 28th. 
          Get ready!
        </Box>
      </VStack>
    </Alert>
  </Center>;
}

export function StatusAlert(): JSX.Element {
  type Status = {
    status: string;
    title: string;
  };

  const statusArray: Status[] = [{
    status: "success",
    title: "Selection successfully moved!"
  }, {
    status: "error",
    title: "Please try again later!"
  }, {
    status: "info",
    title: "We are going live in July!"
  }, {
    status: "warning",
    title: "Poor internet connection."
  }];

  return <Stack space={3} w="100%" maxW="400">
    {statusArray.map((status: Status) => {
      return <Alert w="100%" status={status.status}>
        <VStack space={2} flexShrink={1} w="100%">
          <HStack flexShrink={1} space={2} justifyContent="space-between">
            <HStack space={2} flexShrink={1}>
              <Alert.Icon mt="1" />
              <Text fontSize="md" color="coolGray.800">
                {status.title}
              </Text>
            </HStack>

            <IconButton 
              variant="unstyled" 
              _focus={{ borderWidth: 0 }} 
              icon={<CloseIcon size="3" />} 
              _icon={{ color: "coolGray.600" }} 
            />
          </HStack>
        </VStack>
      </Alert>;
    })}
  </Stack>;
}

export function VariantAlert() {
  const getTextColor = (variant: string): (string | undefined) => {
    switch (variant) {
      case "left-accent":
      case "top-accent":
      case "subtle":
        return "coolGray.800";
      case "solid":
        return "warmGray.50";
    }
  };

  return <ScrollView mt={5}>
    <Stack 
      space={3} maxW="400" mr={5} flexDirection="column" 
      justifyContent="center" alignItems="center"
    >
      {[ 
        "solid", "left-accent", "top-accent", 
        "outline", "subtle", "outline-light" 
      ].map((key: string) => {
        return <>
          <Text bold fontSize="xl" mb="4" textAlign="center">
            {key}
          </Text>

          <Alert w="100%" variant={key} colorScheme="success" status="success">
            <VStack space={2} flexShrink={1} w="100%">
              <HStack flexShrink={1} space={2} alignItems="center" justifyContent="space-between">
                <HStack space={2} flexShrink={1} alignItems="center">
                  <Alert.Icon />
                  <Text color={getTextColor(key)}>
                    Selection successfully moved!
                  </Text>
                </HStack>
              </HStack>
            </VStack>
          </Alert>
          <Divider mt="5" mb="2.5" />
        </>;
      })}
    </Stack>
  </ScrollView>;
}

export function CompositionAlert(): JSX.Element {
  return <Center>
    <VStack space={5} maxW="400">
      <Alert w="100%" status="success">
        <VStack space={2} flexShrink={1} w="100%">
          <HStack flexShrink={1} space={1} alignItems="center" justifyContent="space-between">
            <HStack space={2} flexShrink={1} alignItems="center">
              <Alert.Icon />
              <Text fontSize="md" fontWeight="medium" _dark={{ color: "coolGray.800" }}>
                Application received!
              </Text>
            </HStack>

            <IconButton 
              variant="unstyled" 
              _focus={{ borderWidth: 0 }} 
              icon={<CloseIcon size="3" />} 
              _icon={{ color: "coolGray.600" }} 
            />
          </HStack>

          <Box pl="6" _dark={{
            _text: {
              color: "coolGray.600"
            }
          }}>
            Your application has been received. We will review your
            application and respond within the next 48 hours.
          </Box>
        </VStack>
      </Alert>

      <Alert w="100%" status="success">
        <VStack space={1} flexShrink={1} w="100%" alignItems="center">
          <Alert.Icon size="md" />
          <Text fontSize="md" fontWeight="medium" _dark={{ color: "coolGray.800" }}>
            Application received!
          </Text>

          <Box 
            _text={{ textAlign: "center" }} 
            _dark={{
              _text: {
                color: "coolGray.600"
              }
            }}
          >
            Your application has been received. We will review your
            application and respond within the next 48 hours.
          </Box>
        </VStack>
      </Alert>
    </VStack>
  </Center>;
}

export function ActionAlert(): JSX.Element {
  const [ show, setShow ] = useState<boolean>(true);

  return <Box w="100%" alignItems="center">
    <Collapse isOpen={show}>
      <Alert maxW="400" status="error">
        <VStack space={1} flexShrink={1} w="100%">
          <HStack flexShrink={1} space={2} alignItems="center" justifyContent="space-between">
            <HStack flexShrink={1} space={2} alignItems="center">
              <Alert.Icon />
              <Text 
                fontSize="md" fontWeight="medium" 
                _dark={{ color: "coolGray.800" }}
              >
                Please try again later!
              </Text>
            </HStack>

            <IconButton 
              variant="unstyled" 
              _focus={{ borderWidth: 0 }} 
              icon={<CloseIcon size="3" />} 
              _icon={{ color: "coolGray.600" }} 
              onPress={() => setShow(false)} 
            />
          </HStack>

          <Box pl="6" _dark={{
            _text: {
              color: "coolGray.600"
            }
          }}>
            Your coupon could not be processed at this time.
          </Box>
        </VStack>
      </Alert>
    </Collapse>

    <Button 
      size={"sm"} mt={8} mx="auto"
      onPress={() => setShow(true)} 
    >
      Re-Open
    </Button>
  </Box>;
}
