import { InfoCell } from "../../../components/InfoCell"
import { TEXT_DATA } from "../../../shared/data/textData"
import { v4 as uuidv4 } from 'uuid';

export const InfoPage = () => {

    return <>
        <p className="page-title-text nunito-800">
            немного теории
        </p>
        {
            TEXT_DATA.map((text: string, id: number) => {
                return <InfoCell key={uuidv4()} textData={text} cellId={id} />
            })
        }
    </>
}