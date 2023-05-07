import React, {FC} from 'react';
import {
  Image,
  ImageSourcePropType,
  StyleProp,
  StyleSheet,
  Text,
  View,
  ViewStyle,
} from 'react-native';
import {Colors} from '../utils/styles';

interface Props {
  style?: StyleProp<ViewStyle>;
  imageIcon: ImageSourcePropType;
  label: string;
}

const AppOptionLabel: FC<Props> = ({style, imageIcon, label}) => {
  return (
    <View style={[styles.container, style]}>
      <Image source={imageIcon} />
      <Text style={styles.label}>{label}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
    alignItems: 'center',
  },
  label: {
    color: Colors.white,
    marginVertical: 8,
  },
});

export default AppOptionLabel;
