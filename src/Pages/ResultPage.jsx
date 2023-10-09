import { useEffect } from "react";
import styles from "../App.module.css";
import { resultData } from "../constants/resultData";
import { Link, useParams } from "react-router-dom";


const ResultPage = () => {
    const { mbti } = useParams();

    const resultMBTIData = resultData.find((data) => data.mbti === mbti);

    const resultDesc = resultMBTIData.desc.split("\n");
   
    useEffect(()=> {
        if(!Kakao.isInitialized()) {
          Kakao.init('daf86cef3ae644ceb84040be4cc296f7');
        }
    }, []);

    const clickShareHandler = () => {
      Kakao.Share.createCustomButton({
        container: '#kakaotalk-sharing-btn',
        templateId: 99283,
        templateArgs: {
          THU: "https://mbti-test-evae.vercel.app" + resultMBTIData.image,
          MATCH_CAT: resultMBTIData.match_cat,
        },
      });
    }

    return (
        <div className={styles.layout}>
            <p className={styles.title_light}>나와 어울리는 고양이는?</p>
            <p className={styles.title_bold}>
                {resultMBTIData.match_cat} ({mbti})
            </p>
            <img className={styles.result_img} src={resultMBTIData.image} />

            {resultDesc.map((desc, index) => (
                <p key={index} className={styles.title_light}>
                    {desc}
                </p>
            ))}

            <button onClick={clickShareHandler} className={styles.square_button}>
                카카오톡 공유하기
            </button>
            <Link to="/" className={styles.square_button}>
                다시 해보기
            </Link>
        </div>
    );
};

export default ResultPage;
