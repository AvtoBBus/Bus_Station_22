import { TestData } from "../DataTypes";

export function getResult(results: Array<number>, originData: Array<TestData>) {
    const CORRECT_ANSWERS = originData.map((data) => `${data.correct}`).join('');
    return CORRECT_ANSWERS === JSON.stringify(results)
        .replaceAll(',', '')
        .replaceAll('[', '')
        .replaceAll(']', '')
        .replaceAll(';', '');
}