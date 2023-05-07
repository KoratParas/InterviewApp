import {RouteProp} from '@react-navigation/core';
import {CompositeNavigationProp} from '@react-navigation/native';
import {StackNavigationProp} from '@react-navigation/stack';
import React, {FC, useCallback} from 'react';
import {
  Animated,
  Image,
  Pressable,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {SceneMap, SceneRendererProps, TabView} from 'react-native-tab-view';
import {AuthenticatedParamList} from '../../../navigators/AuthenticatedNavigator';
import {
  ROUTE_HOME_SCREEN,
  ROUTE_HOME_STACK_NAVIGATOR,
} from '../../../navigators/RouteNames';
import {TabNavigatorParamList} from '../../../navigators/TabNavigator';
import {HORIZONTAL_PADDING, SCREEN_WIDTH} from '../../../utils/constants';
import {Colors} from '../../../utils/styles';
import Favourites from './Favourites';
import Moments from './Moments';
import SearchIcon from './../../../../assets/images/search.png';

type HomeScreenRouteProp = RouteProp<
  TabNavigatorParamList,
  typeof ROUTE_HOME_SCREEN
>;

type HomeScreenNavigationProp = CompositeNavigationProp<
  StackNavigationProp<TabNavigatorParamList, typeof ROUTE_HOME_SCREEN>,
  StackNavigationProp<AuthenticatedParamList>
>;

interface Props {
  navigation: HomeScreenNavigationProp;
  route: HomeScreenRouteProp;
}

const FirstRoute = () => <Moments />;

const SecondRoute = () => <Favourites />;

const HomeScreen: FC<Props> = ({navigation}) => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'favourites', title: 'Favourites'},
    {key: 'moments', title: 'Moments'},
  ]);

  const renderScene = SceneMap({
    moments: FirstRoute,
    favourites: SecondRoute,
  });

  const renderTabBar = (props: SceneRendererProps) => {
    return (
      <View style={styles.tabBar}>
        {props.navigationState.routes.map((route, i) => {
          const isSelected = props.navigationState.index === i;
          return (
            <TouchableOpacity
              style={[styles.tabItem, isSelected && styles.selectedTabItem]}
              onPress={() => setIndex(i)}>
              <Text
                style={[styles.tabBarText, isSelected && styles.selectedText]}>
                {route.title}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    );
  };

  const onSearchPress = useCallback(() => {
    navigation.navigate(ROUTE_HOME_STACK_NAVIGATOR);
  }, [navigation]);

  return (
    <View style={styles.container}>
      <TabView
        animationEnabled={false}
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: SCREEN_WIDTH}}
        renderTabBar={renderTabBar}
        lazy={false}
      />
      <Pressable style={styles.searchIcon} onPress={onSearchPress}>
        <Image source={SearchIcon} />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabBar: {
    position: 'absolute',
    flexDirection: 'row',
    zIndex: 1,
    top: 80,
    right: 0,
    left: 0,
    justifyContent: 'center',
  },
  selectedTabItem: {
    borderRadius: 25,
    backgroundColor: Colors.whiteOpacity60,
  },
  tabItem: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 25,
  },
  searchIcon: {
    position: 'absolute',
    top: 80,
    right: 20,
  },
  tabBarText: {
    color: Colors.white,
  },
  selectedText: {
    color: Colors.black,
  },
});

export default HomeScreen;
