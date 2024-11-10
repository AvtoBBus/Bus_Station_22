import "./style.css"

export const HomePage = () => {
    return <>
        <p className="page-title-text nunito-800" style={{ width: '60%' }}>
            Об авторе
        </p>

        <p
            className="about-author-text nunito-400"
            dangerouslySetInnerHTML={{
                __html:
                    `
            Работу подготовил:<br/>
            <h2 style="background-color: transparent">Винилов Константин</h2><br/>
            <br/>
            <br/>
            <br/>
            и тут ещё инфы дописать
            `
            }}
        />

    </>
}