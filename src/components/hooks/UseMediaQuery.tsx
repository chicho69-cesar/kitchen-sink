import { useMediaQuery, HStack, VStack, Center, Skeleton } from 'native-base';

export const MaxHeight = (): JSX.Element => {
  const [ isSmallScreen ]: boolean[] = useMediaQuery({
    minHeight: 280,
    maxHeight: 480
  });

  return <Center w="100%">
    {isSmallScreen 
      ? <HStack 
          w="90%" maxW="400" borderWidth="1" 
          space={8} rounded="md" 
          borderColor="coolGray.400" p="4"
        >
        <VStack flex="3" space="4">
          <Skeleton />
          <Skeleton.Text />

          <HStack space="2" alignItems="center">
            <Skeleton size="5" rounded="full" />
            <Skeleton h="3" flex="2" rounded="full" />
            <Skeleton h="3" flex="1" rounded="full" />
          </HStack>
        </VStack>
      </HStack> 

      : <HStack 
          w="90%" maxW="400" borderWidth="1" 
          space={8} rounded="md" 
          borderColor="coolGray.400" p="4"
        >
        <Skeleton flex="1" h="150" rounded="md" />
        <VStack flex="3" space="4">
          <Skeleton />
          <Skeleton.Text />

          <HStack space="2" alignItems="center">
            <Skeleton size="5" rounded="full" />
            <Skeleton h="3" flex="2" rounded="full" />
            <Skeleton h="3" flex="1" rounded="full" />
          </HStack>
        </VStack>
      </HStack>
    }
  </Center>;
}

export const MinWidth = (): JSX.Element => {
  const [ isSmallScreen ]: boolean[] = useMediaQuery({
    minWidth: 280
  });

  return <Center w="100%">
    {isSmallScreen 
      ? <HStack 
          w="90%" maxW="400" borderWidth="1" 
          space={8} rounded="md" 
          borderColor="coolGray.400" p="4"
        >
        <VStack flex="3" space="4">
          <Skeleton />
          <Skeleton.Text />

          <HStack space="2" alignItems="center">
            <Skeleton size="5" rounded="full" />
            <Skeleton h="3" flex="2" rounded="full" />
            <Skeleton h="3" flex="1" rounded="full" />
          </HStack>
        </VStack>
      </HStack> 
      
      : <HStack 
          w="90%" maxW="400" borderWidth="1" 
          space={8} rounded="md" 
          borderColor="coolGray.400" p="4"
        >
        <Skeleton flex="1" h="150" rounded="md" />
        <VStack flex="3" space="4">
          <Skeleton />
          <Skeleton.Text />

          <HStack space="2" alignItems="center">
            <Skeleton size="5" rounded="full" />
            <Skeleton h="3" flex="2" rounded="full" />
            <Skeleton h="3" flex="1" rounded="full" />
          </HStack>
        </VStack>
      </HStack>
    }
  </Center>;
}

export const Orientation = (): JSX.Element => {
  const [ isLandScape, isPortrait ]: boolean[] = useMediaQuery([
    { orientation: "landscape" }, 
    { orientation: "portrait" }
  ]);

  return <Center w="100%">
    {isPortrait 
      &&<HStack 
          w="90%" maxW="400" borderWidth="1" 
          space={8} rounded="md" 
          borderColor="coolGray.400" p="4"
        >
        <VStack flex="3" space="4">
          <Skeleton />
          <Skeleton.Text />

          <HStack space="2" alignItems="center">
            <Skeleton size="5" rounded="full" />
            <Skeleton h="3" flex="2" rounded="full" />
            <Skeleton h="3" flex="1" rounded="full" />
          </HStack>
        </VStack>
      </HStack>
    }

    {isLandScape 
      &&<HStack 
          w="90%" maxW="400" borderWidth="1" 
          space={8} rounded="md" 
          borderColor="coolGray.400" p="4"
        >
        <Skeleton flex="1" h="150" rounded="md" />
        <VStack flex="3" space="4">
          <Skeleton />
          <Skeleton.Text />

          <HStack space="2" alignItems="center">
            <Skeleton size="5" rounded="full" />
            <Skeleton h="3" flex="2" rounded="full" />
            <Skeleton h="3" flex="1" rounded="full" />
          </HStack>
        </VStack>
      </HStack>
    }
  </Center>;
}
