import React, {FC} from 'react';
import {
  StyleProp,
  StyleSheet,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
  ViewStyle,
} from 'react-native';
import {Colors} from '../utils/styles';

interface Props extends TextInputProps {
  error?: boolean;
  highlightOnFocus?: boolean;
  textStyle?: TextStyle;
  containerStyle?: StyleProp<ViewStyle>;
}

const AppTextInput: FC<Props> = ({
  textStyle,
  containerStyle,
  multiline,
  ...otherProps
}) => {
  return (
    <View
      style={[
        styles.container,
        containerStyle,
        multiline ? styles.containerMultilineOffset : {},
      ]}>
      <TextInput
        style={[styles.input, textStyle]}
        placeholderTextColor={
          otherProps.placeholderTextColor ?? Colors.darkGrey
        }
        selectionColor={Colors.primary}
        {...otherProps}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  containerMultilineOffset: {
    paddingTop: 7,
  },
  input: {
    lineHeight: 20,
    fontSize: 16,
    paddingTop: 10,
    paddingBottom: 10,
    flex: 1,
    paddingHorizontal: 0,
    marginHorizontal: 0,
  },
});

export default AppTextInput;
