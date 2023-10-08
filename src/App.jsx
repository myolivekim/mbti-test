import MainPage from "./Pages/MainPage";
import {Routes, Route} from "react-router-dom";
import styles from './App.module.css';
import QuestionPage from "./Pages/QuestionPage";
import ResultPage from "./Pages/ResultPage";

function App() {
  return (
    <div className={styles.container}>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/question" element={<QuestionPage />} />
        <Route path="/result/:mbti" element={<ResultPage />} />
      </Routes>
    </div>
  );
}

export default App;
