import React, {FC} from 'react';
import {
  Image,
  ImageSourcePropType,
  Pressable,
  StyleProp,
  StyleSheet,
  View,
  ViewStyle,
} from 'react-native';
import {SCREEN_WIDTH} from '../../../utils/constants';
import MomentImage from './../../../../assets/images/moments.png';
import PostDetails from '../../../components/PostDetails';
import {MOMENTS_OPTIONS} from '../../../utils/data';
import AppOptionLabel from '../../../components/AppOptionLabel';
import { Fonts } from '../../../utils/styles';

interface Props {
  style?: StyleProp<ViewStyle>;
  userName: string;
  userImage: ImageSourcePropType;
  caption?: string;
}

const MomentsPost: FC<Props> = ({style, userName, userImage, caption}) => {
  return (
    <View style={[styles.container, style]}>
      <Image source={MomentImage} style={styles.imageView} />
      <View style={styles.postDetails}>
        <PostDetails
          userImage={userImage}
          userName={userName}
          caption={caption}
        />
        <View style={styles.postOptionsContainer}>
          {MOMENTS_OPTIONS.map(item => {
            return (
              <Pressable>
                <AppOptionLabel
                  label={item.label}
                  key={item.key}
                  imageIcon={item.image}
                />
              </Pressable>
            );
          })}
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    fontFamily:Fonts.
  },
  imageView: {
    width: SCREEN_WIDTH,
    position: 'absolute',
  },
  postDetails: {
    flexDirection: 'row',
  },
  postOptionsContainer: {
    paddingRight: 20,
    paddingBottom: 50,
  },
});

export default React.memo(MomentsPost);
