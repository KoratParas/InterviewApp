import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {FC} from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import {ROUTE_HOME_STACK_NAVIGATOR, ROUTE_TAB_NAVIGATOR} from './RouteNames';
import TabNavigator from './TabNavigator';
import HomeStackNavigator from './HomeStackNavigator';

interface Props {
  style?: StyleProp<ViewStyle>;
}

export type AuthenticatedParamList = {
  [ROUTE_TAB_NAVIGATOR]: undefined;
  [ROUTE_HOME_STACK_NAVIGATOR]: undefined;
};

const Stack = createNativeStackNavigator<AuthenticatedParamList>();

const AuthenticatedNavigator: FC<Props> = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        component={TabNavigator}
        name={ROUTE_TAB_NAVIGATOR}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        component={HomeStackNavigator}
        name={ROUTE_HOME_STACK_NAVIGATOR}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default AuthenticatedNavigator;
