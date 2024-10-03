import { TextContainer } from "../../TextContainer"
import hackerImg from "../../../shared/assets/hackerImg.png"

import "./style.css"

export const InfoCell = (props: any) => {

    const IMG_DATA = [
        hackerImg,
        hackerImg,
        hackerImg,
        hackerImg,
        hackerImg,
        hackerImg,
        hackerImg,
        hackerImg,
        hackerImg,
        hackerImg,
    ]

    return <>
        <div className={`info-cell info-cell-${props.cellId} ${props.cellId % 2 !== 0 ? 'reversed' : ''}`}>
            <TextContainer textData={props.textData} />
            <img src={IMG_DATA[props.cellId]} alt="img" className={`cell-img cell-img-${props.cellId}`} />
        </div>
    </>
}