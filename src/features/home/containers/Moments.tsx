import React, {FC} from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import MomentsPost from '../components/MomentsPost';
import UserImage from './../../../../assets/images/company.png';

interface Props {
  style?: StyleProp<ViewStyle>;
}

const Moments: FC<Props> = ({style}) => {
  return (
    <View style={[styles.container, style]}>
      <MomentsPost
        userName="Luson Bloom"
        userImage={UserImage}
        caption="Our very own resident gardener Susan! "
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default Moments;
