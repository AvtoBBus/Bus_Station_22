export type TestData = {
    question: string,
    answers: Array<{
        id: number,
        text: string
    }>,
    correct: number
}

export type TextData = {
    text: string,
    img: any
}