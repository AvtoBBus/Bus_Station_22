export function getResult(results: Array<number>) {
    const CORRECT_ANSWERS = '44444';
    return CORRECT_ANSWERS === JSON.stringify(results)
        .replaceAll(',', '')
        .replaceAll('[', '')
        .replaceAll(']', '')
        .replaceAll(';', '');
}