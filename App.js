import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {useState} from 'react';

export default function App() {

  const [currentQuestion,setCurrentQuestion] = useState(0);

  const [score,setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const quizData = [
    {
      question: 'What is the capital of Eritrea?',
      options: ['Mendefera', 'Asmara', 'Keren', 'Massawa'],
      answer: 'Asmara'
    },
    {
      question: 'What is the largest animal in the world?',
      options: ['Lion', 'Kangaroo', 'Elephant', 'Blue whale'],
      answer: 'Blue whale',
    },
   
  ]


  const handleAnswer =(selectedAnswer)=>{
    const answer = quizData[currentQuestion]?.answer;
    if(answer === selectedAnswer){
      setScore((prevScore)=>prevScore + 1);
      alert("right answer")
    }
    else{
      alert("Try again!")
    }


 const nextQuestion = currentQuestion + 1;
  if (nextQuestion < quizData.length){
    setCurrentQuestion(nextQuestion);
  }
  else{
    setShowScore(true);
  }
  }


  const handleRestart = () =>{
    setCurrentQuestion(0);
    setScore(0);
    setShowScore(false);
  }
 

  return (
    <View style={styles.container}>

      {showScore ? <View style={styles.scoreContainer}>
        <Text style={styles.scoreText}>{score}</Text>
        <TouchableOpacity style={styles.resetButton} onPress={handleRestart}>
          <Text style={styles.resetBtnText}>Reset</Text>
        </TouchableOpacity>
      </View>:

      <View style={styles.questionContainer}>

          <Text style ={styles.questionText}>{quizData[currentQuestion]?.question}</Text>
          
          {quizData[currentQuestion]?.options.map((item) =>{
            return  <TouchableOpacity onPress={()=> handleAnswer(item)} style={styles.optionContainer}>
              <Text style={styles.optionStyles}>{item}</Text>
            </TouchableOpacity>
          })}

      </View>
}
    </View>
        
  );
  
}




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f9ff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  questionContainer: {
    backgroundColor: '#ffffff',
    padding: 25,
    margin: 20,
    borderRadius: 20,
    width: '90%',
    maxWidth: 400,
    shadowColor: '#3b82f6',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  optionStyles: {
    color: '#1e293b',
    paddingVertical: 16,
    fontSize: 18,
    fontWeight: '500',
    textAlign: 'center',
  },
  optionContainer: {
    backgroundColor: '#f8fafc',
    borderColor: '#e2e8f0',
    borderWidth: 2,
    marginTop: 15,
    borderRadius: 14,
    paddingVertical: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },
  questionText: {
    fontSize: 22,
    fontWeight: '600',
    color: '#1e293b',
    textAlign: 'center',
    marginBottom: 20,
    lineHeight: 32,
  },
  resetBtnText: {
    fontSize: 18,
    paddingHorizontal: 25,
    paddingVertical: 15,
    fontWeight: '600',
    color: 'white',
  },
  scoreContainer: {
    alignItems: 'center',
    padding: 30,
    backgroundColor: '#ffffff',
    borderRadius: 20,
    shadowColor: '#3b82f6',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 15,
    elevation: 6,
  },
  scoreText: {
    fontSize: 72,
    fontWeight: '800',
    color: '#3b82f6',
    marginBottom: 30,
  },
  resetButton: {
    backgroundColor: '#3b82f6',
    borderRadius: 16,
    paddingVertical: 15,
    paddingHorizontal: 40,
    shadowColor: '#3b82f6',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
  }
});
