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
            Работу подготовили:<br/>
            <h2 style="background-color: transparent; margin-top: 40px">Курманов Константин</h2>
            <h2 style="background-color: transparent; margin-bottom: 40px">Мамедов Орхан</h2>
            <br/>
            Ученики 10 «И» класса<br/>ГБОУ Школа №1449
            <br/>
            <p class="about-author-text__subtext">Государственное бюджетное общеобразовательное учреждение города Москвы «Школа №1449 имени Героя Советского Союза М.В. Водопьянова»</p>
            `
            }}
        />

    </>
}