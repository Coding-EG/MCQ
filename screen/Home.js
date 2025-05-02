import React from 'react';
import {View, Text, TouchableOpacity, Button, StyleSheet} from 'react-native';
import Header from '../components/header';
import Footer from '../components/footer';

const Home = ({navigation}) => {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Button
          title="Start"
          color="green"
          onPress={() => {
            navigation.navigate('Question');
          }}
        />
      </View>
      <Footer />
    </View>
  );
};
export default Home;
const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
  content: {
    flex: 7,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
