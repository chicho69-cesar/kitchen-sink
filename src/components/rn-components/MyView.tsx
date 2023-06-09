import { View, Text, Heading } from "native-base";

export function MyView(): JSX.Element {
  return <View mt='10'>
    <Heading>
      A component library for the{" "}
      <Heading color="emerald.400">React Ecosystem</Heading>
    </Heading>

    <Text pt="3">
      NativeBase is a simple, modular and accessible component library that
      gives you building blocks to build you React applications.
    </Text>
  </View>;
}
