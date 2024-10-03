async function getSHA256Hash(str: string) {
    const buf = new TextEncoder().encode(str);
    const digest = await crypto.subtle.digest('SHA-256', buf);
    return Array.from(new Uint8Array(digest))
        .map(b => b.toString(16).padStart(2, '0'))
        .join('');
}


export async function getResult(results: Array<number>) {
    const sum = await getSHA256Hash(JSON.stringify(results));
    console.log(sum);
    return sum === "33ea1de210a7c9aebb30b7fa63c6355f52150e07a3274242b37983ef31737e2c";
}