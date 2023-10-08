import styles from "../App.module.css";
import { resultData } from "../constants/resultData";
import { useParams } from "react-router-dom";

const ResultPage = () => {
    const {mbti} = useParams()
    
    const resultMBTIData = resultData.find((data) => data.mbti === mbti);

    const resultDesc = resultMBTIData.desc.split("\n")
    console.log(resultDesc);
    return <div className={styles.layout}>
          <p className={styles.title_light}>나와 어울리는 고양이는?</p>
          <p className={styles.title_bold}>
            {resultMBTIData.match_cat} ({mbti})
          </p>
          <img className={styles.result_img} src={resultMBTIData.image} />

          {resultDesc.map((desc,index) => (
            <p key={index} className="styles.title_light">
                {desc}
            </p>

          ))}
        </div>;
  
};

export default ResultPage;