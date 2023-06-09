import { View, StyleSheet, Dimensions, StatusBar, TouchableOpacity, Animated, Pressable } from "react-native";
import { Box, useColorModeValue, Center } from "native-base"
import { TabView, SceneMap } from 'react-native-tab-view';
import { useState } from "react";

const initialLayout = {
  width: Dimensions.get('window').width
};

const FirstRoute = (): JSX.Element => <Center>
  This is the Tab 1
</Center>;

const SecondRoute = (): JSX.Element => <Center>
  This is the Tab 2
</Center>;

const ThirdRoute = (): JSX.Element => <Center>
  This is the Tab 3
</Center>;

const FourthRoute = (): JSX.Element => <Center>
  This is the Tab 4
</Center>;

export function MyTabView(): JSX.Element {
  const [ index, setIndex ] = useState<number>(0);
  const [ routes ] = useState([{
    key: 'first',
    title: 'Tab 1'
  }, {
    key: 'second',
    title: 'Tab 2'
  }, {
    key: 'third',
    title: 'Tab 3'
  }, {
    key: 'fourth',
    title: 'Tab 4'
  }]);

  const renderTabBar = (props: any) => {
    const inputRange = props.navigationState.routes.map((x, i) => i);

    return <Box flexDirection="row">
      {props.navigationState.routes.map((route: any, i: number) => {
        const opacity = props.position.interpolate({
          inputRange,
          outputRange: inputRange.map((inputIndex: any) => inputIndex === i ? 1 : 0.5)
        });

        const color = index === i 
          ? useColorModeValue('#000', '#e5e5e5') 
          : useColorModeValue('#1f2937', '#a1a1aa');

        const borderColor = index === i 
          ? 'cyan.500' 
          : useColorModeValue('coolGray.200', 'gray.400');

        return <Box borderBottomWidth="3" borderColor={borderColor} flex={1} alignItems="center" p="3" cursor="pointer">
          <Pressable onPress={() => {
            console.log(i);
            setIndex(i);
          }}>
            <Animated.Text style={{ color }}>
              {route.title}
            </Animated.Text>
          </Pressable>
        </Box>;
      })}
    </Box>;
  };

  return <TabView
    navigationState={{
      index,
      routes
    }}
    renderScene={renderScene}
    renderTabBar={renderTabBar}
    onIndexChange={setIndex}
    initialLayout={initialLayout}
    style={{
      marginTop: StatusBar.currentHeight
    }}
  />;
}

const renderScene = SceneMap({
  first: FirstRoute,
  second: SecondRoute,
  third: ThirdRoute,
  fourth: FourthRoute
});
