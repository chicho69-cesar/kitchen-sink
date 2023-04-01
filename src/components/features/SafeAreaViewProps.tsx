import { Box, Text, useSafeArea } from 'native-base';

export function FlexibleSafeArea(): JSX.Element {
  return (
    <Box bg="teal.400" rounded="xl" size="24" safeArea>
      <Text>NativeBase</Text>
    </Box>
  );
}

export function FixedSafeArea(): JSX.Element {
  return (
    <Box bg="teal.400" rounded="xl" size="24" safeAreaTop={8}>
      <Text>NativeBase</Text>
    </Box>
  );
}

export function UsingHookSafeArea(): JSX.Element {
  const safeAreaProps = useSafeArea({
    safeAreaTop: true,
    pt: 2
  });

  return (
    <Box bg="teal.400" rounded="xl" size="24" {...safeAreaProps}>
      <Text>NativeBase</Text>
    </Box>
  );
}
