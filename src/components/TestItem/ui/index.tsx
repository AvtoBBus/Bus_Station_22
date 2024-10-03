import { v4 as uuidv4 } from 'uuid';
import "./style.css"

export const TestItem = (props: any) => {
    return <>
        <div className="answers-container">
            <p className="answer-question">{props.testData.question}</p>
            {props.testData.answers.map((answer: any, index: number) => {
                return <div className="answer-item" key={uuidv4()}>
                    <input
                        id={`${index}`}
                        key={uuidv4()}
                        type='checkbox'
                        className="answer-input"
                        checked={props.selectedAnswer !== -1 && props.selectedAnswer === index}
                        onChange={(e) => props.updateSelected(Number.parseInt(e.currentTarget.id))}
                    />
                    <p className="answer-text" key={uuidv4()}>{answer.text}</p>
                </div>
            })}
        </div>
    </>
}