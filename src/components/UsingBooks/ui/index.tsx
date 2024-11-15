import { useState, useEffect } from "react"
import { USING_BOOKS } from "../../../shared/data/usingBooks"

import OpenImg from "../../../shared/assets/openContainerImg.svg"
import "./style.css"

export const UsingBooks = () => {

    const [show, setShow] = useState<boolean>(false);
    const [showContent, setShowContent] = useState<boolean>(false);

    const showBookshanler = () => {
        if (show) setShowContent(false);
        setShow(!show);
    }

    const showContentHandler = () => setShowContent(show);


    useEffect(() => {
        const timeout = setTimeout(() => {
            const elem = document.getElementById('using-books-container');
            elem && elem.style.setProperty('animationName', 'showBooks');
        }, 500);

        return () => clearTimeout(timeout);
    }, []);

    return <>
        <div className={`using-books-container ${show ? 'show' : ''}`} id="using-books-container" onTransitionEnd={showContentHandler}>
            <div className="using-books-header" onClick={showBookshanler} >
                <h3 className="using-books-text nunito-800" style={{ textTransform: "uppercase" }}>{show ? 'СВЕРНУТЬ' : 'ПОСМОТРЕТЬ'}</h3>
                <img src={OpenImg} alt="show/close using books" className={`open-container-img ${show ? 'show' : ''}`} />
            </div>
            <div className={`using-books-content ${showContent ? 'show' : ''}`}>
                {show && USING_BOOKS.map((item: string) => {
                    return <a href={item} className="using-books-item">{item}</a>
                })}
            </div>
        </div>
    </>
}