import { VStack, Input, Icon, Center, Box, Divider, Heading } from "native-base";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

function SearchBar(): JSX.Element {
  return <VStack 
    my="4" space={5} w="100%" maxW="300px" 
    divider={
      <Box px="2">
        <Divider />
      </Box>
    }
  >
    <VStack w="100%" space={5} alignSelf="center">
      <Heading fontSize="lg" color='black'>Cupertino</Heading>

      <Input 
        placeholder="Search" 
        variant="filled" width="100%" 
        borderRadius="10" py="1" px="2" 
        InputLeftElement={
          <Icon 
            ml="2" size="4" color="gray.400" 
            as={<Ionicons name="ios-search" />} 
          />
        } 
      />
    </VStack>

    <VStack w="100%" space={5} alignSelf="center">
      <Heading fontSize="lg">Material</Heading>
      
      <Input 
        placeholder="Search People & Places" width="100%" 
        borderRadius="4" py="3" px="1" fontSize="14" 
        InputLeftElement={
          <Icon 
            m="2" ml="3" size="6" color="gray.400" 
            as={<MaterialIcons name="search" />} 
          />
        } 
        InputRightElement={
          <Icon 
            m="2" mr="3" size="6" color="gray.400" 
            as={<MaterialIcons name="mic" />} 
          />
        } 
      />
    </VStack>
  </VStack>;
}

export function MySearchBar(): JSX.Element {
  return <Center px="2">
    <SearchBar />
  </Center>;
}
