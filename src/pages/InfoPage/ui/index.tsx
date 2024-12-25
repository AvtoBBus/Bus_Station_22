import { useEffect, useState } from "react";
import { InfoCell } from "../../../components/InfoCell"
import { BAD_HR_DATA, FAKE_LOVE_DATA, NOT_4_DONATE_DATA, SAVE_BAD_HR_DATA, SAVE_FAKE_LOVE_DATA, SAVE_NOT_4_DONATE_DATA, SAVE_SMITHIND_DATA, SAVE_VITHING_DATA, SMITHING_DATA, TEXT_DATA, VITHING_DATA } from "../../../shared/data/textData"
import { v4 as uuidv4 } from 'uuid';
import { TextData } from "../../../shared/DataTypes";

export const InfoPage = () => {

    const [currPage, setCurrPage] = useState<string | null>(null);

    useEffect(() => {
        setCurrPage(window.location.pathname);
        //eslint-disable-next-line
    }, [window.location.pathname])


    const renderData = () => {

        let titleText = 'немного теории';
        let data2render: Array<TextData>;
        let otherText = {
            title: '',
            text: [] as Array<TextData>
        };

        switch (currPage) {
            case '/info-page/smithing':
                titleText = 'Что такое смишинг и как он устроен?';
                data2render = SMITHING_DATA;
                otherText = {
                    title: 'Так как же защититься от этого?',
                    text: SAVE_SMITHIND_DATA
                }
                break;
            case '/info-page/vithing':
                titleText = 'Что такое вишинг?';
                data2render = VITHING_DATA;
                otherText = {
                    title: 'Так как же защититься от этого?',
                    text: SAVE_VITHING_DATA
                }
                break;

            case '/info-page/bad_hr':
                titleText = 'Это вам не HH.RU';
                data2render = BAD_HR_DATA;
                otherText = {
                    title: 'Так как же защититься от этого?',
                    text: SAVE_BAD_HR_DATA
                }
                break;

            case '/info-page/fake_love':
                titleText = 'А говорила, что любит';
                data2render = FAKE_LOVE_DATA;
                otherText = {
                    title: 'Так как же защититься от этого?',
                    text: SAVE_FAKE_LOVE_DATA
                }
                break;

            case '/info-page/not_4_donate':
                titleText = 'Фейковая благотворительность';
                data2render = NOT_4_DONATE_DATA;
                otherText = {
                    title: 'Так как же защититься от этого?',
                    text: SAVE_NOT_4_DONATE_DATA
                }
                break;

            default:
                data2render = TEXT_DATA;
                break;
        }

        return <>
            <p className="page-title-text nunito-800">{titleText}</p>
            {data2render.map((data: TextData, id: number) => {
                return <InfoCell
                    key={uuidv4()}
                    textData={data.text}
                    cellId={id}
                    img={data.img}
                />
            })}

            {otherText.title !== '' &&
                <>
                    <p className="page-title-text nunito-800">{otherText.title}</p>
                    {otherText.text.map((data: TextData, id: number) => {
                        return <InfoCell
                            key={uuidv4()}
                            textData={data.text}
                            cellId={id}
                            img={data.img}
                        />
                    })}
                </>
            }
        </>
    }

    return <>{renderData()}</>
}