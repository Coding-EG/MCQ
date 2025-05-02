import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Button,
  StyleSheet,
  Image,
} from 'react-native';
import Header from '../components/header';
import Footer from '../components/footer';

const Result = ({route, navigation}) => {
  const {score, total} = route.params;
  return (
    <View style={styles.container}>
      <Header/>
      <View style={styles.content}>
        <View style={styles.card}>
          <Image
            source={{uri: 'https://coding-eg.github.io/quizApp/result.png'}}
            style={styles.cardImage}
          />
          <Text style={styles.cardText}>Correct : {score}</Text>
          <Text style={styles.cardText}>Total : {total}</Text>
          <Button
            title="ReStart"
            color="green"
            onPress={() => {
              navigation.navigate('Home');
            }}
          />
        </View>
      </View>
    <Footer/>
    </View>
  );
};
export default Result;
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
  card: {
    height: '80%',
    width: '80%',
    marginHorizontal: '10%',
    marginVertical: '10%',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
    //boxShadow:'5 5 5 rgb(50,50,50,0.2),-5 -5 5 rgb(50,50,50,0.2),-5 5 5 rgb(50,50,50,0.2),5 -5 5 rgb(50,50,50,0.2)',
    elevation: 6,
    // backgroundColor:'grey',
  },
  cardImage: {
    height: '50%',
    width: '60%',
  },
  cardText: {
    fontSize: 18,
    fontWeight: 900,
  },
});
