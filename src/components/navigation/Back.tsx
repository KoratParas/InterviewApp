import backIcon from './../../../assets/images/chevron-left.png';
import React, {FC} from 'react';
import {
  Image,
  ImageStyle,
  StyleSheet,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';

export interface Props {
  onPress: (() => void) | undefined;
  color?: string;
  style?: ViewStyle;
  iconStyle?: ImageStyle;
}

const Back: FC<Props> = ({onPress, style, color, iconStyle}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.hitArea, style]}>
      <Image
        source={backIcon}
        style={[styles.icon, iconStyle, {tintColor: color}]}
      />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  hitArea: {
    justifyContent: 'center',
  },
  icon: {
    marginRight: 10,
    height: 25,
    width: 25,
    resizeMode: 'contain',
  },
});

export default Back;
