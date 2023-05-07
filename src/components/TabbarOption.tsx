import React, {FC} from 'react';
import {
  Image,
  ImageSourcePropType,
  ImageStyle,
  StyleProp,
  View,
} from 'react-native';

interface Props {
  style?: StyleProp<ImageStyle>;
  imageIcon: ImageSourcePropType;
  color?: string;
  height?: number;
}

const TabbarOption: FC<Props> = ({imageIcon, color, style, height}) => {
  const tabHeight = height;
  return (
    <View style={{height: tabHeight}}>
      <Image
        source={imageIcon}
        style={[
          {
            tintColor: color,
          },
          style,
        ]}
      />
    </View>
  );
};

export default TabbarOption;
