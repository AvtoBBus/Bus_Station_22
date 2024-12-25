import { TextContainer } from "../../TextContainer"

import "./style.css"

export const InfoCell = (props: any) => {
    return <>
        <div className={`info-cell info-cell-${props.cellId} ${props.cellId % 2 !== 0 ? 'reversed' : ''}`}>
            <TextContainer textData={props.textData} />
            <img src={props.img} alt="img" className={`cell-img cell-img-${props.cellId}`} />
        </div>
    </>
}