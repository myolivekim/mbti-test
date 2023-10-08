import styles from "../../App.module.css";
import styless from './QuestionTitle.module.css';

const QuestionTitle = (props) => {
    return (
      <>
        <div className={styles.main_title}>
            <p className={styles.title_light}>{`Q ${props.indexNum +1}/${props.questionData.length}`}</p>
            <p className={styless.title_bold}>{props.questionData[props.indexNum].title}</p>
            
        </div>
      </>
  );
};

export default QuestionTitle;