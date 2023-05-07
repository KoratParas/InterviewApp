import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {FC} from 'react';
import TabbarOption from '../components/TabbarOption';
import HomeScreen from '../features/home/containers/HomeScreen';
import {Colors} from '../utils/styles';
import BellIcon from './../../assets/images/bell.png';
import AddIcon from './../../assets/images/floating_add.png';
import HomeIcon from './../../assets/images/home.png';
import ProfileIcon from './../../assets/images/user.png';
import GroupsIcon from './../../assets/images/users.png';
import {
  ROUTE_ADD,
  ROUTE_GROUPS_SCREEN,
  ROUTE_HOME_SCREEN,
  ROUTE_NOTIFICATIONS,
  ROUTE_PROFILE,
} from './RouteNames';

export type TabNavigatorParamList = {
  [ROUTE_HOME_SCREEN]: undefined;
  [ROUTE_GROUPS_SCREEN]: undefined;
  [ROUTE_PROFILE]: undefined;
  [ROUTE_ADD]: undefined;
  [ROUTE_NOTIFICATIONS]: undefined;
};

const Tab = createBottomTabNavigator<TabNavigatorParamList>();
const TabNavigator: FC = () => {
  return (
    <Tab.Navigator
      initialRouteName={ROUTE_HOME_SCREEN}
      screenOptions={() => ({
        tabBarItemStyle: {
          width: '100%',
        },
        tabBarStyle: {
          backgroundColor: Colors.blackOpacity,
        },
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.white,
      })}>
      <Tab.Screen
        component={HomeScreen}
        name={ROUTE_HOME_SCREEN}
        options={{
          headerShown: false,
          tabBarLabel: 'Home',
          tabBarIcon: ({color}) => (
            <TabbarOption imageIcon={HomeIcon} color={color} />
          ),
        }}
      />
      <Tab.Screen
        component={HomeScreen}
        name={ROUTE_GROUPS_SCREEN}
        options={{
          tabBarLabel: 'Groups',
          tabBarIcon: ({color}) => (
            <TabbarOption imageIcon={GroupsIcon} color={color} />
          ),
        }}
      />
      <Tab.Screen
        component={HomeScreen}
        name={ROUTE_ADD}
        options={{
          tabBarLabel: () => null,
          tabBarIcon: () => <TabbarOption imageIcon={AddIcon} />,
        }}
      />
      <Tab.Screen
        component={HomeScreen}
        name={ROUTE_PROFILE}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({color}) => (
            <TabbarOption imageIcon={ProfileIcon} color={color} />
          ),
        }}
      />
      <Tab.Screen
        component={HomeScreen}
        name={ROUTE_NOTIFICATIONS}
        options={{
          tabBarLabel: 'Notifications',
          tabBarIcon: ({color}) => (
            <TabbarOption imageIcon={BellIcon} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;
