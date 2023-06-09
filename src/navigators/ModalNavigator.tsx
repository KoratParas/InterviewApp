import {DefaultTheme, NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React, {FC} from 'react';
import AuthenticatedNavigator from './AuthenticatedNavigator';
import {ROUTE_AUTHENTICATED_NAVIGATOR} from './RouteNames';
import {Colors} from '../utils/styles';

export type ModalNavigatorParamList = {
  [ROUTE_AUTHENTICATED_NAVIGATOR]: undefined;
};

const ModalStack = createNativeStackNavigator<ModalNavigatorParamList>();

const ModalNavigator: FC = () => {
  const TransparentTheme = {
    ...DefaultTheme,
    colors: {
      ...DefaultTheme.colors,
      background: Colors.white,
    },
  };
  return (
    <NavigationContainer theme={TransparentTheme}>
      <ModalStack.Navigator>
        <ModalStack.Screen
          name={ROUTE_AUTHENTICATED_NAVIGATOR}
          component={AuthenticatedNavigator}
          options={{
            headerShown: false,
          }}
        />
      </ModalStack.Navigator>
    </NavigationContainer>
  );
};

export default ModalNavigator;
