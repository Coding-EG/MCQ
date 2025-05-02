import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const Footer = () => {
  return <View style={styles.footer}></View>;
};
const styles = StyleSheet.create({
  footer: {
    flex: 1.5,
    backgroundColor: 'black',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    borderTopColor: 'orange',
    borderTopWidth: 6,
  },
});
export default Footer;
