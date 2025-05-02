import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
  TouchableOpacity,
  Image,
} from 'react-native';
import {useState, useEffect} from 'react';
import NetInfo from '@react-native-community/netinfo';
import Footer from '../components/footer';
import Header from '../components/header';

export default function Question({navigation}) {
  
  const [data, setData] = useState(null);
  const [index, setIndex] = useState(0);
  const [selectedAnswerValue, setSelectedAnswerValue] = useState(null);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState(null);
  const [nextButton, setNextButton] = useState('Check');
  const [score, setScore] = useState(0);
  const [isConnected,setIsConnected] = useState(false);
  const selectAnswer = answerValue => {
    setSelectedAnswerValue(answerValue);
  };
  const checkAnswer = () => {
    const isCorrect = selectedAnswerValue === data[index]['answer'];
    setIsAnswerCorrect(isCorrect);
    setNextButton('Next');
    if (isCorrect) {
      setScore(score + 1);
    }
  };
  const nextQuestionSet = () => {
    if (data.length == index + 1) {
      navigation.navigate('Result', {score, total: data.length});
    } else {
      setIndex(index + 1);
      setSelectedAnswerValue(null);
      setIsAnswerCorrect(null);
      setNextButton('Check');
    }
  };

  useEffect(() => {
    const intConnection = NetInfo.addEventListener((state) => {
      setIsConnected(state.isConnected);
    });
    if (isConnected) {
    fetch('https://coding-eg.github.io/quizApp/question.json')
      .then(response => response.json())
      .then(data => {
        setData(data);
      })
      .catch(error => {
        console.error(error);
      });
    }else{
      setData(null);
    }

    return () => {
      intConnection();
    };
    
  });
  return (
    <View style={styles.container}>
      <Header
        element={
          <TouchableOpacity
            style={{
              position: 'absolute',
              left: 10,
              alignSelf: 'center',
              borderWidth: 2,
              borderColor: 'black',
              borderRadius: 15,
              backgroundColor: 'white',
              width: 30,
              height: 30,
            }}
            onPress={() => {
              navigation.goBack();
            }}>
            <Image
              source={require('../assets/release/drawable-xxxhdpi/backButton.png')}
              style={{width: 30, height: 30}}
            />
          </TouchableOpacity>
        }
      />

      <View style={styles.content}>
        {data ? (
          <>
            <View style={styles.questionSet}>
              <Text style={[styles.questionText, {color: 'black'}]}>
                Q{index + 1} {data[index]['question']}
              </Text>
              <TouchableOpacity
                style={[
                  styles.optionButton,
                  selectedAnswerValue == data[index]['question-o1']
                    ? {backgroundColor: 'grey'}
                    : {},
                  selectedAnswerValue == data[index]['question-o1'] &&
                    isAnswerCorrect != null &&
                    (isAnswerCorrect
                      ? {borderColor: 'green'}
                      : {borderColor: 'red'}),
                ]}
                onPress={() => selectAnswer(data[index]['question-o1'])}>
                <Text style={styles.optionButtonText}>
                  {data[index]['question-o1']}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.optionButton,
                  selectedAnswerValue == data[index]['question-o2']
                    ? {backgroundColor: 'grey'}
                    : {},
                  selectedAnswerValue == data[index]['question-o2'] &&
                    isAnswerCorrect != null &&
                    (isAnswerCorrect
                      ? {borderColor: 'green'}
                      : {borderColor: 'red'}),
                ]}
                onPress={() => selectAnswer(data[index]['question-o2'])}>
                <Text style={styles.optionButtonText}>
                  {data[index]['question-o2']}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.optionButton,
                  selectedAnswerValue == data[index]['question-o3']
                    ? {backgroundColor: 'grey'}
                    : {},
                  selectedAnswerValue == data[index]['question-o3'] &&
                    isAnswerCorrect != null &&
                    (isAnswerCorrect
                      ? {borderColor: 'green'}
                      : {borderColor: 'red'}),
                ]}
                onPress={() => selectAnswer(data[index]['question-o3'])}>
                <Text style={styles.optionButtonText}>
                  {data[index]['question-o3']}
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.optionButton,
                  selectedAnswerValue == data[index]['question-o4']
                    ? {backgroundColor: 'grey'}
                    : {},
                  selectedAnswerValue == data[index]['question-o4'] &&
                    isAnswerCorrect != null &&
                    (isAnswerCorrect
                      ? {borderColor: 'green'}
                      : {borderColor: 'red'}),
                ]}
                onPress={() => selectAnswer(data[index]['question-o4'])}>
                <Text style={styles.optionButtonText}>
                  {data[index]['question-o4']}
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.submitSet}>
              <TouchableOpacity style={styles.submitButton} disabled={true}>
                <Text style={styles.submitButtonText}>Skip</Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.submitButton}
                disabled={selectedAnswerValue == null}
                onPress={() => {
                  if (nextButton == 'Check') {
                    checkAnswer();
                  } else if (nextButton == 'Next') {
                    nextQuestionSet();
                  }
                }}>
                <Text style={styles.submitButtonText} numberOfLines={1}>
                  {nextButton}
                </Text>
              </TouchableOpacity>
            </View>
          </>
        ) : (
          <ActivityIndicator size="large" color="blue" />
        )}
      </View>
      <Footer />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
  header: {
    flex: 1.5,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  h_text: {
    color: 'white',
    fontSize: 20,
    fontWeight: 900,
  },
  content: {
    flex: 7,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 15,
    // backgroundColor:'blue',
  },
  questionSet: {
    height: '70%',
    width: '100%',
    // backgroundColor:'red',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  questionText: {
    alignSelf: 'flex-start',
    marginLeft: 10,
    fontSize: 18,
  },
  optionButton: {
    //border: '2px solid blue',
    borderColor: 'blue',
    borderWidth: 2,
    borderRadius: 5,
    width: '90%',
    padding: '2%',
  },
  optionButtonText: {},
  submitSet: {
    height: '30%',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  submitButton: {
    //border: '2px solid grey',
    // borderColor: 'grey',
    // borderWidth: 2,
    borderRadius: 5,
    width: 'auto',
    padding: 6,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'green',
    
    
  },
  submitButtonText: {
    color: 'white',
    fontWeight: 900,
    fontSize: 18,
  },
});
