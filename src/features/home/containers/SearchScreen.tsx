import React, {FC, useCallback, useEffect} from 'react';
import {
  FlatList,
  KeyboardAvoidingView,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {RouteProp} from '@react-navigation/core';
import {StackNavigationProp} from '@react-navigation/stack';
import {ROUTE_SEARCH_SCREEN} from '../../../navigators/RouteNames';
import {HomeStackNavigatorParamList} from '../../../navigators/HomeStackNavigator';
import {HORIZONTAL_PADDING} from '../../../utils/constants';
import SearchBar from '../../../components/SearchBar';
import Back from '../../../components/navigation/Back';
import HistoryRow from '../components/HistoryRow';
import Divider from '../../../components/Divider';

type SearchScreenRouteProp = RouteProp<
  HomeStackNavigatorParamList,
  typeof ROUTE_SEARCH_SCREEN
>;
type SearchScreenNavigationProp = StackNavigationProp<
  HomeStackNavigatorParamList,
  typeof ROUTE_SEARCH_SCREEN
>;

interface Props {
  navigation: SearchScreenNavigationProp;
  route: SearchScreenRouteProp;
}

const SearchScreen: FC<Props> = ({navigation}) => {
  const onBackPress = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const renderItem = useCallback(({item}) => {
    return (
      <View>
        <HistoryRow searchedText={'Bloom aged care'} />
      </View>
    );
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView style={styles.keyboardViewContainer}>
        <View style={styles.headerContainer}>
          <Back onPress={onBackPress} />
          <SearchBar style={styles.searchBarContainer} />
        </View>
        <FlatList
          data={[1, 2, 3]}
          keyExtractor={item => item.toString()}
          renderItem={renderItem}
          style={styles.flatlistContainer}
        />
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  searchBarContainer: {
    height: 40,
    flex: 1,
  },
  keyboardViewContainer: {
    paddingHorizontal: HORIZONTAL_PADDING,
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  flatlistContainer: {
    marginTop: 10,
  },
});

export default SearchScreen;
