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
  userName: string;
  postedByUserName: string;
  userImage: ImageSourcePropType;
  postedByUserImage: ImageSourcePropType;
  caption: string;
}

const NestedUserPostDetails: FC<Props> = ({
  style,
  userName,
  postedByUserName,
  userImage,
  postedByUserImage,
  caption,
}) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.postedByDetailsContainer}>
        <View style={styles.userDetails}>
          <Image source={userImage} style={styles.userImage} />
          <Image source={postedByUserImage} style={styles.postedByUserImage} />
        </View>
        <View>
          <Text style={styles.name}>{userName}</Text>
          <Text style={styles.postedByUserName}>
            Posted by {postedByUserName}
          </Text>
        </View>
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
    fontWeight: '700',
    marginBottom: 5,
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
  postedByUserImage: {
    position: 'absolute',
    bottom: -2,
    right: 5,
  },
  postedByDetailsContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  postedByUserName: {
    color: Colors.white,
  },
});

export default NestedUserPostDetails;
