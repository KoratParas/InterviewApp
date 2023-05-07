import React, {FC} from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import FavouritesPost from '../components/FavouritesPost';
import UserImage from './../../../../assets/images/company.png';
import PostedByUserImage from './../../../../assets/images/userPosted.png';

interface Props {
  style?: StyleProp<ViewStyle>;
}

const Favourites: FC<Props> = ({style}) => {
  return (
    <View style={[styles.container, style]}>
      <FavouritesPost
        userName="Bloom aged care"
        userImage={UserImage}
        caption="This game of chess is intense"
        postedByUserImage={PostedByUserImage}
        postedByUserName="Connor Smith"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Favourites;
