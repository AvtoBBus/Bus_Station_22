import { useState } from "react"
import { TESTING_DATA } from "../../../shared/data/testingData";
import "./style.css"
import { getResult } from "../../../shared/instruments/checkCorrect";
import { TestItem } from "../../TestItem";

export const TestContainer = () => {

    const [curentAnswer, setCurrentAnswer] = useState<number>(0);
    const [selectedAnswers, setSelectedAnswers] = useState<Array<number>>([-1, -1, -1, -1, -1]);

    return <>
        <div className="test-container">
            <p className="test-container-header nunito-800" style={{ textTransform: "uppercase" }}>проверим ваши знания</p>

            <TestItem
                testData={TESTING_DATA[curentAnswer]}
                currentAnswer={curentAnswer}
                selectedAnswer={selectedAnswers[curentAnswer]}
                updateSelected={((answerId: number) => {
                    const tmp = JSON.parse(JSON.stringify(selectedAnswers));
                    tmp[curentAnswer] = answerId;
                    setSelectedAnswers(tmp);
                })}
            />

            <div className="buttons-container">
                <button
                    className={`button prev-button ${curentAnswer === 0 ? 'button-disabled' : ''}`}
                    disabled={curentAnswer === 0}
                    onClick={() => { if (curentAnswer > 0) setCurrentAnswer(curentAnswer - 1) }}
                >Предыдущий вопрос</button>
                <button
                    className={`button next-button ${curentAnswer === TESTING_DATA.length - 1 ? 'button-disabled' : ''}`}
                    disabled={curentAnswer === TESTING_DATA.length - 1}
                    onClick={() => { if (curentAnswer < TESTING_DATA.length - 1) setCurrentAnswer(curentAnswer + 1) }}
                >Следующий вопрос</button>

            </div>
            {selectedAnswers.every(item => item !== -1) && <>
                <button
                    className="check-result-button"
                    onClick={() => {
                        const testResult = getResult(selectedAnswers);
                        if (testResult) alert('Вы успешно ответили на все вопросы!');
                        else alert('К сожалению вы не верно ответили на некоторые вопросы(');
                        setSelectedAnswers([-1, -1, -1, -1, -1]);
                    }}>Проверить ответы</button>
            </>}

        </div>
    </>
}