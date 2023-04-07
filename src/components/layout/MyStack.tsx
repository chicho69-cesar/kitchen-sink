import { ScrollView, VStack, Heading, Stack, Center, Divider } from "native-base";
import React from "react";

type AppProps = {
  bg?: any;
  children?: React.ReactNode;
  direction?: any;
  isReversed?: boolean;
}

function CenterElement({ bg, children }: AppProps): JSX.Element {
  return <Center bg={bg} size="16" rounded="sm"
    _text={{
      color: "warmGray.50",
      fontWeight: "medium"
    }}
  >
    {children}
  </Center>;
}

function StackElement({ direction, isReversed }: AppProps): JSX.Element {
  const reverse: boolean = isReversed ?? false;

  return <Stack direction={direction} mb="2.5" 
    mt="1.5" space={3} reversed={reverse}
  >
    <CenterElement bg="primary.400">Box 1</CenterElement>
    <CenterElement bg="primary.500">Box 2</CenterElement>
    <CenterElement bg="primary.700">Box 3</CenterElement>
  </Stack>;
}

export function MyStack(): JSX.Element {
  return <ScrollView>
    <VStack space="2.5" mt="4" px="8">
      <Heading size="md">row</Heading>
      <StackElement direction="row"/>
      <Divider />

      <Heading size="md">column</Heading>
      <StackElement direction="column"/>
      <Divider />
      
      <Heading size="md">row-reverse</Heading>
      <StackElement direction="row" isReversed={true}/>
      <Divider />

      <Heading size="md">column-reverse</Heading>
      <StackElement direction="column-reverse"/>
      <Divider />
    </VStack>
  </ScrollView>;
}
