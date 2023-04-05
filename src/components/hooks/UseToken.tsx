import { useToken, VStack, HStack, Box, Text } from 'native-base';

export const UseToken = (): JSX.Element => {
  const [ colorPick1, colorPick2 ] = useToken( 
    'colors', 
    [ 'yellow.500', 'cyan.500' ] 
  );

  return <VStack space={5}>
    <HStack space={2} alignItems="center">
      <Box bg={colorPick1} p="3"></Box>
      <Text>{colorPick1}</Text>
    </HStack>

    <HStack space={2} alignItems="center">
      <Box bg={colorPick2} p="3"></Box>
      <Text>{colorPick2}</Text>
    </HStack>
  </VStack>;
}
