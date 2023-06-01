import { QuestionsData } from "./QuestionsData";
import { useState } from "react";
import Question from "./Question";

const QuizPage = () => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [submittedData, setSubmittedData] = useState({})
    

    return (
        <div className="quiz-box">
            <div className="box">
                <span>Timer: 90 sec</span>
                <Question currentQuestion={QuestionsData[currentQuestionIndex]} />
            </div>
            <div className="box"></div>

        </div>
    );
    
};

export default QuizPage;