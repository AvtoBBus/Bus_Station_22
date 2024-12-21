export function getResult(results: Array<number>) {
    const CORRECT_ANSWERS = '31231';
    return CORRECT_ANSWERS === JSON.stringify(results)
        .replaceAll(',', '')
        .replaceAll('[', '')
        .replaceAll(']', '')
        .replaceAll(';', '');
}