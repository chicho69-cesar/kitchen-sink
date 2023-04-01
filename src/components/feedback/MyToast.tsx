import { 
  useToast, 
  Button, 
  Alert,
  Center, 
  HStack, 
  VStack,
  Stack,
  Text,
  IconButton,
  CloseIcon,
  Box,
  Toast
} from "native-base";
import React, { useRef } from "react";

export function BasicToast(): JSX.Element {
  const toast = useToast();
  
  return <Center>
    <Button 
      onPress={() => toast.show({
        description: "Hello world"
      })}
    >
      Show Toast
    </Button>
  </Center>;
}

export function PositionToast(): JSX.Element {
  const toast = useToast();
  
  return <Center>
    <VStack space={2}>
      <Button onPress={() => toast.show({
        title: "Hello world",
        placement: "bottom"
      })}>
        Bottom
      </Button>

      <Button onPress={() => toast.show({
        title: "Hello world",
        placement: "top"
      })}>
        Top
      </Button>

      <Button onPress={() => toast.show({
        title: "Hello world",
        placement: "top-left"
      })}>
        Top left
      </Button>

      <Button onPress={() => toast.show({
        title: "Hello world",
        placement: "top-right"
      })}>
        Top right
      </Button>

      <Button onPress={() => toast.show({
        title: "Hello world",
        placement: "bottom-left"
      })}>
        Bottom left
      </Button>

      <Button onPress={() => toast.show({
        title: "Hello world",
        placement: "bottom-right"
      })}>
        Bottom right
      </Button>
    </VStack>
  </Center>;
}

export function CustomComponentToast(): JSX.Element {
  const toast = useToast();
  
  return <Center>
    <Button onPress={(): void => {
      toast.show({
        render: (): JSX.Element => {
          return <Box bg="emerald.500" px="2" py="1" rounded="sm" mb={5}>
            Hello! Have a nice day
          </Box>;
        }
      });
    }}>
      Custom Toast
    </Button>
  </Center>;
}

export function ClosingToast(): JSX.Element {
  const toast = useToast();
  const toastIdRef = useRef();

  function close(): void {
    if (toastIdRef.current) {
      toast.close(toastIdRef.current);
    }
  }

  function closeAll(): void {
    toast.closeAll();
  }

  function addToast(): void {
    toastIdRef.current = toast.show({
      title: "Hi, Nice to see you"
    });
  }

  return <Stack 
    direction={{
      base: "column",
      md: "row"
    }} space={2}
  >
    <Button onPress={addToast}>Toast</Button>
    <Button onPress={close} variant="outline">
      Close last toast
    </Button>
    <Button onPress={closeAll} variant="outline">
      Close all toasts
    </Button>
  </Stack>;
}

export function StatusAndVariantReceipes(): JSX.Element {
  type ToastDetail = {
    title: string;
    variant: string;
    description: string;
    isClosable?: boolean;
  };

  const toast = useToast();

  const ToastDetails: ToastDetail[] = [{
    title: "Account verified",
    variant: "solid",
    description: "Thanks for signing up with us.",
    isClosable: true
  }, {
    title: "Something went wrong",
    variant: "subtle",
    description: "Please create a support ticket from the support page"
  }, {
    title: "Network connection restored",
    variant: "left-accent",
    description: "This is to inform you that your network connectivity is restored",
    isClosable: true
  }, {
    title: "Invalid email address",
    variant: "top-accent",
    description: "Please enter a valid email address"
  }, {
    title: "Invalid email address",
    variant: "outline",
    description: "Please enter a valid email address"
  }];

  type ToastProps = {
    id: any;
    status: ((string & {}) | "error" | "success" | "warning" | "info" | undefined);
    variant: any;
    title: React.ReactNode;
    description: React.ReactNode;
    isClosable?: (boolean | undefined);
  };

  const ToastAlert = ({
    id,
    status,
    variant,
    title,
    description,
    isClosable,
    ...rest
  }: ToastProps): JSX.Element => <Alert 
    maxWidth="100%" alignSelf="center" flexDirection="row" 
    status={status ? status : "info"} variant={variant} {...rest}
  >
    <VStack space={1} flexShrink={1} w="100%">
      <HStack flexShrink={1} alignItems="center" justifyContent="space-between">
        <HStack space={2} flexShrink={1} alignItems="center">
          <Alert.Icon />
          <Text 
            fontSize="md" fontWeight="medium" flexShrink={1} 
            color={variant === "solid" ? "lightText" : variant !== "outline" ? "darkText" : null}
          >
            {title}
          </Text>
        </HStack>

        {
          isClosable 
            ? <IconButton 
                variant="unstyled" 
                icon={<CloseIcon size="3" />} 
                _icon={{ color: variant === "solid" ? "lightText" : "darkText" }} 
                onPress={() => toast.close(id)} 
              /> 
            : null
        }
      </HStack>
      
      <Text px="6" color={variant === "solid" ? "lightText" : variant !== "outline" ? "darkText" : null}>
        {description}
      </Text>
    </VStack>
  </Alert>;

  return <Center>
    <VStack space={2}>
      {ToastDetails.map((item: ToastDetail, index: number) => 
        <Button key={index} onPress={() => toast.show({
          render: ({
            id
          }) => {
            return <ToastAlert status={undefined} id={id} {...item} />;
          }
        })}>
          {item.variant}
        </Button>
      )}
    </VStack>
  </Center>;
}

export function PrevetingDuplicateToast(): JSX.Element {
  const toast = useToast();
  const id: string = "test-toast";

  return <Center>
    <Button onPress={(): void => {
      if (!toast.isActive(id)) {
        toast.show({
          id,
          title: "Hey! You can't create a duplicate toast"
        });
      }
    }}>
      Click me!
    </Button>
  </Center>;
}

export function StandaloneToast(): JSX.Element {
  return <Center>
    <Button onPress={() => Toast.show({
      title: "Hello world"
    })}>
      Show Toast
    </Button>
  </Center>;
}
