import { Box, Menu, Pressable, HamburgerIcon, Divider, VStack, Select, CheckIcon, Button } from "native-base";
import { useState } from "react";

export function BasicMenu(): JSX.Element {
  return <Box w="90%" alignItems="center">
    <Menu w="190" trigger={triggerProps => {
      return <Pressable accessibilityLabel="More options menu" {...triggerProps}>
        <HamburgerIcon />
      </Pressable>;
    }}>
      <Menu.Item>Arial</Menu.Item>
      <Menu.Item>Nunito Sans</Menu.Item>
      <Menu.Item>Roboto</Menu.Item>
      <Menu.Item>Poppins</Menu.Item>
      <Menu.Item>SF Pro</Menu.Item>
      <Menu.Item>Helvetica</Menu.Item>
      <Menu.Item isDisabled>Sofia</Menu.Item>
      <Menu.Item>Cookie</Menu.Item>
    </Menu>
  </Box>;
}

export function GroupMenu(): JSX.Element {
  return <Box w="90%" alignItems="center">
    <Menu w="190" trigger={triggerProps => {
      return <Pressable {...triggerProps}>
        <HamburgerIcon />
      </Pressable>;
    }}>
      <Menu.Group title="Free">
        <Menu.Item>Arial</Menu.Item>
        <Menu.Item>Nunito Sans</Menu.Item>
        <Menu.Item>Roboto</Menu.Item>
      </Menu.Group>

      <Divider mt="3" w="100%" />

      <Menu.Group title="Paid">
        <Menu.Item>SF Pro</Menu.Item>
        <Menu.Item>Helvetica</Menu.Item>
      </Menu.Group>
    </Menu>
  </Box>;
}

export function MenuOptionGroup(): JSX.Element {
  return <Box w="90%" alignItems="center">
    <Menu closeOnSelect={false} w="190" onOpen={() => console.log("opened")} onClose={() => console.log("closed")} trigger={triggerProps => {
      return <Pressable {...triggerProps}>
        <HamburgerIcon />
      </Pressable>;
    }}>
      <Menu.OptionGroup defaultValue="Arial" title="free" type="radio">
        <Menu.ItemOption value="Arial">Arial</Menu.ItemOption>
        <Menu.ItemOption value="Nunito Sans">Nunito Sans</Menu.ItemOption>
        <Menu.ItemOption value="Roboto">Roboto</Menu.ItemOption>
      </Menu.OptionGroup>

      <Divider mt="3" w="100%" />

      <Menu.OptionGroup title="paid" type="checkbox">
        <Menu.ItemOption value="SF Pro">SF Pro</Menu.ItemOption>
        <Menu.ItemOption value="Helvetica">Helvetica</Menu.ItemOption>
      </Menu.OptionGroup>
    </Menu>
  </Box>;
}

export function MenuPlacement(): JSX.Element {
  const [ shouldOverlapWithTrigger ] = useState<boolean>(false);
  const [ position, setPosition ] = useState<string>("auto");

  return <VStack space={6} alignSelf="flex-start" w="100%">
    <Menu 
      w="160" shouldOverlapWithTrigger={shouldOverlapWithTrigger} // @ts-ignore
      placement={position == "auto" ? undefined : position} 
      trigger={triggerProps => {
        return <Button alignSelf="center" variant="solid" {...triggerProps}>
          Menu
        </Button>;
      }}
    >
      <Menu.Item>Arial</Menu.Item>
      <Menu.Item>Nunito Sans</Menu.Item>
      <Menu.Item>Roboto</Menu.Item>
    </Menu>

    <Select 
      selectedValue={position} 
      mx={{ base: 0, md: "auto" }} 
      onValueChange={nextValue => setPosition(nextValue)} 
      _selectedItem={{ bg: "cyan.600", endIcon: <CheckIcon size={4} /> }} 
      accessibilityLabel="Select a position for Menu"
    >
      <Select.Item label="auto" value="auto" />
      <Select.Item label="Top Left" value="top left" />
      <Select.Item label="Top" value="top" />
      <Select.Item label="Top Right" value="top right" />
      <Select.Item label="Right Top" value="right top" />
      <Select.Item label="Right" value="right" />
      <Select.Item label="Right Bottom" value="right bottom" />
      <Select.Item label="Bottom Left" value="bottom left" />
      <Select.Item label="Bottom" value="bottom" />
      <Select.Item label="Bottom Right" value="bottom right" />
      <Select.Item label="Left Top" value="left top" />
      <Select.Item label="Left" value="left" />
      <Select.Item label="Left Bottom" value="left bottom" />
    </Select>
  </VStack>;
}
