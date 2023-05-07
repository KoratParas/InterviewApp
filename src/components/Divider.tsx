import React, {FC} from 'react';
import {StyleProp, StyleSheet, Text, View, ViewStyle} from 'react-native';
import {Colors} from '../utils/styles';

interface Props {
  style?: StyleProp<ViewStyle>;
}

const Divider: FC<Props> = ({style}) => {
  return <View style={[styles.container, style]} />;
};

const styles = StyleSheet.create({
  container: {
    height: 1,
    borderWidth: 1,
    borderColor: Colors.grey,
  },
});

export default Divider;
