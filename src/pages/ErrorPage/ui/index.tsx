import "./style.css"

export const ErrorPage = () => {
    return <>
        <div className="error-container">
            <p className="error-title nunito-800" style={{ textTransform: 'uppercase' }}>404</p>
            <p className="error-text" style={{ textTransform: 'uppercase' }}>not found</p>
        </div>
    </>
}