import { v4 as uuidv4 } from 'uuid';
import "./style.css"

export const TestItem = (props: any) => {

    return <>
        <div className="answers-container">
            <p className="answer-question">{props.testData.question}</p>
            {props.testData.answers.map((answer: any, index: number) => {
                return <div className={"answer-item" + (props.selectedAnswer !== -1 && props.selectedAnswer === Number(answer.id) ? ' selected' : '')} key={uuidv4()}>
                    <input
                        id={`${Number(answer.id)}`}
                        key={uuidv4()}
                        type='checkbox'
                        className="answer-input"
                        checked={props.selectedAnswer !== -1 && props.selectedAnswer === Number(answer.id)}
                        style={{ cursor: "pointer" }}
                        onChange={(e) => props.updateSelected(Number.parseInt(e.currentTarget.id))}
                    />
                    <p
                        id={`${Number(answer.id)}`}
                        className="answer-text"
                        key={uuidv4()}
                        onClick={(e) => props.updateSelected(Number.parseInt(e.currentTarget.id))}
                    >{answer.text}</p>
                </div>
            })}
        </div>
    </>
}