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
  userImage: ImageSourcePropType;
  userName: string;
  caption?: string;
}

const PostDetails: FC<Props> = ({style, userImage, userName, caption}) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.userDetails}>
        <Image source={userImage} style={styles.userImage} />
        <Text style={styles.name}>{userName}</Text>
      </View>
      <View style={styles.captionContainer}>
        <Text style={styles.caption}>{caption}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingLeft: 20,
  },
  name: {
    color: Colors.white,
  },
  caption: {
    color: Colors.white,
  },
  userDetails: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  userImage: {
    marginRight: 15,
  },
  captionContainer: {
    marginVertical: 15,
  },
});

export default PostDetails;
