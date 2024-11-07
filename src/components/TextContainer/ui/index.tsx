import "./style.css"

export const TextContainer = (props: any) => {
    return <>
        <div className="text-container nunito-400" dangerouslySetInnerHTML={{ __html: props.textData }} />
    </>
}