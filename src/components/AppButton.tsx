import React, {FC} from 'react';
import {
  StyleProp,
  StyleSheet,
  Text,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';

interface Props {
  style?: StyleProp<ViewStyle>;
}

const AppButton: FC<Props> = ({style}) => {
  return (
    <TouchableOpacity style={[styles.container, style]}>
      <Text>AppButton</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    height: 60,
  },
});

export default AppButton;
