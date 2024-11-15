import { Link } from "react-router-dom"

import HomeImg from "../../../shared/assets/homeImg.svg"
import "./style.css"

export const NavHeader = () => {
    return <>
        <div className="header-container">
            <Link to="/" className="header-link link-with-img" style={{ backgroundColor: 'transparent' }}>
                <img src={HomeImg} alt="home-page" className="header-home-img" />
            </Link>
            <Link to="info-page" className="header-link">Теория</Link>
            <Link to="test-page" className="header-link">Тест</Link>
            <Link to="using-books-page" className="header-link">Используемая литература</Link>
        </div>
    </>
}