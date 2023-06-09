import { 
  Button, 
  Modal, 
  FormControl, 
  Input, 
  Center, 
  VStack, 
  HStack, 
  Text, 
  Radio, 
  ScrollView,
  Stack
} from "native-base";
import { useState, useRef } from "react";

export function BasicModal(): JSX.Element {
  const [ showModal, setShowModal ] = useState<boolean>(false);
  
  return <Center>
    <Button onPress={() => setShowModal(true)}>Button</Button>
    <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
      <Modal.Content maxWidth="400px">
        <Modal.CloseButton />
        <Modal.Header>Contact Us</Modal.Header>

        <Modal.Body>
          <FormControl>
            <FormControl.Label>Name</FormControl.Label>
            <Input />
          </FormControl>

          <FormControl mt="3">
            <FormControl.Label>Email</FormControl.Label>
            <Input />
          </FormControl>
        </Modal.Body>

        <Modal.Footer>
          <Button.Group space={2}>
            <Button 
              variant="ghost" colorScheme="blueGray" 
              onPress={() => {
                setShowModal(false);
              }}
            >
              Cancel
            </Button>

            <Button onPress={() => {
              setShowModal(false);
            }}>
              Save
            </Button>
          </Button.Group>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  </Center>;
}

export function MultipleModals(): JSX.Element {
  const [ showModal, setShowModal ] = useState<boolean>(false);
  const [ showModal2, setShowModal2 ] = useState<boolean>(false);
  const [ showModal3, setShowModal3 ] = useState<boolean>(false);
  
  return <Center>
    <Button onPress={() => setShowModal(true)}>Button</Button>
    <Modal isOpen={showModal} onClose={() => setShowModal(false)} size="lg">
      <Modal.Content maxWidth="350">
        <Modal.CloseButton />
        <Modal.Header>Order</Modal.Header>

        <Modal.Body>
          <VStack space={3}>
            <HStack alignItems="center" justifyContent="space-between">
              <Text fontWeight="medium">Sub Total</Text>
              <Text color="blueGray.400">$298.77</Text>
            </HStack>

            <HStack alignItems="center" justifyContent="space-between">
              <Text fontWeight="medium">Tax</Text>
              <Text color="blueGray.400">$38.84</Text>
            </HStack>

            <HStack alignItems="center" justifyContent="space-between">
              <Text fontWeight="medium">Total Amount</Text>
              <Text color="green.500">$337.61</Text>
            </HStack>
          </VStack>
        </Modal.Body>

        <Modal.Footer>
          <Button flex="1" onPress={() => {
            setShowModal2(true);
          }}>
            Continue
          </Button>
        </Modal.Footer>
      </Modal.Content>
    </Modal>

    <Modal isOpen={showModal2} onClose={() => setShowModal2(false)} size="lg">
      <Modal.Content maxWidth="350">
        <Modal.CloseButton />
        <Modal.Header>Select Address</Modal.Header>

        <Modal.Body>
          <Radio.Group defaultValue="address1" name="address" size="sm">
            <VStack space={3}>
              <Radio alignItems="flex-start" _text={{
                mt: "-1",
                ml: "2",
                fontSize: "sm"
              }} value="address1">
                4140 Parker Rd. Allentown, New Mexico 31134
              </Radio>

              <Radio alignItems="flex-start" _text={{
                mt: "-1",
                ml: "2",
                fontSize: "sm"
              }} value="address2">
                6391 Elign St. Celina, Delaware 10299
              </Radio>
            </VStack>
          </Radio.Group>
        </Modal.Body>

        <Modal.Footer>
          <Button flex="1" onPress={() => {
            setShowModal3(true);
          }}>
            Continue
          </Button>
        </Modal.Footer>
      </Modal.Content>
    </Modal>

    <Modal isOpen={showModal3} size="lg" onClose={() => setShowModal3(false)}>
      <Modal.Content maxWidth="350">
        <Modal.CloseButton />
        <Modal.Header>Payment Options</Modal.Header>

        <Modal.Body>
          <Radio.Group name="payment" size="sm">
            <VStack space={3}>
              <Radio alignItems="flex-start" _text={{
                mt: "-1",
                ml: "2",
                fontSize: "sm"
              }} value="payment1">
                Cash on delivery
              </Radio>

              <Radio alignItems="flex-start" _text={{
                mt: "-1",
                ml: "2",
                fontSize: "sm"
              }} value="payment2">
                Credit/ Debit/ ATM Card
              </Radio>

              <Radio alignItems="flex-start" _text={{
                mt: "-1",
                ml: "2",
                fontSize: "sm"
              }} value="payment3">
                UPI
              </Radio>
            </VStack>
          </Radio.Group>
        </Modal.Body>

        <Modal.Footer>
          <Button flex="1" onPress={() => {
            setShowModal(false);
            setShowModal2(false);
            setShowModal3(false);
          }}>
            Checkout
          </Button>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  </Center>;
}

export function ModalSizes(): JSX.Element {
  const [ modalVisible, setModalVisible ] = useState<boolean>(false);
  const [ size, setSize ] = useState<string>("md");

  const handleSizeClick = (newSize: string) => {
    setSize(newSize);
    setModalVisible(!modalVisible);
  };

  return <>
    <Modal isOpen={modalVisible} onClose={setModalVisible} size={size}>
      <Modal.Content maxH="212">
        <Modal.CloseButton />
        <Modal.Header>Return Policy</Modal.Header>

        <Modal.Body>
          <ScrollView>
            <Text>
              Create a 'Return Request' under “My Orders” section of
              App/Website. Follow the screens that come up after tapping on
              the 'Return’ button. Please make a note of the Return ID that we
              generate at the end of the process. Keep the item ready for pick
              up or ship it to us basis on the return mode.
            </Text>
          </ScrollView>
        </Modal.Body>

        <Modal.Footer>
          <Button.Group space={2}>
            <Button variant="ghost" colorScheme="blueGray" onPress={() => {
              setModalVisible(false);
            }}>
              Cancel
            </Button>

            <Button onPress={() => {
              setModalVisible(false);
            }}>
              Save
            </Button>
          </Button.Group>
        </Modal.Footer>
      </Modal.Content>
    </Modal>

    <Center>
      <VStack space={4}>
        {[ "xs", "sm", "md", "lg", "xl", "full" ].map((size: string) => {
        return <Button 
          onPress={() => handleSizeClick(size)} 
          key={size}
        >
          {`Open ${size} Modal`}
        </Button>;
      })}
      </VStack>
    </Center>
  </>;
}

export function FocusRefModal(): JSX.Element {
  const [ modalVisible, setModalVisible ] = useState<boolean>(false);
  const initialRef: any = useRef(null);
  const finalRef: any = useRef(null);

  return <>
    <Modal 
      isOpen={modalVisible} onClose={() => setModalVisible(false)} 
      initialFocusRef={initialRef} finalFocusRef={finalRef}
    >
      <Modal.Content>
        <Modal.CloseButton />
        <Modal.Header>Contact Us</Modal.Header>

        <Modal.Body>
          <FormControl>
            <FormControl.Label>Name</FormControl.Label>
            <Input ref={initialRef} />
          </FormControl>

          <FormControl mt="3">
            <FormControl.Label>Email</FormControl.Label>
            <Input />
          </FormControl>
        </Modal.Body>

        <Modal.Footer>
          <Button.Group space={2}>
            <Button variant="ghost" colorScheme="blueGray" onPress={() => {
              setModalVisible(false);
            }}>
              Cancel
            </Button>

            <Button onPress={() => {
              setModalVisible(false);
            }}>
              Save
            </Button>
          </Button.Group>
        </Modal.Footer>
      </Modal.Content>
    </Modal>

    <HStack space="4" justifyContent="center" alignItems="center">
      <Button onPress={() => {
        setModalVisible(!modalVisible);
      }}>
        Open Modal
      </Button>

      <Input 
        w="32" ref={finalRef} placeholder="Enter the OTP" 
        _light={{ placeholderTextColor: "blueGray.700" }} 
        _dark={{ placeholderTextColor: "blueGray.100" }} 
      />
    </HStack>
  </>;
}

export function AvoidKeyBoardModal(): JSX.Element {
  const [ modalVisible, setModalVisible ] = useState<boolean>(false);
  
  return <>
    <Modal 
      isOpen={modalVisible} onClose={() => setModalVisible(false)} 
      avoidKeyboard justifyContent="flex-end" bottom="4" size="lg"
    >
      <Modal.Content>
        <Modal.CloseButton />
        <Modal.Header>Forgot Password?</Modal.Header>

        <Modal.Body>
          Enter email address and we'll send a link to reset your password.
          <FormControl mt="3">
            <FormControl.Label>Email</FormControl.Label>
            <Input />
          </FormControl>
        </Modal.Body>

        <Modal.Footer>
          <Button flex="1" onPress={() => {
            setModalVisible(false);
          }}>
            Proceed
          </Button>
        </Modal.Footer>
      </Modal.Content>
    </Modal>

    <VStack space={8} alignItems="center">
      <Button w="104" onPress={() => {
        setModalVisible(!modalVisible);
      }}>
        Open Modal
      </Button>

      <Text textAlign="center">
        Open modal and focus on the input element to see the effect.
      </Text>
    </VStack>
  </>;
}

export function ModalPlacement(): JSX.Element {
  const [ placement, setPlacement ] = useState<(string | any)>(undefined);
  const [ open, setOpen ] = useState<boolean>(false);

  const openModal = (placement: string) => {
    setOpen(true);
    setPlacement(placement);
  };

  return <>
    <Stack direction={{
      base: "column",
      md: "row"
    }} space={2}>
      <Button onPress={() => openModal("top")}>Top</Button>
      <Button onPress={() => openModal("bottom")}>Bottom</Button>
      <Button onPress={() => openModal("center")}>Center</Button>
      <Button onPress={() => openModal("left")}>Left</Button>
      <Button onPress={() => openModal("right")}>Right</Button>
    </Stack>

    <Modal isOpen={open} onClose={() => setOpen(false)} safeAreaTop={true}>
      <Modal.Content maxWidth="350" {...styles[placement]}>
        <Modal.CloseButton />
        <Modal.Header>Contact Us</Modal.Header>

        <Modal.Body>
          <FormControl>
            <FormControl.Label>Name</FormControl.Label>
            <Input />
          </FormControl>

          <FormControl mt="3">
            <FormControl.Label>Email</FormControl.Label>
            <Input />
          </FormControl>
        </Modal.Body>

        <Modal.Footer>
          <Button.Group space={2}>
            <Button variant="ghost" colorScheme="blueGray" onPress={() => {
              setOpen(false);
            }}>
              Cancel
            </Button>

            <Button onPress={() => {
              setOpen(false);
            }}>
              Save
            </Button>
          </Button.Group>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  </>;
};

const styles = {
  top: {
    marginBottom: "auto",
    marginTop: 0
  },
  bottom: {
    marginBottom: 0,
    marginTop: "auto"
  },
  left: {
    marginLeft: 0,
    marginRight: "auto"
  },
  right: {
    marginLeft: "auto",
    marginRight: 0
  },
  center: {}
};

export function CustomBackdropModal(): JSX.Element {
  const [ showModal, setShowModal ] = useState<boolean>(false);

  return <Center>
    <Button onPress={() => setShowModal(true)}>Button</Button>
    <Modal 
      isOpen={showModal} onClose={() => setShowModal(false)} 
      _backdrop={{
        _dark: {
          bg: "coolGray.800"
        },
        bg: "warmGray.50"
      }}
    >
      <Modal.Content maxWidth="350" maxH="212">
        <Modal.CloseButton />
        <Modal.Header>Return Policy</Modal.Header>

        <Modal.Body>
          Create a 'Return Request' under “My Orders” section of App/Website.
          Follow the screens that come up after tapping on the 'Return’
          button. Please make a note of the Return ID that we generate at the
          end of the process. Keep the item ready for pick up or ship it to us
          basis on the return mode.
        </Modal.Body>

        <Modal.Footer>
          <Button.Group space={2}>
            <Button variant="ghost" colorScheme="blueGray" onPress={() => {
              setShowModal(false);
            }}>
              Cancel
            </Button>

            <Button onPress={() => {
              setShowModal(false);
            }}>
              Save
            </Button>
          </Button.Group>
        </Modal.Footer>
      </Modal.Content>
    </Modal>
  </Center>;
}
