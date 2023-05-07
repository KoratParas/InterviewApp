import React, {FC} from 'react';
import {StyleProp, StyleSheet, Text, View, ViewStyle} from 'react-native';
import {ROUTE_HOME_SCREEN, ROUTE_SEARCH_SCREEN} from './RouteNames';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../features/home/containers/HomeScreen';
import SearchScreen from '../features/home/containers/SearchScreen';

export type HomeStackNavigatorParamList = {
  [ROUTE_SEARCH_SCREEN]: undefined;
};

interface Props {
  style?: StyleProp<ViewStyle>;
}

const Stack = createNativeStackNavigator<HomeStackNavigatorParamList>();

const HomeStackNavigator: FC<Props> = ({style}) => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={SearchScreen}
        name={ROUTE_SEARCH_SCREEN}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeStackNavigator;
