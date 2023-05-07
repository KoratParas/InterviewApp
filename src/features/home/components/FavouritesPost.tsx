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
import FavouritesImage from './../../../../assets/images/favourites.png';
import NestedUserPostDetails from '../../../components/NestedUserPostDetails';
import {FAV_OPTIONS} from '../../../utils/data';
import AppOptionLabel from '../../../components/AppOptionLabel';

interface Props {
  style?: StyleProp<ViewStyle>;
  userName: string;
  postedByUserName: string;
  userImage: ImageSourcePropType;
  postedByUserImage: ImageSourcePropType;
  caption: string;
}

const FavouritesPost: FC<Props> = ({
  style,
  userName,
  postedByUserName,
  userImage,
  postedByUserImage,
  caption,
}) => {
  return (
    <View style={[styles.container, style]}>
      <Image source={FavouritesImage} style={styles.imageView} />
      <View style={styles.postDetails}>
        <NestedUserPostDetails
          userImage={userImage}
          postedByUserName={postedByUserName}
          postedByUserImage={postedByUserImage}
          userName={userName}
          caption={caption}
        />
        <View style={styles.postOptionsContainer}>
          {FAV_OPTIONS.map(item => {
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

export default React.memo(FavouritesPost);
