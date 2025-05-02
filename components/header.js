import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const Header = (props) => {
  return (
    <View style={styles.header}>
      <Text style={styles.h_text}>Quiz App</Text>
      {props.element}
    </View>
  );
};
const styles = StyleSheet.create({
  header: {
    flex: 1.5,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius:30,
    borderBottomRightRadius:30,
    borderBottomColor:'orange',
    borderBottomWidth:6,

  },
  h_text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 900,
  },
  
});

export default Header;
