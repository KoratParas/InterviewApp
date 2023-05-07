import React, {FC} from 'react';
import {StyleProp, StyleSheet, Text, View, ViewStyle} from 'react-native';

interface Props {
  style?: StyleProp<ViewStyle>;
}

const AppCard: FC<Props> = ({style}) => {
  return (
    <View style={[styles.container, style]}>
      <Text>AppCard</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default AppCard;
