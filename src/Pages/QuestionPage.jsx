
import styles from "../App.module.css";
import QuestionButton from "../components/question/QuestionButton";
import QuestionTitle from '../components/question/QuestionTitle';
import { useState } from "react";
import {questionData} from '../constants/questionData';
import {useNavigate} from "react-router-dom"

const QuestionPage = () => {
    const navigate = useNavigate()
    console.log(questionData);
    const [indexNum, setIndexNum] = useState(0);
    const [result, setResult] = useState({

        EI : 0,
        SN : 0,
        TF : 0,
        JP : 0,
    });

    const onClickButton = (type, weight) => {
        console.log(result);
        setResult((prev) => ({
          ...prev, 
          [type]: prev[type] + weight,
        }));
        
        

        if (indexNum >= questionData.length -1) {
          const mbti = getMbti();
          getMbti();
          navigate(`/result/${mbti}`)
          setIndexNum(0);
          setResult({
            EI : 0,
            SN : 0,
            TF : 0,
            JP : 0,

          });
        } else {
           setIndexNum((prev) => prev +1);
        }
    };

    const getMbti = () => {
        let mbti = '';
        if (result.EI >= 2){
            mbti += 'E';
        } else{
            mbti +='I'
        }      if (result.SN >= 2){
            mbti += 'S';
        } else{
            mbti +='N'
        }      if (result.TF >= 2){
            mbti += 'T';
        } else{
            mbti +='F'
        }      if (result.JP >= 2){
            mbti += 'J';
        } else{
            mbti +='P'
        }
        return mbti;

    }
    

    return (
    <div className={styles.layout}>
      <QuestionTitle indexNum={indexNum} questionData={questionData}/>
      <QuestionButton type='first' onClickButton = {onClickButton} indexNum = {indexNum} questionData={questionData}/>
      <QuestionButton type='second'onClickButton = {onClickButton} indexNum = {indexNum} questionData={questionData}/>

    </div>
    );
    
};

export default QuestionPage;