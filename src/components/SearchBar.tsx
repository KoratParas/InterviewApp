import React, {FC} from 'react';
import {
  Image,
  Platform,
  StyleProp,
  StyleSheet,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import {Colors} from '../utils/styles';
import SearchIcon from './../../assets/images/search.png';
import AppTextInput from './AppTextInput';

interface Props {
  searchText?: string;
  setSearchText?: (text: string) => void;
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  SuffixComponent?: React.ReactElement;
  PreffixComponent?: React.ReactElement;
}

const SearchBar: FC<Props> = ({
  searchText,
  setSearchText,
  style,
  textStyle,
  PreffixComponent,
  ...rest
}) => {
  return (
    <View style={[styles.container, style]}>
      {PreffixComponent ?? (
        <Image source={SearchIcon} style={styles.searchIcon} />
      )}
      <View style={styles.inputContainer}>
        <AppTextInput
          value={searchText}
          onChangeText={setSearchText}
          style={[styles.searchText, textStyle]}
          placeholder={'Search'}
          autoCorrect={false}
          {...rest}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  clearButton: {
    height: 20,
    width: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
    marginLeft: 18,
  },
  container: {
    height: 50,
    backgroundColor: Colors.grey,
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputContainer: {
    flex: 1,
  },
  searchText: {
    flex: 1,
    fontSize: 14,
    paddingRight: 20,
    lineHeight: Platform.OS === 'android' ? 14 : 0,
  },
  searchIcon: {
    tintColor: Colors.darkGrey,
    marginHorizontal: 5,
  },
});

export default SearchBar;
