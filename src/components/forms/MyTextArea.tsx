import { Box, TextArea, Stack, Divider, Text } from "native-base";
import { useState } from "react";

export function TextAreaUsage(): JSX.Element {
  return <Box alignItems="center" w="100%">
    <TextArea 
      h={20} placeholder="Text Area Placeholder"
      w="75%" maxW="300" 
      autoCompleteType={undefined}
    />
  </Box>;
}

export function InvalidAndDisabledTextArea(): JSX.Element {
  return <Box alignItems="center" w="100%">
    <Stack space={2.5} w="75%" maxW="300">
      <Box>
        <Text mb="4" bold fontSize="lg">
          Invalid TextArea
        </Text>

        <TextArea 
          aria-label="t1" numberOfLines={4}
          placeholder="Invalid TextArea"
          isInvalid _dark={{
            placeholderTextColor: "gray.300"
          }} mb="5" 
          autoCompleteType={undefined}
        />
        <Divider />
      </Box>

      <Box>
        <Text bold fontSize="lg" mb="4">
          Disabled TextArea
        </Text>

        <TextArea 
          aria-label="t1Disabled" 
          placeholder="Disabled TextArea" 
          isDisabled 
          autoCompleteType={undefined}
        />
      </Box>
    </Stack>
  </Box>;
}

export function ValueControlledTextArea(): JSX.Element {
  const [ textAreaValue, setTextAreaValue ] = useState<string>("Value Controlled");

  return <Box alignItems="center" w="100%">
    <TextArea 
      value={textAreaValue} 
      onChange={(e: any) => setTextAreaValue(e.currentTarget.value)} // for web
      onChangeText={text => setTextAreaValue(text)} // for android and ios
      w="75%" maxW="300" 
      autoCompleteType={undefined}
    />
  </Box>;
}
